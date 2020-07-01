FROM golang

WORKDIR go/src/app

COPY . .

RUN go build hello_world.go

ENTRYPOINT ["./hello_world"]