from redis import Redis

redis_client = Redis.StrictRedis(host='localhost', port=6379, db=0, decode_responses=True)

def store_session_in_redis(session_token: str, user_id: int):
    redis_client.setex(session_token, 3600, user_id)  # Set session with TTL of 1 hour

def get_user_from_session(session_token: str):
    user_id = redis_client.get(session_token)
    return user_id