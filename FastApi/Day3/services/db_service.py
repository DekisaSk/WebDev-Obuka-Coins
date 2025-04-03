from typing import Annotated

from fastapi import HTTPException, Form

from models.permission import Permission
from models.role import Role
from models.user import User
from services.authentication_service import hash_password

#DB MOCKUP
permissions = [
        Permission(name="Read", granted=True),
        Permission(name="Write", granted=True),
        Permission(name="Delete", granted=True),
        Permission(name="EditAll", granted=True)
    ]
admin_role = Role(name="Standard", permissions=permissions)
admin_user = User(username="admin", password="admin", role=admin_role)

users = {
}
#

def get_existing_user(username : Annotated[str, Form()]):
    return _get_user_by_username(username)

def _get_user_by_username( username: str):
    if len(users) > 0:
        return users[username]
    return None

def get_user_by_id( user_id: int):
    for user in users.values():
        if user.id == user_id:
            return user

    return None

def create_standard_user(username : Annotated[str, Form()], password: Annotated[str, Form()]) -> User:
    existing_user = _get_user_by_username(username)
    if existing_user is not None:
        raise HTTPException(status_code=409, detail="Username already registered")


    hashed_password = hash_password(password)

    basic_permissions = [
        Permission(name="Read", granted=True),
        Permission(name="EditSelf", granted=True)
    ]
    standard_role = Role(name="Standard", permissions=basic_permissions)
    new_user = User(username=username, password=hashed_password, role=standard_role)

    users[new_user.username] = new_user

    return new_user