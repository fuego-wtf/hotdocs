export default function FrontendAPIPage() {
  return (
    <div className="prose mx-auto p-4">
      <h1>frontend api documentation</h1>
      <p>welcome to the frontend api docs for graphyn service. this api provides endpoints and guidelines for integrating realtime updates and enhancing user experiences in your web apps.</p>
      <h2>overview</h2>
      <p>the frontend api enables realtime integration, event streaming, and dynamic widget configuration to update your app seamlessly.</p>
      <h2>authentication</h2>
      <p>all endpoints require a valid api key in the authorization header.</p>
      <pre><code>Authorization: Bearer YOUR_API_KEY</code></pre>
      <h2>endpoints</h2>
      <h3>realtime updates endpoint</h3>
      <p><strong>GET</strong> /api/graphyn/realtime</p>
      <ul>
        <li><strong>description:</strong> connects to a realtime stream of events.</li>
        <li><strong>parameters:</strong> optional query parameters for filtering events.</li>
        <li><strong>response:</strong> json stream of events.</li>
      </ul>
      <h3>widget configuration endpoint</h3>
      <p><strong>POST</strong> /api/graphyn/widget</p>
      <ul>
        <li><strong>description:</strong> configures frontend widgets with dynamic data.</li>
        <li><strong>request:</strong> json payload with widget settings.</li>
        <li><strong>response:</strong> confirmation message and configuration id.</li>
      </ul>
      <h2>error handling</h2>
      <pre><code>{`{ "error": "message", "code": 400 }`}</code></pre>
      <h2>integration example</h2>
      <pre><code>{`fetch('https://api.graphyn.com/api/graphyn/realtime', {
  headers: { Authorization: 'Bearer YOUR_API_KEY' }
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));`}</code></pre>
      <h2>further reading</h2>
      <p>refer to the backend api docs and architecture overview for more details.</p>
    </div>
  );
} 