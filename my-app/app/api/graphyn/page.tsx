export default function GraphynAPIPage() {
  return (
    <div className="prose mx-auto p-4">
      <h1>graphyn service api</h1>
      <p>comprehensive documentation for the core graphyn service api.</p>

      <h2>overview</h2>
      <p>the graphyn service api provides:</p>
      <ul>
        <li>data transformation endpoints</li>
        <li>analytics and insights</li>
        <li>realtime data streaming</li>
        <li>widget configuration</li>
      </ul>

      <h2>authentication</h2>
      <pre><code>{`// api key authentication
Authorization: Bearer YOUR_API_KEY

// example request
curl -X POST https://api.graphyn.com/transform \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"data": {...}}'`}</code></pre>

      <h2>core endpoints</h2>
      
      <h3>data transformation</h3>
      <pre><code>{`POST /transform
Content-Type: application/json

{
  "data": {
    // your data object
  },
  "options": {
    "format": "json",
    "validate": true,
    "clean": true
  }
}`}</code></pre>

      <h3>analytics</h3>
      <pre><code>{`GET /analytics
Query Parameters:
- startDate: ISO date string
- endDate: ISO date string
- metrics: array of metric names
- dimensions: array of dimensions`}</code></pre>

      <h3>realtime streaming</h3>
      <pre><code>{`WebSocket: wss://api.graphyn.com/realtime
Query Parameters:
- token: your api key
- events: comma-separated list of events`}</code></pre>

      <h2>response formats</h2>
      <h3>success response</h3>
      <pre><code>{`{
  "status": "success",
  "data": {
    // response data
  },
  "metadata": {
    "timestamp": "2024-02-02T12:00:00Z",
    "requestId": "req_123"
  }
}`}</code></pre>

      <h3>error response</h3>
      <pre><code>{`{
  "status": "error",
  "error": {
    "code": "invalid_request",
    "message": "detailed error message",
    "details": {
      // additional error details
    }
  }
}`}</code></pre>

      <h2>rate limits</h2>
      <ul>
        <li>1000 requests per minute per api key</li>
        <li>10,000 requests per hour per api key</li>
        <li>100 concurrent websocket connections</li>
      </ul>

      <h2>best practices</h2>
      <ul>
        <li>implement proper error handling</li>
        <li>use appropriate request timeouts</li>
        <li>monitor rate limits</li>
        <li>implement retry logic with exponential backoff</li>
      </ul>

      <h2>next steps</h2>
      <ul>
        <li>explore <a href="/api/backend">backend integration</a></li>
        <li>check out <a href="/api/frontend">frontend features</a></li>
        <li>read our <a href="/guides/transform">transformation guide</a></li>
      </ul>
    </div>
  );
} 