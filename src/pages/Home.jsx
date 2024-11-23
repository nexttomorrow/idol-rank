import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from '../components/Banner';
import CardList from '../components/CardList';
import Ranking from '../components/Ranking';
import IdolModal from '../components/FloatingSearch/IdolModal';
import { Link } from 'react-router-dom';
import { HiArrowLongRight } from 'react-icons/hi2';
import { FaHeart, FaComment, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import VoteCard from '../components/VoteCard';
import { voteData } from '../data/voteData';

// CustomArrow 컴포넌트 추가
const CustomArrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 z-10
              ${direction === 'prev' ? '-left-5' : '-right-5'}
              w-10 h-10 flex items-center justify-center
              bg-white dark:bg-gray-800 rounded-full
              shadow-lg dark:shadow-gray-900/30
              border border-gray-200 dark:border-gray-700
              text-gray-600 dark:text-gray-400
              hover:bg-gray-50 dark:hover:bg-gray-700
              transition-all duration-200`}
  >
    {direction === 'prev' ? <FaChevronLeft /> : <FaChevronRight />}
  </button>
);

function Home() {
  // 모달 상태 관리 추가
  const [selectedIdol, setSelectedIdol] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIdolClick = (idol) => {
    setSelectedIdol(idol);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedIdol(null);
  };

  // 반응형 슬라이더 설정 개선
  const commonSliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4, // 기본 4개 표시로 변경
    slidesToScroll: 4,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
    dotsClass: "slick-dots !bottom-[-3rem]",
    responsive: [
      {
        breakpoint: 1536, // 2xl
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // 모바일에서 화살표 숨김
        }
      }
    ],
    appendDots: dots => (
      <div>
        <ul className="flex items-center justify-center gap-3"> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <button className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-700
                        hover:bg-purple-400 dark:hover:bg-purple-500
                        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                        dark:focus:ring-offset-gray-900
                        transition-all duration-200"></button>
    )
  };

  // 슬라이더 설정 확장
  const sliderSettings = {
    ...commonSliderSettings,
  };

  const rankingSliderSettings = {
    ...commonSliderSettings,
  };

  // 랭킹 데이터 그룹화
  const rankingGroups = [
    { title: 'TOP 1-10', start: 1, end: 10 },
    { title: 'TOP 11-20', start: 11, end: 20 },
    { title: 'TOP 21-30', start: 21, end: 30 },
    { title: 'TOP 31-40', start: 31, end: 40 },
    { title: 'TOP 41-50', start: 41, end: 50 },
    { title: 'TOP 51-60', start: 51, end: 60 }
  ];

  // 페이지 최상단 이동 핸들러 추가
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-200">
      {/* 배너 섹션 */}
      <Banner />

      {/* 메인 콘텐츠 */}
      <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-12">
        {/* 섹션 헤더 반응형 개선 */}
        <section className="mb-16 lg:mb-24">
          <div className="flex flex-col sm:flex-row items-start sm:items-center 
                         justify-between gap-4 mb-8 lg:mb-12">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                인기 아이돌
              </h2>
              <p className="mt-2 text-sm lg:text-base text-gray-600 dark:text-gray-400">
                지금 가장 인기있는 K-POP 아이돌
              </p>
            </div>
            <Link 
              to="/fanpage"
              onClick={handleScrollToTop}
              className="w-full sm:w-auto group flex items-center justify-center gap-2 
                        px-4 lg:px-6 py-2 lg:py-2.5 rounded-full
                        bg-gray-100 hover:bg-gray-200 
                        dark:bg-gray-800 dark:hover:bg-gray-700
                        transition-all duration-300"
            >
              <span className="text-sm lg:text-base text-gray-700 dark:text-gray-300 font-medium">
                더보기
              </span>
              <HiArrowLongRight className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600 dark:text-gray-400 
                                        group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* 슬라이더 컨테이너 반응형 개선 */}
          <div className="relative px-0 sm:px-4 lg:px-8">
            <Slider {...rankingSliderSettings}>
              {rankingGroups.map(group => (
                <div key={group.title} className="px-2 sm:px-4">
                  <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm 
                                rounded-xl lg:rounded-2xl 
                                shadow-lg dark:shadow-gray-900/30 
                                p-4 lg:p-8 
                                border border-gray-200 dark:border-gray-800
                                hover:border-purple-200 dark:hover:border-purple-800
                                transition-all duration-300
                                h-full">
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6">
                      {group.title}
                    </h3>
                    <Ranking 
                      start={group.start} 
                      end={group.end}
                      onIdolClick={handleIdolClick}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* 아이돌 랭킹 섹션 */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                아이돌 랭킹
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                팬덤 규모 기준 TOP 60
              </p>
            </div>
            <Link 
              to="/ranking"
              onClick={handleScrollToTop}
              className="group flex items-center gap-2 px-6 py-2.5 rounded-full
                        bg-gray-100 hover:bg-gray-200 
                        dark:bg-gray-800 dark:hover:bg-gray-700
                        transition-all duration-300"
            >
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                전체 순위 보기
              </span>
              <HiArrowLongRight className="w-5 h-5 text-gray-600 dark:text-gray-400 
                                        group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 랭킹 슬라이더 */}
          <div className="relative px-8">
            <Slider {...rankingSliderSettings}>
              {rankingGroups.map(group => (
                <div key={group.title} className="px-4">
                  <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl 
                                shadow-lg dark:shadow-gray-900/30 p-8 
                                border border-gray-200 dark:border-gray-800
                                hover:border-purple-200 dark:hover:border-purple-800
                                transition-all duration-300
                                h-full">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                      {group.title}
                    </h3>
                    <Ranking 
                      start={group.start} 
                      end={group.end}
                      onIdolClick={handleIdolClick}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* 투표 섹션 */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                팬 투표
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                아이돌 소속사의 공식 투표에 참여해보세요
              </p>
            </div>
            <Link 
              to="/vote"
              onClick={handleScrollToTop}
              className="group flex items-center gap-2 px-6 py-2.5 rounded-full
                        bg-gray-100 hover:bg-gray-200 
                        dark:bg-gray-800 dark:hover:bg-gray-700
                        transition-all duration-300"
            >
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                전체 투표 보기
              </span>
              <HiArrowLongRight className="w-5 h-5 text-gray-600 dark:text-gray-400 
                                        group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 투표 슬라이더 */}
          <div className="relative px-8">
            <Slider {...sliderSettings}>
              {voteData.slice(0, 12).map(vote => (
                <div key={vote.id} className="px-4">
                  <Link 
                    to={`/votes/${vote.id}`}
                    className="block transition-transform duration-300 hover:-translate-y-1"
                  >
                    <VoteCard vote={vote} />
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </div>

      {/* 모달 추가 */}
      <IdolModal
        idol={selectedIdol}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default Home; 