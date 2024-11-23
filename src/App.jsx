import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import IdolRanking from './pages/IdolRanking';
import FanPage from './pages/FanPage';
import Vote from './pages/Vote';
import Event from './pages/Event';
import VoteDetail from './pages/VoteDetail';
import FloatingSearch from './components/FloatingSearch';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : 
           window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ranking" element={<IdolRanking />} />
            <Route path="/fanpage" element={<FanPage />} />
            <Route path="/vote" element={<Vote />} />
            <Route path="/event" element={<Event />} />
            <Route path="/vote/:id" element={<VoteDetail />} />
          </Routes>
        </main>
        <Footer />
        <FloatingSearch />
      </div>
    </Router>
  );
}

export default App;