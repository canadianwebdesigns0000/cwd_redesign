// Client Config — the single source of truth for all business data.
// Every client site is driven by an implementation of this interface.

export interface ClientAddress {
  street: string;
  city: string;
  province: string;
  postalCode: string;
}

export interface ClientService {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  icon?: string;
}

export interface ClientCity {
  name: string;
  province: string;
  slug: string;
}

export interface ClientNavItem {
  label: string;
  href: string;
  children?: ClientNavItem[];
}

export interface ClientSocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface ClientConfig {
  // Business Identity
  businessName: string;
  businessNameLegal?: string;
  tagline?: string;
  industry: string;
  president?: string;
  founded?: number;
  teamSize?: number;

  // Reputation
  rating?: number;
  reviewCount?: number;

  // Contact
  phone: string;
  emails: {
    support: string;
    sales?: string;
    careers?: string;
  };
  addresses: Record<string, ClientAddress>;
  businessHours: string;

  // Web / Analytics
  domain: string;
  gaId?: string;

  // Branding
  logo?: string;
  brandColors?: {
    primary: string;
    secondary: string;
    accent: string;
  };

  // Content
  services: ClientService[];
  cities: ClientCity[];

  // Navigation
  navigation: ClientNavItem[];
  socialLinks: ClientSocialLink[];

  // Meta
  specialRequests?: string;
  guaranteeDeadline?: string;
}

// Active config — import cwd-config by default.
// To switch clients, change this import.
import { cwdConfig } from "./cwd-config";

let activeConfig: ClientConfig = cwdConfig;

export function getConfig(): ClientConfig {
  return activeConfig;
}

export function setConfig(config: ClientConfig): void {
  activeConfig = config;
}
