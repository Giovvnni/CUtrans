'use client'
import React, { useState, useRef } from 'react'
import emailjs from 'emailjs-com'

// Componente principal Contact
const ContactView: React.FC = () => {
  // useState para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  // Estado que indica si el formulario ha sido enviado con éxito
  const [submitted, setSubmitted] = useState(false)

  // Estado para manejar los mensajes de error en el formulario
  const [error, setError] = useState('')

  // Referencia para el botón de envío, que se puede utilizar para hacer scroll hacia él
  const submitButtonRef = useRef<HTMLButtonElement>(null)

  const [isSubmitting, setIsSubmitting] = useState(false)

  // Maneja el cambio de los campos del formulario
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })

    // Al cambiar el valor, hace scroll automático hacia el botón de envío
    if (submitButtonRef.current != null) {
      submitButtonRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Función de envío del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    // Validación: revisa si algún campo está vacío y muestra un mensaje de error
    if (
      formData.name.length === 0 ||
      formData.email.length === 0 ||
      formData.message.length === 0
    ) {
      setError('Por favor, completa todos los campos.')
      return
    }

    setIsSubmitting(true)

    // Configura los parámetros para enviar el formulario con EmailJS
    emailjs
      .send(
        'tu_service_id', // ID de tu servicio (reemplaza esto)
        'tu_template_id', // ID de tu plantilla (reemplaza esto)
        formData, // Datos del formulario
        'tu_public_key' // Clave pública de EmailJS (reemplaza esto)
      )
      .then((result) => {
        setSubmitted(true)
        setError('')
        setFormData({
          name: '',
          email: '',
          message: ''
        })
      })
      .catch((error) => {
        console.error(error.text)
        setError('Hubo un error al enviar el mensaje.')
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <section className="text-gray-600 body-font relative min-h-screen flex items-center justify-center">
      {/* Formulario de contacto en la sección derecha */}
      <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col w-full h-auto p-8">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
          Contáctanos
        </h2>
        <p className="leading-relaxed mb-5 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          soluta nam minima labore modi praesentium, repudiandae ex enim
          inventore molestiae. Commodi corrupti, vitae accusantium quae repellat
          dicta. Vitae, maiores! Rem.
        </p>
        <p className="leading-relaxed mb-5 text-gray-600"></p>
        <form onSubmit={handleSubmit} className="flex flex-col justify-between">
          {/* Campo de Nombre */}
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          {/* Campo de Correo Electrónico */}
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          {/* Campo de Mensaje */}
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Tu mensaje:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          {/* Mensaje de error */}
          {error.length > 0 && <p className="text-red-500 mt-3">{error}</p>}
          {/* Botón de Enviar */}
          <button
            ref={submitButtonRef}
            type="submit"
            disabled={isSubmitting || submitted} // Desactiva el botón si se está enviando o ya fue enviado
            className={`text-white bg-[#210a3e] border-0 py-2 px-6 focus:outline-none rounded text-lg 
                ${submitted ? 'bg-gray-500 cursor-not-allowed' : isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#210a3e] hover:bg-indigo-600'}`}
          >
            {isSubmitting ? 'Enviando...' : submitted ? 'Enviado' : 'Enviar'}
          </button>
          {/* Mensaje de confirmación al enviar */}
          {submitted && (
            <p className="text-green-500 mt-3">
              ¡Tu mensaje ha sido enviado correctamente!
            </p>
          )}
          <p className="text-xs text-gray-500 mt-3">
            Tiempo estimado de respuesta: 24 horas hábiles.
          </p>
        </form>
      </div>
    </section>
  )
}

export default ContactView
