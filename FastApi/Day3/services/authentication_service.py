from fastapi import HTTPException, Request
from starlette import status
from passlib.context import CryptContext
from models.user import User

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def hash_password(password: str):
    return pwd_context.hash(password)

def validate_user_data(user: User, password : str):
    if not user:
        raise HTTPException(status_code=400, detail="Incorrect username")
    if not verify_password(password, user.password):
        raise HTTPException(status_code=400, detail="Incorrect password")