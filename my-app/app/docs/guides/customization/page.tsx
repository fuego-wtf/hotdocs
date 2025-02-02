import { CodeBlock } from "@/components/code-block"

export default function CustomizationGuidePage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">customization</h1>
      
      <div className="prose prose-gray max-w-none">
        <p className="text-lg mb-4">
          learn how to customize your documentation site to match your brand and preferences.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">theme configuration</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">colors</h3>
        <p className="mb-4">
          customize your site&apos;s color scheme in the theme configuration:
        </p>
        <CodeBlock
          code={`// config/theme.ts
export const theme = {
  colors: {
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
      950: '#082f49',
    },
    // add more color scales as needed
  }
}`}
          language="typescript"
          filename="config/theme.ts"
        />

        <h3 className="text-xl font-semibold mt-6 mb-3">typography</h3>
        <p className="mb-4">
          customize fonts and typography settings:
        </p>
        <CodeBlock
          code={`// config/theme.ts
export const theme = {
  typography: {
    fonts: {
      sans: ['Inter', 'sans-serif'],
      mono: ['Fira Code', 'monospace'],
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
    }
  }
}`}
          language="typescript"
          filename="config/theme.ts"
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">navigation</h2>
        <p className="mb-4">
          customize your site&apos;s navigation structure:
        </p>
        <CodeBlock
          code={`// config/navigation.ts
export const navigation = {
  main: [
    {
      title: "getting started",
      items: [
        { title: "introduction", href: "/" },
        { title: "installation", href: "/installation" },
        { title: "configuration", href: "/configuration" },
      ]
    },
    {
      title: "guides",
      items: [
        { title: "markdown", href: "/guides/markdown" },
        { title: "components", href: "/guides/components" },
        { title: "customization", href: "/guides/customization" },
      ]
    }
  ],
  footer: [
    {
      title: "resources",
      items: [
        { title: "github", href: "https://github.com/yourusername/hotdocs" },
        { title: "discord", href: "https://discord.gg/yourinvite" },
        { title: "twitter", href: "https://twitter.com/hotdocs" },
      ]
    }
  ]
}`}
          language="typescript"
          filename="config/navigation.ts"
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">components</h2>
        <p className="mb-4">
          customize the appearance of built-in components:
        </p>
        <CodeBlock
          code={`// components/code-block.tsx
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
  className?: string
}

export function CodeBlock({
  code,
  language,
  filename,
  className
}: CodeBlockProps) {
  return (
    <div className={cn(
      "rounded-lg border bg-zinc-950",
      className
    )}>
      {filename && (
        <div className="border-b px-4 py-2 text-sm text-zinc-400">
          {filename}
        </div>
      )}
      <pre className="p-4">
        <code className={language}>
          {code}
        </code>
      </pre>
    </div>
  )
}`}
          language="typescript"
          filename="components/code-block.tsx"
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">layouts</h2>
        <p className="mb-4">
          create custom layouts for different types of pages:
        </p>
        <CodeBlock
          code={`// components/docs-layout.tsx
interface DocsLayoutProps {
  children: React.ReactNode
  sidebar?: React.ReactNode
  toc?: React.ReactNode
}

export function DocsLayout({
  children,
  sidebar,
  toc
}: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen">
      {sidebar && (
        <div className="w-64 border-r">
          {sidebar}
        </div>
      )}
      <main className="flex-1 px-8 py-6">
        {children}
      </main>
      {toc && (
        <div className="w-64 border-l">
          {toc}
        </div>
      )}
    </div>
  )
}`}
          language="typescript"
          filename="components/docs-layout.tsx"
        />

        <div className="mt-8 p-4 bg-blue-50 rounded-lg dark:bg-blue-950">
          <h3 className="text-xl font-semibold mb-2">next steps</h3>
          <ul className="space-y-2">
            <li>
              <a href="/docs/guides/deployment" className="text-blue-600 hover:underline dark:text-blue-400">
                deployment
              </a>
              {" - "} deploy your documentation site
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