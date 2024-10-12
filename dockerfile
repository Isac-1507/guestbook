FROM node:alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci && npm cache clean --force

COPY server.js .
COPY public ./public
COPY database.js .

CMD ["node", "server.js"]
