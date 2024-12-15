from django.shortcuts import render
from recordingForm.models import Appointment

def userprofile(request):

    appointments = Appointment.objects.all()
    
    for appointment in appointments:
        appointment.user_id = int(appointment.user_id) if appointment.user_id.isdigit() else None

    return render(request,'userprofile/index.html',{'appointments':appointments})