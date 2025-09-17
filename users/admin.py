from django.contrib import admin
from users.models import UserModel, Follow

@admin.register(UserModel)
class UserModelAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'gender', 'followers_count', 'following_count', 'is_staff')
    search_fields = ('username', 'email')
    list_filter = ('gender', 'is_staff', 'is_superuser')
    readonly_fields = ('last_login', 'date_joined')
