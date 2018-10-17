#-*-coding:utf-8-*-
from rest_framework import generics

from apps.common.models      import Intro, About, Service1, Service2, Service3, FeedBack, Example, Settings
from apps.common.serializers import PagesSerializer, IntroSerializer, AboutSerializer, Service1Serializer, Service2Serializer, Service3Serializer, ContactUsSerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class Example_json(APIView):
    def post(self, request, format=None):
        serializer = ContactUsSerializer(data=request.data)

        import re, smtplib
        from email.mime.multipart import MIMEMultipart
        from email.mime.text import MIMEText

        pattern_name = re.compile('[А-я ]{1}[А-я ]+')
        pattern_mail = re.compile('[\w.%+-]+@[\w-]+\.[\w]{2,}')

        if re.match(pattern_name, request.data['name']) \
                and re.match(pattern_mail, request.data['mail']) \
                and serializer.is_valid():

            try:
                addr = Settings.objects.get(id=1)
                addr_list = [
                    addr.argument
                ]
                sender = 'standart.quality.it@gmail.com'

                msg = MIMEMultipart('alternative')
                msg['Subject'] = 'Новый лид с сайта СКИТ'
                msg['From'] = sender
                msg['To'] = ", ".join(addr_list)

                _msg_body = '''
                <p>Добрый день!</p>
                <div>
                    Поступил новый лид с сайта СКИТ: {} {}
                </div>
                '''.format(request.data['name'], request.data['mail'])

                msg.attach(MIMEText(_msg_body, 'html', 'UTF-8'))
                s = smtplib.SMTP('smtp.gmail.com:587')
                s.ehlo()
                s.starttls()
                s.login('standart.quality.it@gmail.com', 'Qwerty1!qaz')
                s.sendmail(sender, addr_list, msg.as_string())

            except Exception as e:
                f = open('/tmp/mail_log', 'a')
                f.write(str(e))
                f.close()

            finally:
                serializer.create(request.data)
                return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Intro_view(generics.ListAPIView):
    serializer_class = IntroSerializer
    queryset = Intro.objects.all()


class About_view(generics.ListAPIView):
    serializer_class = AboutSerializer
    queryset = About.objects.all()


class Service1_view(generics.ListAPIView):
    serializer_class = Service1Serializer
    queryset = Service1.objects.all()


class Service2_view(generics.ListAPIView):
    serializer_class = Service2Serializer
    queryset = Service2.objects.all()


class Service3_view(generics.ListAPIView):
    serializer_class = Service3Serializer
    queryset = Service3.objects.all()

