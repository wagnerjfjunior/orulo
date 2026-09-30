# Órulo Integration — Bootstrap Canônico

## Identidade

- PROJECT_ID: `orulo-integration`
- PROJECT_NAME: `Órulo Integration`
- CANONICAL_SOURCE: `wagnerjfjunior/orulo`
- CANONICAL_BRANCH: `main`
- PROTOCOL_AUTHORITY: `wagnerjfjunior/StopJuniorMode`
- WORKSPACE_PRODUCT: `wagnerjfjunior/sfjm-workspace`
- PRODUCT_AUTHORITY: Wagner
- STATUS: `CANDIDATE_ON_FEATURE_BRANCH`

Este repositório adota SFJM como método de continuidade. Ele não redefine o protocolo SFJM.

## Objetivo primário

Construir uma integração oficial, segura e auditável com a API v2 da Órulo para consumir catálogo imobiliário, normalizar dados e suportar pesquisa, filtros, exportação e futura comparação/decisão, sem scraping e sem violar as restrições de autenticação ou persistência da Órulo.

## Ordem mínima de leitura

1. resolver live `main`;
2. ler este arquivo;
3. ler `docs/SFJM_BOUNDARY.md`;
4. ler `handoffs/CURRENT.md`;
5. ler `docs/PROJECT_STATUS.md`;
6. ler `docs/NEXT_SAFE_ACTION.md`;
7. ler `docs/BLOCKED_ACTIONS.md`;
8. ler `docs/DATA_POLICY.md` quando a tarefa envolver dados, tokens ou persistência;
9. ler `docs/ARCHITECTURE.md` quando a tarefa envolver integração/código;
10. resolver evidência live da Órulo/Vercel/GitHub quando material.

## Regra de autoridade

```text
GITHUB MAIN = PROJECT STATE
CONVERSATION != PROJECT STATE
MEMORY != PROJECT STATE
SFJM WORKSPACE = DERIVED READ-ONLY REPRESENTATION
ORULO DOCUMENTATION != CONTRACTUAL ENTITLEMENT
MOCK DATA != LIVE ORULO DATA
```

Leitura não autoriza mutação. Ready, merge, deploy, configuração de credenciais reais e smoke autenticado exigem autorização explícita própria.

## Continuidade cognitiva adotada

O projeto adota SFJM Bootstrap v1 e os princípios do SFJM Continuity Contract v2 para preservar:
- objetivo primário;
- estratégia de integração oficial;
- separação client-auth vs end-user-auth;
- política de secrets;
- estado da negociação/liberação com a Órulo;
- bloqueios;
- próxima ação segura.

## Estado resumido no branch de instalação

- bootstrap técnico da API implementado em modo `mock`;
- nenhuma credencial real configurada;
- contato de integração enviado à Órulo e resposta comercial/técnica pendente;
- repositório informado pelo owner como vinculado à Vercel, sem claim de produção validada;
- SFJM e adapter do Workspace ainda dependem de PR/merge para se tornarem canônicos em `main`.
