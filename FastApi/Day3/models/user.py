import uuid

from pydantic import BaseModel
from models.role import Role

class User (BaseModel):
    id : int = int(uuid.uuid4())
    username: str
    password: str
    role : Role
