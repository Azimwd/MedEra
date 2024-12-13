from django.db import models

class Doctor(models.Model):
    name = models.CharField(max_length=100)
    specialization = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    description = models.CharField(max_length=500)
    time8 = models.BooleanField(blank=False)
    time9 = models.BooleanField(blank=False)
    time10 = models.BooleanField(blank=False)
    time11 = models.BooleanField(blank=False)
    time12 = models.BooleanField(blank=False)
    time13 = models.BooleanField(blank=False)
    time14 = models.BooleanField(blank=False)
    time15 = models.BooleanField(blank=False)
    time16 = models.BooleanField(blank=False)
    time17 = models.BooleanField(blank=False)
    time18 = models.BooleanField(blank=False)

    
    def __str__(self):
        return self.name

class Appointment(models.Model):
    name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    doctor_name = models.CharField(max_length=100)
    message = models.CharField(max_length=500)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    meet_time = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name

