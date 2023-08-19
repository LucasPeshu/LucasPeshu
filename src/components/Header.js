import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'; // Importa los íconos del menú

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 p-4 transition-all duration-300 ${
        isScrolled ? 'bg-opacity-100 bg-neutral-950' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="text-white text-lg font-semibold">Lucas</div>
        <div className="md:hidden">
          {isMenuOpen ? (
            <RiCloseLine
              className="text-white text-2xl cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          ) : (
            <RiMenu3Line
              className="text-white text-2xl cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            />
          )}
        </div>
        <nav className={`md:flex md:items-center lg:space-x-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-white hover:underline block md:inline"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-white hover:underline block md:inline"
          >
            Sobre mí
          </Link>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            className="text-white hover:underline block md:inline"
          >
            Portafolio
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-white hover:underline block md:inline"
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
