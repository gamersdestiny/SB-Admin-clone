from django.db import models
from django.db.models.base import Model

class lineChart(models.Model):
	chartName = models.CharField(max_length=50)
	jan = models.IntegerField()
	feb = models.IntegerField()
	mar = models.IntegerField()
	apr = models.IntegerField()
	may = models.IntegerField()
	jun = models.IntegerField()
	jul = models.IntegerField()
	aug = models.IntegerField()
	sep = models.IntegerField()
	oct = models.IntegerField()
	nov = models.IntegerField()
	dec = models.IntegerField()

	def __str__(self):
		return self.chartName

class donutChart(models.Model):
	chartName = models.CharField(max_length=50)
	direct = models.IntegerField()
	social = models.IntegerField()
	referral = models.IntegerField()

	def __str__(self):
		return self.chartName