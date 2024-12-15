from django.db import models

class Doctor(models.Model):
    name = models.CharField(max_length=100)
    specialization = models.CharField(max_length=100)
    email = models.EmailField(max_length=254)  # Поле для email
    phone = models.CharField(max_length=15)
    description = models.CharField(max_length=500)
    time8 = models.BooleanField()
    time9 = models.BooleanField()
    time10 = models.BooleanField()
    time11 = models.BooleanField()
    time12 = models.BooleanField()
    time13 = models.BooleanField()
    time14 = models.BooleanField()
    time15 = models.BooleanField()
    time16 = models.BooleanField()
    time17 = models.BooleanField()
    time18 = models.BooleanField()

    def __str__(self):
        return self.name

class Appointment(models.Model):
    doctor_name = models.CharField(max_length=100)
    user_id = models.CharField(max_length=10000)
    name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    message = models.CharField(max_length=500)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    meet_time = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name

