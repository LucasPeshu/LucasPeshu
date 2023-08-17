import React from 'react';
import BgCard from '../components/BgCard';
import backgroundImage from '../img/fp2.jpg';
import VerticalCard from '../components/VerticalCard';
import book from '../img/book-svgrepo-com.svg';
import code from '../img/code-svgrepo-com.svg';
import scrum from '../img/friend-3-svgrepo-com.svg';

const About = () => {
  return (
    <section id="about" className='mt-4'>
    <div className="">
        <BgCard>
          <div className="grid grid-cols-1 gap-8 place-items-center lg:grid-cols-2">
            <div className="">
              <img
                src={backgroundImage}
                alt="Imagen"
                className="rounded-xl shadow-md"
              />
            </div>
            
            <div className="text-white">
              <h1 className="text-2xl font-bold">Sobre mí</h1>
              <p className='text-lg my-3'>
              Apasionado programador realizando la carrera de Ingeniería en Sistemas de la información en la Universidad Tecnológica Nacional (UTN) - Facultad Regional Villa María. Poseo amplia experiencia en metodologías ágiles, diseño de bases de datos y desarrollo de aplicaciones Java. Habilidad en programación web utilizando tecnologías modernas como React, Django y herramientas como Git. Comprometido con el aprendizaje continuo y la mejora constante. Busco un trabajo a tiempo parcial que me permita establecerme a largo plazo y trabajar con una visión hacia el futuro.              </p>
              <a href='https://drive.google.com/uc?export=download&id=1-EpB2zb-_4LgwDHZYYx_v-YMRCunll63'>
              <button className="bg-blue-500 py-2 px-4 rounded shadow-md">Descargar CV</button>
              </a>
            </div>

            
          </div>

          
        </BgCard>

      <div className='grid grid-cols-1 gap-8 pt-8 lg:grid-cols-3'>
        <VerticalCard svgImage={book} text="Estoy cursando la carrera de Ing. en sistemas en la UTN FRVM." />
        <VerticalCard svgImage={code} text="Desarollador web especializado en React, Angular y Django." />
        <VerticalCard svgImage={scrum} text="Cuento con conocimientos en metodologías ágiles, especialmente en Scrum." />
      </div>
    </div>
    </section>
  );
};

export default About;
