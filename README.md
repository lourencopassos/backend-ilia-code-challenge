# 🏝️ API Rest Node - Desafio Técnico Backend

### Repositório do desafio técnico para desenvolvedor de Node.Js na empresa: ília. 

#### O escopo do projeto consiste em construir um micro serviço dockerizado com network compartilhada entre a aplicação e o banco que seja capaz de capturar e indexar as informações de um filme e suas legendas em uma base de dados à partir de chamadas a endpoints.

<br>

----

<br>

## 🚀 Características do desafio
- API padrão REST
- Utilização de Node.js
- Utilização de banco de dados MongoDb

## 👨🏽‍💻 Tecnologias utilizadas
- Node.js
- Typescript
- Mongo DB Atlas
- Mongoose
- Express
- Axios
- Jest
- Supertest
- Docker
- Docker Compose
- Postman para teste da API

## 🚙 Instruções para rodar a aplicação

1. `npm install` para instalar todas as dependências;
3. `npm test` para rodar os testes do projeto;
3. `npm run start` para rodar localmente o projeto.
4. `docker-compose up` para rodar a aplicação via Docker 🐋

### 🛣️ Rotas 

<br>

- **Adicionar filme** 

**`POST /movies/add/{movieId}`** A rota deve receber um `movieId` através de _path param_. Este endpoint bate em um endpoint externo na API do TMDB `GET /movie/{movieId}` para pegar as informações do filme e depois no endpoint desta mesma API externa `GET /movie/{movie_id}/translations` para salvar as legendas, conforme explicitado na documentação do desafio.


- **Buscar todos filmes salvos no banco de dados**

**`GET /movies/all/?limit=100&skip=0`** A rota recebe através do _query params_ o limite de filmes que serão buscados e a partir de qual através de `limit` e `skip` respectivamente para gerar a paginação. 


Exemplo de resposta: 

```
"movies": [
        {
            "_id": "5fb33c94c47d37e5f4ec75fa",
            "original_title": "Life in Loops (A Megacities RMX)",
            "overview": "Timo Novotny labels his new project an experimental music documentary film, in a remix of the celebrated film Megacities (1997), a visually refined essay on the hidden faces of several world.
            "translations": [
                {
                    "data": {
                        "overview": "Мултимедийният артист Тимо Новотни нарича своя нов проект \"експериментален музикален документален филм\". Творбата е ремикс на известния Мегаполиси (Megacities, 1997) - изтънчен визуален размисъл",
                        "title": "Живата гора"
                    },
                    "_id": "5fb33c94c47d37e5f4ec75fb",
                    "english_name": "Bulgarian"
                },
                {
                    "data": {
                        "overview": "",
                        "title": ""
                    },
                    "_id": "5fb33c94c47d37e5f4ec75fc",
                    "english_name": "German"
                },
```

#### 👋🏽 Contato

Lourenço Passos | Desenvolvedor Web Fullstack | lo.passos93@gmail.com | 51-996106010





