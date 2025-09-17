from collections import defaultdict

from django.contrib.auth import login
from django.contrib.auth.decorators import login_required
from django.db import IntegrityError
from django.http import JsonResponse
from django.shortcuts import render, redirect, get_object_or_404
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.http import require_POST

from posts.forms import PostModelForm
from posts.models import NotificationModel, PostModel, CommentModel, PostLikeModel, ReplyCommentModel
from posts.templatetags.my_tags import is_comment_liked_by_user
from users.models import UserModel
import json
import logging

from django.utils import timezone
from datetime import timedelta

# Set up logging
logger = logging.getLogger(__name__)


def home_view(request):
    followed_user = request.user.following_set.all()
    followed_ids = [followed.following.id for followed in followed_user]
    one_month_ago = timezone.now() - timedelta(days=30)
    one_day_ago = timezone.now() - timedelta(days=1)

    base_post_filter = {
        'post_type': PostModel.PostTypeChoice.Post,
        'created_at__gte': one_month_ago
    }

    base_history_filter = {
        'post_type': PostModel.PostTypeChoice.History,
        'created_at__gte': one_day_ago
    }

    if len(followed_ids) > 3:
        base_post_filter['userID__in'] = followed_ids


    posts = PostModel.objects.filter(**base_post_filter).order_by('-created_at').exclude(userID=request.user)
    histories = PostModel.objects.filter(**base_history_filter, archived=False).order_by('-created_at')

    grouped_histories = defaultdict(list)
    for history in histories:
        grouped_histories[history.userID].append(history)

    context = {
        'posts': posts,
        'histories': histories,
        'grouped_histories': grouped_histories.items(),
    }

    return render(request, 'home.html', context)


def explore_view(request):
    posts = PostModel.objects.order_by('-created_at')
    context = {
        'posts': posts
    }
    return render(request, 'explore.html', context)


@login_required
def create_view(request):
    qs = UserModel.objects.exclude(id=request.user.id).order_by('username')
    unread_notifications = NotificationModel.objects.filter(owner=request.user, is_read=False).count()

    if request.method == "POST":
        form = PostModelForm(request.POST, request.FILES)
        if form.is_valid():
            post = form.save(commit=False)
            post.userID = request.user
            post.save()
            form.save_m2m()
            return redirect('profile')
    else:
        form = PostModelForm()

    context = {
        'users': qs,
        'form': form,
        'unread_notifications': unread_notifications,
        'user': request.user
    }
    return render(request, 'create.html', context)


def search_view(request):
    users = UserModel.objects.order_by('username').exclude(username=request.user.username)
    context = {
        'users': users
    }
    return render(request, 'search.html', context)


@login_required
@csrf_protect
def create_comment(request, post_id):
    if request.method == "POST":
        try:
            logger.debug(f"Received comment request for post_id: {post_id}, body: {request.body}")
            data = json.loads(request.body)
            comment_text = data.get('content')
            if not comment_text:
                logger.warning("Comment text is empty")
                return JsonResponse({'status': 'error', 'message': 'Comment cannot be empty'}, status=400)

            post = get_object_or_404(PostModel, id=post_id)
            if request.user.is_authenticated:
                comment = CommentModel.objects.create(
                    userID=request.user,
                    postID=post,
                    comment=comment_text
                )
                avatar_url = '/static/images/default-avatar.jpg'
                if hasattr(request.user, 'avatar') and request.user.avatar:
                    avatar_url = request.user.avatar.url
                logger.info(f"Comment created by {request.user.username} on post {post_id}")
                return JsonResponse({
                    'status': 'success',
                    'comment': {
                        'username': request.user.username,
                        'avatar': avatar_url,
                        'content': comment_text
                    }
                })
            else:
                logger.warning("Unauthenticated user attempted to comment")
                return JsonResponse({'status': 'error', 'message': 'User not authenticated'}, status=403)
        except json.JSONDecodeError as e:
            logger.error(f"JSON decode error: {str(e)}")
            return JsonResponse({'status': 'error', 'message': 'Invalid JSON'}, status=400)
        except Exception as e:
            logger.error(f"Error creating comment: {str(e)}")
            return JsonResponse({'status': 'error', 'message': str(e)}, status=500)
    logger.warning(f"Invalid request method: {request.method}")
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=405)


@login_required
def create_like(request, id):
    post = get_object_or_404(PostModel, id=id)
    like = PostLikeModel.objects.filter(postID=post, userID=request.user).first()

    user = request.user
    post_owner = post.userID
    is_self_like = (post_owner == user)

    try:
        if like:
            like.delete()
            liked = False
            if not is_self_like:
                NotificationModel.objects.filter(
                    post_like=post,
                    liked_by=user
                ).delete()
        else:
            PostLikeModel.objects.create(postID=post, userID=user)
            liked = True
            if not is_self_like and post_owner and post_owner.pk:
                NotificationModel.objects.get_or_create(
                    comment_like=None,
                    liked_by=user,
                    owner=post_owner,
                    post_like=post,
                    reply_comment_like=None
                )

        return JsonResponse({
            'success': True,
            'liked': liked,
            'likes_count': post.likes_count()
        })
    except Exception as e:
        return JsonResponse({
            'success': False,
            'error': str(e)
        }, status=500)


def reels_view(request):
    reels = PostModel.objects.filter(post_type='REELS').order_by('-created_at')
    context = {
        'reels': reels
    }
    return render(request, 'reels.html', context)


@login_required
def toggle_like(request, id):
    post = get_object_or_404(PostModel, id=id)
    like = PostLikeModel.objects.filter(postID=post, userID=request.user).first()

    user = request.user
    post_owner = post.userID
    is_self_like = (post_owner == user)

    try:
        if like:
            like.delete()
            liked = False
            if not is_self_like:
                NotificationModel.objects.filter(
                    post_like=post,
                    liked_by=user
                ).delete()
        else:
            PostLikeModel.objects.create(postID=post, userID=user)
            liked = True
            if not is_self_like and post_owner and post_owner.pk:
                NotificationModel.objects.get_or_create(
                    comment_like=None,
                    liked_by=user,
                    owner=post_owner,
                    post_like=post,
                    reply_comment_like=None
                )

        return redirect(request.GET.get('next', '/'))
    except Exception as e:
        return redirect(request.GET.get('next', '/'))


@login_required
def post_save_create(request, id):
    post = get_object_or_404(PostModel, id=id)

    if request.user in post.saved.all():
        post.saved.remove(request.user)

    else:
        post.saved.add(request.user)

    return redirect(request.GET.get('next', '/'))


@login_required
def toggle_comment(request, post_id):
    if request.method == 'POST':
        post = get_object_or_404(PostModel, id=post_id)
        comment_text = request.POST['comment']
        if comment_text and request.user.is_authenticated:
            CommentModel.objects.create(userID=request.user, postID=post, comment=comment_text)
    return redirect(request.POST.get('next', '/reels/'))


@login_required
def get_comments_api(request, reel_id):
    if request.method == "GET":
        try:
            reel = get_object_or_404(PostModel, id=reel_id)
            comments = CommentModel.objects.filter(postID=reel).order_by('created_at')

            comment_list = []
            for comment in comments:
                avatar_url = '/static/images/default-avatar.jpg'
                if hasattr(comment.userID, 'avatar') and comment.userID.avatar:
                    avatar_url = comment.userID.avatar.url

                is_liked = is_comment_liked_by_user(comment, request.user)

                # Vaqtni hisoblash
                time_diff = timezone.now() - comment.created_at
                if time_diff < timedelta(minutes=1):
                    since_created = f"{time_diff.seconds}s"
                elif time_diff < timedelta(hours=1):
                    since_created = f"{time_diff.seconds // 60}m"
                elif time_diff < timedelta(days=1):
                    since_created = f"{time_diff.seconds // 3600}h"
                else:
                    since_created = f"{time_diff.days}d"

                comment_list.append({
                    'id': comment.id,
                    'username': comment.userID.username,
                    'user_avatar': avatar_url,
                    'comment_text': comment.comment,
                    'liked_by_user': is_liked,
                    'since_created': since_created,
                })

            return JsonResponse(comment_list, safe=False)
        except Exception as e:
            logger.error(f"Error fetching comments for reel {reel_id}: {str(e)}")
            return JsonResponse({'status': 'error', 'message': 'Failed to fetch comments.'}, status=500)

    return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=405)


def create_reply_comment(request, parent_comment_id):
    if request.method == 'POST':
        parent_comment = get_object_or_404(CommentModel, id=parent_comment_id)
        reply_text = request.POST.get('reply_comment')  # Corrected line: use 'reply_comment'

        if reply_text and request.user.is_authenticated:
            ReplyCommentModel.objects.create(
                postID=parent_comment.postID,
                userID=request.user,
                commentID=parent_comment,
                reply_comment=reply_text
            )

        next_url = request.POST.get('next', 'home')
        return redirect(next_url)
    return redirect('home')
