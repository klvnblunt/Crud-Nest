# CRUD NestJS com PostgreSQL (Docker)

Este projeto é um **CRUD desenvolvido com NestJS**, utilizando **PostgreSQL** como banco de dados, executado em um **container Docker**. O objetivo principal é **aprendizado e prática** de conceitos de back-end, organização de código, DTOs, entidades e integração com banco de dados.

---

## 🚀 Tecnologias Utilizadas

* **Node.js**
* **NestJS**
* **TypeScript**
* **PostgreSQL**
* **Docker & Docker Compose**
* **TypeORM**

---

## 📂 Estrutura do Projeto

```bash
src/
 ├── app/
 │   ├── app.controller.ts
 │   ├── app.module.ts
 │   └── app.service.ts
 │
 ├── common/
 │   └── dto/
 │       └── pagination.dto.ts
 │
 ├── pessoas/
 │   ├── dto/
 │   ├── entities/
 │   ├── pessoas.controller.ts
 │   ├── pessoas.module.ts
 │   └── pessoas.service.ts
 │
 ├── recados/
 │   ├── dto/
 │   ├── entities/
 │   ├── recados.controller.ts
 │   ├── recados.module.ts
 │   └── recados.service.ts
 │
 └── main.ts
```

### 📌 Módulos

* **Pessoas**: CRUD de pessoas
* **Recados**: CRUD de recados relacionados
* **Common**: DTOs reutilizáveis (ex: paginação)

---

## 🐳 Docker (PostgreSQL)

O banco de dados PostgreSQL é executado via **Docker Compose**.

Exemplo de serviço:

```yaml
version: '3.8'
services:
  postgres:
    image: postgres:15
    container_name: postgres_nest
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: crud_nest
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

---

## ⚙️ Configuração do Projeto

### 1️⃣ Clonar o repositório

```bash
git clone <url-do-repositorio>
cd crud-nest
```

### 2️⃣ Instalar as dependências

```bash
npm install
```

### 3️⃣ Subir o banco de dados com Docker

```bash
docker-compose up -d
```

### 4️⃣ Configurar variáveis de ambiente

Crie um arquivo `.env`:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=crud_nest
```

---

## ▶️ Executando a Aplicação

```bash
npm run start:dev
```

A API estará disponível em:

```
http://localhost:3000
```

---

## 🔁 Funcionalidades

* CRUD completo de **Pessoas**
* CRUD completo de **Recados**
* Validação de dados com DTOs
* Paginação
* Organização modular seguindo boas práticas do NestJS

---

## 🧪 Testes

```bash
npm run test
```

---

## 📚 Objetivo do Projeto

Este projeto foi desenvolvido com foco em:

* Aprendizado do **NestJS**
* Estruturação de APIs REST
* Uso do **TypeORM** com PostgreSQL
* Uso de **Docker** para banco de dados
* Boas práticas de organização de código

---

## ✍️ Autor

**Jonas Kelvin**

Projeto desenvolvido para fins de estudo e evolução técnica 🚀
