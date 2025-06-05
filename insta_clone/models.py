from django.db import models

from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.CharField(max_length=100, blank=False)
    avatar = models.ImageField(null=False)
    followers = models.ManyToManyField('self', symmetrical=False, blank=True)
    website = models.URLField(blank=True)

    @property
    def followers_count(self):
        return self.followers.count()

    @property
    def following_count(self):
        return self.following.count()

    def __str__(self):
        return f'{self.user}'

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'


class Post(models.Model):
    user = models.ForeignKey(User, related_name='posts', on_delete=models.CASCADE)
    image = models.ImageField()
    location = models.CharField(max_length=30, blank=True)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
