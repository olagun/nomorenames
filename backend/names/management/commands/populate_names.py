from django.core.management.base import BaseCommand, CommandError
from names.models import Name, NameMention


class Command(BaseCommand):
    help = 'Populates the database with names for testing'

    names = [
        {
            'name': 'Michael Brown',
        },
        {
            'name': 'Antwon Rose',
        }
    ]

    mentions = [
        {
            'name': 'Michael Brown',
            'handle': '@chrisegi'
        },
        {
            'name': 'Antwon Rose',
            'handle': '@chrisegi'
        },
    ]

    def handle(self, *args, **options):

        for n in self.names:
            Name.objects.get_or_create(
                name=n['name']
            )

        for mention in self.mentions:
            name = Name.objects.get(name=mention['name'])
            NameMention.objects.get_or_create(
                name=name,
                handle=mention['handle']
            )
