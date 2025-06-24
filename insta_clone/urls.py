from django.contrib.auth.views import LogoutView
from django.urls import path

from insta_clone.views import registration_view, login_view, profile_view

app_name = 'insta_clone'


urlpatterns = [
    path('register/', registration_view, name='register'),
    path('login/', login_view, name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('profile/', profile_view, name='profile'),
]
