FROM node:alpine

# diretório alvo
RUN mkdir /app
WORKDIR /app

# copiar o projeto e instalar os pacotes com o npm
COPY . /app
WORKDIR /app/lives
RUN npm install 
RUN npm install --save @nestjs/typeorm typeorm sqlite3

# abrindo a porta 3000
EXPOSE 3000

# inicializando a API
CMD [ "npm","run", "start:dev" ]