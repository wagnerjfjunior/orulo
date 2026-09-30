import { MOCK_BUILDING_LIST } from "./mock-data.js";

const DEFAULT_TOKEN_URL = "https://www.orulo.com.br/oauth/token";
const DEFAULT_API_BASE_URL = "https://www.orulo.com.br/api/v2";

function clean(value) {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function appendArrayParam(params, key, value) {
  const item = clean(value);
  if (item) params.append(`${key}[]`, item);
}

async function getClientToken() {
  const clientId = process.env.ORULO_CLIENT_ID;
  const clientSecret = process.env.ORULO_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    const error = new Error("Credenciais ORULO_CLIENT_ID/ORULO_CLIENT_SECRET não configuradas.");
    error.code = "orulo_credentials_missing";
    error.statusCode = 503;
    throw error;
  }

  const tokenUrl = process.env.ORULO_TOKEN_URL || DEFAULT_TOKEN_URL;
  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: clientId,
    client_secret: clientSecret
  });

  const response = await fetch(tokenUrl, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body
  });

  if (!response.ok) {
    const text = await response.text();
    const error = new Error(`Falha ao obter token Órulo: HTTP ${response.status} ${text.slice(0, 300)}`);
    error.code = "orulo_token_failed";
    error.statusCode = 502;
    throw error;
  }

  const payload = await response.json();
  if (!payload.access_token) {
    const error = new Error("Resposta OAuth sem access_token.");
    error.code = "orulo_token_missing";
    error.statusCode = 502;
    throw error;
  }

  return payload.access_token;
}

export async function listBuildings(filters = {}) {
  const mode = process.env.ORULO_MODE || "mock";

  if (mode !== "live") {
    return MOCK_BUILDING_LIST;
  }

  const token = await getClientToken();
  const apiBaseUrl = process.env.ORULO_API_BASE_URL || DEFAULT_API_BASE_URL;
  const url = new URL(`${apiBaseUrl}/buildings`);

  const state = clean(filters.state);
  const city = clean(filters.city);
  if (state) url.searchParams.set("state", state);
  if (city) url.searchParams.set("city", city);

  appendArrayParam(url.searchParams, "area", filters.area);
  appendArrayParam(url.searchParams, "finality", filters.finality);
  appendArrayParam(url.searchParams, "commercial_status", filters.commercial_status);

  if (clean(filters.max_private_area)) {
    url.searchParams.set("max_private_area", String(filters.max_private_area));
  }

  if (clean(filters.page)) {
    url.searchParams.set("page", String(filters.page));
  }

  const response = await fetch(url, {
    headers: {
      authorization: `Bearer ${token}`,
      accept: "application/json"
    }
  });

  if (!response.ok) {
    const text = await response.text();
    const error = new Error(`Órulo /buildings falhou: HTTP ${response.status} ${text.slice(0, 500)}`);
    error.code = "orulo_buildings_failed";
    error.statusCode = response.status >= 400 && response.status < 500 ? response.status : 502;
    throw error;
  }

  return response.json();
}
