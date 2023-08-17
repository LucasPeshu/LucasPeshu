import React from 'react';
import BgCard from './BgCard';

const RoundedCard = ({ imageSrc, text, title, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="bg-[#181818] rounded-xl p-4 shadow-md grid gap-2 text-center">
        <img src={imageSrc} alt={title} className="rounded-lg w-full h-auto" />
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-300">{text}</p>
      </div>
    </a>
  );
};

export default RoundedCard;

