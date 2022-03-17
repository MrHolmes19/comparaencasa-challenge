from enum import unique
from django.db import models

# Create your models here.

class Cars(models.Model):
    """
        Model that represents the cars and its plates.
    """
    car_plate = models.CharField(max_length=10, unique = True)
    car_name = models.CharField(max_length=100)

    class Meta:
        verbose_name = ("car")
        verbose_name_plural = ("cars")
        
    def __str__(self):
        return self.car_plate
