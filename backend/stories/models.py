from django.db import models
from enum import Enum


class StoryType(Enum):
    """
    Enumerates the different types of stories available
    """
    twitter = 1
    facebook = 2
    instagram = 3


class Story(models.Model):
    """
    Stores all of the posts from different social media sources.

    Subclasses of story are implemented as proxy classes to allow
    for querying on the parent story table without having to
    re-define attributes
    """
    object_id = models.TextField()
    story_type = models.SmallIntegerField()
    raw_text = models.TextField()
    cleaned_text = models.TextField()
    name = models.ForeignKey("names.Name", on_delete=models.SET_NULL, null=True)

    def save(self, *args, **kwargs):
        """
        Override the default save method to set the cleaned_text
        property automatically for all story types
        """
        self.cleaned_text = self.raw_text.strip()
        return super(Story, self).save(*args, **kwargs)


class TwitterStory(Story):

    def __init__(self, *args, **kwargs):
        self._meta.get_field('story_type').default = StoryType.twitter.value
        super(TwitterStory, self).__init__(*args, **kwargs)

    class Meta:
        proxy = True


class FacebookStory(Story):

    def __init__(self, *args, **kwargs):
        self._meta.get_field('story_type').default = StoryType.facebook.value
        super(FacebookStory, self).__init__(*args, **kwargs)

    class Meta:
        proxy = True


class InstagramStory(Story):

    def __init__(self, *args, **kwargs):
        self._meta.get_field('story_type').default = StoryType.facebook.value
        super(InstagramStory, self).__init__(*args, **kwargs)

    class Meta:
        proxy = True
