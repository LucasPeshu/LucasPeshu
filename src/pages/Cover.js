import React from 'react';
import backgroundImage from '../img/fp2.jpg';
import rightImage from '../img/fp.jpg'; 
import Container from '../components/Container';
import { Link } from 'react-scroll';
const Cover = () => {
  return (
    <section id="home">
    <div className="py-8">
      <Container>
      <div className=' grid grid-cols-1 place-items-center h-screen md:grid-cols-2'>
      <div className="text-white">
        <h2 className="text-lg font-semibold mb-2 md:text-xl ">console.log('Hola mundo, yo soy: ')</h2>
        <h1 className="text-5xl font-bold mb-4">Lucas Pereira Da Silva</h1>
        <Link to="about" smooth={true} duration={500} className="bg-blue-500 py-2 px-4 rounded shadow-md cursor-pointer">
          Conocer
        </Link>
      </div>

      <div className="-z-10">
        <img
          src={rightImage} 
          alt="Imagen"
          className="w-full object-cover shadow-md rounded-xl hidden md:block" 
        />
      </div>
      </div>
      </Container>
      
      <div
        className="absolute inset-0 bg-black opacity-40 blur-lg -z-20"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center', 
        }}
      ></div>
    </div>
    </section>
  );
};

export default Cover;
