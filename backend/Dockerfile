FROM python:3.9-slim-buster

# Para leer mensajes de la consola de python
ENV PYTHONUNBUFFERED 1

RUN mkdir /app/
RUN mkdir /app/backend

WORKDIR /app/backend

COPY requirements.txt /app/backend/

RUN apt-get update && apt-get install -y \
    python3-dev default-libmysqlclient-dev gcc \
    redis-server

RUN python -m pip install -r requirements.txt

COPY . /app/backend/
