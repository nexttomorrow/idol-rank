import React from 'react';
import CardList from '../components/CardList';

function FanPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-200">
      <div className="container mx-auto px-4 py-20">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            K-POP 아이돌
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            모든 K-POP 아이돌들을 만나보세요
          </p>
        </div>

        {/* 전체 카드 리스트 표시 */}
        <CardList limit={0} showMoreButton={false} />
      </div>
    </div>
  );
}

export default FanPage; 