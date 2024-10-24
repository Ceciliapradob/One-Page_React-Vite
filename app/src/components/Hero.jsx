// Importa React
import React from 'react';
import Front from './assets/cuadro.jpg'
import './Hero.css'; 

// Componente Hero
const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row h-[700px] md:h-[800px] overflow-hidden">
            {/* Parte izquierda: Fondo negro con imagen */}
            <div className="bg-black w-full md:w-1/4 flex flex-col justify-start h-auto">
                {/* Título grande */}
                <h1 className="text-2xl md:text-5xl text-white p-8 mt-20  ml-20 title">
                    AGREGAR
                </h1>


                {/* Contenedor de imagen */}
                <div className="flex-grow relative">
                    {/* Imagen de fondo (ajusta la URL según sea necesario) */}


                    <div className="absolute inset-0 bg-cover bg-center h-full" style={{ backgroundImage: "url('https://via.placeholder.com/800x600')" }}></div>

                </div>
            </div>

            <img src={Front} alt="" className='md:w-1/3' />
            {/* Parte derecha: Sección blanca vacía */}
            <div className="w-full md:w-1/2 bg-white flex justify-center items-center">
                <p>texto</p>

                {/* Aquí puedes añadir más contenido si lo deseas en el futuro */}

            </div>

        </section>
    );
};

// Exporta el componente para usarlo en otra parte de la aplicación
export default Hero;
