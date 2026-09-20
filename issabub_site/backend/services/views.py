from rest_framework.viewsets import ReadOnlyModelViewSet
from .models import Service
from .serializers import ServiceSerializer
class ServiceViewSet(ReadOnlyModelViewSet): queryset=Service.objects.filter(active=True);serializer_class=ServiceSerializer;lookup_field='slug'
