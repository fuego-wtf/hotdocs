export default function GettingStartedPage() {
  return (
    <div className="prose mx-auto p-4">
      <h1>getting started with graphyn</h1>
      <p>welcome to graphyn! this guide will help you get started with integrating graphyn service into your application.</p>

      <h2>prerequisites</h2>
      <ul>
        <li>node.js 18 or higher</li>
        <li>npm or yarn package manager</li>
        <li>graphyn service api key</li>
      </ul>

      <h2>installation</h2>
      <h3>using npm</h3>
      <pre><code>{`npm install @graphyn/sdk`}</code></pre>
      <h3>using yarn</h3>
      <pre><code>{`yarn add @graphyn/sdk`}</code></pre>

      <h2>quick start</h2>
      <h3>1. initialize client</h3>
      <pre><code>{`import { GraphynClient } from '@graphyn/sdk';

const client = new GraphynClient({
  apiKey: process.env.GRAPHYN_API_KEY
});`}</code></pre>

      <h3>2. transform data</h3>
      <pre><code>{`// example: transform json data
const result = await client.transform({
  data: yourData,
  options: {
    format: 'json'
  }
});`}</code></pre>

      <h3>3. get analytics</h3>
      <pre><code>{`// example: get analytics insights
const insights = await client.analytics.get({
  startDate: '2024-01-01',
  endDate: '2024-02-01'
});`}</code></pre>

      <h2>integration examples</h2>
      <h3>backend integration</h3>
      <pre><code>{`// example express endpoint
app.post('/transform', async (req, res) => {
  try {
    const result = await client.transform({
      data: req.body,
      options: req.query
    });
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});`}</code></pre>

      <h3>frontend integration</h3>
      <pre><code>{`// react component example
function GraphynWidget() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('wss://api.graphyn.com/realtime');
    ws.onmessage = (event) => {
      setData(JSON.parse(event.data));
    };
    return () => ws.close();
  }, []);

  return <div>{/* render your data */}</div>;
}`}</code></pre>

      <h2>next steps</h2>
      <ul>
        <li>explore our <a href="/api/backend">backend api documentation</a></li>
        <li>check out <a href="/api/frontend">frontend integration options</a></li>
        <li>learn about our <a href="/architecture/overview">architecture</a></li>
      </ul>

      <h2>need help?</h2>
      <p>join our developer community for support and discussions about integrating graphyn service.</p>
    </div>
  )
} 