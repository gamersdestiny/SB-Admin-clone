from django.urls import path
from . import views

from django.conf import settings
from django.conf.urls.static import static


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

]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
