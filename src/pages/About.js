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
              Soy un desarrollador web especializado en lenguajes de programación como Python, JavaScript y Java, con experiencia en tecnologías como Node.js, Express, React, Angular, MongoDB, PostgreSQL y Tailwind CSS. Mi enfoque se orienta hacia la creación de soluciones digitales eficientes y elegantes, aprovechando herramientas modernas para desarrollar aplicaciones web de alta calidad y bases de datos robustas. Mi objetivo es continuar innovando y optimizando experiencias digitales a través de un enfoque técnico sólido y una pasión por la programación.</p>
              <a href='https://drive.google.com/uc?export=download&id=1-EpB2zb-_4LgwDHZYYx_v-YMRCunll63'>
              <button className="bg-blue-500 py-2 px-4 rounded shadow-md">Descargar CV</button>
              </a>
            </div>

            
          </div>

          
        </BgCard>

      <div className='grid grid-cols-1 gap-8 pt-8 lg:grid-cols-3'>
        <VerticalCard svgImage={book} text="Estoy cursando la carrera de Ing. en sistemas en la UTN FRVM." />
        <VerticalCard svgImage={code} text="Desarollador web especializado en React y Angular." />
        <VerticalCard svgImage={scrum} text="Cuento con conocimientos en metodologías ágiles, especialmente en Scrum." />
      </div>
    </div>
    </section>
  );
};

export default About;
