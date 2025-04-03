from pydantic import BaseModel
from models.permission import Permission

class Role(BaseModel):
    name: str
    permissions : list[Permission]