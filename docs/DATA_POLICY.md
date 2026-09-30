# Data Policy — Órulo Integration

## Core rule

Data handling must follow the authentication class and the active Órulo agreement.

## Client-auth catalogue data

The bootstrap is designed for `oruloClientAuth` catalogue consumption.

Persistence is **not enabled yet**. Before adding a database, confirm contractual scope and actual API entitlement.

## End-user-auth data

Data exclusively returned through `oruloEndUserAuth` must be treated as real-time-only unless Órulo explicitly authorizes another handling model.

Do not persist restricted end-user data such as:

- commercial contact details;
- broker commission information;
- restricted files;
- opportunity/promotion details available only to the authenticated broker.

## Secrets

Never commit:

- client ID;
- client secret;
- client access token;
- end-user access token;
- user password.

Use Vercel/local environment variables only after credentials are officially issued.

## Mock data

Mock values are synthetic and must never be represented as actual Órulo inventory.

`source=mock` must remain explicit in bootstrap responses.
