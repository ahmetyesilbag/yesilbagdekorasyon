import React from 'react'

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="anasayfa" className="relative h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80"
          alt="Modern Furniture"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 relative">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Hayalinizdeki Yaşam Alanları
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Özel tasarım mobilya ve dekorasyon çözümleriyle mekanlarınıza değer katıyoruz
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => scrollToSection('galeri')}
              className="btn-primary text-center"
            >
              Galeriyi İncele
            </button>
            <button 
              onClick={() => scrollToSection('iletisim')}
              className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-center"
            >
              İletişime Geç
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero

