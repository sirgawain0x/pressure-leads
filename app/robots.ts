import type { MetadataRoute } from "next"

const CANONICAL_SITE_URL = "https://www.staugustinepressurewashingpros.com"

function resolveSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (fromEnv) return fromEnv.replace(/\/$/, "")
  if (process.env.VERCEL_ENV === "production") return CANONICAL_SITE_URL
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  return "http://localhost:3000"
}

export default function robots(): MetadataRoute.Robots {
  const siteUrl = resolveSiteUrl()

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
