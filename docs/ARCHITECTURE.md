# Architecture — Órulo Integration Bootstrap

## Status

`DESIGNED + BOOTSTRAP_IMPLEMENTED_ON_FEATURE_BRANCH`

This document describes the initial architecture only. It does not claim authenticated API access, production deployment, catalogue synchronization or commercial approval from Órulo.

## Purpose

Create a clean boundary between the official Órulo API v2 and future catalogue/search/decision-support experiences.

## Initial flow

```text
Órulo API v2
  ↓
server-side OAuth client
  ↓
catalogue adapter
  ↓
normalizer
  ↓
application/API surface
  ↓
future catalogue / filters / comparisons
```

## Modules

### `src/orulo/client.js`

Responsible for:

- client-credentials OAuth token acquisition;
- calling the official `/api/v2/buildings` endpoint;
- encoding filters;
- keeping secrets server-side;
- switching between `mock` and `live`.

### `src/orulo/normalize.js`

Maps external field naming into an internal catalogue shape.

The normalized model intentionally preserves source facts and does not invent missing values.

### `api/orulo/buildings.js`

Server-side route consumed by future UI/data tooling.

Initial supported query inputs:

- `state`
- `city`
- `area`
- `max_private_area`
- `finality`
- `commercial_status`
- `page`

## Initial validation scenario

```text
state=SP
city=São Paulo
area=Barra Funda
max_private_area=50
finality=residential
commercial_status=for_sale
```

## Deliberate exclusions

Not implemented in this bootstrap:

- real credentials;
- end-user OAuth;
- unit-level synchronization;
- database persistence;
- catalogue crawling/scraping;
- production release;
- SEO-indexable catalogue pages;
- CRM handoff;
- analytics;
- automated publishing.

## Next integration gate

After Órulo provides official credentials:

1. configure secrets outside Git;
2. keep `ORULO_MODE=mock` until a bounded credential smoke is authorized;
3. obtain a client token;
4. call `GET /api/v2/config`;
5. call address discovery endpoints;
6. call `GET /api/v2/buildings` with a narrow São Paulo filter;
7. inspect actual entitlement/response fields;
8. only then design persistence and public catalogue behavior.
