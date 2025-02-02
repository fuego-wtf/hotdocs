import Link from "next/link"

const navigation = [
  {
    title: "getting started",
    links: [
      { href: "/", title: "introduction" },
      { href: "/getting-started", title: "quick start" },
    ],
  },
  {
    title: "api reference",
    links: [
      { href: "/api/backend", title: "backend api" },
      { href: "/api/frontend", title: "frontend api" },
      { href: "/api/graphyn", title: "graphyn service" },
    ],
  },
  {
    title: "architecture",
    links: [
      { href: "/architecture/overview", title: "overview" },
      { href: "/architecture/app-structure", title: "app structure" },
    ],
  },
  {
    title: "guides",
    links: [
      { href: "/guides/transform", title: "data transformation" },
      { href: "/guides/realtime", title: "realtime updates" },
      { href: "/guides/widgets", title: "widget integration" },
    ],
  },
]

export function Sidebar() {
  return (
    <div className="w-64 bg-gray-50 p-6 dark:bg-gray-900">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">hotdocs</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">docs for graphyn community</p>
      </div>
      <nav className="space-y-6">
        {navigation.map((section) => (
          <div key={section.title}>
            <h2 className="font-medium text-gray-900 dark:text-white mb-2">{section.title}</h2>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  )
} 