from rest_framework import serializers
from .models import QuoteRequest
class QuoteRequestSerializer(serializers.ModelSerializer):
    class Meta: model=QuoteRequest;fields=['id','full_name','email','phone','service','project_location','message','created_at'];read_only_fields=['id','created_at']
