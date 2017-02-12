FROM node:7.5

RUN apt-key adv --keyserver pgp.mit.edu --recv 9D41F3C3 && \
    echo "deb http://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && \
    apt-get install yarn

ADD . /usr/src/app
WORKDIR /usr/src/app

EXPOSE 8080
ENTRYPOINT ls && yarn run server
