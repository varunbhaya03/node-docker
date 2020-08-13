FROM node:latest
LABEL maintainer="varunbhaya@gmail.com"
COPY . /src
WORKDIR /src
RUN npm install
EXPOSE 8000
ENTRYPOINT [ "node", "server.js" ]
