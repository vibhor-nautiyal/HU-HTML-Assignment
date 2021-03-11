FROM node:alpine AS base
COPY . .
RUN npm i --silent
RUN npm install parcel-bundler@1.12.3 --silent
RUN npm run build
CMD ["npm", "start"]