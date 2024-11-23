import React from 'react';
import { FaTimes, FaHeart, FaInstagram } from 'react-icons/fa';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';

function IdolModal({ idol, isOpen, onClose }) {
  if (!isOpen || !idol) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        onClick={onClose}
      />

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    w-[90%] max-w-md z-50
                    bg-[#15192B]/95 backdrop-blur-xl
                    rounded-3xl shadow-xl
                    border border-gray-700/50
                    transition-all duration-300
                    text-white">
        <div className="relative p-8">
          <button
            onClick={onClose}
            className="absolute top-6 right-6
                     text-gray-400 hover:text-white
                     transition-colors"
          >
            <FaTimes className="w-5 h-5" />
          </button>

          {/* 그룹 타입 & 평점 */}
          <div className="flex items-center justify-between mb-6">
            <span className="px-4 py-1.5 bg-[#1E2337] rounded-full text-sm">
              {idol.type}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">★</span>
              <span>{idol.rating}</span>
            </div>
          </div>

          {/* 그룹명 & 소속사 */}
          <h2 className="text-3xl font-bold mb-2">
            {idol.name}
          </h2>
          <p className="text-gray-400 mb-8">
            {idol.company}
          </p>

          {/* 그룹 설명 */}
          <p className="text-gray-300 mb-8 leading-relaxed">
            {idol.description}
          </p>

          {/* 팬덤 정보 */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-[#1E2337] rounded-2xl p-4">
              <p className="text-gray-400 text-sm mb-1">팬덤 규모</p>
              <p className="text-xl font-bold">{idol.fanscore}</p>
            </div>
            <div className="bg-[#1E2337] rounded-2xl p-4">
              <p className="text-gray-400 text-sm mb-1">좋아요</p>
              <p className="text-xl font-bold">{idol.likes.toLocaleString()}</p>
            </div>
          </div>

          {/* 하단 버튼 */}
          <div className="flex gap-3">
            <a
              href={idol.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-4 bg-[#1E2337] rounded-2xl hover:bg-[#252B42] transition-colors
                       flex items-center justify-center gap-2"
            >
              <FaInstagram className="w-5 h-5" />
              <span>인스타그램</span>
            </a>
            <button className="flex-1 py-4 bg-purple-500 rounded-2xl hover:bg-purple-600 transition-colors
                           flex items-center justify-center gap-2">
              <FaHeart className="w-5 h-5" />
              <span>팬클럽 가입</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default IdolModal; 