export default function AppStructurePage() {
  return (
    <div className="prose mx-auto p-4">
      <h1>app structure</h1>
      <p>learn how to structure your application to integrate with graphyn service effectively.</p>

      <h2>integration patterns</h2>
      <h3>backend integration</h3>
      <pre><code>{`your-backend/
├── src/
│   ├── graphyn/
│   │   ├── client.ts     # graphyn service client
│   │   ├── transform.ts  # data transformation logic
│   │   └── analytics.ts  # analytics integration
│   └── api/
│       └── routes.ts     # your api endpoints
└── config/
    └── graphyn.ts        # graphyn configuration`}</code></pre>

      <h3>frontend integration</h3>
      <pre><code>{`your-frontend/
├── src/
│   ├── components/
│   │   └── graphyn/
│   │       ├── widget.tsx    # graphyn widgets
│   │       └── realtime.tsx  # realtime updates
│   └── hooks/
│       └── useGraphyn.ts     # graphyn service hooks
└── config/
    └── graphyn.ts           # frontend configuration`}</code></pre>

      <h2>key components</h2>
      <h3>graphyn client</h3>
      <pre><code>{`import { GraphynClient } from '@graphyn/sdk';

const client = new GraphynClient({
  apiKey: process.env.GRAPHYN_API_KEY,
  endpoint: 'https://api.graphyn.com'
});`}</code></pre>

      <h3>data transformation</h3>
      <pre><code>{`// transform.ts
async function transformData(data) {
  const result = await client.transform({
    data,
    options: {
      format: 'json',
      validate: true
    }
  });
  return result;
}`}</code></pre>

      <h3>realtime updates</h3>
      <pre><code>{`// realtime.tsx
function RealtimeComponent() {
  useEffect(() => {
    const ws = new WebSocket('wss://api.graphyn.com/realtime');
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      // handle realtime update
    };
    return () => ws.close();
  }, []);
}`}</code></pre>

      <h2>configuration</h2>
      <pre><code>{`// config/graphyn.ts
export const graphynConfig = {
  apiKey: process.env.GRAPHYN_API_KEY,
  endpoint: process.env.GRAPHYN_ENDPOINT,
  options: {
    timeout: 5000,
    retries: 3
  }
};`}</code></pre>

      <h2>best practices</h2>
      <ul>
        <li>keep graphyn service configuration centralized</li>
        <li>implement proper error handling</li>
        <li>use typescript for better type safety</li>
        <li>follow our security guidelines</li>
      </ul>

      <h2>next steps</h2>
      <ul>
        <li>explore our <a href="/api/backend">backend api</a> for more endpoints</li>
        <li>check out <a href="/api/frontend">frontend integration</a> options</li>
        <li>join our developer community for support</li>
      </ul>
    </div>
  );
} 