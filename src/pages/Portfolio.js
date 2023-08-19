import React from 'react';
import RoundedCard from '../components/RoundedCard';
import noticiero from '../img/noticiero.jpg'
import taps from '../img/taps.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio" className='h-screen grid place-items-center text-white'>
      <div className='text-4xl font-bold mt-4'>Proyectos:</div>
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
    <RoundedCard imageSrc={noticiero} link="https://noticierovm.fly.dev/" title="NoticieroVM" text="Esta página fue construida con Django y Bootstrap para poner a prueba mis conocimientos y habilidades con estás herramientas." />
    <RoundedCard imageSrc={taps} link="https://gitlab.com/taps-devs/landing" title="TAPS" text="Proyecto realizado con un equipo en un emprendimiento propio, realizado con las herramientas Svelte y Tailwind CSS." />
    </div>
    </section>
  );
};

export default Portfolio;
