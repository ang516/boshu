export default function SearchLoading() {
  return (
    <div className="min-h-screen bg-stone-50 cloud-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="flex gap-3">
            <div className="flex-1 h-11 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="w-24 h-11 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
        </div>
        
        <div className="mb-8">
          <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="w-full aspect-square rounded-lg mb-4 bg-gray-200 animate-pulse"></div>
              <div className="h-6 w-3/4 bg-gray-200 rounded mb-3 animate-pulse"></div>
              <div className="space-y-2 mb-4">
                <div className="h-4 w-full bg-gray-100 rounded animate-pulse"></div>
                <div className="h-4 w-5/6 bg-gray-100 rounded animate-pulse"></div>
              </div>
              <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
