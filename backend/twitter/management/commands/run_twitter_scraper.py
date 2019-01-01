from django.core.management.base import BaseCommand, CommandError
from twitter.scrape import scrape_tweets

class Command(BaseCommand):
    help = 'Scrapes recent tweets and loads them into the database'

    def handle(self, *args, **options):
        scrape_tweets()
