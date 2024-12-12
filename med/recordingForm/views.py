from django.shortcuts import render

# Create your views here.

def recordingForm(request):

    return render(request,'recordingForm/index.html')