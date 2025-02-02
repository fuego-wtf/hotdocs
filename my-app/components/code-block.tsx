"use client";
import { useState } from "react"
import { Check, Copy } from "lucide-react"

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
}

export function CodeBlock({ code, language = "bash", filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="code-block group">
      {filename && (
        <div className="flex items-center justify-between rounded-t-md border border-b-0 border-gray-200 bg-gray-50 px-3 py-1.5 dark:border-gray-800 dark:bg-gray-900">
          <p className="text-xs text-gray-500 dark:text-gray-400">{filename}</p>
        </div>
      )}
      <div className="relative">
        <pre className={filename ? "mt-0 rounded-t-none" : ""} data-language={language}>
          <code>{code}</code>
        </pre>
        <button
          onClick={copyToClipboard}
          className="copy-button group-hover:opacity-100"
          title="Copy code"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  )
} 