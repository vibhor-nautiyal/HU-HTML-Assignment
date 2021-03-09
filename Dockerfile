FROM node:alpine AS base
COPY . .
RUN npm i --silent
RUN npm install --silent
RUN npm run build
CMD ["npm", "start"]