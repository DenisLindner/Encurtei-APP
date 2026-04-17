<div align="center">
  <h1>🔗 Encurtei - Frontend</h1>
  <p>A interface moderna e eficiente para o encurtador de links construída com Next.js.</p>
</div>

---

## 📖 Contexto

Este projeto é a interface (frontend) construída exclusivamente para o consumo e interação com a API do **[Encurtei](https://github.com/DenisLindner/Encurtei-API)**, um encurtador de links projetado para alta escalabilidade e performance. Além de ser o painel interativo do sistema, a aplicação frontend foi desenvolvida para testar e aprimorar a construção de interfaces de usuário dinâmicas e fluidas, servindo como uma base excelente para demonstração das minhas habilidades com o framework Next.js.

## 🎯 Objetivo

Fornecer uma experiência de usuário (UX) intuitiva e reativa. O objetivo da interface é facilitar a inserção de longas URLs por parte do usuário e entregar links curtos de maneira instantânea e amigável. Além disso, o frontend garante que os redirecionamentos através da rota gerada tragam ao usuário a experiência mais fluida possível.

## 🛠️ Stack e Bibliotecas

A aplicação utiliza as tecnologias mais eficientes e modernas para o desenvolvimento de ecossistemas React:

- **Framework:** [Next.js](https://nextjs.org/) (App Router, v16.2.3)
- **Linguagem e Biblioteca de renderização:** [React 19](https://react.dev/) e TypeScript (v5)
- **Ferramentas de Suporte:** ESLint para garantir a qualidade do código fonte e padrões limpos.

## 📡 Endpoints (Rotas da Interface)

A navegação foi estruturada com as capacidades de roteamento da pasta `app` do Next.js.

- **`/` (Home)**
  A página inicial do sistema. Aqui o usuário pode interagir com o campo de inserção da URL original para receber instantaneamente seu respectivo link otimizado.

- **`/[shortCode]` (Redirecionamento)**
  Rota dinâmica responsável por interceptar o código de acesso e realizar a consulta assíncrona ao servidor, processando o redirecionamento imediato para a URL original com máxima suavidade.

## 🚀 Como Rodar

Para que o frontend funcione integralmente, é crucial que o **Backend** também esteja rodando de forma coesa na sua máquina. A estrutura do código deve estar com a API na pasta `/api` e a interface na pasta `/app`.

### Pré-requisitos
- [Node.js](https://nodejs.org/en/) instalado (Recomendação: versão 20.x+)
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/) instalados

---

### Passo 1: Inicializando o Backend (API)

A interface não consegue operar adequadamente sem o backend no ar e suas infraestruturas conectadas adequadamente.

1. Navegue até o diretório do backend:
   ```bash
   cd api
   ```
2. Inicie as dependências providas via Docker (como o banco de dados Cassandra e Redis Cache) na pasta designada:
   ```bash
   docker-compose -f docker/docker.compose.yml up -d
   ```
3. Garanta que o Cassandra e os componentes estejam funcionais. Então, crie a chave do ambiente e instale os pacotes Node:
   ```bash
   cp .env.example .env
   npm install
   ```
4. Suba o servidor:
   ```bash
   npm run start:dev
   ```

---

### Passo 2: Inicializando o Frontend em Next.js

Com a API estabilizada na porta base (por padrão, `3333`), podemos iniciar a interface ao lado do usuário. Em uma nova aba do terminal:

1. Navegue até a pasta do painel:
   ```bash
   cd app
   ```
2. Instale as bibliotecas e pacotes do React:
   ```bash
   npm install
   ```
3. Inicialize a aplicação local de forma otimizada para o desenvolvimento:
   ```bash
   npm run dev
   ```

Acesse [http://localhost:3000](http://localhost:3000) para interagir livremente com a aplicação!

---

## 📬 Contato

<div align="center">
  <a href="https://github.com/DenisLindner/" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/denis-lindner/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
  <a href="mailto:lindnerdenis19@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
  <br/>
  Criado e mantido por <strong>Denis Lindner</strong>.
</div>
