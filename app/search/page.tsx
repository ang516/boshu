'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useState, useEffect, Suspense } from 'react'
import { searchArtifacts, artifactsDatabase } from '@/lib/artifacts-database'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Search, Filter } from 'lucide-react'
import Link from 'next/link'

function SearchContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const query = searchParams.get('q') || ''
  
  const [results, setResults] = useState<any[]>([])
  const [filteredResults, setFilteredResults] = useState<any[]>([])
  const [showFilters, setShowFilters] = useState(false)
  const [selectedType, setSelectedType] = useState('')
  const [selectedEra, setSelectedEra] = useState('')

  useEffect(() => {
    const searchResults = searchArtifacts(query, {
      type: selectedType || undefined,
      era: selectedEra || undefined
    })
    setResults(searchResults)
    setFilteredResults(searchResults)
  }, [query, selectedType, selectedEra])

  const artifactTypes = [...new Set(artifactsDatabase.map(a => a.type))]
  const eras = [...new Set(artifactsDatabase.map(a => a.era))]

  return (
    <main className="min-h-screen bg-stone-50 cloud-pattern">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 搜索栏 */}
        <div className="mb-8">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                defaultValue={query}
                onChange={(e) => router.push(`/search?q=${e.target.value}`)}
                placeholder="搜索文物..."
                className="w-full px-5 py-3 border-2 border-[#0A5C63] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A5C63] focus:ring-offset-2"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0A5C63]" />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 py-3 bg-white border-2 border-[#0A5C63] text-[#0A5C63] rounded-lg font-medium hover:bg-[#0A5C63] hover:text-white transition flex items-center gap-2"
            >
              <Filter className="w-5 h-5" />
              筛选
            </button>
          </div>

          {showFilters && (
            <div className="mt-4 p-6 bg-white rounded-lg border-2 border-[#0A5C63] glow-border">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#2A2A28] mb-2">文物类型</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A5C63]"
                  >
                    <option value="">全部类型</option>
                    {artifactTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2A2A28] mb-2">年代</label>
                  <select
                    value={selectedEra}
                    onChange={(e) => setSelectedEra(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A5C63]"
                  >
                    <option value="">全部年代</option>
                    {eras.map(era => (
                      <option key={era} value={era}>{era}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 结果统计 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#2A2A28]">
            搜索结果 <span className="text-[#0A5C63]">（{filteredResults.length}个）</span>
          </h2>
          {query && <p className="text-gray-600 mt-2">搜索关键词：「{query}」</p>}
        </div>

        {filteredResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResults.map((artifact) => (
              <Link key={artifact.id} href={`/artifact/${artifact.id}`}>
                <div className="glow-border h-full p-6 bg-white rounded-lg border border-gray-200 cursor-pointer hover:shadow-lg transition flex flex-col">
                  <div className="w-full aspect-square rounded-lg mb-4 overflow-hidden bg-gray-200">
                    <img
                      src={artifact.image || "/placeholder.svg"}
                      alt={artifact.name}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-[#0A5C63] mb-2">{artifact.name}</h3>

                  <div className="space-y-2 text-sm text-gray-600 mb-4 flex-1">
                    <p>
                      <span className="font-medium">年代：</span>
                      <span className="text-[#0A5C63]">{artifact.era}</span>
                    </p>
                    <p>
                      <span className="font-medium">类型：</span>
                      <span>{artifact.type}</span>
                    </p>
                    <p>
                      <span className="font-medium">地点：</span>
                      <span>{artifact.location}</span>
                    </p>
                  </div>

                  <p className="text-gray-700 text-sm line-clamp-2 mb-4">{artifact.description}</p>

                  <div className="flex gap-2 flex-wrap">
                    {artifact.tags.slice(0, 3).map((tag: string) => (
                      <span
                        key={tag}
                        className="inline-block px-3 py-1 bg-[#0A5C63]/10 text-[#0A5C63] text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="mt-4 w-full py-2 bg-[#0A5C63] text-white rounded-lg hover:bg-[#063536] transition font-medium">
                    查看详情
                  </button>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-[#2A2A28] mb-2">未找到相关文物</h3>
            <p className="text-gray-600 mb-6">
              {query ? `未能找到与"${query}"相关的文物` : '请输入搜索关键词'}
            </p>
            <Link href="/">
              <button className="px-6 py-2 bg-[#0A5C63] text-white rounded-lg hover:bg-[#063536] transition">
                返回首页
              </button>
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>加载中...</div>}>
      <SearchContent />
    </Suspense>
  )
}
