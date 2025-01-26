/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Desactiva la optimización de imágenes para exportación estática
    domains: ['via.placeholder.com'] // Permite cargar imágenes desde este dominio
  },
  // La configuración de headers no funciona con "output: export", así que se elimina.
  output: 'export' // Configuración para exportación estática
}

export default nextConfig
