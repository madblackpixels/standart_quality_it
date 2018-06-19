from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from apps.common import views

urlpatterns = [
    url(r'^intro$', views.Intro_view.as_view()),
    url(r'^about$', views.About_view.as_view()),
    url(r'^service1$', views.Service1_view.as_view()),
    url(r'^service2$', views.Service2_view.as_view()),
    url(r'^service3$', views.Service3_view.as_view()),
    url(r'^contactus$', views.Example_json.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
