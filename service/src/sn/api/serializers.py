from rest_framework import serializers
from sn.models import Facility, Course, Link, Vote, Message



class VoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vote
        fields = ('id',
                'link',
                'voteUp',
                'created')

class LinkSerializer(serializers.ModelSerializer):
   
    class Meta:
        model = Link
        fields = ('id',
                'course',
                'name',
                'url',
                'created',
                'active',
                'deleted')

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ('id',
                'name',
                'facility')



class FacilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Facility
        fields = ('id',
                  'name',
                  'logo')

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ('id',
                  'from_name',
                  'from_email',
                  'body',
                  'created',
                  'deleted',
                  'read')