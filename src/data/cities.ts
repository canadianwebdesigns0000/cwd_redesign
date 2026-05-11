// Re-export from client config for backwards compatibility.
import { getConfig, type ClientCity } from "@/lib/client-config";

export type CityData = ClientCity;

export const cities: CityData[] = getConfig().cities;

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}
