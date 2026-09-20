from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny,IsAdminUser
from .models import QuoteRequest
from .serializers import QuoteRequestSerializer
class QuoteRequestViewSet(ModelViewSet):
    queryset=QuoteRequest.objects.all();serializer_class=QuoteRequestSerializer
    def get_permissions(self): return [AllowAny()] if self.action=='create' else [IsAdminUser()]
