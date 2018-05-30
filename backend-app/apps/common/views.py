from rest_framework import generics

from apps.common.models      import Example
from apps.common.serializers import PagesSerializer


class Example_json(generics.ListAPIView):
    serializer_class = PagesSerializer
    queryset = Example.objects.all()

