from email import message
from django.http import JsonResponse
from .serializers import CourseSerializer, FacilitySerializer, LinkSerializer, MessageSerializer, VoteSerializer
from sn.models import Facility, Course , Link, Vote, Message
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import permissions
from django.db.models import Count
from django.db import connection
from rest_framework import status
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny

# Create your views here.

def dictfetchall(cursor):
    "Return all rows from a cursor as a dict"
    columns = [col[0] for col in cursor.description]
    return [
        dict(zip(columns, row))
        for row in cursor.fetchall()
    ]


def getVotesByLinkIDForCourse(crs_id):
    results = {}
    with connection.cursor() as cursor:
        cursor.execute("SELECT l.id, v.voteUp, COUNT(v.id) as 'count' FROM sn_db.sn_vote v JOIN sn_db.sn_link l ON (v.link_id=l.id) WHERE l.course_id = "+ str(crs_id)+" GROUP BY l.id, v.voteUp;")
        results = dictfetchall(cursor)

    return results


@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def get_facilities(request):
    facilities = Facility.objects.all()
    serializer = FacilitySerializer(instance=facilities, many=True)
    return JsonResponse(serializer.data, safe=False)


@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def get_facility(request, fac_id):
    facility = Facility.objects.get(id=fac_id)
    serializer = FacilitySerializer(instance=facility)
    return JsonResponse(serializer.data, safe=False)

@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def get_courses(request):
    courses = Course.objects.all()
    serializer = CourseSerializer(instance=courses, many=True)
    return JsonResponse(serializer.data, safe=False)

@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def get_courses_by_facility(request, fac_id):
    courses = Course.objects.filter(facility__id=fac_id)
    serializer = CourseSerializer(instance=courses, many=True)
    return JsonResponse(serializer.data, safe=False)

@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def get_course(request, crs_id):
    course = Course.objects.get(id=crs_id)
    serializer = CourseSerializer(instance=course)
    return JsonResponse(serializer.data, safe=False)

@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def get_links(request, crs_id):
    links = Link.objects.filter(course_id=crs_id, active=True)
    serializer = LinkSerializer(instance=links, many=True)
    return JsonResponse(serializer.data, safe=False)

@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def get_all_links(request):
    links = Link.objects.all()
    serializer = LinkSerializer(instance=links, many=True)
    return JsonResponse(serializer.data, safe=False)   

@api_view(['GET'])
@permission_classes((permissions.IsAdminUser,))
def get_pending_links(request):
    result = Link.objects.filter(active=False, deleted=False)
    json = []
    for link in result:
        
        fac_names = []
        course = link.course
        course_id = course.id
        for fac in course.facility.all():
            fac_names.append(fac.name)

        link_j = {
            "id": link.id,
            "course": course_id,
            "name": link.name,
            "url": link.url,
            "created": link.created,
            "active" : link.active,
            "deleted": link.deleted,
            "facility_names": fac_names
            }
        json.append(link_j)

    return Response(json, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes((permissions.AllowAny,))
def send_link(request):
    request.data['active'] = False
    request.data['deleted'] = False
    serializer = LinkSerializer(data=request.data)
    if serializer.is_valid():
        link = serializer.save()
        if link:
            json = serializer.data
            return Response(json, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    

@api_view(['PUT'])
@permission_classes((permissions.IsAdminUser,))
def activate_link(request, lnk_id):
    link = Link.objects.get(id=lnk_id)
    if link and not link.deleted:
        link.active = True
        link.save()
        serializer = LinkSerializer(instance=link)
        json = serializer.data
        return Response(json, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)   

@api_view(['DELETE'])
@permission_classes((permissions.IsAdminUser,))
def delete_link(request, lnk_id):
    link = Link.objects.get(id=lnk_id)
    if link:
        link.active = False
        link.deleted = True
        link.save()
        return Response(status=status.HTTP_200_OK)
    return Response(status=status.HTTP_400_BAD_REQUEST)   

@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def get_votes(request, crs_id):
    result = getVotesByLinkIDForCourse(crs_id)
    retVal = {}
    for vote in result:
        
        isUp = vote['voteUp'] == 1
        link = vote['id']
        count = vote['count']
        link_vote = retVal.get(link)
        if not link_vote:
            link_vote = {}
            retVal[link]=link_vote
            
        link_vote[isUp] = count

    

    return JsonResponse(retVal, safe=False)

@api_view(['POST'])
@permission_classes((permissions.AllowAny,))
def send_vote(request):
    serializer = VoteSerializer(data=request.data)
    if serializer.is_valid():
        vote = serializer.save()
        if vote:
            json = serializer.data
            return Response(json, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes((permissions.AllowAny,))
def logout(request):
    try:
        refresh_token = request.data["refresh_token"]
        token = RefreshToken(refresh_token)
        token.blacklist()
        return Response(status=status.HTTP_401_UNAUTHORIZED)
    except Exception as e:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes((permissions.AllowAny,))
def send_message(request):
    serializer = MessageSerializer(data=request.data)
    if serializer.is_valid():
        message = serializer.save()
        if message:
            json = serializer.data
            return Response(json, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes((permissions.IsAdminUser,))
def get_messages(request):
    messages = Message.objects.filter(deleted=False)
    serializer = MessageSerializer(instance=messages, many=True)
    return JsonResponse(serializer.data, safe=False)

@api_view(['DELETE'])
@permission_classes((permissions.IsAdminUser,)) 
def delete_message(request, msg_id):
    message = Message.objects.get(id=msg_id)
    if message:
        message.deleted = True
        message.save()
        return Response(status=status.HTTP_200_OK)
    return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
@permission_classes((permissions.IsAdminUser,))
def mark_as_read(request, msg_id):
    message = Message.objects.get(id=msg_id)
    if message:
        message.read = True
        message.save()
        return Response(status=status.HTTP_200_OK)
    return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes((permissions.IsAdminUser,))
def unread_messages(request):
    messages = Message.objects.filter(deleted=False, read=False)
    json = { 
        "count": len(messages)
    }
    return JsonResponse(json, safe=False)
