from django.contrib import admin

from insta_clone.models import UserModel, Post, Like, Comment, View, Follow


@admin.register(UserModel)
class UserModelAdmin(admin.ModelAdmin):
    list_display = ['username', 'first_name', 'last_name']
    search_fields = ['username']
    list_filter = ['username']


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['location', 'created_at']
    search_fields = ['tag', 'location', 'created_at']
    list_filter = ['tag', 'created_at', 'updated_at']


admin.site.register(Like)

admin.site.register(Comment)

admin.site.register(View)

admin.site.register(Follow)
