FROM node:18

# app working folder
WORKDIR /usr/src/app

# install app
COPY . .

# install dependencies
RUN npm ci

# internally to log information 
ENV DEBUG=playground:*
# Run CMD
CMD npm start

