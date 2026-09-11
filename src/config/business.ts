export const BUSINESS_INFO = {
  name: "Eco Mitra",
  tagline: "Softness with Nature's Care",
  category: "Premium Tissue Paper Products",
  phone: "+91 9106559673",
  formattedPhone: "+91 9106559673",
  whatsapp: "919106559673",
  whatsappDisplay: "+91 9106559673",
  email: "fumakiyayagnesh1998@gmail.com",
  salesEmail: "fumakiyayagnesh1998@gmail.com",
  address: "G-1004, Orchid Valley, ClubO7 Road,Shela,Ahmedabad - 380058",
  googleMapsUrl: "https://maps.app.goo.gl/XdVoY9yy6hWDYtfA9?g_st=ic",
  workingHours: "Monday – Sunday: 9:00 AM – 9:00 PM",
  socials: {
    facebook: "https://facebook.com/ecomitra",
    instagram: "https://instagram.com/ecomitra.official",
    linkedin: "https://linkedin.com/company/ecomitra",
    twitter: "https://twitter.com/ecomitra",
  },
  stats: {
    happyClients: "500+",
    dailyProduction: "10,000+",
    purityGrade: "100% Virgin",
    citiesCovered: "50+",
  }
};

export const getWhatsAppLink = (message?: string) => {
  const defaultMsg = `Hello ${BUSINESS_INFO.name}, I am interested in your tissue paper products for bulk / business order. Please share details.`;
  const text = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${text}`;
};
