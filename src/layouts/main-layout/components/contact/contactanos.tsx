'use client'

import React, { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const Contactanos: React.FC = (): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="fixed bottom-40 right-4 flex justify-center items-center">
      <a
        href="https://wa.me/56942725705?text=Hola,%20quiero%20más%20información%20sobre%20sus%20servicios."
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => {
          setIsHovered(true)
        }}
        onMouseLeave={() => {
          setIsHovered(false)
        }}
        className={`bg-green-600 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all flex items-center ${
          isHovered ? 'px-6' : 'px-4'
        }`}
      >
        <FaWhatsapp size={35} />
        {isHovered && (
          <span className=" ml-2 whitespace-nowrap">Contáctanos</span>
        )}
      </a>
    </div>
  )
}

export default Contactanos
