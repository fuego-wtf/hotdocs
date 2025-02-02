export default function BackendArchitecturePage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">backend architecture</h1>
      
      <div className="prose prose-gray max-w-none">
        <p className="text-lg mb-4">
          the backend system (coregraph) is built with fastify and follows a modular architecture with plugins, services, and routes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">core plugins</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">auth plugin</h3>
        <ul className="space-y-2">
          <li>jwt token generation and validation</li>
          <li>session management with redis</li>
          <li>role-based access control</li>
          <li>refresh token rotation</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">redis plugin</h3>
        <ul className="space-y-2">
          <li>connection management</li>
          <li>caching strategies</li>
          <li>rate limit storage</li>
          <li>session storage</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">supabase plugin</h3>
        <ul className="space-y-2">
          <li>graph data storage</li>
          <li>mock database support</li>
          <li>query optimization</li>
          <li>connection pooling</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">rate limit plugin</h3>
        <ul className="space-y-2">
          <li>request throttling</li>
          <li>sliding window algorithm</li>
          <li>custom limits per route</li>
          <li>redis-based storage</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">error handler plugin</h3>
        <ul className="space-y-2">
          <li>standardized error responses</li>
          <li>error logging</li>
          <li>custom error types</li>
          <li>development mode details</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">services</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">graph engine service</h3>
        <ul className="space-y-2">
          <li><strong>node management</strong>
            <ul className="ml-6 mt-2 space-y-2">
              <li>create/read/update/delete nodes</li>
              <li>node property validation</li>
              <li>node type management</li>
            </ul>
          </li>
          <li><strong>edge management</strong>
            <ul className="ml-6 mt-2 space-y-2">
              <li>create/read/update/delete edges</li>
              <li>edge property validation</li>
              <li>edge type management</li>
            </ul>
          </li>
          <li><strong>query engine</strong>
            <ul className="ml-6 mt-2 space-y-2">
              <li>path finding algorithms</li>
              <li>graph traversal</li>
              <li>query optimization</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">payment service</h3>
        <ul className="space-y-2">
          <li>payment intent creation</li>
          <li>webhook processing</li>
          <li>subscription management</li>
          <li>usage tracking</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">api routes</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">auth routes</h3>
        <ul className="space-y-2">
          <li>POST /login - user authentication</li>
          <li>GET /session - session validation</li>
          <li>POST /refresh - token refresh</li>
          <li>POST /logout - session termination</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">graph routes</h3>
        <ul className="space-y-2">
          <li>POST /nodes - create node</li>
          <li>GET /nodes - query nodes</li>
          <li>POST /edges - create edge</li>
          <li>GET /edges - query edges</li>
          <li>PUT /nodes/:id - update node</li>
          <li>PUT /edges/:id - update edge</li>
          <li>DELETE /nodes/:id - delete node</li>
          <li>DELETE /edges/:id - delete edge</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">payment routes</h3>
        <ul className="space-y-2">
          <li>POST /payment/create - create payment intent</li>
          <li>POST /payment/webhook - process payment webhook</li>
          <li>GET /payment/usage - get usage metrics</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">development</h2>
        <ul className="space-y-2">
          <li><strong>testing</strong> - comprehensive test suite with tap</li>
          <li><strong>mocking</strong> - database and service mocks</li>
          <li><strong>logging</strong> - structured logging with pino</li>
          <li><strong>documentation</strong> - openapi specification</li>
        </ul>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">related documentation</h3>
          <ul className="space-y-2">
            <li>
              <a href="/docs/api/backend" className="text-blue-600 hover:underline">
                api documentation
              </a>
              {" - "} detailed api reference
            </li>
            <li>
              <a href="/docs/development/backend" className="text-blue-600 hover:underline">
                development guide
              </a>
              {" - "} development workflow
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
} 