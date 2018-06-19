FROM python:3.6.4
ENV PYTHONUNBUFFERED 1

WORKDIR /backend
RUN mkdir /backend_logs
ADD . /backend

# Deploy smtp
RUN apt-get -y update
RUN apt-get install -q -y sendmail sendmail-bin

RUN pip3 install --upgrade pip
RUN pip3 install wheel
RUN pip3 install -r /backend/etc/requirements.txt

RUN groupadd uwsgi && useradd -g uwsgi uwsgi
RUN chown -R uwsgi:uwsgi /backend