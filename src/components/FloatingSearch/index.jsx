import React, { useState } from 'react';
import FloatingButton from './FloatingButton';
import SearchPanel from './SearchPanel';
import IdolModal from './IdolModal';

function FloatingSearch() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedIdol, setSelectedIdol] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectIdol = (idol) => {
    setSelectedIdol(idol);
    setIsModalOpen(true);
    setIsSearchOpen(false);
  };

  return (
    <>
      <FloatingButton
        onClick={() => setIsSearchOpen(!isSearchOpen)}
        isOpen={isSearchOpen}
      />
      <SearchPanel
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectIdol={handleSelectIdol}
      />
      <IdolModal
        idol={selectedIdol}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default FloatingSearch; 