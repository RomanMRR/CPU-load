"""
ASGI config for realtime_graph project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/asgi/
"""

import os
import sys
sys.path.append("..")

# from graph.routing import ws_urlpatterns
from django.urls import path
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from graph.consumers import GraphConsumer


websocket_urlPattern = [
    path('ws/polData/', GraphConsumer.as_asgi())
]

application = ProtocolTypeRouter({
    # 'http': get_asgi_application(),
    'websocket': AuthMiddlewareStack(URLRouter(websocket_urlPattern))
})

