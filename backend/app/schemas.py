from pydantic import BaseModel
from datetime import date 
from typing import Optional 


class TodoBase(BaseModel):
    title:str
    completed: bool = False
    due_date: Optional[date]
    priority: int = 1
    

class TodoCreate(TodoBase):
    pass

class TodoOut(TodoBase):
    id: int 
    
    class Config:
        orm_mode = True
    