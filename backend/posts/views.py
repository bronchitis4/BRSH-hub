from rest_framework import viewsets

from .models import Posts, Category
from .serializers import PostSerializer, CategorySerializer


class PostViewSet(viewsets.ModelViewSet):
    queryset = Posts.objects.all()
    serializer_class = PostSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
