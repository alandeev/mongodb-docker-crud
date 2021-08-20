FROM node:latest

# Create app directory
RUN mkdir -p /usr/app
WORKDIR /usr/app

# Install app dependencies
COPY package.json /usr/app/
RUN npm install --production

# Bundle app source
COPY ./src /usr/app/src
CMD ["npm", "run", "start"]