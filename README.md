# API - Online Libraries

API Desenvolvida durante o Curso de Node.js: API REST com Express e MongoDB da Alura

Esse projeto foi desenvolvido usando as seguintes tecnologias:

- [NodeJS](https://nodejs.org/pt-br/)<br />
- [ExpressJS](https://expressjs.com/)<br />
- [MongoDB](https://www.mongodb.com/)<br />
- [Mongoose](https://mongoosejs.com/)<br />
- [Vs Code](https://code.visualstudio.com/)

### Requisitos

Para Executar a API você precisará ter:
* [Git](https://git-scm.com)<br />
* [NodeJS](https://www.npmjs.com/)

### Recomendo ter instalado para testes mais avançados na API

* [Insomnia](https://insomnia.rest/)

### Tutorial de instalação
1° - clone a API com o comando <code>git clone https://github.com/ednario/API-OnlineLibraries</code><br />
2° - crie um banco de dados no [MongoDB Atlas](https://www.mongodb.com/atlas/database)<br />
3° - copie a URL de conexão para aplicações do seu banco, caso não saiba como fazer isso clique no link a seguir - [Tutorial MongoDB Atlas](https://medium.com/reprogramabr/conectando-no-banco-de-dados-cloud-mongodb-atlas-bca63399693f)<br />
4° - vá até o seguinte endereço <code>./src/config/dbConnect.js</code>, substitua <code>process.env.DATABASE_URL</code> pela URL do seu banco entre aspas ou crie uma variável local no .env chamada DATABASE_URL que recebera a URL de conexão do banco.<br />
5° - digite <code>npm install</code> no seu terminal e logo após <code>npm run dev</code><br />

### Caso tenha ocorrido tudo bem irá retornar dois consoles.log
1° Server is runner<br />
2° Conexão com o banco feita com sucesso
