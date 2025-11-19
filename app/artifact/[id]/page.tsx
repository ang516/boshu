'use client'

import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import Header from '@/components/header'
import ArtifactDetailSidebar from '@/components/artifact-detail-sidebar'
import RestorePlane from '@/components/restore-plane'
import HistoryBackground from '@/components/history-background'
import ReferenceArtifacts from '@/components/reference-artifacts'
import AcademicResearch from '@/components/academic-research'
import InteractionZone from '@/components/interaction-zone'
import Footer from '@/components/footer'

export default function ArtifactDetail() {
  const params = useParams()
  const id = params.id as string
  const [activeModule, setActiveModule] = useState('restore')

  // 模拟文物数据
  const artifact = {
    id: 1,
    name: '长沙子弹库帛书',
    era: '战国时期',
    location: '湖南长沙',
    institution: '湖南省博物馆',
    type: '帛书文献',
    image: '/ancient-silk-scroll.jpg',
    description: '长沙子弹库帛书是一部战国中晚期的重要文献，内容包含天文、历法、占卜等多个领域的知识...',
    discoveryYear: '1973年',
    dimensions: '长约70cm，宽约50cm',
    material: '丝绸',
    condition: '残缺，经过数字修复'
  }

  const scrollToModule = (moduleId: string) => {
    setActiveModule(moduleId)
    const element = document.getElementById(moduleId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-stone-50 cloud-pattern page-transition">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* 左侧固定边栏 - 移动端隐藏，大屏显示 */}
          <div className="hidden lg:block">
            <ArtifactDetailSidebar artifact={artifact} onModuleSelect={scrollToModule} />
          </div>

          {/* 右侧主内容区 */}
          <div className="lg:col-span-3 space-y-8 sm:space-y-12">
            {/* 数字复原区 */}
            <section id="restore" className="scroll-mt-20">
              <RestorePlane artifact={artifact} />
            </section>

            {/* 历史背景解读 */}
            <section id="history" className="scroll-mt-20">
              <HistoryBackground artifact={artifact} />
            </section>

            {/* 参照对比 */}
            <section id="reference" className="scroll-mt-20">
              <ReferenceArtifacts artifact={artifact} />
            </section>

            {/* 学术研究 */}
            <section id="research" className="scroll-mt-20">
              <AcademicResearch artifact={artifact} />
            </section>

            {/* 用户互动 */}
            <section id="interaction" className="scroll-mt-20">
              <InteractionZone artifact={artifact} />
            </section>
          </div>

          {/* 移动端侧边栏 - 悬浮按钮 */}
          <div className="lg:hidden fixed bottom-6 right-6 z-40">
            <button className="bg-[#0A5C63] text-white p-4 rounded-full shadow-lg hover:bg-[#063536] transition animate-float">
              ☰
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
