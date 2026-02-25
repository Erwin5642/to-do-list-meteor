# ===== STAGE 1: BUILD METEOR APP =====
FROM meteor/meteor:3.4 as builder

WORKDIR /app
COPY . .

RUN meteor npm install
RUN meteor build --directory /app/build

# ===== STAGE 2: RUN APP =====
FROM node:18

WORKDIR /app

COPY --from=builder /app/build/bundle /app/

WORKDIR /app/programs/server
RUN npm install

WORKDIR /app

EXPOSE 3000

CMD ["node", "main.js"]
