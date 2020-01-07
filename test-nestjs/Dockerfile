FROM node:10
RUN apt-get update -qq && apt-get install -y build-essential -
RUN mkdir /backend
WORKDIR /backend
ADD  package.json /backend/
 
RUN npm i -g @nestjs/cli 
RUN npm install 
COPY . /backend/

EXPOSE 3000 3000
CMD [ "npm", "run", "build" ]
