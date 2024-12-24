// src/layouts/RegularLayout.jsx
import React from 'react'

// TODO Arreglar importaciones

import { Footer } from './components/footer'
import { NavBar } from './components/navbar'

interface RootLayoutProps {
  children: React.ReactNode
}

const RegularLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <header className="hidden md:block">
        <NavBar />
      </header>
      <header className="block md:hidden"></header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export { RegularLayout }
