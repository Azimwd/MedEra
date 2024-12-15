from django.shortcuts import render
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect, JsonResponse
import json
from django.urls import reverse
from .models import Doctor,Appointment
from django.middleware.csrf import get_token

def recordingForm(request):
    doctors = Doctor.objects.all()
    user = request.user
    csrf_token = get_token(request)
    if request.method == 'POST':
        user_id = request.POST.get("user_id") 
        name = request.POST.get("name")
        last_name = request.POST.get("last_name")  
        doctor_name = request.POST.get("doctor_name")
        message = request.POST.get("message")
        email = request.POST.get("email")
        phone = request.POST.get("phone")
        meet_time = request.POST.get("meet_time")

        Appointment.objects.create(
            user_id=user_id,
            name=name,
            last_name=last_name,
            doctor_name=doctor_name,
            message=message,
            email=email,
            phone=phone,
            meet_time=meet_time
        )
        return HttpResponseRedirect(reverse('main:home'))

    return render(request, 'recordingForm/index.html', {'doctors': doctors, 'csrf_token': csrf_token})


def get_doctor_info(request, doctor_id):

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


def update_time(request, doctor_id):
    if request.method == "POST":
        print('Request received with doctor_id:', doctor_id)
        print('POST data:', request.body)
        data = json.loads(request.body)
        selected_time = data.get("time")
        print(selected_time)
        
        if selected_time:
            doctor = Doctor.objects.filter(id=doctor_id).first()

            if doctor and hasattr(doctor, selected_time):
                setattr(doctor, selected_time, True)
                doctor.save()
                return JsonResponse({"success": True, "message": f"Time {selected_time} updated to True."})
            else:
                return JsonResponse({"success": False, "message": "Invalid doctor or time field."})

    return JsonResponse({"success": False, "message": "Invalid request method."})

