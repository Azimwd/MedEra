# Generated by Django 5.1.4 on 2024-12-14 09:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recordingForm', '0002_appointment_user_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='user_id',
            field=models.CharField(max_length=10000),
        ),
    ]