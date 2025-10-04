#  API E ORIENTAÇÃO

Uma **API RESTful** desenvolvida com **Node.js**, **TypeScript** e **Express**, estruturada no padrão **MVC (Model–View–Controller)**.  
O projeto simula uma aplicação de **gerenciamento de autores e postagens**, permitindo criar, listar, editar e excluir dados, utilizando armazenamento em memória.

---

##  Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript
- **TypeScript** – Tipagem estática e maior segurança no código
- **Express** – Framework para criação de rotas e controle de requisições HTTP
- **UUID** – Geração de identificadores únicos
- **Dotenv** – Gerenciamento de variáveis de ambiente
- **Nodemon** e **ts-node** – Ferramentas para desenvolvimento e execução dinâmica

---

##  Estrutura de Pastas

```
 api-e-orientacao
 ┣ 📂 src
 ┃ ┣ 📂 controladores
 ┃ ┃ ┣ AutorControlador.ts
 ┃ ┃ ┗ PostControlador.ts
 ┃ ┣ 📂 modelos
 ┃ ┃ ┣ Autor.ts
 ┃ ┃ ┣ Post.ts
 ┃ ┃ ┗ Bancodedados.ts
 ┃ ┣ rotas.ts
 ┃ ┗ index.ts
 ┣ .env
 ┣ package.json
 ┣ tsconfig.json
 ┗ .gitignore
```

---

## Instalação e Execução

###  Pré-requisitos
- Node.js 18+  
- npm ou yarn instalados  

###  Passos para executar o projeto

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/api-e-orientacao.git

# Entrar na pasta do projeto
cd api-e-orientacao

# Instalar dependências
npm install

# Criar um arquivo .env na raiz e definir a porta
echo PORT=3000 > .env

# Rodar o servidor em modo desenvolvimento
npm run dev
```

O servidor será iniciado em:  
👉 **http://localhost:3000**

---

##  Estrutura da Aplicação

###  Modelos
- **Autor.ts** → Classe responsável por criar e armazenar informações do autor (`id`, `nome`, `idade`).
- **Post.ts** → Classe que representa as postagens (`id`, `titulo`, `descricao`, `autor`, `data_criacao`).
- **Bancodedados.ts** → Armazena listas de autores e postagens em memória (`autores[]` e `posts[]`).

###  Controladores
- **AutorControlador.ts** → CRUD completo para autores.
- **PostControlador.ts** → CRUD completo para postagens, incluindo validação de autor existente.

###  Rotas
Definidas no arquivo `rotas.ts`, com prefixos:
- `/autores` → operações relacionadas a autores.
- `/postagens` → operações relacionadas a posts.

---

## Rotas da API

###  Autores

| Método | Rota | Descrição |
|--------|------|------------|
| GET | `/autores` | Lista todos os autores |
| GET | `/autores/:id` | Retorna um autor específico |
| POST | `/autores` | Cadastra um novo autor |
| PUT | `/autores/:id` | Edita nome e idade de um autor |
| DELETE | `/autores/:id` | Exclui um autor |

####  Exemplo de requisição (POST)
```json
POST /autores
{
  "nome": "Machado de Assis",
  "idade": 45
}
```

####  Exemplo de resposta
```json
{
  "id": "2d3f3b27-37a2-4c42-9d25-17cb9b3d1b6a",
  "nome": "Machado de Assis",
  "idade": 45
}
```

---

###  Postagens

| Método | Rota | Descrição |
|--------|------|------------|
| GET | `/postagens` | Lista todas as postagens |
| GET | `/postagens/:id` | Retorna uma postagem específica |
| POST | `/postagens` | Cadastra uma nova postagem |
| PATCH | `/postagens/:id` | Edita o título e a descrição de uma postagem |
| DELETE | `/postagens/:id` | Exclui uma postagem |

#### Exemplo de requisição (POST)
```json
POST /postagens
{
  "titulo": "A arte de programar em TypeScript",
  "descricao": "Um guia prático e direto para iniciantes.",
  "autor_id": "2d3f3b27-37a2-4c42-9d25-17cb9b3d1b6a"
}
```

####  Exemplo de resposta
```json
{
  "id": "bcd1234c-5a67-8d9e-10fa-bc123d4e5f67",
  "titulo": "A arte de programar em TypeScript",
  "descricao": "Um guia prático e direto para iniciantes.",
  "autor": {
    "id": "2d3f3b27-37a2-4c42-9d25-17cb9b3d1b6a",
    "nome": "Machado de Assis",
    "idade": 45
  },
  "data_criacao": "2025-10-04T22:13:00.000Z"
}
```

---

##  Conceitos Aplicados

- Programação Orientada a Objetos (POO)
- Separação de responsabilidades (Model, Controller, Route)
- Tipagem com **TypeScript**
- Manipulação de arrays como banco de dados temporário
- Tratamento de erros e respostas HTTP adequadas

---

## Scripts disponíveis

| Comando | Descrição |
|----------|------------|
| `npm run dev` | Executa o servidor em modo desenvolvimento |
| `npm run build` | Compila os arquivos TypeScript para JavaScript |
| `npm start` | Inicia o servidor compilado a partir da pasta `dist` |

---

## Autor

**Yago Fernando Santos de Sousa**  
 Desenvolvedor Full Stack em formação | Entusiasta de Tecnologia e Software  

> “Código limpo é como uma boa conversa — direto, claro e sem ruídos.”

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/yago-fernando-5914a6153/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yagofernandoss)

---

## Melhorias Futuras

- [ ] Persistência de dados com banco (PostgreSQL ou MongoDB)  
- [ ] Implementação de autenticação JWT  
- [ ] Validação de dados com Zod ou Joi  
- [ ] Testes automatizados com Jest  

---

## Licença

Este projeto é distribuído sob a licença **MIT**.  
Sinta-se livre para usá-lo e aprimorá-lo.  

---

