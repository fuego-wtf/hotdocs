# Graphyn Architecture

## Overview

Graphyn is built on a modern stack combining Next.js for the frontend and a powerful backend infrastructure for AI agent management.

## System Components

### Frontend Architecture

- **Next.js App Router**: Server and client components
- **Tailwind CSS**: Styling and animations
- **Zustand**: Client-side state management
- **React Query**: Server state and caching
- **Clerk**: Authentication and user management

### Backend Services

- **PostgreSQL + Drizzle**: Primary database
- **Redis**: Event streaming and caching
- **Memgraph**: Graph relationships
- **Qdrant**: Vector embeddings
- **RabbitMQ**: Task queue

### AI Components

- **Agent System**: Manages AI agents and their states
- **Memory System**: Handles context and memory storage
- **Event Processing**: Real-time event handling
- **Vector Search**: Semantic similarity matching

## Data Flow

1. Client request through Next.js App Router
2. Authentication via Clerk
3. Data processing in appropriate service
4. State updates via Zustand/React Query
5. Real-time updates via WebSocket

## Security

- JWT-based authentication
- Role-based access control
- Rate limiting
- Request validation

## Performance

- Edge caching
- Optimized database queries
- Efficient state management
- Lazy loading and code splitting