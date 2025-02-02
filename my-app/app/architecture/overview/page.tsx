export default function ArchitectureOverviewPage() {
  return (
    <div className="prose mx-auto p-4">
      <h1>architecture overview</h1>
      <p>welcome to the architecture overview for graphyn service. this documentation helps developers understand how graphyn&apos;s components work together to power your applications.</p>

      <h2>system components</h2>
      <h3>core services</h3>
      <ul>
        <li><strong>graphyn service</strong>: the main engine that processes and transforms your data</li>
        <li><strong>coregraph</strong>: handles graph database operations and relationships</li>
        <li><strong>node sdk</strong>: provides easy integration with your node.js applications</li>
      </ul>

      <h3>api layer</h3>
      <ul>
        <li><strong>backend api</strong>: restful endpoints for data transformation and analytics</li>
        <li><strong>frontend api</strong>: realtime updates and widget configuration</li>
        <li><strong>websocket api</strong>: streaming updates and live data</li>
      </ul>

      <h2>data flow</h2>
      <pre><code>{`client app -> graphyn api -> coregraph -> data transformation -> client app`}</code></pre>

      <h2>integration points</h2>
      <h3>for backend developers</h3>
      <ul>
        <li>use our node sdk for seamless integration</li>
        <li>connect directly to our rest apis</li>
        <li>implement websocket listeners for realtime updates</li>
      </ul>

      <h3>for frontend developers</h3>
      <ul>
        <li>use our frontend api for widget integration</li>
        <li>implement realtime updates using websockets</li>
        <li>configure data visualization components</li>
      </ul>

      <h2>security</h2>
      <ul>
        <li>api key authentication for all requests</li>
        <li>rate limiting to prevent abuse</li>
        <li>encrypted data transmission</li>
      </ul>

      <h2>scalability</h2>
      <p>graphyn service is built to scale with your needs:</p>
      <ul>
        <li>containerized deployment</li>
        <li>horizontal scaling support</li>
        <li>distributed data processing</li>
      </ul>

      <h2>next steps</h2>
      <ul>
        <li>check out our <a href="/api/backend">backend api documentation</a></li>
        <li>explore the <a href="/api/frontend">frontend integration guide</a></li>
        <li>learn about <a href="/architecture/app-structure">detailed app structure</a></li>
      </ul>
    </div>
  );
} 