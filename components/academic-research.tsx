'use client'

import React, { useState } from 'react'
import { Download, Play } from 'lucide-react'

interface AcademicResearchProps {
  artifact: any
}

export default function AcademicResearch({ artifact }: AcademicResearchProps) {
  const [activeTab, setActiveTab] = useState('papers')

  const papers = [
    {
      id: 1,
      title: '长沙子弹库帛书的天文知识研究',
      authors: '李明、王张两位',
      journal: '《中国科技史杂志》',
      year: 2023,
      abstract: '本文详细分析了帛书中的天文观测记录，揭示了战国时期的星象学理论体系...'
    },
    {
      id: 2,
      title: '战国帛书文献的保护与数字化',
      authors: '张三、李四等',
      journal: '《文物保护学报》',
      year: 2022,
      abstract: '探讨了古代帛书的现代化保护技术和数字化复原方法...'
    },
    {
      id: 3,
      title: '帛书手工艺工艺的考古学分析',
      authors: '王五、赵六等',
      journal: '《考古学年刊》',
      year: 2023,
      abstract: '通过微观分析研究帛书的织造技术、染料成分和书写工具...'
    }
  ]

  const experts = [
    {
      id: 1,
      name: '古代科技史专家讲座',
      speaker: '陈教授',
      duration: '45分钟',
      image: '/expert-lecture.jpg'
    },
    {
      id: 2,
      name: '帛书文献解读专题',
      speaker: '李研究员',
      duration: '60分钟',
      image: '/expert-seminar.jpg'
    }
  ]

  return (
    <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
      <h2 className="text-3xl font-bold text-[#2A2A28] mb-8">学术研究资源</h2>

      {/* 标签页切换 */}
      <div className="flex gap-6 border-b-2 border-gray-200 mb-8">
        <button
          onClick={() => setActiveTab('papers')}
          className={`pb-4 font-semibold transition ${
            activeTab === 'papers'
              ? 'text-[#0A5C63] border-b-2 border-[#0A5C63]'
              : 'text-gray-600 hover:text-[#0A5C63]'
          }`}
        >
          📄 相关论文（3篇）
        </button>
        <button
          onClick={() => setActiveTab('reports')}
          className={`pb-4 font-semibold transition ${
            activeTab === 'reports'
              ? 'text-[#0A5C63] border-b-2 border-[#0A5C63]'
              : 'text-gray-600 hover:text-[#0A5C63]'
          }`}
        >
          📋 考古报告（2份）
        </button>
        <button
          onClick={() => setActiveTab('videos')}
          className={`pb-4 font-semibold transition ${
            activeTab === 'videos'
              ? 'text-[#0A5C63] border-b-2 border-[#0A5C63]'
              : 'text-gray-600 hover:text-[#0A5C63]'
          }`}
        >
          🎬 专家讲座（2个）
        </button>
      </div>

      {/* 论文列表 */}
      {activeTab === 'papers' && (
        <div className="space-y-6">
          {papers.map((paper) => (
            <div key={paper.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
              <h3 className="font-bold text-lg text-[#0A5C63] mb-2">{paper.title}</h3>
              <p className="text-sm text-gray-600 mb-3">
                {paper.authors} · <span className="font-medium">{paper.journal}</span> · {paper.year}
              </p>
              <p className="text-gray-700 mb-4 line-clamp-2">{paper.abstract}</p>
              <button className="flex items-center gap-2 text-[#0A5C63] hover:text-[#C82C20] font-medium text-sm transition">
                <Download className="w-4 h-4" />
                下载论文
              </button>
            </div>
          ))}
        </div>
      )}

      {/* 考古报告 */}
      {activeTab === 'reports' && (
        <div className="space-y-4">
          {[1, 2].map((i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition flex items-center justify-between">
              <div>
                <h3 className="font-bold text-[#0A5C63]">战国帛书出土与保护报告 - 第{i}卷</h3>
                <p className="text-sm text-gray-600 mt-1">考古学研究所 · 2023年</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#0A5C63] text-white rounded-lg hover:bg-[#063536] transition">
                <Download className="w-4 h-4" />
                查看
              </button>
            </div>
          ))}
        </div>
      )}

      {/* 专家讲座 */}
      {activeTab === 'videos' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experts.map((expert) => (
            <div key={expert.id} className="glow-border rounded-lg overflow-hidden border border-gray-200">
              <div className="relative aspect-video bg-gray-300 flex items-center justify-center group cursor-pointer">
                <img src={expert.image || "/placeholder.svg"} alt={expert.name} className="w-full h-full object-cover" />
                <button className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition">
                  <Play className="w-12 h-12 text-white" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-[#0A5C63]">{expert.name}</h3>
                <p className="text-sm text-gray-600 mt-1">主讲：{expert.speaker}</p>
                <p className="text-sm text-gray-500">时长：{expert.duration}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
