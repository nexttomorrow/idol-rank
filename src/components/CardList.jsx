import React, { useState } from 'react';
import { rankingData } from '../data/rankingData';
import IdolModal from './FloatingSearch/IdolModal';
import { FaHeart } from 'react-icons/fa';

function CardList({ limit = 0, showMoreButton = true }) {
  const [selectedIdol, setSelectedIdol] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const displayedIdols = limit > 0 ? rankingData.slice(0, limit) : rankingData;

  const handleIdolClick = (idol) => {
    setSelectedIdol(idol);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedIdols.map(idol => (
          <button
            key={idol.id}
            onClick={() => handleIdolClick(idol)}
            className="group relative bg-[#15192B] rounded-2xl
                     shadow-lg overflow-hidden
                     transition-all duration-300
                     hover:-translate-y-1
                     hover:shadow-xl
                     focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent z-10" />
              <img
                src={idol.image}
                alt={idol.name}
                className="w-full h-full object-cover
                         transition-transform duration-300
                         group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 z-20
                           px-3 py-1 rounded-full text-sm
                           bg-black/30 backdrop-blur-sm text-white
                           border border-white/10">
                {idol.type}
              </span>
              <div className="absolute top-4 right-4 z-20
                          flex items-center gap-1
                          text-yellow-400">
                <span>★</span>
                <span className="text-white">{idol.rating}</span>
              </div>
            </div>

            <div className="p-5 text-left">
              <h3 className="text-xl font-bold text-white mb-1">
                {idol.name}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                {idol.name} 공식 팬클럽
              </p>
              <div className="flex items-center gap-2 text-purple-400">
                <FaHeart className="w-4 h-4" />
                <span className="text-sm font-medium">FAN</span>
                <span className="text-white text-sm">
                  {(idol.likes / 1000000).toFixed(1)}M
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      <IdolModal
        idol={selectedIdol}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default CardList; 