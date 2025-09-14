from django.urls import path, include
from rest_framework import routers

from .views import PostViewSet, CategoryViewSet

routers = routers.DefaultRouter()
routers.register("posts", PostViewSet)
routers.register("categories", CategoryViewSet)

urlpatterns = [
    path("", include(routers.urls)),
]

app_name = "posts"
