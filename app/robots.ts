import { MetadataRoute } from 'next'
import { SITE_INFO } from '@/lib/constants'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_INFO.domain}/sitemap.xml`,
  }
}
