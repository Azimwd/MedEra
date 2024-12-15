from django import forms
from .models import Appointment
from django.db import models

class RecordingForm():
    
    class Meta:
        model = Appointment

    fields =  (
        'user_id'
        'name',
        'last_name',
        'doctor_name',
        'email',
        'phone',
        'meet_time',
        'message',
    )
    user_id = models.forms.CharField()
    first_name = models.forms.CharField()
    last_name = models.forms.CharField()
    doctor_name = models.forms.CharField()
    email = models.forms.forms.EmailField()
    phone = models.forms.CharField()
    meet_time = models.forms.CharField()
    message = models.forms.CharField()