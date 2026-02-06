# Kanban Board – Monorepo

## 🏗️ Monorepo Architecture

This project follows a **monorepo architecture**, where both frontend and backend are maintained within a single repository.
This approach simplifies development, ensures better coordination between layers, and makes environment management easier.

### Repository Structure

```
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── server.js
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── db/
│   │   └── utils/
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   ├── axiosClient.js
│   │   │   └── tasks.api.js
│   │   ├── components/
│   │   ├── pages/
│   │   └── styles/
│   └── package.json
│
├── .env
└── README.md
```

---

## ✨ Features

- Three columns:
  - Todo
  - In Progress
  - Done
- Create tasks (title + optional description)
- Move tasks between columns (buttons & drag-and-drop support)
- Persist tasks using backend API
- Restore board state on page reload
- Clean API layer using **Axios + interceptors**

---

## 🧰 Tech Stack

### Frontend
- React
- JavaScript
- Axios (with interceptors)
- HTML5 Drag and Drop
- Custom CSS (dark theme, minimal styling)

### Backend
- Node.js
- Express.js
- Supabase (PostgreSQL)

### Database
- Supabase Postgres

---
## 🚀 Setup Instructions

### Install Dependencies

Install dependencies for **both frontend and backend**:

```bash
cd frontend
npm install

cd ../backend
npm install
```

---

### Run Backend

```bash
cd backend
npm start
```

Backend runs on:
```
http://localhost:4000
```

---

### Run Frontend

```bash
cd frontend
npm start
```

Frontend runs on:
```
http://localhost:3000
```

---

## 📌 Assumptions & Future Scalability

The current implementation is intentionally simple, but the architecture supports future growth.

### Assumptions Made

#### 1. Project-based Tasks
- Tasks can later be associated with a `project_id`
- Enables multiple boards or project-based Kanban views
- Schema already supports this extension without major refactoring

#### 2. Dynamic Columns
- Columns can be made dynamic
- Either:
  - Project-specific columns, or
  - Global configurable columns (stored in the database)
- Current fixed columns (`todo`, `in_progress`, `done`) act as sensible defaults

---

## 🎯 Design Philosophy

- Backend acts as the **single source of truth**
- Frontend manages only UI state
- API responses are used to update local state instead of refetching
- Correctness first, optimization later
- Simple today, extensible tomorrow
