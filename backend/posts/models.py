from django.db import models

from django.conf import settings


class Posts(models.Model):
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    content = models.TextField(max_length=255)
    category_id = models.ForeignKey(
        "Category",
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Category(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=255)

    def __str__(self):
        return self.name
