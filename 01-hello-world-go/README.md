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
