from django.urls import path
from posts import views

urlpatterns = [
    path('', views.home_view, name='home'),
    path('explore/', views.explore_view, name='explore'),
    path('create/', views.create_view, name='create'),
    path('api/comments/create/<int:post_id>/', views.create_comment, name='create_comment'),
    path('api/reels/<int:reel_id>/comments/', views.get_comments_api, name='get_comments_api'),
    path('like/<int:id>/', views.create_like, name='like'),
    path('reels/', views.reels_view, name="reels"),
    path('toggle_like/<int:id>/', views.toggle_like, name='toggle_like'),
    path('save/<int:id>/', views.post_save_create, name='save'),
    path('toggle-comment/<int:post_id>/', views.toggle_comment, name='toggle_comment'),
    path('api/replies/create/<int:parent_comment_id>/', views.create_reply_comment, name='create-reply-comment'),
]
