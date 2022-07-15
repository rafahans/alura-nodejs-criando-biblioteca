FROM alpine:latest

RUN apk -U upgrade && apk add --no-cache nodejs
RUN mkdir -p /project/

ENTRYPOINT ["cd", "/project/"]
