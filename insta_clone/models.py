import datetime

from django.contrib.auth.models import AbstractUser
from django.db import models


class UserModel(AbstractUser):
    email = models.EmailField()
    bio = models.TextField(max_length=200, null=True, blank=True)
    followers = models.ManyToManyField('self', symmetrical=False, blank=True)
    website = models.URLField(max_length=200, null=True, blank=True)
    profile_picture = models.ImageField(upload_to='avatars/')

    @property
    def followers_count(self):
        return self.followers.count()

    @property
    def following_count(self):
        return self.following.count()

    def __str__(self):
        return f'{self.username}'

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'


class Post(models.Model):
    user = models.ForeignKey(
        UserModel,
        on_delete=models.CASCADE,
        related_name='posts'
    )
    caption = models.TextField()
    image = models.ImageField(upload_to='post_images/')
    tag = models.ManyToManyField(
        UserModel,
        related_name='tags'
    )
    location = models.CharField(max_length=30, blank=True)
    created_at = models.DateTimeField(default=datetime.datetime.now())
    updated_at = models.DateTimeField()

    @property
    def likes_count(self):
        return self.post_likes.count()

    @property
    def comments_count(self):
        return self.post_comments.count()


class Like(models.Model):
    user = models.ForeignKey(
        UserModel,
        on_delete=models.CASCADE,
        related_name='user_likes'
    )
    post = models.ForeignKey(
        Post,
        on_delete=models.CASCADE,
        related_name='post_likes'
    )
    created_at = models.DateTimeField(default=datetime.datetime.now())

    class Meta:
        unique_together = ('user', 'post',)


class Comment(models.Model):
    user = models.ForeignKey(
        UserModel,
        on_delete=models.CASCADE,
        related_name='user_comments'
    )
    post = models.ForeignKey(
        Post,
        on_delete=models.CASCADE,
        related_name='post_comments'
    )
    content = models.TextField(max_length=100)
    created_at = models.DateTimeField(default=datetime.datetime.now())

    class Meta:
        unique_together = ('user', 'post',)


class View(models.Model):
    user = models.ForeignKey(
        UserModel,
        on_delete=models.CASCADE,
        related_name='user_views'
    )
    post = models.ForeignKey(
        Post,
        on_delete=models.CASCADE,
        related_name='post_views'
    )

    class Meta:
        unique_together = ('user', 'post',)


class Follow(models.Model):
    follower = models.ManyToManyField(
        UserModel,
        related_name='follower'
    )
    followee = models.ManyToManyField(
        UserModel,
        related_name='followee'
    )
    created_at = models.DateTimeField(default=datetime.datetime.now())
