import Link from "next/link"

export default function HomePage() {
  return (
    <div className="prose mx-auto p-4">
      <h1>welcome to graphyn docs</h1>
      <p>
        graphyn is a powerful service that helps developers transform, analyze, and visualize data in real-time. 
        this documentation will guide you through integrating graphyn into your applications.
      </p>

      <h2>why graphyn?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold">powerful data transformation</h3>
          <p>transform and enrich your data with our advanced processing engine</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold">realtime updates</h3>
          <p>keep your app in sync with live data streams and websocket connections</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold">interactive widgets</h3>
          <p>beautiful, customizable components for data visualization</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold">developer-first</h3>
          <p>comprehensive apis and sdks designed for developers</p>
        </div>
      </div>

      <h2>quick start</h2>
      <p>get started with graphyn in minutes:</p>
      <pre><code>{`# install graphyn sdk
npm install @graphyn/sdk

# initialize client
import { GraphynClient } from '@graphyn/sdk';

const client = new GraphynClient({
  apiKey: process.env.GRAPHYN_API_KEY
});`}</code></pre>

      <h2>explore our docs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <a href="/getting-started" className="block p-4 border rounded-lg hover:border-blue-500">
          <h3 className="text-lg font-semibold">getting started</h3>
          <p>quick start guide and basic concepts</p>
        </a>
        <a href="/api/backend" className="block p-4 border rounded-lg hover:border-blue-500">
          <h3 className="text-lg font-semibold">api reference</h3>
          <p>detailed api documentation</p>
        </a>
        <a href="/guides/transform" className="block p-4 border rounded-lg hover:border-blue-500">
          <h3 className="text-lg font-semibold">guides</h3>
          <p>in-depth tutorials and examples</p>
        </a>
      </div>

      <h2>popular guides</h2>
      <ul>
        <li><a href="/guides/transform">data transformation guide</a></li>
        <li><a href="/guides/realtime">realtime updates guide</a></li>
        <li><a href="/guides/widgets">widget integration guide</a></li>
      </ul>

      <h2>api reference</h2>
      <ul>
        <li><a href="/api/backend">backend api documentation</a></li>
        <li><a href="/api/frontend">frontend api documentation</a></li>
        <li><a href="/api/graphyn">graphyn service api</a></li>
      </ul>

      <div className="mt-8 p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
        <h2>join our community</h2>
        <p>
          get help, share your experience, and connect with other developers using graphyn.
          join our community to stay updated with the latest features and best practices.
        </p>
      </div>
    </div>
  )
}

