FROM node:14


WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install\
    && npm install typescript -g

EXPOSE 8080

RUN tsc

CMD [""]
