// Re-export from client config for backwards compatibility.
// Prefer importing { getConfig } from "./client-config" in new code.
import { getConfig } from "./client-config";

const config = getConfig();

export const COMPANY = {
  name: config.businessName,
  president: config.president,
  founded: config.founded,
  teamSize: config.teamSize,
  rating: config.rating,
  reviewCount: config.reviewCount,
  phone: config.phone,
  emails: config.emails as { support: string; careers: string; sales: string },
  addresses: Object.fromEntries(
    Object.entries(config.addresses).map(([key, addr]) => [
      key,
      { street: addr.street, city: addr.city, province: addr.province, postal: addr.postalCode },
    ])
  ) as Record<string, { street: string; city: string; province: string; postal: string }>,
  hours: config.businessHours,
  domain: config.domain,
  ga: config.gaId,
};
