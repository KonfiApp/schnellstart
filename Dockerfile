FROM fholzer/nginx-brotli:v1.19.1
COPY ./build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf