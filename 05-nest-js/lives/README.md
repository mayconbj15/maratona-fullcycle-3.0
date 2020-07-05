## Listagem das lives com NestJS

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
