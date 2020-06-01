FROM node:10
# Create app directory
WORKDIR /usr/src/app

#Copy dependency files
COPY package*.json ./

#Install dependencies 
RUN npm install
# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]