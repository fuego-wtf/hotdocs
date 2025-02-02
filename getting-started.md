# getting started

quick guide to get you up and running with the graphyn ecosystem.

## prerequisites

- node.js >= 20.x
- docker & docker-compose
- supabase account
- redis (local or cloud)

## quick start

1. clone the repositories:
```bash
git clone https://github.com/yourusername/graphyn.git
git clone https://github.com/yourusername/coregraph.git
git clone https://github.com/yourusername/node.git
```

2. set up backend (coregraph):
```bash
cd coregraph
cp .env.example .env  # configure your env vars
npm install
docker-compose up -d  # starts redis and other services
npm run dev
```

3. set up sdk (node):
```bash
cd ../node
npm install
npm run build
```

4. set up frontend (graphyn):
```bash
cd ../graphyn
cp .env.template .env  # configure your env vars
npm install
npm run dev
```

## development workflow

1. backend development:
   - run tests: `npm test`
   - api docs: see `/api/backend-api.md`
   - development guide: see `/development/backend-guide.md`

2. sdk development:
   - build: `npm run build`
   - test: `npm test`
   - docs: see `/api/frontend-api.md`

3. frontend development:
   - development server: `npm run dev`
   - build: `npm run build`
   - guide: see `/development/frontend-guide.md`

## key features

- graph data storage and querying
- real-time updates via websockets
- authentication and authorization
- rate limiting and caching
- payment integration

## architecture overview

see `/architecture/main.md` for detailed system architecture.

## troubleshooting

common issues and solutions:

1. connection issues:
   - verify env variables
   - check if services are running (`docker ps`)
   - ensure ports aren't blocked

2. build failures:
   - clear node_modules and reinstall
   - verify node version
   - check for typescript errors

3. api errors:
   - verify api keys and tokens
   - check rate limits
   - validate request format

## next steps

1. explore the api documentation in `/api`
2. review development guidelines in `/development`
3. understand the architecture in `/architecture`
4. check deployment guide in `/deployment`

## need help?

- check todos and known issues in `/todos`
- review security guidelines in `/deployment/security.md`
- consult deployment handbook in `/deployment/handbook.md` 