from typing import Annotated
from fastapi import HTTPException, Response, Depends, Request, APIRouter, Form
from starlette import status
from models.session import Session
from models.user import User
from services.authentication_service import validate_user_data
from services.db_service import create_standard_user, get_user_by_id, get_existing_user
from services.session_service import create_session, get_current_session, delete_session

router = APIRouter()

@router.post("/signup")
async def signup_post(user: User = Depends(create_standard_user)):

    session = create_session(user.id)
    response = Response(content="Registration successful")
    response.set_cookie(key="session_token", value=session.session_toke, httponly=True)

    return response

@router.post("/login")
async def login_post(password: Annotated[str, Form()], response: Response, user : User = Depends(get_existing_user)):

    validate_user_data(user, password)
    session = create_session(user.id)

    response.set_cookie(key="session_token", value=session.session_toke, httponly=True)

    return {"message": "Login successful"}

def get_current_user(session : Session = Depends(get_current_session)) -> User:
    user = get_user_by_id(session.user_id)
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="User not found")

    return user

def role_required(required_role: str):
    def role_dependency(current_user: User = Depends(get_current_user)):
        if current_user.role != required_role:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail=f"You do not have the required role: {required_role}",
            )
        return current_user

    return role_dependency

@router.get("/users/me")
async def get_current_user_data(current_user: User = Depends(get_current_user)):
    return current_user

@router.get("/admin")
async def get_admin_data(admin_user: User = Depends(role_required("admin"))):
    return admin_user

@router.get("/logout")
async def logout(response: Response, request: Request):
    session_token = request.cookies.get("session_token")
    delete_session(session_token)
    response.delete_cookie("session_token")

    return {"message": "Logged out successfully"}