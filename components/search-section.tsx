'use client'

import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

interface SearchSectionProps {
  onSearch?: (query: string, type: string) => void
  isSearching?: boolean
}

export default function SearchSection({ onSearch, isSearching }: SearchSectionProps) {
  const [query, setQuery] = useState('')
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [filters, setFilters] = useState({
    type: '',
    era: '',
    location: '',
    institution: ''
  })
  const router = useRouter()

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  const handleAdvancedSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    params.append('q', query)
    if (filters.type) params.append('type', filters.type)
    if (filters.era) params.append('era', filters.era)
    if (filters.location) params.append('location', filters.location)
    router.push(`/search?${params.toString()}`)
  }

  return (
    <section className="bg-gradient-to-b from-white to-stone-50 py-16 sm:py-24 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 搜索框 */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#2A2A28] mb-4" style={{ fontFamily: 'serif' }}>
            探寻文明的印记
          </h2>
          <p className="text-center text-gray-600 mb-8">探索数千件文物的数字化复原与深度解读</p>

          <form onSubmit={handleSearch} className="flex gap-3 flex-col sm:flex-row max-w-2xl mx-auto">
            <div className="flex-1 relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="输入文物名称/年代/出土地点（如'长沙子弹库帛书'）"
                className="w-full px-5 py-3 border-2 border-[#0A5C63] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A5C63] focus:ring-offset-2 bg-white text-[#2A2A28]"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0A5C63] pointer-events-none" />
            </div>
            <Button
              type="submit"
              disabled={isSearching || !query.trim()}
              className="bg-[#0A5C63] hover:bg-[#063536] text-white px-6 py-3 rounded-lg font-medium transition"
            >
              {isSearching ? '搜索中...' : '普通搜索'}
            </Button>
            <Button
              type="button"
              onClick={() => setShowAdvanced(!showAdvanced)}
              variant="outline"
              className="border-2 border-[#0A5C63] text-[#0A5C63] hover:bg-[#0A5C63] hover:text-white px-6 py-3 rounded-lg font-medium transition"
            >
              高级搜索
            </Button>
          </form>

          {showAdvanced && (
            <form onSubmit={handleAdvancedSearch} className="mt-6 p-6 bg-white rounded-lg border-2 border-[#0A5C63] glow-border max-w-2xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-[#2A2A28] mb-2">文物类型</label>
                  <select
                    value={filters.type}
                    onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A5C63]"
                  >
                    <option value="">全部类型</option>
                    <option value="帛书文献">帛书文献</option>
                    <option value="青铜兵器">青铜兵器</option>
                    <option value="陶塑">陶塑</option>
                    <option value="壁画">壁画</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2A2A28] mb-2">年代</label>
                  <select
                    value={filters.era}
                    onChange={(e) => setFilters({ ...filters, era: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A5C63]"
                  >
                    <option value="">全部年代</option>
                    <option value="商代">商代</option>
                    <option value="春秋战国">春秋战国</option>
                    <option value="战国时期">战国时期</option>
                    <option value="秦代">秦代</option>
                    <option value="西汉">西汉</option>
                    <option value="唐代">唐代</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2A2A28] mb-2">出土地点</label>
                  <input
                    type="text"
                    value={filters.location}
                    onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                    placeholder="输入地点"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A5C63]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2A2A28] mb-2">收藏机构</label>
                  <input
                    type="text"
                    value={filters.institution}
                    onChange={(e) => setFilters({ ...filters, institution: e.target.value })}
                    placeholder="输入机构"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A5C63]"
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-[#0A5C63] hover:bg-[#063536] text-white py-2 rounded-lg font-medium transition"
              >
                应用筛选
              </Button>
            </form>
          )}
        </div>

        {/* 功能快捷入口 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: '🗺️', title: '文物地图', desc: '全国文物分布可视化' },
            { icon: '✨', title: '虚拟修复', desc: '高精度数字复原展示' },
            { icon: '📚', title: '学术数据库', desc: '海量研究资源集合' }
          ].map((item, i) => (
            <div key={i} className="glow-border p-6 bg-white rounded-lg border border-gray-200 text-center cursor-pointer hover:shadow-lg transition">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-[#2A2A28] mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
