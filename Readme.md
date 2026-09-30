# Órulo Integration

Consumer project for the official Órulo API v2 integration.

## Current state

- Repository: `wagnerjfjunior/orulo`
- Bootstrap branch: `feature/orulo-integration-bootstrap-20260930`
- Integration mode: `mock` by default
- Real credentials: **not configured**
- Production deployment: **not part of this bootstrap**

## Initial objective

Build a clean data layer for Órulo catalogue consumption, normalization and future decision-support/search experiences.

Initial validation case:

```text
São Paulo / SP
→ Barra Funda
→ residential
→ for_sale
→ max_private_area = 50
```

## Local run

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open:

- `/` — bootstrap status
- `/api/health` — application health
- `/api/orulo/buildings?state=SP&city=São%20Paulo&area=Barra%20Funda&max_private_area=50` — mocked catalogue route

## Security

Never commit Órulo `client_id`, `client_secret`, access tokens or end-user tokens.

Copy `.env.example` to a local environment file only when credentials are officially provided.

See:

- `docs/ARCHITECTURE.md`
- `docs/DATA_POLICY.md`
- `docs/BOOTSTRAP_STATUS.md`
