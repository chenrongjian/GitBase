// pages/index.js
import fs from 'fs'
import path from 'path'
import { getSortedPostsData } from '@/lib/posts'
import ResourceList from '@/components/ResourceList'
import ArticleList from '@/components/ArticleList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MCPServer - Developer Navigation Hub',
  description: 'A Next.js-based developer navigation platform with curated technical resources, using GitHub API for content management. No database required.',
}

export default function Home() {
  const resourcesPath = path.join(process.cwd(), 'data', 'json', 'resources.json')
  const resources = JSON.parse(fs.readFileSync(resourcesPath, 'utf8'))
  const allPostsData = getSortedPostsData().slice(0, 6)

  return (
    <div className="container mx-auto py-12 space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          MCPServer
        </h1>
        <h2 className="text-2xl tracking-tighter sm:text-3xl md:text-3xl lg:text-3xl">Curated Developer Tools & Technical Resources</h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
          MCPServer is a minimalist developer navigation hub built with Next.js and Tailwind CSS, featuring handpicked links to essential programming tools, documentation references, and technical resources powered by GitHub API integration.
        </p>
      </section>

      <ResourceList resources={resources} />
      <ArticleList articles={allPostsData} />
    </div>
  )
}