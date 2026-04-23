import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = "27665884466";
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

export function buildWhatsAppURL(message: string) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

export const INSTAGRAM_URL = "https://www.instagram.com/weluvsneakercare/";
export const LOCATION = "96 Vorster Ave, Glenanda, Johannesburg";
export const PHONE = "+27 66 588 4466";
