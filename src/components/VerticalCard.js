import React from 'react';
import BgCard from './BgCard'; // Asegúrate de que la ruta sea correcta

const VerticalCard = ({ svgImage, text }) => {
  return (
    <BgCard>
      <div className="flex flex-col items-center space-y-4">
        <img src={svgImage} alt="Imagen SVG" className="h-16 w-16" />
        <div className="text-center">
          <p className="text-lg text-white">{text}</p>
        </div>
      </div>
    </BgCard>
  );
};

export default VerticalCard;
