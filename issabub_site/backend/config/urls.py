from django.contrib import admin
from django.urls import path,include
urlpatterns=[path('admin/',admin.site.urls),path('api/company/',include('company.urls')),path('api/services/',include('services.urls')),path('api/projects/',include('projects.urls')),path('api/quotes/',include('quotes.urls'))]
