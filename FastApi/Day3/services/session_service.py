from fastapi import HTTPException, Request
from starlette import status

from models.session import Session
import uuid

sessions = {}

def create_session(user_id :int) -> Session:
    session = Session(session_toke=str(uuid.uuid4()), user_id=user_id)
    sessions[session.session_toke] = session

    return session

def get_current_session(request: Request) -> Session:
    session_token = request.cookies.get("session_token")
    if not session_token:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Not authenticated")

    session = sessions.get(session_token)
    if not session:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Session expired or invalid session")

    return session

def delete_session(session_token : str):
    sessions.pop(session_token)