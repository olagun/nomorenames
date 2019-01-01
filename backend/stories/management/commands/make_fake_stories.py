from django.core.management.base import BaseCommand, CommandError
from stories.models import FacebookStory, InstagramStory, TwitterStory

class Command(BaseCommand):
    help = 'Populates the database with fake stories for testing'

    facebook_stories = [
        {
            'id': 'asd1',
            'text': 'This is a fake story number 1'
        },
    ]

    instagram_stories = [
        {
            'id': 'asd2',
            'text': 'This is a fake story number 2'
        },
    ]

    twitter_stories = [
        {
            'id': 'asd3',
            'text': 'This is a fake story number 3'
        },
    ]

    def handle(self, *args, **options):

        for fbs in self.facebook_stories:
            FacebookStory.objects.get_or_create(
                object_id=fbs['id'],
                raw_text=fbs['text']
            )

        for ins in self.instagram_stories:
            InstagramStory.objects.get_or_create(
                object_id=ins['id'],
                raw_text=ins['text']
            )

        for ts in self.twitter_stories:
            TwitterStory.objects.get_or_create(
                object_id=ts['id'],
                raw_text=ts['text']
            )
