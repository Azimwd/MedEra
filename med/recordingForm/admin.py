from django.contrib import admin
from .models import Doctor, Appointment



class DoctorAdmin(admin.ModelAdmin):
    list_display = ('name', 'specialization', 'phone')
    search_fields = ('name', 'specialization', 'phone')

class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('doctor_name', 'name', 'meet_time')
    search_fields = ('doctor__name', 'name', 'meet_time')

    @admin.display(description="Doctor Name")
    def doctor_name(self, obj):
        return obj.doctor_name
    
admin.site.register(Doctor, DoctorAdmin)
admin.site.register(Appointment, AppointmentAdmin)

