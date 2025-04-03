from starlette.requests import Request
from starlette.templating import Jinja2Templates
import fastapi

templates = Jinja2Templates('templates')
router = fastapi.APIRouter()

@router.get("/", include_in_schema=False)
async def index(request: Request):
    # Get all users
    users = [
        {"name": "Test0", "email": "Test@Test.com", "role": "Admin"}
    ]

    data = {'request': request, 'events': users}

    return templates.TemplateResponse("index.html", data)

@router.get('/favicon.ico', include_in_schema=False)
def favicon():
    return fastapi.responses.RedirectResponse(url='/static/img/favicon.ico')