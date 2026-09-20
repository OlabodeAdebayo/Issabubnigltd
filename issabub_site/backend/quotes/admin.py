from django.contrib import admin
from .models import QuoteRequest
@admin.register(QuoteRequest)
class QuoteRequestAdmin(admin.ModelAdmin): list_display=('full_name','service','status','created_at');list_filter=('status','service');search_fields=('full_name','email','phone')
