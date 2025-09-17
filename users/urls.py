from django.urls import path
from users import views

urlpatterns = [
    path('', views.register_view, name='register'),
    path('login/', views.login_view, name='login'),
    path('profile/', views.profile_view, name='profile'),
    path('another_profile/<int:pk>/', views.another_user_profile_view, name='profile-another'),
    path('follow-create/<int:pk>/', views.follow_view, name='follow-create'),
    path('followings/<int:pk>/', views.followings_list, name='followings'),
    path('followers/<int:pk>/', views.followers_list, name='followers'),
]
