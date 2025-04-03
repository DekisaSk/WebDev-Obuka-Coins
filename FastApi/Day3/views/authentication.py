import fastapi
from starlette.templating import Jinja2Templates
from starlette.requests import  Request

templates = Jinja2Templates('templates')
router = fastapi.APIRouter()

@router.get("/login")
async def login(request: Request):
    return templates.TemplateResponse("authentication/login.html", {'request' : request})

@router.get("/signup")
async def signup(request: Request):
    return templates.TemplateResponse("authentication/signup.html", {'request' : request})