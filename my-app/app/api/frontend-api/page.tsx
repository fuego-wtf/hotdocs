import { CodeBlock } from "@/components/code-block"

export default function FrontendApiDocumentationPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Frontend API Documentation</h1>
      <p className="mb-6">
        This document provides comprehensive details about the Hotdocs Frontend API. It covers authentication, endpoints, usage examples, and error handling for integrating the API in frontend applications.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Overview</h2>
      <p>
        The Frontend API is designed to facilitate the integration of Hotdocs features into your client-side applications, providing fast and secure access to documentation data.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Authentication</h2>
      <p>
        Authentication is managed via API tokens. Include your token in requests as follows:
      </p>
      <CodeBlock
        code={`Authorization: Bearer YOUR_API_TOKEN`}
        language="bash"
      />

      <h2 className="text-2xl font-semibold mt-8 mb-4">Endpoints</h2>
      <h3 className="text-xl font-semibold mt-6 mb-2">GET /api/frontend/resources</h3>
      <p>Fetch a list of documentation resources.</p>
      <CodeBlock
        code={`curl -X GET "https://api.hotdocs.com/api/frontend/resources" \
  -H "Authorization: Bearer YOUR_API_TOKEN"`}
        language="bash"
      />

      <h3 className="text-xl font-semibold mt-6 mb-2">PUT /api/frontend/resource</h3>
      <p>Update a specific resource.</p>
      <CodeBlock
        code={`curl -X PUT "https://api.hotdocs.com/api/frontend/resource/RESOURCE_ID" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{ "title": "Updated Title" }'`}
        language="bash"
      />

      <h2 className="text-2xl font-semibold mt-8 mb-4">Error Handling</h2>
      <p>
        Errors return a JSON object with an error message and a status code. Ensure your application handles these gracefully.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Next Steps</h2>
      <p>
        To see the complete API specification, check out the <a href="/api/openapi.yaml" className="text-blue-600 hover:underline">OpenAPI Specification</a>.
      </p>
    </div>
  );
} 