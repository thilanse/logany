FROM node:latest as node
WORKDIR /logany-frontend
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /logany-frontend/dist/logany-frontend /usr/share/nginx/html