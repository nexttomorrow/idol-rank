import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* 상단 섹션 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* 로고 & 설명 */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              IDOLHUB
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              K-POP 팬들을 위한 최고의 커뮤니티 플랫폼
            </p>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              바로가기
            </h3>
            <ul className="space-y-2">
            <li>
                <Link to="/ranking" className="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400">
                  팬 페이지
                </Link>
              </li>
              <li>
                <Link to="/ranking" className="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400">
                  아이돌 랭킹
                </Link>
              </li>
              <li>
                <Link to="/votes" className="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400">
                투표
                </Link>
              </li>
              <li>
                <Link to="/event" className="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400">
                  이벤트
                </Link>
              </li>
            </ul>
          </div>

          {/* 고객 지원 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              고객지원
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400">
                  이용약관
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400">
                  개인정보처리방침
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400">
                  문의하기
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 하단 섹션 */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* 카피라이트 */}
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 K-POP Fandom. All rights reserved.
            </p>

            {/* 소셜 링크 */}
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-500 dark:hover:text-purple-400">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 dark:hover:text-purple-400">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 dark:hover:text-purple-400">
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 