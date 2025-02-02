# Consolidated System Documentation

This document consolidates the documentation from graphyn, node, and coregraph, organized around the system architecture as described in the architecture diagram. It centralizes our API, development guidelines, deployment, security, and project structure details.

## 1. Architecture Overview

The following diagram presents the core architecture of our system:

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

## 2. API and Integration

- **API Documentation:**
  - Refer to `api.md` (graphyn) for client-side API usage.
  - `openapi.yaml` and `api-reference.md` (coregraph) detail the backend API endpoints, request/response formats, and integration methods.

## 3. Development Guidelines

- **Frontend:**
  - See `development.md` (graphyn/docs) for frontend development best practices.
- **Backend:**
  - Consult `development-guide.md` (coregraph/docs) for backend development guidelines.
- **SDK:**
  - `sdk-todo.md` (node/docs) covers pending improvements and todos for the client SDK.

## 4. Deployment and Security

- **Deployment:**
  - `deployment-handbook.md` (coregraph/docs) outlines deployment processes and infrastructure setup.
- **Security:**
  - `security-specifications.md` (coregraph/docs) includes security policies and specifications.

## 5. Project Structure and Todos

- **Application Structure:**
  - Review `application-structure.md` and `proj.md` (graphyn/.docs) for an overview of the project organization.
- **Tasks and Todos:**
  - Additional tasks are listed in `todo.md` (graphyn/.docs) and `backend-todo.md` (coregraph/docs).

---

This consolidated document is based on the architecture outlined in the primary ARCHITECTURE.md and integrates key technical details from all repositories. It serves as a single source of truth for system design and operational guidelines. 