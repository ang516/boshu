'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const artifacts = [
  {
    id: 1,
    name: '长沙子弹库帛书',
    era: '战国时期',
    value: '现存最早的帛书文献之一',
    image: '/ancient-silk-scroll.jpg'
  },
  {
    id: 2,
    name: '敦煌壁画残片',
    era: '唐代',
    value: '佛教艺术精品代表',
    image: '/dunhuang-mural.jpg'
  },
  {
    id: 3,
    name: '商代甲骨文',
    era: '商代',
    value: '中国最早的成熟文字记录',
    image: '/oracle-bone.jpg'
  }
]

export default function ArtifactShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const { ref, inView } = useInView({ threshold: 0.1 })

  useEffect(() => {
    if (!isAutoPlay || !inView) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === artifacts.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlay, inView])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? artifacts.length - 1 : prev - 1))
    setIsAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === artifacts.length - 1 ? 0 : prev + 1))
    setIsAutoPlay(false)
  }

  const current = artifacts[currentIndex]

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* 轮播展示 */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-[#2A2A28] mb-6 animate-slide-in-left">文物碎片复原展示</h2>
            <div className="relative">
              <div className="scan-line relative aspect-square rounded-lg overflow-hidden border-2 border-[#0A5C63] bg-gradient-to-br from-blue-50 to-white flex items-center justify-center group">
                <img
                  src={current.image || "/placeholder.svg"}
                  alt={current.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* 导航按钮 */}
              <button
                onClick={goToPrevious}
                onMouseEnter={() => setIsAutoPlay(false)}
                onMouseLeave={() => setIsAutoPlay(true)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-[#0A5C63] hover:text-white transition card-transition hover:shadow-xl"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                onMouseEnter={() => setIsAutoPlay(false)}
                onMouseLeave={() => setIsAutoPlay(true)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-[#0A5C63] hover:text-white transition card-transition hover:shadow-xl"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* 信息卡片 */}
              <div className="mt-6 p-4 bg-gradient-to-r from-[#0A5C63]/5 to-[#F2C94C]/5 rounded-lg border border-[#0A5C63]/20 card-transition animate-fade-in-up">
                <h3 className="text-xl font-bold text-[#2A2A28] animate-title-reveal">{current.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{current.era}</p>
                <p className="text-[#C82C20] font-medium mt-2">· {current.value}</p>
              </div>

              {/* 指示器 */}
              <div className="flex justify-center gap-2 mt-4">
                {artifacts.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCurrentIndex(i)
                      setIsAutoPlay(false)
                    }}
                    className={`rounded-full transition-all duration-300 ${
                      i === currentIndex ? 'bg-[#0A5C63] w-6 h-2' : 'bg-gray-300 w-2 h-2 hover:bg-[#0A5C63]'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 学术资源入口 */}
          <div className="space-y-4 animate-slide-in-right">
            <h3 className="text-2xl font-bold text-[#2A2A28]">学术研究入口</h3>

            {/* 数据库检索 */}
            <div className="glow-border card-transition p-5 bg-gradient-to-br from-[#0A5C63]/5 to-white rounded-lg border border-[#0A5C63]/30 hover:shadow-lg">
              <h4 className="font-bold text-[#0A5C63] mb-3">文物数据库检索</h4>
              <div className="space-y-2">
                <input type="text" placeholder="按年代" className="w-full px-3 py-2 border border-gray-300 rounded text-sm transition focus:ring-2 focus:ring-[#0A5C63]" />
                <input type="text" placeholder="按类型" className="w-full px-3 py-2 border border-gray-300 rounded text-sm transition focus:ring-2 focus:ring-[#0A5C63]" />
                <input type="text" placeholder="按地点" className="w-full px-3 py-2 border border-gray-300 rounded text-sm transition focus:ring-2 focus:ring-[#0A5C63]" />
              </div>
            </div>

            {/* 虚拟修复案例 */}
            <div className="glow-border card-transition p-5 bg-white rounded-lg border border-gray-200 hover:shadow-lg">
              <h4 className="font-bold text-[#0A5C63] mb-3">虚拟修复案例</h4>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-square bg-gray-200 rounded overflow-hidden cursor-pointer hover:shadow-md transition group">
                    <img
                      src={`/artifact-.jpg?key=932xd&height=100&width=100&query=artifact-${i}`}
                      alt="案例"
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* 学术论文 */}
            <div className="glow-border card-transition p-5 bg-white rounded-lg border border-gray-200 hover:shadow-lg">
              <h4 className="font-bold text-[#0A5C63] mb-3">最新论文</h4>
              <div className="space-y-2 text-sm">
                <p className="text-gray-700 hover:text-[#0A5C63] cursor-pointer link-underline">文物数字化保护新进展</p>
                <p className="text-gray-700 hover:text-[#0A5C63] cursor-pointer link-underline">AI在文物修复中的应用</p>
                <p className="text-gray-700 hover:text-[#0A5C63] cursor-pointer link-underline">三维扫描技术研究</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
