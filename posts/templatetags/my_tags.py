from django import template
from posts.models import CommentLikeModel, PostLikeModel, ReplyCommentLikeModel
from users.models import Follow

register = template.Library()


@register.filter
def is_following(request, following_user):
    if not request.user.is_authenticated:
        return False
    return Follow.objects.filter(follower=request.user, following=following_user).exists()


@register.filter
def is_comment_liked_by_user(comment, user):
    if not user.is_authenticated:
        return False
    return CommentLikeModel.objects.filter(commentID=comment, userID=user).exists()


@register.filter
def is_liked_by_user(post, user):
    if not user.is_authenticated:
        return False
    return PostLikeModel.objects.filter(postID=post, userID=user).exists()


@register.filter
def is_reels_liked_by_user(post, user):
    if not user.is_authenticated:
        return False
    return PostLikeModel.objects.filter(postID=post, userID=user).exists()
