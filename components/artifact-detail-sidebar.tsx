'use client'

import React from 'react'
import { ChevronRight } from 'lucide-react'

interface ArtifactDetailSidebarProps {
  artifact: any
  onModuleSelect: (moduleId: string) => void
}

export default function ArtifactDetailSidebar({ artifact, onModuleSelect }: ArtifactDetailSidebarProps) {
  const modules = [
    { id: 'restore', label: '数字复原', icon: '🔍' },
    { id: 'history', label: '历史背景', icon: '📜' },
    { id: 'reference', label: '参照对比', icon: '🔗' },
    { id: 'research', label: '学术研究', icon: '📚' },
    { id: 'interaction', label: '用户互动', icon: '💬' }
  ]

  return (
    <aside className="space-y-6">
      {/* 文物基础信息卡片 */}
      <div className="bronze-border bg-white rounded-lg p-4 sm:p-6 border-2 border-[#0A5C63] card-transition hover:shadow-lg">
        <img
          src={artifact.image || "/placeholder.svg"}
          alt={artifact.name}
          className="w-full aspect-square object-cover rounded-lg mb-4"
        />
        <h2 className="text-xl sm:text-2xl font-bold text-[#0A5C63] mb-3" style={{ fontFamily: 'serif' }}>
          {artifact.name}
        </h2>
        
        <div className="space-y-2 sm:space-y-3 text-sm">
          <div className="pb-3 border-b border-gray-200">
            <p className="text-gray-600 text-xs sm:text-sm">年代</p>
            <p className="font-medium text-[#2A2A28]">{artifact.era}</p>
          </div>
          <div className="pb-3 border-b border-gray-200">
            <p className="text-gray-600 text-xs sm:text-sm">出土地点</p>
            <p className="font-medium text-[#2A2A28]">{artifact.location}</p>
          </div>
          <div className="pb-3 border-b border-gray-200">
            <p className="text-gray-600 text-xs sm:text-sm">现存机构</p>
            <p className="font-medium text-[#2A2A28] text-sm">{artifact.institution}</p>
          </div>
          <div className="pb-3 border-b border-gray-200">
            <p className="text-gray-600 text-xs sm:text-sm">文物类型</p>
            <p className="font-medium text-[#2A2A28]">{artifact.type}</p>
          </div>
          <div>
            <p className="text-gray-600 text-xs sm:text-sm">尺寸</p>
            <p className="font-medium text-[#2A2A28] text-sm">{artifact.dimensions}</p>
          </div>
        </div>
      </div>

      {/* 详情页导航 */}
      <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
        <h3 className="font-bold text-[#0A5C63] mb-3 text-xs sm:text-sm uppercase tracking-wide">详情导航</h3>
        <div className="space-y-2">
          {modules.map((module) => (
            <button
              key={module.id}
              onClick={() => onModuleSelect(module.id)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#0A5C63]/5 transition text-left group card-transition"
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-lg flex-shrink-0">{module.icon}</span>
                <span className="text-xs sm:text-sm font-medium text-[#2A2A28] group-hover:text-[#0A5C63] truncate">
                  {module.label}
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#0A5C63] flex-shrink-0" />
            </button>
          ))}
        </div>
      </div>
    </aside>
  )
}
