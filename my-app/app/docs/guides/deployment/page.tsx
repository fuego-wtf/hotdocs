import { CodeBlock } from "@/components/code-block"

export default function DeploymentGuidePage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">deployment</h1>
      
      <div className="prose prose-gray max-w-none">
        <p className="text-lg mb-4">
          learn how to deploy your documentation site to various platforms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">vercel</h2>
        <p className="mb-4">
          deploy to vercel with zero configuration:
        </p>
        <CodeBlock
          code={`# install vercel cli
npm install -g vercel

# deploy to vercel
vercel`}
          language="bash"
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">netlify</h2>
        <p className="mb-4">
          deploy to netlify using the netlify cli:
        </p>
        <CodeBlock
          code={`# install netlify cli
npm install -g netlify-cli

# deploy to netlify
netlify deploy`}
          language="bash"
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">github pages</h2>
        <p className="mb-4">
          deploy to github pages using github actions:
        </p>
        <CodeBlock
          code={`# .github/workflows/deploy.yml
name: deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out`}
          language="yaml"
          filename=".github/workflows/deploy.yml"
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">docker</h2>
        <p className="mb-4">
          deploy using docker:
        </p>
        <CodeBlock
          code={`# Dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
RUN npm ci --production
EXPOSE 3000
CMD ["npm", "start"]`}
          language="dockerfile"
          filename="Dockerfile"
        />

        <p className="mt-4 mb-4">
          build and run the docker container:
        </p>
        <CodeBlock
          code={`# build the image
docker build -t hotdocs .

# run the container
docker run -p 3000:3000 hotdocs`}
          language="bash"
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">environment variables</h2>
        <p className="mb-4">
          configure environment variables for production:
        </p>
        <CodeBlock
          code={`# .env.production
NEXT_PUBLIC_SITE_URL=https://docs.example.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ALGOLIA_APP_ID=XXXXXXXXXX
NEXT_PUBLIC_ALGOLIA_SEARCH_KEY=XXXXXXXXXX`}
          language="bash"
          filename=".env.production"
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">monitoring</h2>
        <p className="mb-4">
          add monitoring and analytics:
        </p>
        <CodeBlock
          code={`// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}`}
          language="typescript"
          filename="app/layout.tsx"
        />

        <div className="mt-8 p-4 bg-blue-50 rounded-lg dark:bg-blue-950">
          <h3 className="text-xl font-semibold mb-2">next steps</h3>
          <ul className="space-y-2">
            <li>
              <a href="/docs/guides/customization" className="text-blue-600 hover:underline dark:text-blue-400">
                customization
              </a>
              {" - "} customize your documentation site
            </li>
            <li>
              <a href="/docs/guides/components" className="text-blue-600 hover:underline dark:text-blue-400">
                components
              </a>
              {" - "} learn about interactive components
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
} 