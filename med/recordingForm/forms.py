from django import forms
from .models import Appointment
from django.db import models

class RecordingForm():
    
    class Meta:
        model = Appointment

    fields =  (
        'name',
        'last_name',
        'doctor',
        'email',
        'phone',
        'meet_time',
        'message',
    )
    first_name = models.forms.CharField()
    last_name = models.forms.CharField()
    doctor = models.forms.CharField()
    email = models.forms.forms.EmailField()
    phone = models.forms.CharField()
    meet_time = models.forms.CharField()
    message = models.forms.CharField()