# multi-services-graphql

Project minimal GraphQL service using Apollo Server, Mongoose and TypeScript.

Quick start

1. Copy `.env.example` to `.env` and set `MONGO_URL`.
2. Install dev dependencies:

```bash
npm install
```

3. Run in development:

```bash
npm run dev
```

4. Build and run production:

```bash
npm run build
npm start
```

Notes

- Development uses `ts-node-dev`.
- Models use singular naming (`User`). Resolvers import models from `src/models/*.ts` (runtime imports use `.js` extension for ESM).
