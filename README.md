# COMPARA EN CASA CHALLENGE

## Folder structure

This repo contains:
* backend folder: API
* frontend folder: frontend web app
* docker-compose file: Instructions for dockerization

## Back-end App

I built the application with Django using the Django REST Framework library. I generated a "Cars" model with the requested 3 columns and a view with ModelViewSet for the CRUD. In the same view I overrode the list method and introduced the corresponding logic (caching and retrieving).

http://127.0.0.1:8000/cars/carplates/


## Front-end App

I could have rendered a Django template, but I decided to create a dedicated application for the frontend, to be more professional as it is more scallable.
I used React JS and some very basic styling with bootstrap. This app was built using following components:

| Component | Function |
| ------------- | :------------- |
| SearchForm.js: | Contains the logic for consuming the backend API. I used hooks for fetching and states management |
| CarForm.js: | Handles the form logic  |
| Response.js: | A mini component for response handling |
| Loader.js: | A reused component to represent load spin  |

http://localhost:3000/


## Database

I used MySQL as it was asked. This database is being populated by a custom management command launched from django when the docker container is being ran. The command is "python manage.py populateDB".

PORT: 3306

## Caching

I used Redis to manage cache data. 

PORT: 6379

## Docker-compose

The file docker-compose.yml contains the link of the 4 images. Both back-end app and front-end back have their own dockerfile. It was pushed to my repo:  

https://hub.docker.com/repository/docker/mrholmes19/comparaencasa-challenge

For avoiding race condition I used a script "check_db.py". I could have done it through a "SLEEP 20 command" but it wasn't that cool