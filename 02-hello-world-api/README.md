## Hello World Go + Buffalo

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
