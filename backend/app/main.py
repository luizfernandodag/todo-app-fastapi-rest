from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from . import crud, models, schemas
from .database import Base, SessionLocal, engine

Base.metadata.create_all(bind=engine)

app = FastAPI()

# CORS for React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/todos", response_model=list[schemas.TodoOut])
def read_todos(db: Session = Depends(get_db)):
    return crud.get_todos(db)

@app.post("/todos", response_model=schemas.TodoOut)
def create(todo: schemas.TodoCreate, db: Session = Depends(get_db)):
    return crud.create_todo(db, todo)

@app.put("/todos/{todo_id}", response_model=schemas.TodoOut)
def update(todo_id: int, todo: schemas.TodoCreate, db: Session = Depends(get_db)):
    return crud.update_todo(db, todo_id, todo)

@app.delete("/todos/{todo_id}")
def delete(todo_id: int, db: Session = Depends(get_db)):
    return crud.delete_todo(db, todo_id)
