from django.contrib import admin
from django.urls import path
from recordingForm.views import *

app_name = 'recordingForm'

urlpatterns = [
    path('', recordingForm, name='recordingForm'),
    path('<int:doctor_id>/', get_doctor_info, name='doctor_detail'),
]
