from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", include("main.urls", namespace="main")),
    path("users/", include("users.urls", namespace="users")),
    path("recording/", include("recordingForm.urls", namespace="recordingForm")),
    path("profile/", include("doctorProfile.urls", namespace="doctorProfile")),
]
