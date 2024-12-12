from django.contrib import admin
from django.urls import path
from doctorProfile.views import *

app_name = 'doctorProfile'

urlpatterns = [
    path('', doctorProfile, name='doctorProfile'),
]
