'use client'

import { useState } from 'react'
import Header from '@/components/header'
import SearchSection from '@/components/search-section'
import ArtifactShowcase from '@/components/artifact-showcase'
import AcademicHub from '@/components/academic-hub'
import HotRecommendations from '@/components/hot-recommendations'
import Footer from '@/components/footer'

export default function Home() {
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = (query: string, type: string) => {
    setIsSearching(true)
    // 模拟搜索结果
    setTimeout(() => {
      setSearchResults([
        {
          id: 1,
          name: '长沙子弹库帛书',
          era: '战国时期',
          location: '湖南长沙',
          image: '/ancient-scroll.jpg',
          description: '现存最早的帛书文献之一'
        }
      ])
      setIsSearching(false)
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-stone-50 cloud-pattern">
      <Header />
      <SearchSection onSearch={handleSearch} isSearching={isSearching} />
      <ArtifactShowcase />
      <AcademicHub />
      <HotRecommendations />
      <Footer />
    </main>
  )
}
