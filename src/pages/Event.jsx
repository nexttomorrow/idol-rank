import React, { useState, useMemo } from 'react';
import EventCard from '../components/EventCard';
import { eventData } from '../data/eventData';

function Event() {
  // 상태 관리
  const [currentFilter, setCurrentFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // 한 페이지당 표시할 항목 수

  // 필터링된 데이터 계산
  const filteredEvents = useMemo(() => {
    const today = new Date();
    
    switch (currentFilter) {
      case 'ongoing':
        return eventData.filter(event => new Date(event.endDate) > today);
      case 'ended':
        return eventData.filter(event => new Date(event.endDate) <= today);
      default:
        return eventData;
    }
  }, [currentFilter]);

  // 페이지네이션 계산
  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const currentItems = filteredEvents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 필터 변경 핸들러
  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
    setCurrentPage(1);
  };

  // 페이지네이션 버튼 생성
  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`w-10 h-10 rounded-full flex items-center justify-center
                     transition-all duration-200
                     ${currentPage === i 
                       ? 'bg-purple-500 text-white' 
                       : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-purple-100 dark:hover:bg-purple-900/30'}`}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-200">
      <div className="container mx-auto px-4 py-20">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            이벤트
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            다양한 K-POP 아티스트의 특별한 이벤트에 참여해보세요
          </p>
        </div>

        {/* 필터 버튼 */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button 
            onClick={() => handleFilterChange('all')}
            className={`px-6 py-2.5 rounded-full transition-all duration-200
                       ${currentFilter === 'all' 
                         ? 'bg-purple-500 text-white' 
                         : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30'}`}
          >
            전체
          </button>
          <button 
            onClick={() => handleFilterChange('ongoing')}
            className={`px-6 py-2.5 rounded-full transition-all duration-200
                       ${currentFilter === 'ongoing' 
                         ? 'bg-purple-500 text-white' 
                         : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30'}`}
          >
            진행중
          </button>
          <button 
            onClick={() => handleFilterChange('ended')}
            className={`px-6 py-2.5 rounded-full transition-all duration-200
                       ${currentFilter === 'ended' 
                         ? 'bg-purple-500 text-white' 
                         : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30'}`}
          >
            종료
          </button>
        </div>

        {/* 이벤트 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* 페이지네이션 */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <div className="flex gap-2">
              {renderPaginationButtons()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Event; 