'use client'

interface ReferenceArtifactsProps {
  artifact: any
}

export default function ReferenceArtifacts({ artifact }: ReferenceArtifactsProps) {
  const referenceItems = [
    {
      id: 1,
      name: '郭店楚墓竹简',
      institution: '湖北荆州',
      era: '战国早期',
      difference: '同时期竹制文献'
    },
    {
      id: 2,
      name: '马王堆汉墓帛书',
      institution: '湖南长沙',
      era: '西汉',
      difference: '晚期帛书文献'
    },
    {
      id: 3,
      name: '敦煌汉简',
      institution: '甘肃敦煌',
      era: '汉代',
      difference: '边塞生活记录'
    },
    {
      id: 4,
      name: '北京大学汉简',
      institution: '北京',
      era: '汉代',
      difference: '早期竹简文献'
    },
    {
      id: 5,
      name: '张家界古简',
      institution: '湖南张家界',
      era: '战国中期',
      difference: '地域文化特征'
    },
    {
      id: 6,
      name: '楚地青铜铭文',
      institution: '各地出土',
      era: '战国时期',
      difference: '金属铭文对比'
    }
  ]

  return (
    <div className="bg-white rounded-lg p-6 sm:p-8 border border-gray-200 shadow-sm animate-fade-in-up">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#2A2A28] mb-6 sm:mb-8 animate-title-reveal">海内外文物参照</h2>
      <p className="text-gray-600 mb-6 text-sm sm:text-base">点击卡片可查看详细信息</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {referenceItems.map((item) => (
          <div
            key={item.id}
            className="glow-border p-4 sm:p-6 bg-white rounded-lg border border-gray-200 cursor-pointer hover:shadow-lg transition card-transition"
          >
            <div className="w-full aspect-square bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <img
                src={`/ceholder-svg-key-hwse.jpg?key=hwse${item.id}`}
                alt={item.name}
                className="w-full h-full object-cover hover:scale-110 transition duration-300"
              />
            </div>

            <h3 className="font-bold text-[#0A5C63] text-base sm:text-lg mb-2 line-clamp-2">{item.name}</h3>
            
            <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between gap-2">
                <span className="text-gray-600 flex-shrink-0">收藏：</span>
                <span className="font-medium text-[#2A2A28] text-right">{item.institution}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-gray-600 flex-shrink-0">时代：</span>
                <span className="font-medium text-[#2A2A28]">{item.era}</span>
              </div>
            </div>

            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
              <p className="text-xs font-semibold text-[#0A5C63] mb-1">核心差异：</p>
              <p className="text-xs text-gray-600 line-clamp-2">{item.difference}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
