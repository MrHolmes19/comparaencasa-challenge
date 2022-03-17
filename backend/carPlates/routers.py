from rest_framework.routers import DefaultRouter
from .views import CarsViewSet

router = DefaultRouter()

router.register(r'carplates', CarsViewSet, basename = 'cars')

urlpatterns = router.urls