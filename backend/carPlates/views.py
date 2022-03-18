from rest_framework import viewsets, status
from rest_framework.response import Response
from .serializers import *
from django.core.cache import cache

# Create your views here.

class CarsViewSet(viewsets.ModelViewSet):
    serializer_class = CarSerializer
    queryset = CarSerializer.Meta.model.objects.all()
    
    def list(self, request):

        car_plate = request.query_params.get('carplate')
        car_plate = "".join(car_plate.split()).upper()

        if car_plate:
            if cache.get(car_plate):
                car_name = cache.get(car_plate)
                print("Data is coming from caché: ", car_name)
            else:
                car_name = Cars.objects.filter(car_plate__exact = car_plate).first()
                cache.set(car_plate, car_name)
                print("Data is coming from DB: ", car_name)

            if car_name:               
                serializer = self.serializer_class(car_name)
                return Response(serializer.data)
            return Response({'Error': 'This car plate is not registered here'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            cars = Cars.objects.all()
            serializer = self.serializer_class(cars, many = True)
            return Response(serializer.data)
    
  