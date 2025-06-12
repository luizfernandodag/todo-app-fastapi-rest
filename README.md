# todo-app-fastapi-rest

# 📝 To-Do App - FastAPI + React

This is a simple **To-Do List** application built with **FastAPI** (backend) and **React** (frontend).

## 🚀 Tech Stack

- **Backend**: [FastAPI](https://fastapi.tiangolo.com/), [SQLAlchemy](https://www.sqlalchemy.org/), [SQLite](https://www.sqlite.org/index.html)
- **Frontend**: [React](https://reactjs.org/), [Axios](https://axios-http.com/)
- **Others**: [Docker (optional)](https://www.docker.com/), [Vite](https://vitejs.dev/) for frontend tooling

---

## 📁 Project Structure

todo-app/
├── backend/
│ ├── app/
│ │ ├── main.py
│ │ ├── models.py
│ │ ├── schemas.py
│ │ ├── database.py
│ │ └── crud.py
│ └── requirements.txt
├── frontend/
│  
│ ├── frontend/
│ │ ├── App.jsx
│ │ ├── components/
│ │ └── api/
│ └── package.json
└── README.md


---

## ⚙️ Setup Instructions

### 1. Backend (FastAPI)

#### Requirements:
- Python 3.8+
- (Optional) Virtual environment tool: `venv` or `virtualenv`

#### Install dependencies:

```bash
cd backend
python -m venv venv
source venv/bin/activate   # On Windows use: venv\Scripts\activate
pip install -r requirements.txt
Run the backend server:
uvicorn app.main:app --reload
The API will be available at: http://127.0.0.1:8000

You can access the interactive docs at: http://127.0.0.1:8000/docs

2. Frontend (React)
Requirements:
Node.js 16+

Install dependencies:
cd frontend
npm install
Run the frontend development server:

npm run dev
The app will be available at: http://localhost:5173 (if using Vite)

🧪 Example API Endpoints
GET /todos: List all to-do items

POST /todos: Create a new to-do item

PUT /todos/{id}: Update a to-do item

DELETE /todos/{id}: Delete a to-do item

🐳 Optional: Run with Docker
If you want to run both backend and frontend using Docker:
bash:
docker-compose up --build
Make sure to create a docker-compose.yml and Dockerfile for each service.

📌 Features
✅ Create, read, update and delete tasks

📝 Mark tasks as completed

⚡ Fast and modern async API using FastAPI

🎨 Responsive UI with React

# HOW TO RUN
Run the backend server: (on the backend dir: backend)
uvicorn app.main:app --reload

Run the front end: (on the frontend dir: frontend\frontend)
npm run dev

📄 License
This project is licensed under the MIT License.


