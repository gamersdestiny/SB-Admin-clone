# Generated by Django 3.2.3 on 2021-07-17 13:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='donutChart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('chartName', models.CharField(max_length=50)),
                ('direct', models.IntegerField()),
                ('social', models.IntegerField()),
                ('referral', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='lineChart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('chartName', models.CharField(max_length=50)),
                ('jan', models.IntegerField()),
                ('feb', models.IntegerField()),
                ('mar', models.IntegerField()),
                ('apr', models.IntegerField()),
                ('may', models.IntegerField()),
                ('jun', models.IntegerField()),
                ('jul', models.IntegerField()),
                ('aug', models.IntegerField()),
                ('sep', models.IntegerField()),
                ('oct', models.IntegerField()),
                ('nov', models.IntegerField()),
                ('dec', models.IntegerField()),
            ],
        ),
    ]