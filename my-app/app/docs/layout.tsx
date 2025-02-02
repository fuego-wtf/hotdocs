import { Sidebar } from "@/components/sidebar"

export const metadata = {
  title: "hotdocs | documentation",
  description: "documentation for building your apps",
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 overflow-auto p-6 md:p-12">{children}</main>
    </div>
  )
} 