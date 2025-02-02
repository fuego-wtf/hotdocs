export default function RealtimeGuidePage() {
  return (
    <div className="prose mx-auto p-4">
      <h1>realtime updates guide</h1>
      <p>learn how to implement realtime updates in your application using graphyn&apos;s websocket api.</p>

      <h2>overview</h2>
      <p>graphyn&apos;s realtime api provides:</p>
      <ul>
        <li>websocket connections for live updates</li>
        <li>event-based data streaming</li>
        <li>bidirectional communication</li>
        <li>automatic reconnection handling</li>
      </ul>

      <h2>basic setup</h2>
      <pre><code>{`import { GraphynClient } from '@graphyn/sdk';

const client = new GraphynClient({
  apiKey: process.env.GRAPHYN_API_KEY
});

// connect to realtime api
const ws = client.realtime.connect({
  events: ['data.update', 'system.status']
});`}</code></pre>

      <h2>event handling</h2>
      <pre><code>{`// handle specific events
ws.on('data.update', (data) => {
  console.log('received update:', data);
  // handle data update
});

ws.on('system.status', (status) => {
  console.log('system status:', status);
  // handle status update
});

// handle connection events
ws.on('connect', () => {
  console.log('connected to realtime api');
});

ws.on('disconnect', () => {
  console.log('disconnected from realtime api');
});`}</code></pre>

      <h2>react integration</h2>
      <pre><code>{`import { useEffect, useState } from 'react';

function RealtimeComponent() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('disconnected');

  useEffect(() => {
    const ws = client.realtime.connect();

    ws.on('data.update', (newData) => {
      setData(newData);
    });

    ws.on('connect', () => setStatus('connected'));
    ws.on('disconnect', () => setStatus('disconnected'));

    return () => ws.disconnect();
  }, []);

  return (
    <div>
      <p>status: {status}</p>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}`}</code></pre>

      <h2>advanced features</h2>
      <h3>custom event channels</h3>
      <pre><code>{`// subscribe to custom channels
ws.subscribe('myapp.updates', {
  filter: {
    type: 'important',
    priority: 'high'
  }
});

ws.on('myapp.updates', (data) => {
  // handle custom update
});`}</code></pre>

      <h3>reconnection handling</h3>
      <pre><code>{`const ws = client.realtime.connect({
  autoReconnect: true,
  reconnectAttempts: 5,
  reconnectInterval: 1000
});

ws.on('reconnecting', (attempt) => {
  console.log(\`reconnection attempt \${attempt}\`);
});`}</code></pre>

      <h2>best practices</h2>
      <ul>
        <li>implement proper error handling</li>
        <li>handle reconnection scenarios</li>
        <li>clean up connections when components unmount</li>
        <li>use appropriate event filters</li>
      </ul>

      <h2>next steps</h2>
      <ul>
        <li>explore <a href="/api/frontend">frontend api</a> documentation</li>
        <li>learn about <a href="/guides/transform">data transformation</a></li>
        <li>check out <a href="/guides/widgets">widget integration</a></li>
      </ul>
    </div>
  );
} 