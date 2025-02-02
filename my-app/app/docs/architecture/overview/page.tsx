export default function ArchitectureOverviewPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">architecture overview</h1>
      
      <div className="prose prose-gray max-w-none">
        <p className="text-lg mb-4">
          the graphyn ecosystem consists of three main components that work together to provide a complete graph-based data platform.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">core components</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">1. backend (coregraph)</h3>
        <ul className="space-y-2">
          <li><strong>fastify server</strong> - main application server</li>
          <li><strong>plugins</strong>
            <ul className="ml-6 mt-2 space-y-2">
              <li>auth.js - jwt authentication and session management</li>
              <li>redis.js - caching and rate limiting support</li>
              <li>supabase.js - graph storage with mock db support</li>
              <li>rateLimit.js - request throttling</li>
              <li>errorHandler.js - standardized error responses</li>
            </ul>
          </li>
          <li><strong>services</strong>
            <ul className="ml-6 mt-2 space-y-2">
              <li>graphEngine - node/edge management and querying</li>
              <li>paymentService - payment processing</li>
            </ul>
          </li>
          <li><strong>routes</strong>
            <ul className="ml-6 mt-2 space-y-2">
              <li>authRoutes - authentication endpoints</li>
              <li>graphRoutes - graph manipulation endpoints</li>
              <li>paymentRoutes - payment processing endpoints</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">2. client sdk (node)</h3>
        <ul className="space-y-2">
          <li><strong>auth</strong> - authentication and session management</li>
          <li><strong>graph</strong> - graph operations and queries</li>
          <li><strong>events</strong> - real-time event handling</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">3. web application (graphyn)</h3>
        <ul className="space-y-2">
          <li><strong>next.js app</strong> - server-side rendering and static pages</li>
          <li><strong>components</strong> - reusable ui components</li>
          <li><strong>api routes</strong> - next.js api endpoints</li>
          <li><strong>hooks</strong> - state management and data fetching</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">data flow</h2>
        <ol className="space-y-2">
          <li>1. web app makes requests through the client sdk</li>
          <li>2. sdk formats requests and handles authentication</li>
          <li>3. backend processes requests through appropriate routes</li>
          <li>4. services handle business logic and data operations</li>
          <li>5. plugins provide cross-cutting concerns</li>
          <li>6. responses flow back through the same path</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8 mb-4">key features</h2>
        <ul className="space-y-2">
          <li><strong>authentication</strong> - jwt-based auth with session management</li>
          <li><strong>caching</strong> - redis-based caching for performance</li>
          <li><strong>rate limiting</strong> - request throttling for api protection</li>
          <li><strong>real-time</strong> - websocket-based live updates</li>
          <li><strong>mock support</strong> - development with mock databases</li>
        </ul>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">next steps</h3>
          <ul className="space-y-2">
            <li>
              <a href="/docs/architecture/backend" className="text-blue-600 hover:underline">
                backend architecture
              </a>
              {" - "} detailed backend system design
            </li>
            <li>
              <a href="/docs/architecture/frontend" className="text-blue-600 hover:underline">
                frontend architecture
              </a>
              {" - "} web application structure
            </li>
            <li>
              <a href="/docs/architecture/app-structure" className="text-blue-600 hover:underline">
                app structure
              </a>
              {" - "} project organization
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
} 