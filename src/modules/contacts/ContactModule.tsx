import React from 'react'
import { MainLayout } from '@/layouts/main-layout/MainLayout'
import ContactView from './views/ContactView'

const ContactModule: React.FC = () => {
  return (
    <MainLayout>
      <ContactView />
    </MainLayout>
  )
}

export { ContactModule }
