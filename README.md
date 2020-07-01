# Desafios da maratona Full Cycle 3.0 :rocket:

## Hello World Go
- Projeto que usa a linguagem Go para mostrar o famoso Hello World usando container [Docker](https://www.docker.com/)
### Como executar
Você pode usar diretamente a imagem que gerei usando o comando 

    $ docker run mayconbj15/hello-world-go

#### Você também pode criar sua própria imagem
Na pasta do [Dockerfile](https://github.com/mayconbj15/maratona-fullcycle-3.0/blob/master/01-hello-world-go/Dockerfile) execute o comando
    
    $ docker build -t <nome_imagem>

Então execute

    $ docker run <nome_imagem>

## Hello World Go + Buffalo
- Projeto que usa a linguagem Go e o Framework [Bufallo](https://gobuffalo.io/en/) para criar uma Web Api para retornar o famoso Hello World

### Como executar
Você pode usar diretamente a imagem que gerei usando o comando 
    
    $ docker run mayconbj15/hello-world-api

Na pasta do [Dockerfile](https://github.com/mayconbj15/maratona-fullcycle-3.0/blob/master/02-hello-world-api/Dockerfile) execute o comando
    
    $ docker build -t <nome_imagem>

Então execute

    $ docker run -p 3000:3000 <nome_imagem>

## Referências
- [Go](https://golang.org/)
- [Buffalo Framework](https://gobuffalo.io/en/)
- [Docker](https://www.docker.com/)
- [Dockerfile Reference](https://docs.docker.com/engine/reference/builder/)
- [How to install Bufallo and Go](https://gobuffalo.io/en/docs/getting-started/installation)
- [Iniciando com Docker](https://www.youtube.com/watch?v=39Jl_M3nUTo)