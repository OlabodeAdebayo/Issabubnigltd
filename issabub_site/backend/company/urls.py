from rest_framework.routers import DefaultRouter
from .views import CompanyProfileViewSet
router=DefaultRouter();router.register('',CompanyProfileViewSet,basename='company')
urlpatterns=router.urls
