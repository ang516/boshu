export default function ArtifactDetailLoading() {
  return (
    <div className="min-h-screen bg-stone-50 cloud-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* 左侧侧边栏骨架 */}
          <div className="hidden lg:block space-y-4">
            <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-8 bg-gray-100 rounded animate-pulse"></div>
              ))}
            </div>
          </div>

          {/* 右侧主内容骨架 */}
          <div className="lg:col-span-3 space-y-8 sm:space-y-12">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="h-8 w-1/3 bg-gray-200 rounded mb-4 animate-pulse"></div>
                <div className="space-y-3">
                  <div className="h-40 w-full bg-gray-100 rounded animate-pulse"></div>
                  <div className="h-4 w-full bg-gray-100 rounded animate-pulse"></div>
                  <div className="h-4 w-5/6 bg-gray-100 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
