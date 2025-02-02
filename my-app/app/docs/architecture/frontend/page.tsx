export default function FrontendArchitecturePage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">frontend architecture</h1>
      
      <div className="prose prose-gray max-w-none">
        <p className="text-lg mb-4">
          the frontend application (graphyn) is built with next.js and follows a component-based architecture with modern react patterns.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">core structure</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">app directory</h3>
        <ul className="space-y-2">
          <li><strong>layout.tsx</strong> - root layout with providers</li>
          <li><strong>page.tsx</strong> - landing page</li>
          <li><strong>error.tsx</strong> - error boundary</li>
          <li><strong>loading.tsx</strong> - loading states</li>
          <li><strong>not-found.tsx</strong> - 404 page</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">components</h3>
        <ul className="space-y-2">
          <li><strong>ui/</strong> - reusable ui components
            <ul className="ml-6 mt-2 space-y-2">
              <li>button.tsx - button variants</li>
              <li>input.tsx - form inputs</li>
              <li>card.tsx - content containers</li>
              <li>dialog.tsx - modal dialogs</li>
            </ul>
          </li>
          <li><strong>graph/</strong> - graph visualization
            <ul className="ml-6 mt-2 space-y-2">
              <li>node.tsx - node rendering</li>
              <li>edge.tsx - edge rendering</li>
              <li>canvas.tsx - graph canvas</li>
            </ul>
          </li>
          <li><strong>layout/</strong> - layout components
            <ul className="ml-6 mt-2 space-y-2">
              <li>header.tsx - navigation header</li>
              <li>sidebar.tsx - side navigation</li>
              <li>footer.tsx - page footer</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">hooks</h3>
        <ul className="space-y-2">
          <li><strong>useAuth</strong> - authentication state</li>
          <li><strong>useGraph</strong> - graph operations</li>
          <li><strong>useSubscription</strong> - real-time updates</li>
          <li><strong>useForm</strong> - form handling</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">lib</h3>
        <ul className="space-y-2">
          <li><strong>api/</strong> - api client setup</li>
          <li><strong>utils/</strong> - helper functions</li>
          <li><strong>types/</strong> - typescript definitions</li>
          <li><strong>constants/</strong> - shared constants</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">state management</h2>
        <ul className="space-y-2">
          <li><strong>local state</strong> - react hooks</li>
          <li><strong>server state</strong> - react query</li>
          <li><strong>global state</strong> - zustand</li>
          <li><strong>form state</strong> - react hook form</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">styling</h2>
        <ul className="space-y-2">
          <li><strong>tailwind css</strong> - utility classes</li>
          <li><strong>css modules</strong> - component styles</li>
          <li><strong>shadcn/ui</strong> - component library</li>
          <li><strong>theme</strong> - design tokens</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">performance</h2>
        <ul className="space-y-2">
          <li><strong>server components</strong> - reduce client js</li>
          <li><strong>image optimization</strong> - next/image</li>
          <li><strong>code splitting</strong> - dynamic imports</li>
          <li><strong>caching</strong> - data caching</li>
        </ul>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">related documentation</h3>
          <ul className="space-y-2">
            <li>
              <a href="/docs/development/frontend" className="text-blue-600 hover:underline">
                development guide
              </a>
              {" - "} frontend development workflow
            </li>
            <li>
              <a href="/docs/api/frontend" className="text-blue-600 hover:underline">
                api documentation
              </a>
              {" - "} frontend api usage
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
} 