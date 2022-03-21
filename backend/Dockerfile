FROM python:3.9-slim-buster

# Para leer mensajes de la consola de python
ENV PYTHONUNBUFFERED 1

RUN mkdir /app/
RUN mkdir /app/backend

WORKDIR /app/backend

COPY requirements.txt /app/backend/

# Required commands to install mysql
#RUN apt-get update
#RUN apt-get install python3-dev default-libmysqlclient-dev gcc  -y
#RUN apt-get install redis-server

RUN apt-get update && apt-get install -y \
    python3-dev default-libmysqlclient-dev gcc \
    redis-server

RUN python -m pip install -r requirements.txt

COPY . /app/backend/

#EXPOSE 8000