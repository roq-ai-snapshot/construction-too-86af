const mapping: Record<string, string> = {
  companies: 'company',
  outlets: 'outlet',
  rentals: 'rental',
  stocks: 'stock',
  tools: 'tool',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
