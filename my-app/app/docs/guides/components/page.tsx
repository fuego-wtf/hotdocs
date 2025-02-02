import { CodeBlock } from "@/components/code-block"

export default function ComponentsGuidePage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">interactive components</h1>
      
      <div className="prose prose-gray max-w-none">
        <p className="text-lg mb-4">
          learn how to use interactive components to enhance your documentation.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">code blocks</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">basic usage</h3>
        <p className="mb-4">
          use the code block component to display syntax-highlighted code with copy button:
        </p>
        <CodeBlock
          code={`import { CodeBlock } from "@/components/code-block"

export default function MyPage() {
  return (
    <CodeBlock
      code="console.log('hello world')"
      language="typescript"
    />
  )
}`}
          language="typescript"
        />

        <h3 className="text-xl font-semibold mt-6 mb-3">with filename</h3>
        <p className="mb-4">
          add a filename to show where the code belongs:
        </p>
        <CodeBlock
          code={`<CodeBlock
  code="console.log('hello world')"
  language="typescript"
  filename="src/app.ts"
/>`}
          language="typescript"
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">tabs</h2>
        <p className="mb-4">
          use tabs to organize related content:
        </p>
        <CodeBlock
          code={`import { Tabs, TabItem } from "@/components/tabs"

export default function MyPage() {
  return (
    <Tabs>
      <TabItem label="npm">
        npm install my-package
      </TabItem>
      <TabItem label="yarn">
        yarn add my-package
      </TabItem>
      <TabItem label="pnpm">
        pnpm add my-package
      </TabItem>
    </Tabs>
  )
}`}
          language="typescript"
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">callouts</h2>
        <p className="mb-4">
          use callouts to highlight important information:
        </p>
        <CodeBlock
          code={`import { Callout } from "@/components/callout"

export default function MyPage() {
  return (
    <>
      <Callout type="note">
        this is a note callout
      </Callout>

      <Callout type="warning">
        this is a warning callout
      </Callout>

      <Callout type="tip">
        this is a tip callout
      </Callout>
    </>
  )
}`}
          language="typescript"
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">diagrams</h2>
        <p className="mb-4">
          use mermaid diagrams to visualize concepts:
        </p>
        <CodeBlock
          code={`import { Diagram } from "@/components/diagram"

export default function MyPage() {
  return (
    <Diagram
      code={\`
        graph TD
          A[start] --> B{condition}
          B -->|yes| C[do something]
          B -->|no| D[do nothing]
          C --> E[end]
          D --> E
      \`}
    />
  )
}`}
          language="typescript"
        />

        <div className="mt-8 p-4 bg-blue-50 rounded-lg dark:bg-blue-950">
          <h3 className="text-xl font-semibold mb-2">next steps</h3>
          <ul className="space-y-2">
            <li>
              <a href="/docs/guides/customization" className="text-blue-600 hover:underline dark:text-blue-400">
                customization
              </a>
              {" - "} learn how to customize components
            </li>
            <li>
              <a href="/docs/guides/deployment" className="text-blue-600 hover:underline dark:text-blue-400">
                deployment
              </a>
              {" - "} deploy your documentation site
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
} 