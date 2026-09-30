import { listBuildings } from "../../src/orulo/client.js";
import { normalizeBuildingList } from "../../src/orulo/normalize.js";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "method_not_allowed" });
  }

  try {
    const raw = await listBuildings({
      state: req.query.state,
      city: req.query.city,
      area: req.query.area,
      max_private_area: req.query.max_private_area,
      finality: req.query.finality,
      commercial_status: req.query.commercial_status,
      page: req.query.page
    });

    const normalized = normalizeBuildingList(raw);

    return res.status(200).json({
      source: process.env.ORULO_MODE === "live" ? "orulo_api_v2" : "mock",
      query: {
        state: req.query.state || null,
        city: req.query.city || null,
        area: req.query.area || null,
        max_private_area: req.query.max_private_area || null,
        finality: req.query.finality || null,
        commercial_status: req.query.commercial_status || null,
        page: req.query.page || "1"
      },
      ...normalized
    });
  } catch (error) {
    const status = error?.statusCode || 500;
    return res.status(status).json({
      error: error?.code || "orulo_request_failed",
      message: error?.message || "Falha ao consultar catálogo."
    });
  }
}
