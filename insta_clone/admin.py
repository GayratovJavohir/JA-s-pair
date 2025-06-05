from django.contrib import admin

from insta_clone.models import Profile, Post


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ['user']
    search_fields = ['user']
    list_filter = ['user']


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['user', 'location', 'created_at']
    search_fields = ['user', 'created_at']
    list_filter = ['user', 'created_at', 'updated_at']
