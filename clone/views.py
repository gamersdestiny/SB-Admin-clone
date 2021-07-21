from django.shortcuts import render
from rest_framework import serializers

from clone.models import lineChart, donutChart
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import chartSerializer

def home(request):
	return render(request, 'home.html')

def buttons(request):
	return render(request, 'buttons.html')

def cards(request):
	return render(request, 'cards.html')

def colors(request):
	return render(request, 'colors.html')

def borders(request):
	return render(request, 'borders.html')

def createChart(request):
	return render(request, 'addChart.html')


@api_view(['POST'])
def addCharts(request):
	serializer = chartSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['GET'])
def listChart(request):
	charts = lineChart.objects.all()
	serializer = chartSerializer(charts, many=True)
	return Response(serializer.data)

@api_view(['GET', 'UPDATE', 'POST'])
def updateChart(request, pk):
	charts = lineChart.objects.get(id=pk)
	serializer = chartSerializer(instance=charts, data=request.data)
	if serializer.is_valid():
		serializer.save()
	return Response(serializer.data)


@api_view(['GET'])
def apiResponse(request):
	api_urls = {
		'chartcreate': '/create-chart'
	}
	return Response(api_urls)
