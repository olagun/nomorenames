# Generated by Django 2.1.4 on 2018-12-22 21:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stories', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='story',
            name='object_id',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
    ]
