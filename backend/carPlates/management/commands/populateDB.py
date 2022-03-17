from django.core.management.base import BaseCommand, CommandError
from carPlates.models import Cars

class Command(BaseCommand):
    
    help = 'populate the database with some samples'

    def handle(self, *args, **kwargs):
        try:
            cars = Cars.objects.bulk_create([
                    Cars(
                        car_plate = "ABC1234",
                        car_name = "Toyota Etios"
                    ),
                    Cars(
                        car_plate = "AB123C",
                        car_name = "Ford F-150"
                    ),
                    Cars(
                        car_plate = "AB12345C",
                        car_name = "Chevy Silverado"
                    )                                   
        ])
        except:
            raise CommandError('Error while trying to populate database')