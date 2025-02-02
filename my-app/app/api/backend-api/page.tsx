import { CodeBlock } from "@/components/code-block"

export default function ApiDocumentationPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Graphyn Service Backend API Documentation</h1>
      <p className="mb-6">
        This document provides comprehensive details about the Graphyn Service Backend API – the engine powering Hotdocs. It includes authentication details, endpoint references, request/response examples, and error handling strategies essential for developers aiming to leverage Graphyn&#39;s service to enhance their applications.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Overview</h2>
      <p>
        Our Backend API is designed for seamless integration. It supports standard REST operations and communicates using JSON. The API enables developers to access documentation services, manage resources, and integrate with the Hotdocs platform using Graphyn technology.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Authentication</h2>
      <p>
        Authentication is handled via API keys. Include your API key in the header as shown below:
      </p>
      <CodeBlock
        code={`Authorization: Bearer YOUR_API_KEY`}
        language="bash"
      />
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Endpoints</h2>
      <h3 className="text-xl font-semibold mt-6 mb-2">GET /api/resources</h3>
      <p>Retrieve a list of available resources.</p>
      <CodeBlock
        code={`curl -X GET "https://api.hotdocs.com/api/resources" \
     -H "Authorization: Bearer YOUR_API_KEY"`}
        language="bash"
      />
      
      <h3 className="text-xl font-semibold mt-6 mb-2">POST /api/resources</h3>
      <p>Create a new resource.</p>
      <CodeBlock
        code={`curl -X POST "https://api.hotdocs.com/api/resources" \
     -H "Authorization: Bearer YOUR_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{ "name": "New Resource", "type": "example" }'`}
        language="bash"
      />
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Error Handling</h2>
      <p>
        In case of errors, the API returns a JSON object containing an error message and a status code. Ensure you handle these responses appropriately in your application.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Usage Example</h2>
      <p>
        The following example demonstrates how to integrate Graphyn&#39;s Backend API into your application. This sample fetches resource data and processes the response for further integration with your backend logic.
      </p>
      <CodeBlock
        code={`curl -X GET "https://api.graphynservice.com/api/resources" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Accept: application/json"`}
        language="bash"
      />
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Next Steps</h2>
      <p>
        For a detailed view of the API specification, refer to the <a href="/api/openapi.yaml" className="text-blue-600 hover:underline">OpenAPI Specification</a>.
      </p>
    </div>
  );
} 