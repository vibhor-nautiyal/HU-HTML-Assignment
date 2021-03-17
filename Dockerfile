FROM node:alpine AS base
COPY . .
RUN npm install parcel-bundler@1.12.3 --silent
RUN npm i --silent
RUN npm run build
CMD ["npm", "start"]
EXPOSE 1234