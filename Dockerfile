FROM node:18

WORKDIR /app

RUN npm install -g meteor

COPY . .

RUN meteor npm install
RUN meteor build --directory /app/build

WORKDIR /app/build/bundle
RUN cd programs/server && npm install

EXPOSE 3000

CMD ["node", "main.js"]
