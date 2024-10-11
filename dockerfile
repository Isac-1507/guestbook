FROM node:latest

WORKDIR /app



COPY package.json .



COPY package-lock.json .



RUN npm ci



COPY server.js .



COPY public ./public



COPY database.js .



CMD ["server.js"]