# Architecture Diagram

This diagram shows the services and methods of the coregraph backend and the coregraph-sdk client.

```mermaid
flowchart TD
  %% Coregraph Backend
  subgraph Backend["coregraph (Backend)"]
    A["Fastify Server"]
    
    subgraph Plugins
      P1["auth.js\n- JWT auth\n- Session management"]
      P2["redis.js\n- Caching\n- Rate limiting (mock support)"]
      P3["supabase.js\n- Graph storage\n- Mock DB support"]
      P4["rateLimit.js\n- Request throttling"]
      P5["errorHandler.js\n- Consistent error responses"]
    end
    
    subgraph Services
      S1["graphEngine\n- addNode\n- addEdge\n- queryNodes"]
      S2["paymentService\n- createPaymentIntent"]
    end
    
    subgraph Routes
      R1["authRoutes\n- POST /login\n- GET /session\n- POST /webhook"]
      R2["graphRoutes\n- POST /nodes\n- GET /nodes\n- POST /edges\n- GET /edges"]
      R3["paymentRoutes\n- POST /payment/create\n- POST /payment/webhook"]
    end
    
    A --> Plugins
    A --> Services
    A --> Routes
  end
  
  %% coregraph-sdk Client SDK
  subgraph SDK["coregraph-sdk (Client SDK)"]
    D1["Auth\n- login\n- getSession\n- logout\n- refresh"]
    D2["Graph\n- createNode\n- queryNodes\n- createEdge\n- queryEdges\n- updateNode\n- updateEdge\n- deleteNode\n- deleteEdge"]
    D3["Events\n- subscribe\n- unsubscribe\n- on\n- off"]
  end
  
  %% Communication between SDK and Backend
  SDK ---|HTTP API Calls| A
  A --> Routes
```

Review this diagram to verify that all services and their methods are correctly captured. 

<!-- appended extended architecture details -->

## extended architecture

### system overview

```mermaid
flowchart TD
  subgraph backend["coregraph (Backend)"]
    A["fastify server"]
    subgraph plugins
      P1["auth.js\n- jwt auth\n- session mgmt"]
      P2["redis.js\n- caching\n- rate limit (mock support)"]
      P3["supabase.js\n- graph storage\n- mock db support"]
      P4["rateLimit.js\n- req throttling"]
      P5["errorHandler.js\n- error responses"]
    end
    subgraph services
      S1["graphEngine\n- add node\n- add edge\n- query nodes"]
      S2["paymentService\n- create payment intent"]
    end
    subgraph routes
      R1["authRoutes\n- post /login\n- get /session\n- post /webhook"]
      R2["graphRoutes\n- post /nodes\n- get /nodes\n- post /edges\n- get /edges"]
      R3["paymentRoutes\n- post /payment/create\n- post /payment/webhook"]
    end
    A --> plugins
    A --> services
    A --> routes
  end

  subgraph sdk["coregraph-sdk (Client sdk)"]
    D1["auth\n- login\n- get session\n- logout\n- refresh"]
    D2["graph\n- create node\n- query nodes\n- create edge\n- query edges\n- update node\n- update edge\n- delete node\n- delete edge"]
    D3["events\n- subscribe\n- unsubscribe\n- on\n- off"]
  end

  subgraph webapp["graphyn (Web App)"]
    W1["nextjs app\n- server-side functions\n- static pages rendering"]
    W2["components\n- ui components"]
    W3["api routes\n- next api endpoints"]
    W4["hooks\n- state mgmt & data fetching"]
  end

  sdk ---|http api calls| backend
  webapp ---|ajax/ssr calls| backend
  webapp ---|uses sdk| sdk
```

### web app detailed breakdown

```mermaid
flowchart TD
  subgraph webclient["web client"]
    WC1["user interface\n- react components"]
    WC2["state management\n- hooks & context"]
  end

  subgraph nextpages["nextjs pages"]
    NP1["page render\n- getServerSideProps\n- getStaticProps"]
    NP2["api endpoints\n- post and get requests"]
  end

  subgraph dataflow["data flow"]
    D1["user action"]
    D2["client request\n(via fetch/axios)"]
    D3["sdk call"]
    D4["backend response"]
    D5["ui update"]
  end

  D1 --> D2 --> D3 --> D4 --> D5
  WC1 --> NP1
  NP2 --> WC2
```

### methods and flows

- backend: methods include add node, add edge, query nodes, create payment intent, etc.
- sdk: methods include login, get session, create node, etc.
- web app: interactions via nextjs api routes and client-side calls, integrating sdk calls and direct ajax. 

# architecture overview

welcome to the architecture overview for hotdocs. this document is designed for the graphyn community, helping developers integrate graphyn service apis into their applications.

## system components

- **backend**: a node-based service exposing graphyn endpoints for data transformation and analytics. see the [backend api documentation](/api/backend) for details.
- **frontend**: provides realtime updates and widget configurations to enhance your app's user experience. detailed info in [frontend api documentation](/api/frontend).
- **database & middleware**: ensure secure data management and reliable request routing.

## integration with graphyn service

graphyn service apis empower you to:

- transform data via the **transform endpoint**: POST `/api/graphyn/transform`
- retrieve analytical insights from the **analytics endpoint**: GET `/api/graphyn/analytics`

## deployment & scalability

our solution is containerized and can be deployed using docker or kubernetes, ensuring high scalability and availability. for deployment instructions, refer to our [docs](/docs).

## further reading

- [backend api documentation](/api/backend)
- [frontend api documentation](/api/frontend)
- [guides](/getting-started)

this overview consolidates the core technical architecture of hotdocs, ensuring you have the essential details to effectively integrate graphyn service into your applications. 