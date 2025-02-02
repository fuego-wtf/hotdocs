export default function AppStructurePage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">app structure</h1>
      
      <div className="prose prose-gray max-w-none">
        <p className="text-lg mb-4">
          the graphyn ecosystem is organized into multiple repositories, each with its own specific responsibility and structure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">repository overview</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">coregraph (backend)</h3>
        <pre className="bg-gray-100 p-4 rounded-lg">
          <code>
{`coregraph/
├── src/
│   ├── plugins/         # fastify plugins
│   ├── services/        # business logic
│   ├── routes/          # api endpoints
│   ├── types/          # typescript types
│   └── utils/          # helper functions
├── test/               # test files
├── docs/               # documentation
└── config/             # configuration`}
          </code>
        </pre>

        <h3 className="text-xl font-semibold mt-6 mb-3">node (sdk)</h3>
        <pre className="bg-gray-100 p-4 rounded-lg">
          <code>
{`node/
├── src/
│   ├── auth/           # authentication
│   ├── graph/          # graph operations
│   ├── events/         # event handling
│   └── types/          # typescript types
├── test/               # test files
├── docs/               # documentation
└── examples/           # usage examples`}
          </code>
        </pre>

        <h3 className="text-xl font-semibold mt-6 mb-3">graphyn (frontend)</h3>
        <pre className="bg-gray-100 p-4 rounded-lg">
          <code>
{`graphyn/
├── app/                # next.js app
├── components/         # react components
├── hooks/              # custom hooks
├── lib/                # utilities
├── styles/            # global styles
├── public/            # static assets
└── docs/              # documentation`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold mt-8 mb-4">key files</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">configuration files</h3>
        <ul className="space-y-2">
          <li><strong>package.json</strong> - dependencies and scripts</li>
          <li><strong>tsconfig.json</strong> - typescript configuration</li>
          <li><strong>.env.example</strong> - environment variables template</li>
          <li><strong>docker-compose.yml</strong> - container configuration</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">documentation files</h3>
        <ul className="space-y-2">
          <li><strong>README.md</strong> - project overview</li>
          <li><strong>CONTRIBUTING.md</strong> - contribution guidelines</li>
          <li><strong>CHANGELOG.md</strong> - version history</li>
          <li><strong>LICENSE</strong> - license information</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">development workflow</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">local development</h3>
        <ul className="space-y-2">
          <li>clone all repositories</li>
          <li>install dependencies</li>
          <li>configure environment variables</li>
          <li>start development servers</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">testing</h3>
        <ul className="space-y-2">
          <li>unit tests in each repository</li>
          <li>integration tests for api</li>
          <li>end-to-end tests for frontend</li>
          <li>continuous integration pipeline</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">deployment</h3>
        <ul className="space-y-2">
          <li>containerized services</li>
          <li>cloud infrastructure</li>
          <li>automated deployments</li>
          <li>monitoring and logging</li>
        </ul>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">next steps</h3>
          <ul className="space-y-2">
            <li>
              <a href="/docs/development/backend" className="text-blue-600 hover:underline">
                backend development
              </a>
              {" - "} backend development guide
            </li>
            <li>
              <a href="/docs/development/frontend" className="text-blue-600 hover:underline">
                frontend development
              </a>
              {" - "} frontend development guide
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
} 