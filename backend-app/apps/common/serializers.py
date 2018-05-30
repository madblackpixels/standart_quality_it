from rest_framework import serializers

#cache
from rest_framework_cache.serializers import CachedSerializerMixin
from rest_framework_cache.registry import cache_registry

#models
from apps.common.models import Example


class PagesSerializer(CachedSerializerMixin): #serializers.ModelSerializer, 

    class Meta:
        model = Example
        fields = ('id', 'simple') 

cache_registry.register(PagesSerializer)


