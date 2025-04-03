from pydantic import BaseModel

class Permission(BaseModel):
   name: str
   granted: bool = False

