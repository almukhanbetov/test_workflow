FROM golang:1.22.5 as builder
WORKDIR /app
COPY . .
RUN go mod tidy
RUN go build -o server .

FROM alpine:latest

WORKDIR /root/
COPY --from=builder /app/server  .
EXPOSE 8080
CMD ["./server"]