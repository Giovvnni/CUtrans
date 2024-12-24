import React from 'react'

import { MainLayout } from '@/layouts/main-layout/MainLayout'

import { Slider } from '@/components/common/slider/Slider'

import slideData from '@/data/slider/carouselData.json'

import 'keen-slider/keen-slider.min.css'
import LandingAboutUsView from '@/modules/nosotros/views/LandingAboutUsView'

const LandingModule: React.FC = () => {
  return (
    <MainLayout>
      <div className="w-full">
        <Slider className="md:h-[45vh] lg:h-[65vh]" data={slideData} />
        <LandingAboutUsView />
      </div>
    </MainLayout>
  )
}

export { LandingModule }
