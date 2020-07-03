from django.shortcuts import render
from django.http import HttpResponse

from polls.models import Aula

def index(request):
    return HttpResponse(Aula.objects.all())