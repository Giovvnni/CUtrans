// src/components/QuienesSomosFablabUV.tsx
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TruckIcon, BusIcon } from 'lucide-react'

import { type Service } from '@/interfaces/nosotros/nosotros.interface'
// Importa los datos desde el archivo JSON
import nosotrosData from '@/data/nosotros/nosotros.json'

const iconMap: Record<string, JSX.Element> = {
  TruckIcon: <TruckIcon className="w-10 h-10 text-[#B87333]" />,
  BusIcon: <BusIcon className="w-10 h-10 text-[#B87333]" />
}

const QuienesSomosFablabUV: React.FC = () => {
  const { titulo, descripcion, servicios } = nosotrosData.quienesSomos

  return (
    <div className="bg-white text-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="md:flex md:items-center md:gap-16">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
              {titulo}
            </h1>
            <p className="text-xl mb-12 max-w-3xl mx-auto md:mx-0">
              {descripcion}
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-1 gap-8">
            {servicios.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.titulo}
                description={service.descripcion}
                forWho={service.paraQuienes}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const ServiceCard: React.FC<Service> = ({
  icon,
  title,
  description,
  forWho
}) => {
  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-transform duration-300 border-t-4 border-[#B87333] flex items-center p-4 hover:scale-105">
      <div className="mr-4">{iconMap[icon]}</div>
      <div>
        <CardHeader className="p-0">
          <CardTitle className="text-xl font-semibold text-[#210a3e] mb-2">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <p className="text-gray-600 mb-2">{description}</p>
          <div>
            <h4 className="font-semibold text-[#B87333] flex items-center mb-2 ">
              <p>Para quiénes:</p>
            </h4>
            <p className="text-black">{forWho}</p>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}

export default QuienesSomosFablabUV
