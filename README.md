
<h1 style="text-align: center;">API com NodeJS, MongoDB/Atlas, Express e Nodemailer</h1>

<h1 align="center">
    <img src="./api.png"/>
</h1>

## Sobre
<p style="text-align: justify;" >A API foi construida para teste de autenticação com JWT e banco de dados<b>Underground Devs</b>.
</p>

---

## Tecnologias utilizadas

<p>O projeto foi desenvolvido utilizando as seguintes tecnologias</p>

 - [NodeJS](https://nodejs.org/en/)
 - [mongodb/atlas]()
 - [Nodemailer](https://nodemailer.com/about/)
 - [Nodemon](https://nodemon.io/)
 - [express](https://expressjs.com/pt-br/)
 - [mongoose](https://mongoosejs.com/)
 - [insomnia](https://support.insomnia.rest/article/23-installation#ubuntu)

---

## Como baixar o projeto
```bash
    #Clonar repositório
    $ git clone 
    
    #Acessar repositório
    $ cd API-NodeJS
```
---
## Instalando programas e dependência para executar a aplicação.
Para baixar o [insomnia basta ir no site oficial](https://insomnia.rest/download/core/?&ref=https%3A%2F%2Fwww.google.com%2F) e escolher o método de instalação para MAC, Windows ou Linux Ubuntu. 

```bash
#Instalando dependências necessárias para aplicação
$ yarn install
```

---

## Configurando ambiente para execução em seu local host
### Configurando mongoDB no Atlas
<p>A base de dados usada na aplicação foi o mongodb na qual você pode usar o atlas(Local de hospedagem na nuvem do mongodb). Siga o passos a passo</p>

- Acesse a página do [mongodb atlas](https://www.mongodb.com/cloud/atlas)
- faça o registro em Star free | | se já possui conta pule para o próximo passo
- Fáça autenticação com a sua conta 
- Click em Build Cluster
- Click em Create Cluster

<p>Em "/API-NodeJS/config" voc^terá os arquivos de configuração com os nomes configDb(para coneão de banco de dados, na quala você pode configurar tanto para localhost tanto para nuvem do atlas) e mail(para a configuração do serviço de envio de email)</p>

### Iniciando aplicação

```bash
    #Inicia aplicação no http:localhost: 3000
    $ yarn dev
```

---

## Exemplos executados no insomnia

```json
    localhost:3000/auth/register
    {
	"name": "kevon",
	"email": "kevson@gmail.com",
	"password": "12345678"
    }

    localhost:3000/auth/authenticate
    {
	"email": "kevson@gmail.com",
	"password": "87654321"
    }

    #Listagem 
    localhost:3000/projects

    #Croação de projeto basta trocar o tipo para POST:
    localhost:3000/projects
    {
	"title": "new horizon",
	"description": "Descrição de project"
    }

```
---
Desenvolvido por Kevson Filipe.
---
frontend em breve...