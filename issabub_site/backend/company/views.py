from rest_framework.viewsets import ReadOnlyModelViewSet
from .models import CompanyProfile
from .serializers import CompanyProfileSerializer
class CompanyProfileViewSet(ReadOnlyModelViewSet): queryset=CompanyProfile.objects.all();serializer_class=CompanyProfileSerializer
