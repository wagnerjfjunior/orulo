export default function handler(req, res) {
  res.status(200).json({
    ok: true,
    service: "orulo-integration",
    mode: process.env.ORULO_MODE || "mock",
    credentialsConfigured: Boolean(
      process.env.ORULO_CLIENT_ID && process.env.ORULO_CLIENT_SECRET
    )
  });
}
