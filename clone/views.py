from django.shortcuts import render

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
	