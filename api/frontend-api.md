# frontend api documentation

welcome to the frontend api docs for graphyn service. this api provides endpoints and guidelines for integrating graphyn service into your web apps for realtime updates and seamless user experiences.

## overview

graphyn frontend api empowers developers with realtime integration, event streaming, and customizable hooks to instantly update their apps.

## authentication

all endpoints require a valid api key passed in the authorization header.

example:

```
Authorization: Bearer YOUR_API_KEY
```

## endpoints

### realtime updates endpoint
**GET** `/api/graphyn/realtime`
- description: connects to a realtime stream of events.
- parameters: optional query parameters for filtering events.
- response: json stream of events.

### widget configuration endpoint
**POST** `/api/graphyn/widget`
- description: configure frontend widgets with dynamic data.
- request: json payload with widget settings.
- response: confirmation message and configuration id.

## integration example

using javascript:

```javascript
fetch('https://api.graphyn.com/api/graphyn/realtime', {
  headers: { Authorization: 'Bearer YOUR_API_KEY' }
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));
```

## error handling

errors are returned in json format:

```
{ "error": "message", "code": 400 }
```

## further reading

see the backend api docs and architecture overview for more details.

## Endpoints

### Agents

#### List Agents
```http
GET /api/agents
```

#### Create Agent
```http
POST /api/agents
Content-Type: application/json

{
	"name": "string",
	"systemPrompt": "string",
	"context": "string",
	"settings": {
		"temperature": number,
		"maxTokens": number,
		"topP": number
	}
}
```

#### Get Agent
```http
GET /api/agents/:id
```

#### Update Agent
```http
PUT /api/agents/:id
Content-Type: application/json

{
	"name": "string",
	"systemPrompt": "string",
	"context": "string",
	"settings": {
		"temperature": number,
		"maxTokens": number,
		"topP": number
	}
}
```

#### Delete Agent
```http
DELETE /api/agents/:id
```

### Memories

#### Create Memory
```http
POST /api/memories
Content-Type: application/json

{
	"agentId": "string",
	"content": "string",
	"type": "string",
	"metadata": {
		"source": "string"
	}
}
```

#### List Memories
```http
GET /api/memories?agentId=:agentId
```

#### Get Memory
```http
GET /api/memories/:id
```

### Events

#### Submit Event
```http
POST /api/events
Content-Type: application/json

{
	"type": "string",
	"data": object,
	"metadata": object
}
```

#### List Events
```http
GET /api/events?type=:type
```

## Error Responses

All error responses follow this format:
```json
{
	"error": {
		"code": "string",
		"message": "string",
		"details": object
	}
}
```

Common error codes:
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `429`: Too Many Requests
- `500`: Internal Server Error

## Rate Limiting

API requests are limited to:
- 100 requests per minute per IP
- 1000 requests per hour per user

## Websocket Events

Connect to websocket at `/api/ws` for real-time updates:

```javascript
const ws = new WebSocket('ws://api.graphyn.com/ws')

ws.onmessage = (event) => {
	const data = JSON.parse(event.data)
	// Handle different event types
	switch(data.type) {
		case 'agent:update':
			// Handle agent update
			break
		case 'memory:create':
			// Handle new memory
			break
	}
}
```