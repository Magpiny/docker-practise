# Docker tutorial

FROM node:23.4-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install

ENV PORT=5000

EXPOSE 5000

CMD ["node", "app.js"]
