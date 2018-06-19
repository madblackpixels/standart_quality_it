#!/bin/bash

# send mail daemon
/etc/init.d/sendmail start

python3 /backend/manage.py makemigrations
python3 /backend/manage.py migrate
python3 /backend/manage.py makemigrations common
python3 /backend/manage.py migrate common

python3 /backend/manage.py loaddata /backend/fixtures/common_about.json
python3 /backend/manage.py loaddata /backend/fixtures/common_intro.json
python3 /backend/manage.py loaddata /backend/fixtures/common_service1.json
python3 /backend/manage.py loaddata /backend/fixtures/common_service2.json
python3 /backend/manage.py loaddata /backend/fixtures/common_service3.json
python3 /backend/manage.py loaddata /backend/fixtures/common_settings.json

echo "from django.contrib.auth.models import User; 
User.objects.filter(email=$ADMIN_MAIL).delete(); 
User.objects.create_superuser($ADMIN_NAME, $ADMIN_MAIL, $ADMIN_PASS)" | python3 /backend/manage.py shell


if [[ $ENV = "development" ]]; then
	python3 manage.py runserver $BACKEND_SERVICE_HOST:$BACKEND_SERVICE_PORT
else
	yes | python3 /backend/manage.py collectstatic
	touch /uwsgi.log
	/usr/local/bin/uwsgi --ini /backend/etc/uwsgi.ini
fi
