# Generated by Django 5.1.4 on 2024-12-14 09:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recordingForm', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='user_id',
            field=models.IntegerField(default=2),
            preserve_default=False,
        ),
    ]