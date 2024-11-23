import React from 'react';
import { FaStar } from 'react-icons/fa';

function Card({ idol }) {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-gray-900 hover:scale-105 transition-transform duration-300">
      {/* 이미지 컨테이너 */}
      <div className="aspect-[4/3] w-full">
        <img
          src={idol.imageUrl}
          alt={idol.name}
          className="w-full h-full object-cover"
        />
        {/* 카버레이 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/70" />
      </div>

      {/* 카테고리와 평점 */}
      <div className="absolute top-4 left-0 right-0 flex justify-between px-4">
        <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-sm rounded-lg">
          {idol.category}
        </span>
        <div className="flex items-center gap-1 px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-sm rounded-lg">
          <FaStar className="text-yellow-400" />
          <span>{idol.rating}</span>
        </div>
      </div>

      {/* 아티스트 정보 */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-xl font-bold text-white mb-1">
          {idol.name}
        </h3>
        <p className="text-sm text-gray-300 mb-2">
          {idol.fanName}
        </p>
        <div className="flex items-center gap-2">
          <span className="text-purple-400">FAN</span>
          <span className="text-white">{idol.fanCount}</span>
        </div>
      </div>
    </div>
  );
}

export default Card; 