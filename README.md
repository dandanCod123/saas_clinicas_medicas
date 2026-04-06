# 🏥 SaaS Clínicas Médicas

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15.3-black?style=for-the-badge&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Drizzle_ORM-0.43-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black" />
  <img src="https://img.shields.io/badge/PostgreSQL-blue?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
</p>

<p align="center">
  Plataforma SaaS completa para gestão de clínicas médicas — agendamentos, pacientes, médicos e dashboards em tempo real.
</p>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Stack Tecnológica](#-stack-tecnológica)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação e Configuração](#-instalação-e-configuração)
- [Variáveis de Ambiente](#-variáveis-de-ambiente)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

---

## 🚀 Sobre o Projeto

O **SaaS Clínicas Médicas** é uma aplicação web fullstack voltada para clínicas e consultórios médicos que precisam gerenciar sua operação de forma centralizada. A plataforma oferece controle de agenda, cadastro de pacientes, painel administrativo e muito mais — tudo em uma interface moderna e responsiva.

O projeto foi construído com foco em **performance**, **type safety** de ponta a ponta e boas práticas de arquitetura com Next.js App Router.

---

## ✨ Funcionalidades

- 🗓️ **Agendamento de consultas** — calendário interativo com visualização por dia/semana
- 👨‍⚕️ **Gestão de médicos** — cadastro, especialidades e disponibilidade
- 🧑‍🤝‍🧑 **Cadastro de pacientes** — histórico e informações clínicas
- 📊 **Dashboard** — gráficos e métricas com Recharts
- 🔐 **Autenticação** — login seguro com Better Auth
- 🎨 **UI moderna** — componentes com shadcn/ui + Radix UI
- 🌙 **Dark mode** — suporte a temas via next-themes
- ✅ **Formulários validados** — React Hook Form + Zod
- ⚡ **Server Actions** — mutações seguras com next-safe-action
- 🔄 **Sincronização de estado** — TanStack Query para cache e revalidação

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 15 (App Router) |
| Linguagem | TypeScript 5 |
| Estilização | Tailwind CSS 4 + shadcn/ui |
| ORM | Drizzle ORM |
| Banco de Dados | PostgreSQL |
| Autenticação | Better Auth |
| Estado / Cache | TanStack Query |
| Tabelas | TanStack Table |
| Formulários | React Hook Form + Zod |
| Gráficos | Recharts |
| Datas | date-fns + Day.js |
| Notificações | Sonner |
| Server Actions | next-safe-action |

---

## ✅ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) >= 18
- [npm](https://www.npmjs.com/) >= 9 (ou yarn / pnpm / bun)
- [PostgreSQL](https://www.postgresql.org/) >= 14 (local ou via Docker)

---

## ⚙️ Instalação e Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/dandanCod123/saas_clinicas_medicas.git
cd saas_clinicas_medicas
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

```bash
cp .env.example .env
```

Edite o `.env` com suas configurações (veja a seção abaixo).

### 4. Execute as migrations do banco

```bash
npx drizzle-kit migrate
```

### 5. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

---

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Banco de dados
DATABASE_URL="postgresql://usuario:senha@localhost:5432/saas_clinicas"

# Autenticação (Better Auth)
BETTER_AUTH_SECRET="sua_chave_secreta_aqui"
BETTER_AUTH_URL="http://localhost:3000"

# Next.js
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

> ⚠️ **Nunca** commite o arquivo `.env` no repositório. Ele já está listado no `.gitignore`.

---

## 📜 Scripts Disponíveis

```bash
npm run dev       # Inicia o servidor de desenvolvimento
npm run build     # Gera o build de produção
npm run start     # Inicia o servidor em modo produção
npm run lint      # Executa o ESLint
```

### Drizzle ORM

```bash
npx drizzle-kit generate   # Gera as migrations
npx drizzle-kit migrate    # Executa as migrations
npx drizzle-kit studio     # Abre o Drizzle Studio (GUI do banco)
```

---

## 📁 Estrutura do Projeto

```
saas_clinicas_medicas/
├── public/               # Arquivos estáticos
├── src/
│   ├── app/              # Rotas e páginas (App Router)
│   ├── components/       # Componentes reutilizáveis
│   ├── db/               # Schema e configuração do Drizzle ORM
│   ├── lib/              # Utilitários e configurações gerais
│   └── actions/          # Server Actions (next-safe-action)
├── drizzle.config.ts     # Configuração do Drizzle
├── next.config.ts        # Configuração do Next.js
├── tailwind.config.ts    # Configuração do Tailwind CSS
└── package.json
```

---

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature: `git checkout -b feat/minha-feature`
3. Commit suas alterações: `git commit -m 'feat: adiciona minha feature'`
4. Push para a branch: `git push origin feat/minha-feature`
5. Abra um Pull Request

Por favor, siga o padrão de commits [Conventional Commits](https://www.conventionalcommits.org/pt-br/).

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">Feito com ❤️ por <a href="https://github.com/dandanCod123">dandanCod123</a></p>
