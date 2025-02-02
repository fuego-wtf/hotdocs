export default function TransformGuidePage() {
  return (
    <div className="prose mx-auto p-4">
      <h1>data transformation guide</h1>
      <p>learn how to use graphyn&apos;s data transformation capabilities to process and enhance your data.</p>

      <h2>overview</h2>
      <p>graphyn&apos;s transform api allows you to:</p>
      <ul>
        <li>convert data between different formats</li>
        <li>clean and validate data</li>
        <li>enrich data with additional insights</li>
        <li>prepare data for analytics</li>
      </ul>

      <h2>basic transformation</h2>
      <pre><code>{`import { GraphynClient } from '@graphyn/sdk';

const client = new GraphynClient({
  apiKey: process.env.GRAPHYN_API_KEY
});

// basic transformation
const result = await client.transform({
  data: {
    users: [
      { name: "john", age: 30 },
      { name: "jane", age: 25 }
    ]
  },
  options: {
    format: "json",
    validate: true
  }
});`}</code></pre>

      <h2>advanced transformations</h2>
      <h3>data cleaning</h3>
      <pre><code>{`// clean and standardize data
const cleanedData = await client.transform({
  data: rawData,
  options: {
    clean: true,
    standardize: true,
    removeNulls: true
  }
});`}</code></pre>

      <h3>data enrichment</h3>
      <pre><code>{`// enrich data with additional information
const enrichedData = await client.transform({
  data: userData,
  options: {
    enrich: true,
    enrichmentFields: ["location", "timezone", "preferences"]
  }
});`}</code></pre>

      <h2>batch processing</h2>
      <pre><code>{`// process multiple records
const batchResult = await client.transform.batch({
  data: largeDataset,
  options: {
    batchSize: 1000,
    parallel: true,
    format: "json"
  }
});`}</code></pre>

      <h2>error handling</h2>
      <pre><code>{`try {
  const result = await client.transform({
    data: inputData,
    options: {
      validate: true,
      throwOnError: true
    }
  });
} catch (error) {
  console.error('transformation failed:', error.message);
  // handle error appropriately
}`}</code></pre>

      <h2>best practices</h2>
      <ul>
        <li>always validate your input data</li>
        <li>use batch processing for large datasets</li>
        <li>implement proper error handling</li>
        <li>monitor transformation performance</li>
      </ul>

      <h2>next steps</h2>
      <ul>
        <li>explore <a href="/api/backend">backend api</a> for more endpoints</li>
        <li>learn about <a href="/guides/realtime">realtime updates</a></li>
        <li>check out <a href="/guides/widgets">widget integration</a></li>
      </ul>
    </div>
  );
} 