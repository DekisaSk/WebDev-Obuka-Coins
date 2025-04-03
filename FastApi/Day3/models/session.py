from pydantic import BaseModel

class Session(BaseModel):
    session_toke : str = None
    user_id : int
