FROM node:alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci && npm cache clean --force

COPY . .

CMD ["node", "server.js"]
