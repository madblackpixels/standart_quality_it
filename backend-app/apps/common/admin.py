from django.contrib import admin
from .models import Intro, About, Service1, Service2, Service3, FeedBack, Settings


class NoAddNoDelete(admin.ModelAdmin):
    def has_add_permission(self, request):
        return False

    def has_delete_permission(self, request, obj=None):
        return False


admin.site.register(Intro, NoAddNoDelete)
admin.site.register(About, NoAddNoDelete)
admin.site.register(FeedBack, NoAddNoDelete)
admin.site.register(Settings, NoAddNoDelete)

admin.site.register(Service1)
admin.site.register(Service2)
admin.site.register(Service3)

