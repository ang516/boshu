export default function Loading() {
  return (
    <div className="min-h-screen bg-stone-50 cloud-pattern flex items-center justify-center">
      <div className="text-center">
        <div className="mb-6 flex justify-center">
          <div className="w-12 h-12 border-4 border-[#0A5C63]/30 border-t-[#0A5C63] rounded-full animate-spin"></div>
        </div>
        <h2 className="text-xl font-semibold text-[#2A2A28] mb-2">加载中...</h2>
        <p className="text-gray-600">正在为您准备文物内容</p>
      </div>
    </div>
  )
}
