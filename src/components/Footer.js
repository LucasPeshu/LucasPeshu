import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-[#181818] text-white py-2">
      <p>&copy; {currentYear} Lucas. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
