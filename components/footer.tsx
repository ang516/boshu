export default function Footer() {
  return (
    <footer className="bg-[#2A2A28] text-white pt-8 sm:pt-12 pb-4 sm:pb-6 border-t-4 border-[#0A5C63]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-[#F2C94C] text-sm sm:text-base">关于我们</h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition">平台介绍</a></li>
              <li><a href="#" className="hover:text-white transition">发展历程</a></li>
              <li><a href="#" className="hover:text-white transition">团队介绍</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-[#F2C94C] text-sm sm:text-base">资源来源</h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition">合作机构</a></li>
              <li><a href="#" className="hover:text-white transition">数据来源</a></li>
              <li><a href="#" className="hover:text-white transition">学术伙伴</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-[#F2C94C] text-sm sm:text-base">联系我们</h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition">反馈建议</a></li>
              <li><a href="#" className="hover:text-white transition">商务合作</a></li>
              <li><a href="#" className="hover:text-white transition">技术支持</a></li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-bold mb-3 sm:mb-4 text-[#F2C94C] text-sm sm:text-base">法律声明</h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition">隐私政策</a></li>
              <li><a href="#" className="hover:text-white transition">使用条款</a></li>
              <li><a href="#" className="hover:text-white transition">免责声明</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 sm:pt-6">
          <p className="text-center text-gray-400 text-xs sm:text-sm">
            文物数字化保护公益提示：尊重历史文化，保护人类遗产，科技助力传承。
          </p>
          <p className="text-center text-gray-500 text-xs mt-3 sm:mt-4">
            © 2025 文溯 - 文物数字化搜索引擎。版权所有。
          </p>
        </div>
      </div>
    </footer>
  )
}
