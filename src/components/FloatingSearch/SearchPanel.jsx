import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { rankingData } from '../../data/rankingData';

function SearchPanel({ isOpen, onClose, onSelectIdol }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      const results = rankingData.filter(idol =>
        idol.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        idol.company.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div className={`fixed bottom-24 left-1/2 -translate-x-1/2 z-50
                    w-[90%] max-w-md
                    bg-[#15192B]/95 backdrop-blur-xl
                    rounded-2xl shadow-xl
                    border border-gray-700/50
                    transition-all duration-300
                    ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
      <div className="p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="아이돌 또는 소속사 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-lg
                     bg-[#1E2337] text-white
                     placeholder-gray-400
                     border border-gray-700/50
                     focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2
                       text-gray-400 hover:text-gray-200"
            >
              <FaTimes />
            </button>
          )}
        </div>

        {searchResults.length > 0 && (
          <div className="mt-4 max-h-64 overflow-y-auto">
            {searchResults.map(idol => (
              <button
                key={idol.id}
                onClick={() => {
                  onSelectIdol(idol);
                  setSearchTerm('');
                }}
                className="w-full p-3 flex items-center gap-3
                         hover:bg-[#1E2337]
                         rounded-lg transition-colors"
              >
                <img
                  src={idol.image}
                  alt={idol.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-medium text-white">
                    {idol.name}
                  </p>
                  <p className="text-sm text-gray-400">
                    {idol.company}
                  </p>
                </div>
                <div className="ml-auto flex items-center gap-2 text-gray-400">
                  <span className="text-yellow-400">★</span>
                  <span>{idol.rating}</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPanel; 