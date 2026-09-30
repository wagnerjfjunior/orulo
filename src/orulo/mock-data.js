export const MOCK_BUILDING_LIST = {
  buildings: [
    {
      id: "mock-001",
      name: "Empreendimento de demonstração",
      status: "Em construção",
      stage: "Em construção",
      developer: { id: "mock-dev", name: "Incorporadora de demonstração" },
      publisher: { id: "mock-pub", name: "Publicador de demonstração" },
      address: {
        street_type: "Rua",
        street: "Exemplo",
        number: 100,
        area: "Barra Funda",
        city: "São Paulo",
        state: "SP",
        zip_code: "00000-000",
        latitude: -23.52,
        longitude: -46.66
      },
      min_price: 500000,
      price_per_private_square_meter: 12500,
      min_area: 40,
      max_area: 48,
      min_bedrooms: 1,
      max_bedrooms: 2,
      min_suites: 0,
      max_suites: 1,
      min_parking: 0,
      max_parking: 1,
      stock: 10,
      finality: "Residencial",
      default_image: {
        "520x280": "https://example.invalid/mock-building.jpg"
      },
      orulo_url: "https://www.orulo.com.br/",
      updated_at: "30/09/2026 00:00:00"
    }
  ],
  total: 1,
  page: 1,
  total_pages: 1,
  results_limit_exceeded: false
};
