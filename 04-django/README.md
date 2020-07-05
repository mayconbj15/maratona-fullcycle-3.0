## Listagem das aulas com Django

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
