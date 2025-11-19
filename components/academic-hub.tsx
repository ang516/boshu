'use client'

import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ threshold: 0.5 })

  useEffect(() => {
    if (!inView) return
    
    let current = 0
    const increment = target / 30
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 50)

    return () => clearInterval(timer)
  }, [inView, target])

  return <div ref={ref} className="text-4xl font-bold text-[#0A5C63] animate-count-up">{count.toLocaleString()}</div>
}

export default function AcademicHub() {
  const { ref, inView } = useInView({ threshold: 0.1 })

  const stats = [
    { title: '论文库', count: 2847, desc: '经过同行评审的学术论文' },
    { title: '考古报告', count: 563, desc: '专业考古发掘报告' },
    { title: '专家讲座', count: 124, desc: '权威专家视频讲解' }
  ]

  return (
    <section ref={ref} className="py-16 bg-stone-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#2A2A28] mb-12 text-center animate-fade-in-up">学术研究中心</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((item, i) => (
            <div
              key={i}
              className={`glow-border card-transition p-8 bg-white rounded-lg border border-gray-200 text-center hover:shadow-xl ${
                inView ? 'animate-fade-in-up' : ''
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <Counter target={item.count} />
              <h3 className="text-xl font-bold text-[#2A2A28] mb-2 mt-4">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
