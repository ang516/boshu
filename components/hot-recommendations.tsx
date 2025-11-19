'use client'

import { useInView } from 'react-intersection-observer'

export default function HotRecommendations() {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#2A2A28] mb-12 animate-fade-in-up">热门推荐</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 热门文物榜 */}
          <div className="animate-slide-in-left">
            <h3 className="text-xl font-bold text-[#0A5C63] mb-6">热搜文物排行</h3>
            <div className="space-y-3">
              {[
                { name: '长沙子弹库帛书', heat: '🔥🔥🔥' },
                { name: '敦煌莫高窟壁画', heat: '🔥🔥' },
                { name: '商代甲骨文', heat: '🔥🔥🔥' },
                { name: '兵马俑', heat: '🔥' },
                { name: '越王勾践剑', heat: '🔥🔥' }
              ].map((item, i) => (
                <div
                  key={i}
                  className={`card-transition p-4 bg-stone-50 rounded-lg hover:bg-[#0A5C63]/5 cursor-pointer flex justify-between items-center ${
                    inView ? 'animate-fade-in-up' : ''
                  }`}
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <span className="font-medium text-[#2A2A28]">{i + 1}. {item.name}</span>
                  <span className="animate-float">{item.heat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 编辑推荐 */}
          <div className="animate-slide-in-right">
            <h3 className="text-xl font-bold text-[#0A5C63] mb-6">编辑推荐</h3>
            <div className="bg-gradient-to-br from-[#0A5C63]/10 to-[#F2C94C]/10 rounded-lg p-8 border-2 border-[#0A5C63]/30 card-transition hover:shadow-lg">
              <div className="flex gap-4">
                <img
                  src="/featured-artifact.jpg"
                  alt="推荐文物"
                  className="w-24 h-24 rounded-lg object-cover flex-shrink-0 hover:scale-110 transition duration-300"
                />
                <div>
                  <h4 className="font-bold text-lg text-[#0A5C63] mb-2">长沙子弹库帛书</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    战国时期的珍贵文献，其高精度数字复原展示了古代工艺的精妙。
                  </p>
                  <button className="text-sm text-[#0A5C63] hover:text-[#C82C20] font-medium link-underline">了解更多 →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
