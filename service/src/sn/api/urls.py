from django.urls import path
from . import views


urlpatterns = [
    path('facilities', views.get_facilities, name="get_facilities"),
    path('facilities/<int:fac_id>', views.get_facility, name="get_facility"),
    path('courses', views.get_courses, name="get_courses"),
    path('courses/<int:fac_id>', views.get_courses_by_facility, name="get_courses_by_facility"),
    path('course/<int:crs_id>', views.get_course, name="get_course"),
    path('links/<int:crs_id>', views.get_links, name="get_links"),
    path('links', views.get_all_links, name="get_all_links"),
    path('links/pending', views.get_pending_links, name="get_pending_links"),
    path('link/<int:lnk_id>', views.delete_link, name="delete_link"),
    path('activateLink/<int:lnk_id>', views.activate_link, name="activate_link"),
    path('votes/<int:crs_id>', views.get_votes, name="get_votes"),
    path('vote', views.send_vote, name="send_vote"),
    path('link', views.send_link, name="send_link"),
    path('message', views.send_message, name="send_message"),
    path('message/<int:msg_id>', views.delete_message , name="delete_message"),
    path('read/message/<int:msg_id>', views.mark_as_read, name="delete_message"),
    path('unreadMessages', views.unread_messages, name="unread_messages"),
    path('messages', views.get_messages, name="get_messages"),
    path('logout', views.logout, name='logout')
]