export default function GraphDatabaseGuidePage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">graph database guide</h1>
      
      <div className="prose prose-gray max-w-none">
        <p className="text-lg mb-4">
          learn how to work with our graph database to store and query connected data efficiently.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">concepts</h2>
        <ul className="space-y-2">
          <li>
            <strong>nodes</strong>
            <p className="text-sm text-gray-600">represent entities in your data model</p>
          </li>
          <li>
            <strong>edges</strong>
            <p className="text-sm text-gray-600">represent relationships between nodes</p>
          </li>
          <li>
            <strong>properties</strong>
            <p className="text-sm text-gray-600">store data on nodes and edges</p>
          </li>
          <li>
            <strong>labels</strong>
            <p className="text-sm text-gray-600">categorize nodes and edges by type</p>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">working with nodes</h2>
        <pre className="bg-gray-100 p-4 rounded-lg">
          <code>
{`// create a node
const user = await client.nodes.create({
  type: 'user',
  properties: {
    name: 'john doe',
    email: 'john@example.com'
  }
})

// update a node
await client.nodes.update(user.id, {
  properties: {
    name: 'john smith'
  }
})

// delete a node
await client.nodes.delete(user.id)

// query nodes
const users = await client.nodes.find({
  type: 'user',
  where: {
    name: { contains: 'john' }
  }
})`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold mt-8 mb-4">working with edges</h2>
        <pre className="bg-gray-100 p-4 rounded-lg">
          <code>
{`// create an edge
const friendship = await client.edges.create({
  type: 'friends_with',
  from: user1.id,
  to: user2.id,
  properties: {
    since: new Date()
  }
})

// update an edge
await client.edges.update(friendship.id, {
  properties: {
    strength: 0.9
  }
})

// delete an edge
await client.edges.delete(friendship.id)

// query edges
const friendships = await client.edges.find({
  type: 'friends_with',
  where: {
    strength: { gt: 0.5 }
  }
})`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold mt-8 mb-4">graph queries</h2>
        <pre className="bg-gray-100 p-4 rounded-lg">
          <code>
{`// find friends of friends
const fof = await client.graph.query(\`
  MATCH (user:user)-[:friends_with]->(friend:user)
        -[:friends_with]->(fof:user)
  WHERE user.id = $userId
  RETURN DISTINCT fof
\`, {
  userId: user.id
})

// find shortest path
const path = await client.graph.query(\`
  MATCH path = shortestPath(
    (start:user)-[:friends_with*]-(end:user)
  )
  WHERE start.id = $startId AND end.id = $endId
  RETURN path
\`, {
  startId: user1.id,
  endId: user2.id
})

// find communities
const communities = await client.graph.query(\`
  CALL gds.louvain.stream({
    nodeProjection: 'user',
    relationshipProjection: 'friends_with'
  })
  YIELD nodeId, communityId
  RETURN communityId, collect(nodeId) as members
\`)`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold mt-8 mb-4">transactions</h2>
        <pre className="bg-gray-100 p-4 rounded-lg">
          <code>
{`// run operations in a transaction
await client.transaction(async (tx) => {
  const user = await tx.nodes.create({
    type: 'user',
    properties: { name: 'alice' }
  })
  
  const post = await tx.nodes.create({
    type: 'post',
    properties: { content: 'hello world' }
  })
  
  await tx.edges.create({
    type: 'authored',
    from: user.id,
    to: post.id
  })
})`}
          </code>
        </pre>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">next steps</h3>
          <ul className="space-y-2">
            <li>
              <a href="/docs/api/graph" className="text-blue-600 hover:underline">
                graph api reference
              </a>
              {" - "} detailed api documentation
            </li>
            <li>
              <a href="/docs/examples/knowledge-base" className="text-blue-600 hover:underline">
                knowledge base example
              </a>
              {" - "} see a complete graph application
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
} 