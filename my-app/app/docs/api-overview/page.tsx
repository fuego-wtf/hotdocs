import Link from "next/link"

export default function ApiOverviewPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Graphyn API & Architecture Overview</h1>
      <p className="mb-6">
        This guide provides an in-depth overview of the Graphyn API along with a detailed look at our system architecture. Designed for developers, this documentation helps you integrate our API seamlessly while understanding the underlying system design.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">API Documentation</h2>
      <p className="mb-4">
        Our API is built with scalability and security in mind. It provides robust endpoints for data retrieval, resource management, and error handling. Whether you need to perform CRUD operations or monitor your integrations, our API is designed to support your needs.
      </p>
      <ul className="list-disc ml-6 space-y-2">
        <li><Link href="/docs/api/backend-api" className="text-blue-600 hover:underline">Backend API Documentation</Link></li>
        <li><Link href="/docs/api/frontend-api" className="text-blue-600 hover:underline">Frontend API Documentation</Link></li>
        <li><Link href="/api/openapi.yaml" className="text-blue-600 hover:underline">OpenAPI Specification</Link></li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">System Architecture</h2>
      <p className="mb-4">
        Graphyn&#39;s architecture is engineered for high performance, scalability, and security. Our infrastructure includes a robust backend that handles API requests and data storage, a responsive frontend for seamless integration, and clear guidelines for application structure and maintainability.
      </p>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          <Link href="/architecture/project-overview" className="text-blue-600 hover:underline">Project Overview</Link> - A comprehensive view of our documentation and integration ecosystem.
        </li>
        <li>
          <Link href="/architecture/backend" className="text-blue-600 hover:underline">Backend Architecture</Link> - Detailed insights into our API server, data management, and security protocols.
        </li>
        <li>
          <Link href="/architecture/frontend" className="text-blue-600 hover:underline">Frontend Architecture</Link> - An overview of our client-side design and user interaction models.
        </li>
        <li>
          <Link href="/architecture/app-structure" className="text-blue-600 hover:underline">Application Structure</Link> - How our application is organized for scalability and extensibility.
        </li>
        <li>
          <Link href="/architecture/main" className="text-blue-600 hover:underline">Main Architecture Overview</Link> - Core design principles and system components powering Graphyn.
        </li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Next Steps</h2>
      <p className="mb-4">
        Explore each section for detailed implementation instructions, integration examples, and further insights into Graphyn&#39;s API and architecture. Leverage this documentation to build powerful applications with Graphyn.
      </p>
    </div>
  );
} 