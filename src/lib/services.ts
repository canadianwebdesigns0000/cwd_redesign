// Re-export from client config for backwards compatibility.
import { getConfig, type ClientService } from "./client-config";

export type ServiceData = ClientService;

export const services: ServiceData[] = getConfig().services;
