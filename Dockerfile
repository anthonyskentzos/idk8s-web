FROM nginx:alpine

COPY src/index.html /usr/share/nginx/html/index.html

EXPOSE 80

# Default command to run Nginx
CMD ["nginx", "-g", "daemon off;"]
