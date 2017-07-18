FROM node:6.11.1

WORKDIR /src/
COPY . .

RUN npm install -g webpack && \
    npm install -g webpack-dev-server && \
    npm install

EXPOSE 8080
