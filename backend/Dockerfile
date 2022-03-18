#FROM python:3.9-slim-buster
FROM python:3.9
#FROM python:3.9-alpine

# Para leer mensajes de la consola de python
ENV PYTHONUNBUFFERED 1

RUN mkdir /app/
RUN mkdir /app/backend

WORKDIR /app/backend

COPY requirements.txt /app/backend/

RUN apt-get update
RUN apt-get install python3-dev default-libmysqlclient-dev gcc  -y

RUN python -m pip install -r requirements.txt

COPY . /app/backend/

#EXPOSE 8000