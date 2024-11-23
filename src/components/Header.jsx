import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo.svg';

function Header({ darkMode, toggleDarkMode }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: '홈', icon: '' },
    { path: '/fanpage', label: '팬페이지', icon: '💖' },
    { path: '/ranking', label: '아이돌 랭킹', icon: '👑' },
    { path: '/vote', label: '투표', icon: '✨' },
    { path: '/event', label: '이벤트', icon: '🎉' },
  ];

  return (
    <header className="fixed w-full top-0 z-50">
      <div className={`
        backdrop-blur-md border-b 
        ${darkMode 
          ? 'bg-gray-900/75 border-gray-700/50' 
          : 'bg-white/75 border-gray-200/50'
        }
        transition-all duration-300
      `}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
                 {/* 로고 & 타이틀 */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="K-POP Fandom" className="w-8 h-8" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              IDOLHUB
            </span>
          </Link>


            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            <div className="hidden lg:flex items-center space-x-1">
              <nav>
                <ul className="flex items-center space-x-1">
                  {navItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`
                          px-4 py-2 rounded-lg flex items-center space-x-2
                          transition-all duration-200
                          ${location.pathname === item.path
                            ? 'bg-purple-500/10 text-purple-500'
                            : darkMode
                              ? 'text-gray-300 hover:text-white hover:bg-white/10'
                              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                          }
                        `}
                      >
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <button
                onClick={toggleDarkMode}
                className={`
                  p-2 rounded-lg ml-4
                  ${darkMode
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }
                  transition-all duration-200
                `}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`
            lg:hidden absolute w-full 
            ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'}
            backdrop-blur-md
            ${isMenuOpen ? 'block' : 'hidden'}
          `}
        >
          <nav className="container mx-auto px-4 py-3">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`
                      block px-4 py-2 rounded-lg
                      ${location.pathname === item.path
                        ? 'bg-purple-500/10 text-purple-500'
                        : darkMode
                          ? 'text-gray-300 hover:text-white hover:bg-white/10'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }
                    `}
                  >
                    <span className="flex items-center space-x-2">
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header; 