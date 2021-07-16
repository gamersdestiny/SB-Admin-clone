from django.urls import path
from . import views

from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
	path('', views.home, name="home"),
	path('buttons/', views.buttons, name="buttons"),
	path('cards/', views.cards, name="cards"),
	path('colors/', views.colors, name="colors"),
	path('borders/', views.borders, name="borders"),

]+ staticfiles_urlpatterns()
