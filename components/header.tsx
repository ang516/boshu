'use client'

import React from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter()
  const [searchInput, setSearchInput] = React.useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchInput.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchInput)}`)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b-2 border-[#0A5C63]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition">
              <div className="bronze-border p-3 rounded-lg bg-gradient-to-br from-[#0A5C63] to-[#063536]">
                <span className="text-white font-bold text-2xl" style={{ fontFamily: 'serif' }}>文</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#0A5C63]" style={{ fontFamily: 'serif' }}>文溯</h1>
                <p className="text-xs text-gray-600">文物数字化搜索引擎</p>
              </div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-[#2A2A28] hover:text-[#0A5C63] transition font-medium">首页</Link>
            <a href="#" className="text-[#2A2A28] hover:text-[#0A5C63] transition font-medium">文物地图</a>
            <a href="#" className="text-[#2A2A28] hover:text-[#0A5C63] transition font-medium">虚拟修复</a>
            <a href="#" className="text-[#2A2A28] hover:text-[#0A5C63] transition font-medium">学术数据库</a>
          </nav>

          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-6 h-6 text-[#0A5C63]" />
          </Button>
        </div>
      </div>
    </header>
  )
}
