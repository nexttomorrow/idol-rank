import React from 'react';
import Ranking from '../components/Ranking';

function IdolRanking() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-200">
      <div className="container mx-auto px-4 py-20">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            아이돌 랭킹
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            팬덤 규모를 기준으로 한 K-POP 아이돌 순위를 확인해보세요
          </p>
        </div>
        
        <Ranking />
      </div>
    </div>
  );
}

export default IdolRanking; 