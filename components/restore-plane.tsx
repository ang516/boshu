'use client'

import React, { useState } from 'react'
import { ZoomIn, ZoomOut, Move } from 'lucide-react'

interface RestorePlaneProps {
  artifact: any
}

export default function RestorePlane({ artifact }: RestorePlaneProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [layer, setLayer] = useState('all')
  const [zoom, setZoom] = useState(100)

  return (
    <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm animate-fade-in-up">
      <h2 className="text-3xl font-bold text-[#2A2A28] mb-2 animate-title-reveal">数字复原展示</h2>
      <p className="text-gray-600 mb-6">支持鼠标滚轮缩放、拖拽查看细节</p>

      {/* 层级切换按钮 */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {[
          { id: 'all', label: '完整复原' },
          { id: 'fragments', label: '碎片原始' },
          { id: 'restoration', label: '数字补全' },
          { id: 'annotation', label: '解读标注' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setLayer(item.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition card-transition ${
              layer === item.id
                ? 'bg-[#0A5C63] text-white shadow-lg'
                : 'bg-gray-100 text-[#2A2A28] hover:bg-gray-200'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* 对比滑动器 */}
      <div className="mb-8">
        <div className="relative w-full overflow-hidden rounded-lg border-2 border-[#0A5C63] h-96 scan-line bg-gradient-to-br from-blue-50 to-white flex items-center justify-center group">
          <div className="w-full h-full flex">
            {/* 原始状态 */}
            <div className="flex-1 bg-gray-100 flex items-center justify-center relative overflow-hidden">
              <img
                src={`/oracle-bone.jpg`}
                alt="原始碎片"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{ opacity: 0.8 }}
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 text-white text-xs rounded animate-fade-in-up">
                原始碎片
              </div>
            </div>

            {/* 复原状态 */}
            <div
              className="flex-1 flex items-center justify-center relative overflow-hidden transition-all duration-300"
              style={{ width: `${100 - sliderPosition}%` }}
            >
              <img
                src={`/ancient-silk-scroll.jpg`}
                alt="复原图"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-[#0A5C63]/80 text-white text-xs rounded animate-fade-in-up">
                数字复原
              </div>
            </div>

            {/* 滑动条 */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(parseInt(e.target.value))}
              className="absolute w-full h-full opacity-0 cursor-ew-resize z-10"
            />
            <div
              className="absolute top-0 h-full w-1 bg-white shadow-lg cursor-ew-resize transition-all"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center animate-pulse-glow">
                <span className="text-[#0A5C63] text-xs font-bold">&lt;&gt;</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 控制按钮 */}
      <div className="flex gap-4 mb-6 flex-wrap">
        <button className="flex items-center gap-2 px-4 py-2 border border-[#0A5C63] text-[#0A5C63] rounded-lg hover:bg-[#0A5C63] hover:text-white transition card-transition ripple-button">
          <ZoomIn className="w-4 h-4" />
          放大
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border border-[#0A5C63] text-[#0A5C63] rounded-lg hover:bg-[#0A5C63] hover:text-white transition card-transition ripple-button">
          <ZoomOut className="w-4 h-4" />
          缩小
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border border-[#0A5C63] text-[#0A5C63] rounded-lg hover:bg-[#0A5C63] hover:text-white transition card-transition ripple-button">
          <Move className="w-4 h-4" />
          拖拽模式
        </button>
      </div>

      {/* 复原技术说明 */}
      <div className="bg-gradient-to-r from-[#0A5C63]/5 to-[#F2C94C]/5 rounded-lg p-4 border border-[#0A5C63]/20 card-transition hover:shadow-md">
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-[#0A5C63]">复原技术：</span>
          基于AI图像修复算法与考古学资料补全。该复原过程使用了深度学习模型对缺失部分进行推理填补，同时参考了历史文献和考古学研究成果，确保复原的科学性和准确性。
        </p>
      </div>
    </div>
  )
}
