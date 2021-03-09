FROM node:alpine AS base
COPY . .
RUN npm i --save-dev parcel-bundler@1.12.3 --silent
RUN npm install --silent
RUN npm run build
CMD ["npm", "start"]