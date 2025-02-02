export default function BackendAPIPage() {
  return (
    <div className="prose mx-auto p-4">
      <h1>backend api documentation</h1>
      <p>welcome to the backend api docs for graphyn service. this api empowers developers to integrate graphyn&apos;s powerful features into their apps for data transformation and real-time analytics.</p>
      <h2>overview</h2>
      <p>graphyn backend provides robust endpoints for processing, transforming, and analyzing data. integrate these endpoints to boost your app with advanced functionality.</p>
      <h2>authentication</h2>
      <p>all requests require a valid api key in the authorization header.</p>
      <pre><code>Authorization: Bearer YOUR_API_KEY</code></pre>
      <h2>endpoints</h2>
      <h3>transform endpoint</h3>
      <p><strong>POST</strong> /api/graphyn/transform</p>
      <ul>
        <li><strong>description:</strong> transform data into required formats.</li>
        <li><strong>request:</strong> json payload with data.</li>
        <li><strong>response:</strong> json object with transformed data.</li>
      </ul>
      <h3>analytics endpoint</h3>
      <p><strong>GET</strong> /api/graphyn/analytics</p>
      <ul>
        <li><strong>description:</strong> retrieve analytical insights.</li>
        <li><strong>parameters:</strong> query parameters (e.g., startDate, endDate).</li>
        <li><strong>response:</strong> json with analytics results.</li>
      </ul>
      <h2>error handling</h2>
      <pre><code>{`{ "error": "message", "code": 400 }`}</code></pre>
      <h2>integration example</h2>
      <pre><code>{`const axios = require('axios');
axios.get('https://api.graphyn.com/api/graphyn/analytics', {
  headers: { Authorization: 'Bearer YOUR_API_KEY' }
})
.then(response => console.log(response.data))
.catch(err => console.error(err));`}</code></pre>
      <h2>further reading</h2>
      <p>see the frontend api docs and architecture overview for additional integration details.</p>
    </div>
  );
} 