from django.http import JsonResponse

from names.models import NameMention


def get_names(request):
    name_objects = NameMention.objects.order_by('?')[:5]
    mentions_data = [
        {
            "handle": n.handle,
            "name": n.name.name,
        }
        for n in name_objects
    ]
    return JsonResponse(mentions_data, safe=False)
