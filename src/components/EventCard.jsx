import React from 'react';
import { FaHeart, FaComment, FaUsers } from 'react-icons/fa';

function EventCard({ event }) {
  // D-day 계산
  const calculateDday = (endDate) => {
    const today = new Date();
    const end = new Date(endDate);
    const diffTime = end - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const dday = calculateDday(event.endDate);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden
                    shadow-lg dark:shadow-gray-900/30 
                    border border-gray-200 dark:border-gray-800
                    transition-all duration-300 hover:shadow-xl">
      {/* 썸네일 */}
      <div className="aspect-video w-full overflow-hidden relative">
        <img 
          src={event.thumbnail} 
          alt={event.title}
          className="w-full h-full object-cover"
        />
        {/* D-day 태그 */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-bold
                      ${dday > 0 ? 'bg-purple-500 text-white' : 'bg-gray-500 text-white'}`}>
          {dday > 0 ? `D-${dday}` : '종료됨'}
        </div>
      </div>

      {/* 컨텐츠 */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {event.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {event.content}
        </p>

        {/* 작성자 & 게시일 */}
        <div className="flex items-center justify-between mb-4 text-sm">
          <span className="text-gray-600 dark:text-gray-400">
            {event.author}
          </span>
          <span className="text-gray-500 dark:text-gray-500">
            {new Date(event.publishedAt).toLocaleDateString()}
          </span>
        </div>

        {/* 통계 */}
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <FaUsers className="text-blue-400" />
              {event.participants.toLocaleString()}
            </span>
            <span className="flex items-center gap-1">
              <FaHeart className="text-red-400" />
              {event.likes.toLocaleString()}
            </span>
            <span className="flex items-center gap-1">
              <FaComment className="text-green-400" />
              {event.comments.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard; 