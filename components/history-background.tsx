'use client'

import React, { useState } from 'react'
import { Play, Pause } from 'lucide-react'

interface HistoryBackgroundProps {
  artifact: any
}

export default function HistoryBackground({ artifact }: HistoryBackgroundProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
      <h2 className="text-3xl font-bold text-[#2A2A28] mb-8">历史背景解读</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 文字解读 */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-[#0A5C63] mb-3">历史背景</h3>
            <p className="text-gray-700 leading-relaxed">
              长沙子弹库帛书成书于<span className="text-[#C82C20] font-semibold">战国中晚期</span>，是目前已知最早的帛书文献之一。该文献的发现为研究中国古代科学技术提供了珍贵的第一手资料。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#0A5C63] mb-3">主要内容</h3>
            <div className="space-y-2">
              <p className="flex items-start gap-2">
                <span className="text-[#F2C94C] font-bold mt-1">·</span>
                <span className="text-gray-700"><span className="font-semibold">天文知识：</span>记录了古代天体观测和星象学研究</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-[#F2C94C] font-bold mt-1">·</span>
                <span className="text-gray-700"><span className="font-semibold">历法体系：</span>详细描述了战国时期的历法计算方法</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-[#F2C94C] font-bold mt-1">·</span>
                <span className="text-gray-700"><span className="font-semibold">占卜术数：</span>包含多种占卜方法和预测理论</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-[#F2C94C] font-bold mt-1">·</span>
                <span className="text-gray-700"><span className="font-semibold">医学资料：</span>记录了部分中医理论的早期形式</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#0A5C63] mb-3">文化价值</h3>
            <p className="text-gray-700 leading-relaxed">
              该帛书是研究中国古代哲学、科学、宗教的重要文献，对理解战国时期的思想体系和知识结构具有重要意义。其精妙的文字和图案设计也反映了当时手工艺的高度发展。
            </p>
          </div>
        </div>

        {/* 场景动画 */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-full aspect-video rounded-lg border-2 border-[#0A5C63] bg-gradient-to-b from-amber-100 to-orange-50 flex flex-col items-center justify-center overflow-hidden relative">
            {/* 模拟历史场景 */}
            <div className="absolute inset-0 opacity-20">
              <img
                src="/ancient-warring-states-period-scribes-writing.jpg"
                alt="历史场景"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 text-center">
              <div className="text-5xl mb-4">📜</div>
              <h4 className="text-lg font-bold text-[#0A5C63] mb-2">战国时期帛书制作场景</h4>
              <p className="text-sm text-gray-600 mb-6">模拟古代书写过程的数字化展示</p>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-2 px-6 py-3 bg-[#0A5C63] text-white rounded-lg hover:bg-[#063536] transition"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isPlaying ? '暂停' : '播放'}动画
              </button>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-4 text-center">
            历史场景动画自动循环播放，点击按钮可控制播放状态
          </p>
        </div>
      </div>
    </div>
  )
}
