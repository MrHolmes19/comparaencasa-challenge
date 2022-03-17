from rest_framework import viewsets, status
from rest_framework.response import Response
from .serializers import *
from .utils import *

# Create your views here.

class CarsViewSet(viewsets.ModelViewSet):
    serializer_class = CarSerializer
    queryset = CarSerializer.Meta.model.objects.all()
    
    def list(self, request):
        
        car_plate = request.query_params.get('carplate')
        if car_plate:
            car_plate = "".join(car_plate.split())
            car = Cars.objects.filter(car_plate__exact = car_plate).first()
            if car:
                serializer = self.serializer_class(car)
                return Response(serializer.data)
            return Response({'Error': 'This car plate is not registered here'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            cars = Cars.objects.all()
            serializer = self.serializer_class(cars, many = True)
            return Response(serializer.data)
    
  