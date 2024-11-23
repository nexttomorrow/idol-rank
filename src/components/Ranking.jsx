import React from 'react';
import { rankingData } from '../data/rankingData';

function Ranking({ start = 1, end = 60, onIdolClick }) {
  const handleIdolClick = (idol) => {
    if (onIdolClick) {
      onIdolClick(idol);
    }
  };

  // rankingData에서 해당 범위의 데이터 추출
  const rankedIdols = rankingData.slice(start - 1, end);

  return (
    <div className="grid gap-4">
      {rankedIdols.map((idol, index) => (
        <button
          key={idol.id}
          onClick={() => handleIdolClick(idol)}
          className="w-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
                   rounded-xl p-4 
                   border border-gray-200 dark:border-gray-700
                   hover:border-purple-300 dark:hover:border-purple-700
                   transition-all duration-300
                   flex items-center gap-4 group"
        >
          {/* 순위 */}
          <div className="w-12 text-center">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {start + index}
            </span>
          </div>

          {/* 프로필 이미지 */}
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src={idol.image}
              alt={idol.name}
              className="w-full h-full object-cover
                       group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* 아이돌 정보 */}
          <div className="flex-1 text-left">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              {idol.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {idol.company}
            </p>
          </div>

          {/* 팬덤 수 */}
          <div className="text-right">
            <p className="text-sm text-gray-600 dark:text-gray-400">팬덤</p>
            <p className="text-lg font-bold text-purple-600 dark:text-purple-400">
              {idol.fanscore}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}

export default Ranking; 