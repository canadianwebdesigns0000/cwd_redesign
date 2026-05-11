// Re-export from client config for backwards compatibility.
import { getConfig, type ClientNavItem, type ClientSocialLink } from "./client-config";

export type NavItem = ClientNavItem;

const config = getConfig();

export const navigation: NavItem[] = config.navigation;

export const serviceAreas: string[] = config.cities.map((c) => c.name);

export const socialLinks: ClientSocialLink[] = config.socialLinks;
