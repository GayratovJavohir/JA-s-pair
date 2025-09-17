from django.contrib.auth import login, authenticate
from django.contrib.auth.decorators import login_required
from django.db import IntegrityError
from django.shortcuts import render, redirect, get_object_or_404

from posts.models import PostModel, NotificationModel
from users.forms import RegisterForm, LoginForm, UserUpdateForm
from users.models import UserModel, Follow


def register_view(request):
    if request.method == "POST":
        form = RegisterForm(data=request.POST)

        if form.is_valid():
            user = form.save()
            login(request, user)

            return redirect('profile')

    else:
        form = RegisterForm()

    context = {
        'form': form
    }

    return render(request, 'register.html', context)


def login_view(request):
    if request.method == 'POST':
        form = LoginForm(data=request.POST)

        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']

            user = authenticate(request, username=username, password=password)

            if user:
                login(request, user)
                return redirect('profile')
            else:
                form.add_error(None, 'Username or password id invalid')
    else:
        form = LoginForm()

    context = {
        'form': form
    }

    return render(request, 'login.html', context)


def logout_view(request):
    return render(request, 'logout.html')


@login_required(login_url='login')
def profile_view(request):
    posts = PostModel.objects.filter(post_type=PostModel.PostTypeChoice.Post, userID=request.user).order_by(
        '-created_at')
    reels = PostModel.objects.filter(post_type=PostModel.PostTypeChoice.Reels, userID=request.user).order_by(
        '-created_at')

    if request.method == "POST":
        form = UserUpdateForm(request.POST, request.FILES, instance=request.user)

        if form.is_valid():
            form.save()
            return redirect('profile')

    else:
        form = UserUpdateForm(instance=request.user)

    context = {
        'posts': posts,
        'reels': reels,
        'user': request.user,
        'form': form
    }
    return render(request, 'profile.html', context)


def another_user_profile_view(request, pk):
    user = get_object_or_404(UserModel, pk=pk)

    posts = PostModel.objects.filter(post_type=PostModel.PostTypeChoice.Post, userID=user).order_by(
        '-created_at')
    reels = PostModel.objects.filter(post_type=PostModel.PostTypeChoice.Reels, userID=user).order_by(
        '-created_at')

    qs = UserModel.objects.exclude(id=request.user.id)

    context = {
        'posts': posts,
        'reels': reels,
        'user': user,
        'users': qs
    }
    return render(request, 'profile.html', context)


@login_required()
def follow_view(request, pk):
    following_to = get_object_or_404(UserModel, pk=pk)
    user = request.user
    followers = Follow.objects.filter(follower=user, following=following_to)

    is_self_like = (following_to == user)

    if followers:
        if not is_self_like:
            followers.delete()
            NotificationModel.objects.filter(
                liked_by=user,
            ).delete()
    else:
        if not is_self_like:
            Follow.objects.create(follower=user, following=following_to)
            if following_to and following_to.pk:
                try:
                    obj, created = NotificationModel.objects.get_or_create(
                        comment_like=None,
                        liked_by=user,
                        owner=following_to,
                        post_like=None,
                        reply_comment_like=None
                    )
                    print("Notification created:", created)
                except IntegrityError as e:
                    print("Notification creation failed:", str(e))
            else:
                print("Skipped: Post owner is invalid")

    return redirect(request.META.get("HTTP_REFERER", "/"))


def followers_list(request, pk):
    user = get_object_or_404(UserModel, pk=pk)

    followers = user.follower_set.all()

    context = {
        'followers': followers
    }

    return render(request, 'followers.html', context)


def followings_list(request, pk):
    user = get_object_or_404(UserModel, pk=pk)

    followings = user.following_set.all()

    context = {
        'followings': followings
    }

    return render(request, 'followings.html', context)
