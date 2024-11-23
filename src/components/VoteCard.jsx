import React from 'react';
import { FaHeart, FaComment } from 'react-icons/fa';

function VoteCard({ vote }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden
                    shadow-lg dark:shadow-gray-900/30 
                    border border-gray-200 dark:border-gray-800
                    transition-all duration-300 hover:shadow-xl">
      {/* 썸네일 */}
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={vote.thumbnail} 
          alt={vote.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 컨텐츠 */}
      <div className="p-6">
        {/* 헤더 */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {vote.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {vote.content}
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
            by {vote.author}
          </p>
        </div>

        {/* 투표 옵션 */}
        <div className="space-y-3 mb-6">
          {vote.options.map(option => (
            <div key={option.id} className="relative">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-full h-8 overflow-hidden">
                <div 
                  className="bg-purple-500/20 h-full transition-all"
                  style={{ width: `${(option.votes / vote.totalVotes) * 100}%` }}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {option.text}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {Math.round((option.votes / vote.totalVotes) * 100)}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 푸터 */}
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <FaHeart className="text-red-400" />
              {vote.likes.toLocaleString()}
            </span>
            <span className="flex items-center gap-1">
              <FaComment className="text-blue-400" />
              {vote.comments.toLocaleString()}
            </span>
          </div>
          <span>총 {vote.totalVotes.toLocaleString()}표</span>
        </div>
      </div>
    </div>
  );
}

export default VoteCard; 