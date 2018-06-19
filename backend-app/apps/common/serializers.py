from rest_framework import serializers

#cache
from rest_framework_cache.serializers import CachedSerializerMixin
from rest_framework_cache.registry import cache_registry
from rest_framework import serializers

#models
from apps.common.models import Intro, About, Service1, Service2, Service3, FeedBack, Example, FeedBack


class PagesSerializer(CachedSerializerMixin):
    class Meta:
        model = Example
        fields = ('id', 'simple')

cache_registry.register(PagesSerializer)


class IntroSerializer(CachedSerializerMixin):
    class Meta:
        model = Intro
        fields = ('header', 'sub_header')


class AboutSerializer(CachedSerializerMixin):
    class Meta:
        model = About
        fields = ('about', )


class Service1Serializer(CachedSerializerMixin):
    class Meta:
        model = Service1
        fields = ('service', )


class Service2Serializer(CachedSerializerMixin):
    class Meta:
        model = Service2
        fields = ('service', )



class Service3Serializer(CachedSerializerMixin):
    class Meta:
        model = Service3
        fields = ('service', )


class ContactUsSerializer(serializers.Serializer):
    def create(self, validated_data):
        return FeedBack.objects.create(**validated_data)

    class Meta:
        model = FeedBack
        fields = ('name', 'mail')


cache_registry.register(IntroSerializer)
cache_registry.register(AboutSerializer)
cache_registry.register(Service1Serializer)
cache_registry.register(Service2Serializer)
cache_registry.register(Service3Serializer)

