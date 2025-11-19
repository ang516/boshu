'use client'

import React, { useState } from 'react'
import { Heart, MessageCircle, Share2 } from 'lucide-react'

interface InteractionZoneProps {
  artifact: any
}

export default function InteractionZone({ artifact }: InteractionZoneProps) {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: '李明',
      avatar: '👤',
      time: '2小时前',
      content: '这部帛书的复原效果真是令人惊叹！',
      likes: 24
    },
    {
      id: 2,
      author: '王张两位',
      avatar: '👥',
      time: '3小时前',
      content: '请问帛书上的星象符号是否与现代天文学有对应关系？',
      likes: 12
    }
  ])

  const [newComment, setNewComment] = useState('')

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          author: '游客',
          avatar: '👤',
          time: '刚刚',
          content: newComment,
          likes: 0
        }
      ])
      setNewComment('')
    }
  }

  return (
    <div className="bg-white rounded-lg p-6 sm:p-8 border border-gray-200 shadow-sm animate-fade-in-up">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#2A2A28] mb-6 sm:mb-8 animate-title-reveal">用户互动</h2>

      {/* 评论输入区 */}
      <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-200">
        <div className="flex gap-3 sm:gap-4">
          <div className="text-lg sm:text-2xl flex-shrink-0">👤</div>
          <div className="flex-1 min-w-0">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="分享你的看法或疑问..."
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-[#0A5C63] focus:outline-none text-sm sm:text-base"
              rows={3}
            />
            <div className="flex justify-end gap-2 sm:gap-3 mt-2 sm:mt-3 flex-wrap">
              <button className="px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition card-transition">
                取消
              </button>
              <button
                onClick={handleCommentSubmit}
                className="px-4 sm:px-6 py-1 sm:py-2 text-xs sm:text-sm bg-[#0A5C63] text-white rounded-lg hover:bg-[#063536] transition card-transition ripple-button"
              >
                发表
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 评论列表 */}
      <div className="space-y-4 sm:space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b border-gray-100 pb-4 sm:pb-6 last:border-b-0">
            <div className="flex gap-3 sm:gap-4">
              <div className="text-lg sm:text-2xl flex-shrink-0">{comment.avatar}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <div>
                    <span className="font-bold text-[#2A2A28] text-sm sm:text-base">{comment.author}</span>
                    <span className="text-gray-500 text-xs sm:text-sm ml-2 sm:ml-3">{comment.time}</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-3 text-xs sm:text-base break-words">{comment.content}</p>
                <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
                  <button className="flex items-center gap-1 text-gray-500 hover:text-[#C82C20] transition">
                    <Heart className="w-3 sm:w-4 h-3 sm:h-4" />
                    {comment.likes}
                  </button>
                  <button className="flex items-center gap-1 text-gray-500 hover:text-[#0A5C63] transition">
                    <MessageCircle className="w-3 sm:w-4 h-3 sm:h-4" />
                    回复
                  </button>
                  <button className="flex items-center gap-1 text-gray-500 hover:text-[#0A5C63] transition">
                    <Share2 className="w-3 sm:w-4 h-3 sm:h-4" />
                    分享
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 文物标记功能 */}
      <div className="mt-8 sm:mt-8 pt-8 border-t border-gray-200">
        <h3 className="text-base sm:text-lg font-bold text-[#0A5C63] mb-4">📌 文物标记</h3>
        <p className="text-gray-600 mb-4 text-sm sm:text-base">
          在文物复原图上标注你的疑问或发现，供其他用户或专家解答
        </p>
        <div className="bg-gray-100 rounded-lg p-6 sm:p-8 text-center border-2 border-dashed border-gray-300">
          <p className="text-gray-600 text-sm sm:text-base">点击回到"数字复原展示"模块，悬停在图片上可进行标记</p>
          <button className="mt-4 px-4 sm:px-6 py-2 bg-[#0A5C63] text-white rounded-lg hover:bg-[#063536] transition card-transition ripple-button text-sm sm:text-base">
            前往标记
          </button>
        </div>
      </div>
    </div>
  )
}
