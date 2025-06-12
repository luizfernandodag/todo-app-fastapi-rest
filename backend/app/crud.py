from sqlalchemy.orm import Session
from . import models, schemas 

def get_todos(db:Session):
    return db.query(models.Todo).order_by(models.Todo.due_date, models.Todo.priority.desc()).all()


def create_todo(db:Session, todo: schemas.TodoCreate):
    db_todo = models.Todo(**todo.dict())
    db.add(db_todo)
    db.commit()
    db.refresh(db_todo)
    return db_todo
def update_todo(db:Session, todo_id:int, todo: schemas.TodoCreate):
    db_todo = db.query(models.Todo).get(todo_id)
    
    if db_todo:
        db_todo.title = todo.title
        db_todo.completed = todo.completed
        db.commit()
        db.refresh(db_todo)
    return db_todo
def delete_todo(db:Session, todo_id:int):
    db_todo = db.query(models.Todo).get(todo_id)
    if db_todo:
        db.delete(db_todo)
        db.commit()
    return db_todo
