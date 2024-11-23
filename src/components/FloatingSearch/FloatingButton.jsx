import React from 'react';
import { FaSearch } from 'react-icons/fa';

function FloatingButton({ onClick, isOpen }) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
      <button
        onClick={onClick}
        className={`flex items-center justify-center gap-2
                   h-14 ${isOpen ? 'w-14' : 'w-auto px-6'}
                   bg-[#15192B]/95 backdrop-blur-sm
                   text-purple-400
                   rounded-full 
                   border border-purple-500/20
                   shadow-lg shadow-purple-500/20
                   hover:bg-purple-500 hover:text-white
                   transition-all duration-300
                   hover:scale-105 active:scale-95
                   group`}
      >
        <FaSearch className="w-5 h-5" />
        <span className={`text-sm font-medium
                         transition-all duration-300
                         ${isOpen ? 'w-0 opacity-0 hidden' : 'w-auto opacity-100'}`}>
          아이돌을 검색해보세요
        </span>
      </button>
    </div>
  );
}

export default FloatingButton; 