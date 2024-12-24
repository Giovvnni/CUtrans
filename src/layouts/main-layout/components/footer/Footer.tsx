import React from 'react'
import Image from 'next/image' // Importamos el componente Image de Next.js para optimizar la carga de imágenes

const Footer: React.FC = () => (
  <footer className="text-white body-font bg-[#36424A]">
    <div className="ml-[100px] mb-4">
      <div className=" container flex justify-start py-4">
        {' '}
        {/* Padding horizontal de 5rem y padding vertical de 1.25rem */}
        <Image
          src="/assets/cutrans_blanco.png" // Ruta del logo
          alt="CUtrans logo"
          width={100} // Ancho de la imagen
          height={100} // Alto de la imagen
        />
        <div className="py-5">
          <span className="text-3xl font-bold text-[#FF7F32] ml-1 ">CU</span>
          <span className="text-3xl font-bold text-white mr-10 ">TRANS</span>
        </div>
      </div>
      {/* Contenedor principal del pie de página que organiza los diferentes enlaces */}
      <div className="container mx-auto mt-2 flex flex-wrap justify-start items-start">
        {/* Columna de "Links relacionados" */}
        <div className="lg:w-1/5 md:w-1/4 w-full ">
          <h2 className="whitespace-nowrap title-font font-medium text-white tracking-widest text-sm mb-3">
            Manuel Montt 275
          </h2>
          <h2 className="whitespace-nowrap title-font font-medium text-white tracking-widest text-sm mb-3">
            Oficina 502, piso 5, Providencia, Santiago, Chile
          </h2>
          <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
            +56 9 4272 5705
          </h2>
        </div>
      </div>
    </div>
    {/* Sección de derechos de autor */}
    <div className="bg-[#E55302]">
      <div className="container mx-auto py-0.5 px-7 flex flex-wrap flex-col sm:flex-row justify-between items-center">
        {/* Texto de derechos reservados */}
        <p className="text-sm text-center sm:text-left ml-[100px]">
          © 2024 CUTRANS — Todos los derechos reservados.
        </p>
        {/* Iconos de redes sociales */}
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a className="ml-3 ">
            {/* Icono de Instagram */}
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5 hover:text-gray-400"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          {/* Icono de YouTube */}
          <a className="ml-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 hover:text-gray-400"
            >
              <path d="M23.498 6.186c-.223-.844-.873-1.497-1.717-1.717C20.31 3.695 12 3.695 12 3.695s-8.31 0-9.781.774C1.375 4.689.725 5.343.502 6.186 0 7.19 0 12 0 12s0 4.81.502 5.814c.223.843.873 1.497 1.717 1.717 1.471.774 9.781.774 9.781.774s8.31 0 9.781-.774c.844-.22 1.494-.874 1.717-1.717.502-1.004.502-5.814.502-5.814s0-4.81-.502-5.814zM9.548 15.982V8.018l6.674 3.482-6.674 3.482z" />
            </svg>
          </a>
          {/* Icono de Discord */}
          <a className="ml-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-discord hover:text-gray-400"
              viewBox="0 0 16 16"
            >
              <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer>
)

export default Footer
