import type { MetadataRoute } from 'next'
import { site } from '@/content/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/servicios', '/bodas', '/sobre-mi', '/contacto']
  return routes.map(route => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
