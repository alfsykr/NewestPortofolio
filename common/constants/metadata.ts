const getBaseUrl = () => {
  if (process.env.DOMAIN) {
    return process.env.DOMAIN.startsWith("http")
      ? process.env.DOMAIN
      : `https://${process.env.DOMAIN}`;
  }
  if (process.env.NEXT_PUBLIC_DOMAIN) {
    return process.env.NEXT_PUBLIC_DOMAIN.startsWith("http")
      ? process.env.NEXT_PUBLIC_DOMAIN
      : `https://${process.env.NEXT_PUBLIC_DOMAIN}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "https://satriabahari.my.id";
};

export const baseUrl = getBaseUrl();

export const METADATA = {
  creator: "M. Alfi Syukri",
  description: "Personal website, portfolio, blog",
  keyword: "alfi, alfi syukri",
  authors: {
    name: "M. Alfi Syukri",
    url: baseUrl,
  },
  openGraph: {
    url: baseUrl,
    siteName: "M. Alfi Syukri",
    locale: "id-ID",
  },
  exTitle: "| M. Alfi Syukri",
  profile: "/images/satria.jpg",
};
