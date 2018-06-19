from django.db import models


class Intro(models.Model):
    header = models.CharField(max_length=100, blank=False)
    sub_header = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.header


class About(models.Model):
    about = models.TextField()

    def __str__(self):
        return self.about


class Service1(models.Model):
    service = models.TextField()

    def __str__(self):
        return self.service


class Service2(models.Model):
    service = models.TextField()

    def __str__(self):
        return self.service


class Service3(models.Model):
    service = models.TextField()

    def __str__(self):
        return self.service


class FeedBack(models.Model):
    name = models.CharField(max_length=150, blank=False)
    mail = models.CharField(max_length=200, blank=False)

    def __str__(self):
        return self.name


class Example(models.Model):
    simple = models.CharField(max_length=150, blank=False)


class Settings(models.Model):
    argument = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return self.argument