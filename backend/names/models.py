from django.db import models


class Name(models.Model):
    name = models.TextField()


class NameMention(models.Model):
    name = models.ForeignKey("Name", null=True, on_delete=models.SET_NULL)
    handle = models.TextField()

