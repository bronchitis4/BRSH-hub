from rest_framework import serializers

from .models import Posts, Category


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = (
            "id",
            "user_id",
            "title",
            "content",
            "category_id",
            "created_at"
        )


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ("id", "name", "description")
