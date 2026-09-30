function valueOrNull(value) {
  return value === undefined ? null : value;
}

export function normalizeBuilding(item = {}) {
  return {
    orulo_id: valueOrNull(item.id),
    name: valueOrNull(item.name),
    developer: valueOrNull(item.developer?.name),
    publisher: valueOrNull(item.publisher?.name),
    status: valueOrNull(item.status),
    stage: valueOrNull(item.stage),
    finality: valueOrNull(item.finality),
    address: {
      area: valueOrNull(item.address?.area),
      city: valueOrNull(item.address?.city),
      state: valueOrNull(item.address?.state),
      street: valueOrNull(item.address?.street),
      number: valueOrNull(item.address?.number),
      zip_code: valueOrNull(item.address?.zip_code),
      latitude: valueOrNull(item.address?.latitude),
      longitude: valueOrNull(item.address?.longitude)
    },
    min_price: valueOrNull(item.min_price),
    price_per_private_square_meter: valueOrNull(item.price_per_private_square_meter),
    min_area: valueOrNull(item.min_area),
    max_area: valueOrNull(item.max_area),
    min_bedrooms: valueOrNull(item.min_bedrooms),
    max_bedrooms: valueOrNull(item.max_bedrooms),
    min_suites: valueOrNull(item.min_suites),
    max_suites: valueOrNull(item.max_suites),
    min_parking: valueOrNull(item.min_parking),
    max_parking: valueOrNull(item.max_parking),
    stock: valueOrNull(item.stock),
    image: valueOrNull(
      item.default_image?.["1024x1024"] ||
      item.default_image?.["520x280"] ||
      item.default_image?.["200x140"]
    ),
    orulo_url: valueOrNull(item.orulo_url),
    updated_at: valueOrNull(item.updated_at)
  };
}

export function normalizeBuildingList(payload = {}) {
  const buildings = Array.isArray(payload.buildings) ? payload.buildings : [];

  return {
    buildings: buildings.map(normalizeBuilding),
    pagination: {
      total: valueOrNull(payload.total),
      page: valueOrNull(payload.page),
      total_pages: valueOrNull(payload.total_pages),
      results_limit_exceeded: Boolean(payload.results_limit_exceeded)
    }
  };
}
