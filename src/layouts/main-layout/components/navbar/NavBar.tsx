'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import menuItems from '@/layouts/main-layout/components/data/navbar/menuItems.json'

const NavBar: React.FC = () => {
  if (menuItems.length > 7) {
    throw new Error('El menú no puede tener más de 7 ítems.')
  }

  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [selectedItem, setSelectedItem] = useState<string | null>(null)
  let timeoutId: NodeJS.Timeout

  const handleMouseEnter = (item: string): void => {
    clearTimeout(timeoutId)
    setHoveredItem(item)
  }

  const handleMouseLeave = (): void => {
    timeoutId = setTimeout(() => {
      setHoveredItem(null)
    }, 300)
  }

  const handleItemClick = (item: string): void => {
    setSelectedItem(item)
  }

  // Encuentra el ítem actual basado en el hoveredItem
  const currentItem = menuItems.find((item) => item.name === hoveredItem)

  // Asegura que subItems sea un array vacío si no está definido o es null.
  const subItems = currentItem?.subItems ?? []

  // Verifica si los subItems están vacíos (tienen un objeto vacío como { name: "", href: "" })
  const hasValidSubItems = subItems.every(
    (subItem) => subItem.name.trim() !== '' && subItem.href.trim() !== ''
  )

  if (subItems.length > 9) {
    throw new Error('No se pueden tener más de 9 subítems en un ítem del menú.')
  }

  const heightClass =
    subItems.length === 1
      ? 'h-[65px]'
      : subItems.length === 2
        ? 'h-[130px]'
        : subItems.length === 3
          ? 'h-[195px]'
          : subItems.length === 4
            ? 'h-[260px]'
            : subItems.length === 5
              ? 'h-[325px]'
              : subItems.length === 6
                ? 'h-[390px]'
                : subItems.length === 7
                  ? 'h-[455px]'
                  : subItems.length === 8
                    ? 'h-[520px]'
                    : subItems.length === 9
                      ? 'h-[585px]'
                      : 'h-65'

  return (
    <nav className="bg-[#210a3e] h-[70px] flex items-center justify-between relative hidden lg:flex px-[170px] z-20">
      <div className="flex items-center">
        {menuItems.map((item) => (
          <div
            key={item.name}
            onMouseEnter={() => {
              if (
                item.subItems != null &&
                item.subItems.some(
                  (subItem) => subItem.name.length > 0 && subItem.href
                )
              ) {
                handleMouseEnter(item.name)
              }
            }}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <Link href={item.href}>
              <Button
                variant="secondary"
                className={`px-[40px] h-[70px] rounded-none
                  ${
                    hoveredItem === item.name || selectedItem === item.name
                      ? 'bg-[#210a3e] text-white' // Cambia el color a negro si el ítem está seleccionado o en hover
                      : 'bg-[#210a3e] text-white'
                  } 
                  hover:bg-white hover:text-[#210a3e]`} // Personaliza el hover
                onClick={() => {
                  handleItemClick(item.name)
                }}
              >
                {item.name.toUpperCase()}
              </Button>
            </Link>

            {/* Solo muestra los subítems si existen y tienen valores válidos */}
            {hoveredItem === item.name &&
              item.subItems != null &&
              item.subItems.length > 0 &&
              hasValidSubItems && (
                <div className="absolute left-0 right-0 top-[70px] bg-white z-20">
                  <div className="flex flex-col">
                    {item.subItems.map((subItem) => (
                      <Link key={subItem.name} href={subItem.href} passHref>
                        <div className="flex justify-start px-4 py-6 cursor-pointer z-10 whitespace-nowrap">
                          <span className="text-[#210a3e] hover:text-[#0d0d0d] transition-colors duration-300 hover:font-bold text-xs ml-6">
                            {subItem.name.toUpperCase()}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
          </div>
        ))}
      </div>

      {hoveredItem != null &&
        currentItem?.subItems != null &&
        currentItem.subItems.length > 0 &&
        hasValidSubItems && (
          <div className="absolute top-[70px] inset-x-0 z-10 bg-white">
            <div className={`${heightClass}`} />
            <div className="h-[1px] bg-gray-300" />
          </div>
        )}
    </nav>
  )
}

export default NavBar
