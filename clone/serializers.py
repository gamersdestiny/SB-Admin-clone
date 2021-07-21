from rest_framework import fields, serializers

from .models import lineChart

class chartSerializer(serializers.ModelSerializer):

	class Meta:
		model = lineChart
		fields = '__all__'