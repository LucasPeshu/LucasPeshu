import React from 'react';

const BgCard = ({ children }) => {
  return (
    <div className="bg-[#181818] rounded-xl p-4 shadow-lg">
      {children}
    </div>
  );
};

export default BgCard;
