from sqlalchemy import Boolean, Column, Integer, String, Date

from .database import Base


class Todo(Base):
    __tablename__ = "todos"
    
    id = Column(Integer, primary_key=True, index=True) 
    title = Column(String, index=True)
    completed = Column(Boolean, default=False)
    due_date = Column(Date, nullable=True)
    priority = Column(Integer, default=1)
     