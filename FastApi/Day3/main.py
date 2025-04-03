import fastapi

from apis import authentication_api
from views import home, authentication
import uvicorn

api = fastapi.FastAPI()

def configure():
    api.include_router(home.router)
    api.include_router(authentication.router)
    api.include_router(authentication_api.router)

if __name__ == "main":
    configure()
    uvicorn.run(api, port=8000, host='127.0.0.1')
else:
    configure()