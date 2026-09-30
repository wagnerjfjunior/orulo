# Órulo Integration — Next Safe Action

## Authoritative next safe action

**Wait for and ingest the next response from Órulo about integration conditions and/or API v2 credentials, classify exactly what access is granted, and prepare the smallest bounded validation plan consistent with that response.**

## If the provider grants credentials

Do not execute live access automatically.

Prepare a bounded smoke covering, in order:
1. client-credentials token acquisition;
2. `GET /api/v2/config`;
3. address discovery for SP / São Paulo;
4. narrow `GET /api/v2/buildings` request;
5. capture returned entitlement/fields/errors without persisting restricted data.

Execution of this smoke requires separate explicit authorization and secrets configured through a secure environment channel, never Git/chat.

## If the provider returns commercial conditions instead

Record:
- free vs paid access;
- catalogue scope;
- units access;
- non-available inventory access;
- publication obligations;
- persistence/use restrictions;
- rate/usage limits;
- required CRM/system classification.

Do not infer missing conditions.

## Completion condition

This action completes when the provider response is preserved/classified and the next transition is deterministically known.

## Current authorization boundary

The current SFJM/bootstrap installation request does not authorize:
- live credential configuration;
- authenticated smoke;
- database;
- deploy;
- PR Ready;
- merge;
- production publication.
