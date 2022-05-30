from django.db import models
from pkg_resources import require

# Create your models here.

class Facility(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.TextField()
    logo = models.TextField()
    

class Course(models.Model):
    id = models.AutoField(primary_key=True)
    facility = models.ManyToManyField(Facility)
    name = models.TextField()
    

class Link(models.Model):
    

    id = models.AutoField(primary_key=True)
    course = models.ForeignKey(Course,  on_delete=models.CASCADE)
    name = models.TextField()
    url = models.TextField()
    created =  models.DateTimeField(auto_now_add=True)
    active = models.BooleanField(default=False)
    deleted = models.BooleanField(default=False)
    

class Vote(models.Model):
    id = models.AutoField(primary_key=True)
    link = models.ForeignKey(Link,  on_delete=models.CASCADE)
    voteUp = models.BooleanField()
    created =  models.DateTimeField(auto_now_add=True)
    

class Message(models.Model):
    id = models.AutoField(primary_key=True)
    from_name = models.TextField()
    from_email = models.TextField()
    body = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    deleted =  models.BooleanField(default=False)
    read = models.BooleanField(default=False)
    
