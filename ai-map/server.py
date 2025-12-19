#!/usr/bin/env python3
import http.server
import socketserver
import os

PORT = 8000

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('X-Content-Type-Options', 'nosniff')
        self.send_header('Content-Security-Policy', "frame-ancestors 'none';")
        self.send_header('Cache-Control', 'no-cache')
        super().end_headers()

    def do_GET(self):
        # Set charset for text files
        if self.path.endswith(('.html', '.css', '.js')):
            self.send_header('Content-Type', f'{self.guess_type(self.path)}; charset=utf-8')
        super().do_GET()

os.chdir('.')

with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
    print(f"Serving at port {PORT}")
    httpd.serve_forever()