from django.shortcuts import render
from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .models import Doctor


def recordingForm(request):
    doctors = Doctor.objects.all()
    return render(request, 'recordingForm/index.html', {'doctors': doctors})


def get_doctor_info(request, doctor_id):
    # Получаем информацию о враче
    doctor = get_object_or_404(Doctor, id=doctor_id)
    data = {
        "name": doctor.name,
        "specialization": doctor.specialization,
        "email": doctor.email,
        "phone": doctor.phone,
        "description": doctor.description,
        "available_times": {
            "8:00": doctor.time8,
            "9:00": doctor.time9,
            "10:00": doctor.time10,
            "11:00": doctor.time11,
            "12:00": doctor.time12,
            "13:00": doctor.time13,
            "14:00": doctor.time14,
            "15:00": doctor.time15,
            "16:00": doctor.time16,
            "17:00": doctor.time17,
            "18:00": doctor.time18,
        },
    }
    return JsonResponse(data)
