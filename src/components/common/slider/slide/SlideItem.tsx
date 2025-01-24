import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { type SlideProps } from '../interfaces/slider.interface'

interface ISlideItem {
  slide: SlideProps
  index?: number
}

const SlideItem: React.FC<ISlideItem> = (props) => {
  const { url, image, title, description } = props.slide

  return (
    <Link href={url}>
      <div
        className={`keen-slider__slide flex transition-opacity duration-200 cursor-pointer relative`}
      >
        <Image
          src={image}
          alt={`Imagen de ${title}`}
          fill
          className="object-center object-cover"
        />
        {title != null && description != null ? (
          <div className="absolute inset-0 flex items-center">
            {/* Gradiente ocupa toda la altura */}
            <div className="w-2/3 h-full bg-gradient-to-l from-transparent via-black/60 to-black flex items-center p-6">
              {/* Cuadro de texto alineado vertical y horizontalmente */}
              <div className="text-white px-10 py-6 transition-transform duration-300 hover:scale-105">
                <h1 className="text-4xl font-bold mb-5">{title}</h1>
                <p className="text-base">{description}</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </Link>
  )
}

export default SlideItem
