# Órulo Integration — Current Handoff

## CURRENT STATE — 2026-09-30

```text
canonical repository = wagnerjfjunior/orulo
canonical branch = main
bootstrap implementation branch = feature/orulo-integration-bootstrap-20260930
branch head at SFJM installation start = 027bc12cae454b6f64958d43c816491500a9f57e

official API target = Órulo API v2
integration status = PRE-CREDENTIAL / WAITING_PROVIDER_RESPONSE
runtime mode = mock
real credentials = NOT CONFIGURED
live authenticated smoke = NOT EXECUTED
database persistence = NOT IMPLEMENTED
production release = NOT AUTHORIZED
```

## What changed

1. Repository was initialized and linked by the owner to a Vercel project.
2. A Vercel-compatible API bootstrap was implemented on a feature branch.
3. The project has a mock-mode `/api/orulo/buildings` adapter and client-credentials OAuth path.
4. The owner contacted Órulo requesting catalogue/API integration; commercial/technical response is pending.
5. SFJM project continuity and SFJM Workspace read-model installation were requested as a dedicated project setup.

## Active objective

Integrate officially with Órulo and determine the exact catalogue/data entitlement before designing persistence, public catalogue pages or production behavior.

## Initial validation use case

```text
São Paulo / SP
→ Barra Funda
→ residential
→ for_sale
→ max_private_area = 50
```

This use case is for bounded validation, not a permanent product boundary.

## Important evidence boundaries

- the uploaded OpenAPI documentation supports OAuth/API endpoint design;
- the provider response currently only directs the owner to the integration/commercial flow;
- no `client_id` or `client_secret` is canonically available;
- no live Órulo catalogue response has been observed in this project;
- no claim of free API entitlement is established yet.

## Next transition

The authoritative next action is in `docs/NEXT_SAFE_ACTION.md`.
