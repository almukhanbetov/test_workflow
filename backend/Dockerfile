# Этап 1: билд-этап
FROM golang:1.23 AS builder

WORKDIR /app

# Копируем файлы go.mod и go.sum отдельно для кэширования зависимостей
COPY go.mod go.sum ./

# Скачиваем зависимости
RUN go mod download

# Копируем оставшийся исходный код
COPY . .

# Собираем бинарник
RUN go build -o server .

# Этап 2: минимальный рантайм-образ
FROM debian:bullseye-slim

WORKDIR /app

# Копируем собранный бинарный файл из builder stage
COPY --from=builder /app/server .

# Открываем порт (по желанию)
EXPOSE 8080

# Запускаем сервер
CMD ["./server"]
