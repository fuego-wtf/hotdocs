import Link from "next/link"

export default function DocsLandingPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Documentation</h1>
      <p className="mb-6">Welcome to hotdocs documentation. Get started below:</p>
      <ul className="list-disc ml-6 space-y-2">
        <li><Link href="/docs/getting-started">Getting Started</Link></li>
        <li><Link href="/docs/guides/markdown">Markdown Guide</Link></li>
        <li><Link href="/docs/guides/components">Components Guide</Link></li>
        <li><Link href="/docs/guides/customization">Customization Guide</Link></li>
        <li><Link href="/docs/guides/deployment">Deployment Guide</Link></li>
      </ul>
    </div>
  )
} 