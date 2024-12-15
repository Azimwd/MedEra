from django.contrib import admin
from django.urls import path
from userprofile.views import *

app_name = 'userprofile'

urlpatterns = [
    path('', userprofile, name='userprofile'),
]
