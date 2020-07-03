# Desafios da maratona Full Cycle 3.0 :rocket:

## Hello World Go
- Projeto que usa a linguagem Go para mostrar o famoso Hello World usando container.

### Tecnologias usadas
- [Golang](https://golang.org/) 
- [Docker](https://www.docker.com/)

### Como executar
Você pode usar diretamente a imagem que gerei usando o comando 

    $ docker run mayconbj15/hello-world-go

#### Você também pode criar sua própria imagem
Na pasta do [Dockerfile](https://github.com/mayconbj15/maratona-fullcycle-3.0/blob/master/01-hello-world-go/Dockerfile) execute o comando
    
    $ docker build -t <nome_imagem> .

Então execute

    $ docker run <nome_imagem>

## Hello World Go + Buffalo
- Projeto que cria uma Web Api para retornar o famoso Hello World

### Tecnologia usadas
- [Framework Bufallo](https://gobuffalo.io/en/)
- [Golang](https://golang.org/) 
- [Docker](https://www.docker.com/)

### Como executar
Você pode usar diretamente a imagem que gerei usando o comando 
    
    $ docker run mayconbj15/hello-world-api

Na pasta do [Dockerfile](https://github.com/mayconbj15/maratona-fullcycle-3.0/blob/master/02-hello-world-api/Dockerfile) execute o comando
    
    $ docker build -t <nome_imagem> .

Então execute

    $ docker run -p 3000:3000 <nome_imagem>

## Calculadora Serverless
- Projeto que cria lambda functions que realiza as operações básicas

### Tecnologias usadas
- [Serverless Framework](https://www.serverless.com/)
- [Node.js](https://nodejs.org/en/)
- [AWS](https://aws.amazon.com/pt/)

### Como executar
Após fazer as configurações da AWS descritas na referência [AWS Credentials Guide](https://www.serverless.com/framework/docs/providers/aws/guide/credentials) execute o seguinte comando

    $ sls deploy --verbose

## Listagem das aulas com Django
- Projeto que lista as aulas da Maratona Full Cycle 3.0

### Tecnologias usadas
- [Django Framework](https://www.djangoproject.com/)
- [SqLite](https://www.sqlite.org/index.html) **Obs: Já vem no Django**
- [Docker](https://www.docker.com/)

### Como executar
Você pode usar diretamente a imagem que gerei usando o comando 
    
    $ docker run mayconbj15/aulas-django

Na pasta do [Dockerfile](https://github.com/mayconbj15/maratona-fullcycle-3.0/blob/master/04-django/lista_aulas/Dockerfile) execute o comando
    
    $ docker build -t <nome_imagem> .

Então execute

    $ docker run -p 8000:8000 <nome_imagem>

## Referências
- [Dockerfile Reference](https://docs.docker.com/engine/reference/builder/)
- [How to install Bufallo and Go](https://gobuffalo.io/en/docs/getting-started/installation)
- [Iniciando com Docker](https://www.youtube.com/watch?v=39Jl_M3nUTo)
- [Serverless Framework exemplo JS](https://www.serverless.com/framework/docs/providers/aws/examples/hello-world/node/)
- [AWS Credentials Guide](https://www.serverless.com/framework/docs/providers/aws/guide/credentials/)
- [Dockerfile Django](https://docs.docker.com/compose/django/)
- [Writing your first Django app](https://docs.djangoproject.com/en/3.0/intro/tutorial01/)