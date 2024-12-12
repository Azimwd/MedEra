from django.shortcuts import render

# Create your views here.
def doctorProfile(request):

    return render(request, 'doctorProfile/index.html')