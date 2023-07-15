FROM node:alpine as build-stage
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=build-stage /app/build .
#COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
