import React from 'react';
import { useParams } from 'react-router-dom';
import { voteData } from '../data/voteData';

function VoteDetail() {
  const { id } = useParams();
  const vote = voteData.find(v => v.id === parseInt(id));

  if (!vote) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-200">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            투표를 찾을 수 없습니다.
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-200">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {vote.title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {vote.content}
        </p>
        {/* 추가적인 투표 상세 내용 구현 */}
      </div>
    </div>
  );
}

export default VoteDetail; 