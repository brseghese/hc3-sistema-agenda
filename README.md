<h1 align="center" id="topo">Sistema de Agendamento 📖</h1>

### 🏷️ Projeto

Sistema de Agendamento é um projeto para exercitar os conceitos dados no curso de Node.js - HTTP GET & HTTP POST do **Programa Hiring Coders #3** da VTEX em parceria com a Gama Academy.

[Clique aqui](https://github.com/brseghese/hiring-coders-3-vtex-gama/tree/main/f1_node_http)🔗 para acessar o repositório com a introdução do curso.

---

### 📍 Sobre

O Projeto é um API para controle de agendamentos, onde o usuário faz um agendamento com o prestador de serviço.

O sistema possui cadastro e atualização de usuário com foto, cadastro e atualização de prestador de serviço, cadastro de agendamento verificando horário disponível do prestador de serviço, listagem de agendamentos por usuário, listagem de compromissos por prestador de serviços e data, cadastro e listagem de notificações de agendamento com data, hora e usuário a ser atendido pelo prestador de serviço.

<details>
<summary>Conteúdo do Projeto</summary>

####

- Conceitos de REST e SOAP
- Configurando Nodemon
- Configurando Docker
- Configurando ElephantSQL e PostBird
- ORM Migration
- Usuários Model
- Usuários Controller
- Usuários Hash de senhas
- Usuários Autenticação JWT
- Token JWT via Header
- Atualizando usuário
- Validação de dados
- Adicionando foto do usuário
- Vinculando fotos ao usuário
- Listagem de prestadores de serviços
- Models de agendamento
- Criando agendamentos
- Validações e listagem de agendamentos
- Paginação e listagem de agenda do colaborador
- Configurando o MONGODB
- Configurando as notificações
- Listando notificações e marcando como lidas

</details>

### 📚 Conceitos

<details>
<summary>REST</summary>

####

REST (Representational State Transfer) é um protocolo de comunicação, baseado no protocolo de hipermídia HTTP. Porém ele não impõe restrições ao formato da mensagem, apenas no comportamento dos componentes envolvidos. A maior vantagem do protocolo REST é sua flexibilidade.

</details>

<details>
<summary>SOAP</summary>

####

SOAP (Simple Object Access Protocol) é um protocolo baseado em XML para troca de informações em um ambiente distribuido. É utilizado para troca de mensagens entre aplicativos distribuidos pela rede. Estes aplicativos, ou “Web services”, possuem uma interface de acesso simples e bem definida.

</details>

---

### 🛠️ Preparação do Ambiente

<details>
<summary>Package.json | Express</summary>

#### ✔️ Inicialize o pacote

```
npm init -y
```

> -y criar sem perguntas

O arquivo "package.json" é criado.

#### ✔️ Crie a pasta "src" com os respectivos arquivos

- app.js
- server.js
- routes.js

#### ✔️ Instale o express

```
npm i express
```

</details>

<details>
<summary>Estrutura básica da API REST</summary>

#### 🔶 server.js

```
const app = require("./app");

app.listen(3333);
```

#### 🔶 app.js

```
const express = require("express");
const routes = require("./router");

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.server.use(express.json());
  }
  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
```

#### 🔶 router.js

```
const { Router } = require("express");
const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Okay" });
});

module.exports = routes;
```

#### ✔️ Teste o servidor

```
node src/server.js
```

#### ✔️ Abra o navegador e digite

```
localhost:3333
```

</details>

<details>
<summary>Sucrase | Nodemon</summary>

#### 🔶 Sucrase

O Sucrase possibilita o node usar a sintaxe ES6 modules, melhorando a compatibilidade de código do frontend com o backend.

#### ✔️ Instale o [sucrase](https://github.com/alangpierce/sucrase)

```
npm i sucrase -D
```

> -D dependência de desenvolvimento

#### 🔶 Nodemon

O nodemon é uma biblioteca que ajuda no desenvolvimento de sistemas com o Node. js reiniciando automaticamente o servidor.

#### ✔️ Instale o nodemon

```
npm i nodemon -D
```

> -D dependência de desenvolvimento

#### ✔️ Configure o nodemon

Crie o arquivo "nodemon.json" na pasta raiz e implemente:

```
{
  "execMap": {
    "js": "sucrase-node"
  }
}
```

Inclua no "package.json" na propriedade "scripts"

```
"dev": "nodemon src/server"
```

Atualize as importações dos arquivos:

- server.js
- app.js
- router.js

#### ✔️ Teste o servidor

```
npm run dev
```

> digite localhost:3333 no navegador

</details>

<details>
<summary>Docker | PostgreSQL</summary>

#### 🔶 Docker

O Docker é uma plataforma open source que facilita a criação e administração de ambientes isolados. Ele possibilita o empacotamento de uma aplicação ou ambiente dentro de um container, se tornando portátil para qualquer outro host que contenha o Docker instalado.

#### ✔️ Faça o download, instale e configure o Docker

[Get Started Docker](https://www.docker.com/)

#### ✔️ Verifique a versão do Docker

```
docker -v
```

#### 🔶 PostgreSQL

O PostgreSQL suporta nativamente um grande número de tipos de dados padrão, como JSON, XML, etc. O PostgreSQL obtém vantagem disso, pois é um dos poucos bancos de dados relacionais que oferece forte suporte para a funcionalidade NoSQL. Além disso, permite que os usuários definam seus próprios tipos de dados.

#### ✔️ Instale o PostgreSQL

```
docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

#### ✔️ Verifique as imagens instaladas no Docker

```
docker image ls
```

#### 🔶 Docker Desktop - em images PostgreSQL

#### ✔️ Clicar em "run"

#### ✔️ Teste o PostgreSQL

```
docker ps
```

</details>

<details>
<summary>ORM Sequelize | Postbird</summary>

#### 🔶 ORM

Object-Relational Mapping (ORM), em português, mapeamento objeto-relacional, é uma técnica para aproximar o paradigma de desenvolvimento de aplicações orientadas a objetos ao paradigma do banco de dados relacional.

#### 🔶 Sequelize

O Sequelize é um ORM(Object/Relational Mapper) baseado em Promise para Node.js e io.js, e suporta os dialetos PostgreSQL, MySQL, MariaDB, SQLite e MSSQL e recursos a transação, relacionamentos, replicação de leitura e muito mais.

#### ✔️ Instale o Sequelize

```
npm i sequelize
```

#### ✔️ Instale o CLI do Sequelize

```
npm install --save-dev sequelize-cli
```

#### ✔️ Instale o conector do banco de dados PostgreSQL

```
npm i pg pg-hstore
```

#### ✔️ ".sequelizerc"

- Configurando o caminho.

#### ✔️ "database.js"

- Configurando o banco de dados.

#### 🔶 Migrations

São classes que executam promises capazes de gerar nossa estrutura na base de dados, ele irá gerar as tabelas, relacionamentos e campos por etapas, para cada nova tabela teremos uma nova migration, não precisa se preocupar o migrate sabe identificar qual foi a última executada.

#### ✔️ Create Migration

```
npx sequelize migration:create --name=create-users
```

#### ✔️ Implemente a tabela "users" no Migration "create-users.js"

#### 🔶 Postbird

Postbird é um cliente PostgreSQL GUI de plataforma cruzada. Suporta visualizações, visualizações de materiais, tabelas estrangeiras, restrições, esquemas, conexão com postgres do heroku.

#### ✔️ Instale o Postbird

#### ✔️ Crie uma nova conexão

- Use as configurações do "database.js"

#### ✔️ Crie um database no Postbird

- Nomei de "sistema"

#### ✔️ Crie a tabela com o Sequelize Migrate

```
npx sequelize db:migrate
```

#### How back migration

- Caso precise alterar, tudo é apagado, sem volta!

```
npx sequelize db:migrate:undo
```

</details>

<details>
<summary>Bcryptjs | JWT | Yup | Multer | Crypto | Date-fns | Mongoose</summary>

#### 🔶 Bcryptjs - Hash de Senha

O bcryptjs é uma biblioteca para encriptação de dados.

```
npm i bcryptjs
```

#### 🔶 [JWT](https://jwt.io/) - json web token

O JWT é digitalmente assinado usando uma chave secreta com o algoritmo HMAC ou um par de chaves pública e privada RSA ou ECDSA.

```
npm i jsonwebtoken
```

#### 🔶 Yup

Yup faz validações de dados como string , integer , boolean , array , object e date.

```
npm i yup
```

#### 🔶 Multer

O multer é usado junto com o express em alguma rota escolhida. Quando usado, o multer terá opções para armazenar os arquivos, como o destino e nome deles, quais tipos de arquivos e qual o tamanho máximo permitido.

```
npm i multer
```

#### 🔶 Crypto

Usado para gerar uma numeração antes do nome do arquivo de imagem para salvar sem conflito.

#### 🔶 Date-fns

Date fns é um conjunto abrangente de funções para manipular datas em JavaScript no navegador e Node.

```
npm i date-fns
```

#### 🔶 Mongoose

Mongoose é uma biblioteca Node.js baseada em Schemas para modelar os dados de nossa aplicação. Tudo no Mongoose começa com um Schema, e cada schema mapeia uma collection no MongoBD e nessas collections.

```
npm i mongoose
```

#### 🔗 Links

[MD5 Hash](https://www.md5hashgenerator.com/)

Usado para criar hasd do JWT.

</details>

---

### 🧪 Tecnologias

- Docker
- PostgreSQL
- Thunder Client
- Postbird
- MongoDB

---

### ​👷‍♂️​ Acessar o Projeto

<a href="https://github.com/brseghese/hc3-sistema-agenda/tree/main">Acesse aqui</a>🔗 o código fonte pelo GitHub.

Faça o <a href="https://github.com/brseghese/hc3-sistema-agenda/archive/refs/heads/main.zip">Download aqui</a>🔗 do código fonte no formato zip.

Clone o repositório:

```
git clone https://github.com/brseghese/hc3-sistema-agenda.git
```

<!-- Entre na pasta do projeto:

```
cd hc3-sistema-agenda
```

Instale as dependências:

```
npm install
```

Execute a aplicação:

```
npm run dev
``` -->

<!-- Abra http://localhost:3000 no seu navegador para ver a aplicação -->

---

### 📝 License

Esse projeto é licenciado pela MIT License. Veja [aqui](https://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT) mais detalhes.

---

### ✒️ Autor

<a href="https://github.com/brseghese"> <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/80193824?v=4" width="100px;" alt="Personal photo"/> </a>

[Clique aqui](https://brseghese.github.io)🔗 e acesse meu portfólio! 💼 (em construção...)

---

#### 💬 Sinta-se a vontade para entrar em contato

[![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/brunoseghese/) [![Github Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/brseghese) [![Gmail Badge](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:brseghese@gmail.com)

---

> Desenvolvido com ❤️ por **Bruno Seghese**

---
