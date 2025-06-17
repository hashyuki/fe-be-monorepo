from js import Response, Headers
import json

async def fetch(request, env, ctx):
    headers = Headers({
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "*"
    })
    
    if request.method == "OPTIONS":
        return Response.new("", {"headers": headers, "status": 200})
    
    url = request.url
    
    if "/api/health" in url:
        return Response.new(
            json.dumps({"status": "healthy", "service": "backend"}),
            {"headers": headers, "status": 200}
        )
    
    if "/" in url:
        return Response.new(
            json.dumps({"message": "Hello from Cloudflare Workers"}),
            {"headers": headers, "status": 200}
        )
    
    return Response.new(
        json.dumps({"error": "Not found"}),
        {"headers": headers, "status": 404}
    )