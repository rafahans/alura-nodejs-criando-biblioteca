FROM alpine:latest

RUN apk -U upgrade && apk add --no-cache nodejs npm
RUN mkdir -p /project/

WORKDIR /project

ENTRYPOINT ["sh"]
