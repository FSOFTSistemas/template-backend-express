# Estrutura de Pastas

## Visão Geral

```text
template-backend/
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── src/
│   ├── config/
│   ├── generated/
│   ├── modules/
│   ├── app.ts
│   └── index.ts
├── test/
├── docker-compose.yml
├── jest.config.ts
├── prisma.config.ts
└── package.json
```

## Diretórios e Arquivos

### `src/`

Contém todo o código-fonte da aplicação. O arquivo `app.ts` configura o Express, os middlewares, as rotas e a documentação Swagger. O arquivo `index.ts` inicia o servidor HTTP na porta 3000.

### `src/config/`

Centraliza configurações da aplicação. Atualmente contém a definição OpenAPI usada pelo Swagger.

### `src/modules/`

Organiza funcionalidades por domínio. Cada módulo pode conter schemas do Zod, serviços, tipos, testes unitários, e agora também seus respectivos `controllers` e `rotas`. O módulo `users` reúne as regras básicas de usuário. O módulo `health` abriga a rota de verificação de integridade.

### `src/generated/`

Recebe o Prisma Client gerado automaticamente. Seu conteúdo não deve ser editado manualmente nem versionado.

### `prisma/`

Contém `schema.prisma`, responsável pelos modelos e mapeamentos do banco, e `seed.ts`, que cadastra os dados iniciais. Futuras migrações ficam em `prisma/migrations/`.

### `test/`

Armazena os testes E2E. Esses testes exercitam o fluxo HTTP da aplicação por meio do Express, incluindo roteamento, controllers e formato das respostas.

## Fluxo da Aplicação

1. `src/index.ts` importa a aplicação configurada e inicia o servidor na porta 3000.
2. `src/app.ts` registra o parser JSON, o Swagger em `/api-docs` e as rotas.
3. Uma requisição é recebida por uma definição de rota dentro de um módulo em `src/modules/`.
4. A rota encaminha a requisição ao controller correspondente no mesmo módulo.
5. O controller pode validar dados com Zod e chamar serviços de domínio em `src/modules/`.
6. Quando houver persistência, o serviço utiliza o Prisma Client para acessar o MySQL.
7. O controller devolve a resposta HTTP em JSON ao cliente.

## Banco de Dados e Seed

O MySQL pode ser iniciado com `docker compose up -d`. Após configurar o arquivo `.env`, execute as migrações e o seed com `npm run prisma:migrate` e `npm run prisma:seed`. O seed é idempotente: ele cria ou atualiza o usuário administrativo inicial sem duplicá-lo.

## Documentação da API

Com o servidor em execução, a interface do Swagger fica disponível em `http://localhost:3000/api-docs`. As anotações das rotas são lidas durante a inicialização para montar a especificação OpenAPI.
