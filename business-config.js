export const BUSINESS_CONFIG = Object.freeze({
  businessName: "Rahul Mehandi Art",
  tagline: "Bridal & Luxury Mehndi",
  whatsappNumber: "",
  instagramUrl: "",
  email: "",
  city: "",
  hours: ""
});

export function getWhatsAppNumber() {
  const number = BUSINESS_CONFIG.whatsappNumber.replace(/\D/g, "");
  return /^[1-9]\d{7,14}$/.test(number) ? number : "";
}

export function buildWhatsAppUrl(message) {
  const number = getWhatsAppNumber();
  if (!number) return "";

  const url = new URL(`https://wa.me/${number}`);
  url.searchParams.set("text", message);
  return url.toString();
}
