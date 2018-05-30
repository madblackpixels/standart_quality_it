from django.db import models


class Example(models.Model):
	simple = models.CharField(max_length=100, blank=False)
