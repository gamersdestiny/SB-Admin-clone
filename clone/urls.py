from django.urls import path
from . import views

from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
	path('', views.home, name="home"),
	path('buttons/', views.buttons, name="buttons"),
	path('cards/', views.cards, name="cards"),
	path('colors/', views.colors, name="colors"),
	path('borders/', views.borders, name="borders"),
	path('addchart/', views.addCharts, name="charts"),
	path('editchart/', views.createChart, name="edit-charts"),
	path('listchart/', views.listChart, name="listCharts"),
	path('updatechart/<str:pk>/', views.updateChart, name="updateCharts"),
	path('apiview', views.apiResponse, name='api')

]+ staticfiles_urlpatterns()
