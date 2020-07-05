# Desafios da [Maratona Full Cycle 3.0](http://maratona.fullcycle.com.br/) :rocket:

## [Hello World Go](https://github.com/mayconbj15/maratona-fullcycle-3.0/tree/master/01-hello-world-go)

- Projeto que usa a linguagem Go para mostrar o famoso Hello World usando container.

### Tecnologias usadas

- [Golang](https://golang.org/)
- [Docker](https://www.docker.com/)

### Como executar

### Usando docker

##### Você pode usar diretamente a imagem que gerei usando o comando

    $ docker run mayconbj15/hello-world-go

##### Ou criar sua própria imagem

Na pasta do [Dockerfile](https://github.com/mayconbj15/maratona-fullcycle-3.0/blob/master/01-hello-world-go/Dockerfile) execute o comando

\$ docker build -t <nome_imagem> .

Então execute

    $ docker run <nome_imagem>

## [Hello World Go + Buffalo](https://github.com/mayconbj15/maratona-fullcycle-3.0/tree/master/02-hello-world-api)

- Projeto que cria uma Web Api para retornar o famoso Hello World

### Tecnologia usadas

- [Framework Bufallo](https://gobuffalo.io/en/)
- [Golang](https://golang.org/)
- [Docker](https://www.docker.com/)

### Como executar

### Usando docker

##### Você pode usar diretamente a imagem que gerei usando o comando

    $ docker run mayconbj15/hello-world-api

##### Ou criar sua própria imagem

Na pasta do [Dockerfile](https://github.com/mayconbj15/maratona-fullcycle-3.0/blob/master/02-hello-world-api/Dockerfile) execute o comando

    $ docker build -t <nome_imagem> .

Então execute

    $ docker run -p 3000:3000 <nome_imagem>

### Em sua máquina

Na [pasta](https://github.com/mayconbj15/maratona-fullcycle-3.0/tree/master/02-hello-world-api) do projeto execute o comando

    $ buffalo dev

## [Calculadora Serverless](https://github.com/mayconbj15/maratona-fullcycle-3.0/tree/master/03-sum-app-js)

- Projeto que cria lambda functions que realiza as operações básicas

### Tecnologias usadas

- [Serverless Framework](https://www.serverless.com/)
- [Node.js](https://nodejs.org/en/)
- [AWS](https://aws.amazon.com/pt/)

### Como executar

Após fazer as configurações da AWS descritas na referência [AWS Credentials Guide](https://www.serverless.com/framework/docs/providers/aws/guide/credentials) execute o seguinte comando

    $ sls deploy --verbose

## [Listagem das aulas com Django](https://github.com/mayconbj15/maratona-fullcycle-3.0/tree/master/04-django/lista_aulas)

- Projeto que lista as aulas da [Maratona Full Cycle 3.0](http://maratona.fullcycle.com.br/)

### Tecnologias usadas

- [Django Framework](https://www.djangoproject.com/)
- [SqLite](https://www.sqlite.org/index.html) **Obs: Já vem no Django**
- [Docker](https://www.docker.com/)

### Como executar

### Usando docker

##### Você pode usar diretamente a imagem que gerei usando o comando

    $ docker run mayconbj15/aulas-django

##### Ou criar sua própria imagem

Na pasta do [Dockerfile](https://github.com/mayconbj15/maratona-fullcycle-3.0/blob/master/04-django/lista_aulas/Dockerfile) execute o comando

\$ docker build -t <nome_imagem> .

Então execute

    $ docker run -p 8000:8000 <nome_imagem>

### Em sua máquina

No projeto [lista_aulas](https://github.com/mayconbj15/maratona-fullcycle-3.0/tree/master/04-django/lista_aulas) execute o comando

\$ python manage.py runserver

## [Listagem das lives com NestJS](https://github.com/mayconbj15/maratona-fullcycle-3.0/tree/master/05-nest-js)

- Projeto que lista as lives da [Maratona Full Cycle 3.0](http://maratona.fullcycle.com.br/) e tem um CRUD para opera-las.

### Tecnologias usadas

- [NestJS](https://nestjs.com/)
- [SqLite](https://www.sqlite.org/index.html)
- [Docker](https://www.docker.com/)

### Como executar

### Usando Docker

##### Você pode usar diretamente a imagem que gerei usando o comando

    $ docker run mayconbj15/lives-nest

##### Ou criar sua própria imagem

Na pasta do [Dockerfile](https://github.com/mayconbj15/maratona-fullcycle-3.0/blob/master/05-nest-js/Dockerfile) execute o comando

    $ docker build -t <nome_imagem> .

Então execute

    $ docker run -p 3000:3000 <nome_imagem>

### Em sua máquina

Na pasta [lives](https://github.com/mayconbj15/maratona-fullcycle-3.0/tree/master/05-nest-js/lives) execute o comando

    $ npm rum start:dev

## Referências

- [Dockerfile Reference](https://docs.docker.com/engine/reference/builder/)
- [How to install Bufallo and Go](https://gobuffalo.io/en/docs/getting-started/installation)
- [Iniciando com Docker](https://www.youtube.com/watch?v=39Jl_M3nUTo)
- [Serverless Framework exemplo JS](https://www.serverless.com/framework/docs/providers/aws/examples/hello-world/node/)
- [AWS Credentials Guide](https://www.serverless.com/framework/docs/providers/aws/guide/credentials/)
- [Dockerfile Django](https://docs.docker.com/compose/django/)
- [Writing your first Django app](https://docs.djangoproject.com/en/3.0/intro/tutorial01/)
- [Build your First REST API CRUD App with TypeORM](https://www.techiediaries.com/nestjs-tutorial-rest-api-crud/)
