# Órulo Integration — Project Status

## State — 2026-09-30

| Front | State | Evidence / boundary |
|---|---|---|
| Repository | INITIALIZED | `wagnerjfjunior/orulo` |
| API bootstrap | IMPLEMENTED_ON_FEATURE_BRANCH | mock-mode adapter + OAuth path |
| Órulo commercial/API onboarding | WAITING_PROVIDER_RESPONSE | owner submitted integration request |
| Real credentials | NOT_AVAILABLE_IN_REPO | must remain secret |
| Live OAuth smoke | NOT_EXECUTED | separate authorization required |
| Live catalogue access | NOT_PROVEN | entitlement unknown |
| Unit-level access | NOT_PROVEN | endpoint/plan gated by provider |
| Persistence | NOT_IMPLEMENTED | contract/data policy gate |
| Public catalogue | NOT_IMPLEMENTED | product/search gate |
| Production deployment | NOT_AUTHORIZED / NOT_VALIDATED | Vercel linkage alone is not production proof |
| SFJM | INSTALLATION_CANDIDATE | requires merge to `main` |
| SFJM Workspace | ADAPTER_CANDIDATE | derived read-only consumer |

## Active strategy

1. use official API only;
2. obtain provider entitlement/credentials;
3. validate with a narrow read-only smoke;
4. inspect real response shape and limits;
5. only then decide persistence/export/catalogue architecture;
6. keep `oruloEndUserAuth` restricted data outside persistence unless explicitly permitted.

## Initial product role

Current working placement:
- primary: `DIRECTORY_OR_DATA_PRODUCT`;
- secondary: `DECISION_SUPPORT_PROPERTY`.

This is project context, not a replacement for any ecosystem registry decision.

## Risks

- assuming documentation equals commercial entitlement;
- leaking secrets into Git/chat;
- persisting data forbidden by provider terms;
- designing product behavior against mock fields not actually entitled;
- accidental public/indexable release before product and Search governance;
- treating SFJM Workspace as authority.
