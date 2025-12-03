import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('anasayfa')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
      setActiveSection(id)
    }
  }

  const menuItems = [
    { id: 'anasayfa', label: 'Ana Sayfa', icon: '🏠' },
    { id: 'galeri', label: 'Galeri', icon: '🖼️' },
    { id: 'hizmetler', label: 'Hizmetler', icon: '⚙️' },
    { id: 'hakkimizda', label: 'Hakkımızda', icon: 'ℹ️' },
    { id: 'iletisim', label: 'İletişim', icon: '📞' },
  ]

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xl py-3' 
          : 'bg-gradient-to-b from-black/50 to-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('anasayfa')}>
            <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
              isScrolled 
                ? 'bg-gradient-to-br from-primary-500 to-primary-700 shadow-lg shadow-primary-500/50' 
                : 'bg-gradient-to-br from-primary-400 to-primary-600 shadow-2xl'
            }`}>
              <span className="text-white font-bold text-2xl drop-shadow-lg">Y</span>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-wood-500 rounded-full animate-pulse"></div>
            </div>
            <div className="transition-all duration-300">
              <h1 className={`font-bold text-xl transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white drop-shadow-lg'
              }`}>
                Yeşilbağ Dekorasyon
              </h1>
              <p className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-primary-600' : 'text-primary-300 drop-shadow'
              }`}>
                🪑 Mobilya & Dekorasyon
              </p>
            </div>
          </div>

          {/* Desktop Navigation - Enhanced */}
          <nav className="hidden lg:flex items-center space-x-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-5 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeSection === item.id
                    ? isScrolled
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30'
                      : 'bg-white text-primary-600 shadow-xl'
                    : isScrolled
                      ? 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                      : 'text-white hover:bg-white/20 hover:shadow-lg'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </span>
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary-400 rounded-full animate-pulse"></span>
                )}
              </button>
            ))}
            
            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('iletisim')}
              className={`ml-4 px-6 py-2.5 rounded-full font-bold transition-all duration-300 transform hover:scale-110 hover:shadow-2xl ${
                isScrolled
                  ? 'bg-gradient-to-r from-wood-600 to-wood-700 text-white shadow-lg shadow-wood-600/30'
                  : 'bg-gradient-to-r from-wood-500 to-wood-600 text-white shadow-xl shadow-wood-500/50'
              }`}
            >
              💬 Teklif Al
            </button>
          </nav>

          {/* Mobile Menu Button - Enhanced */}
          <button
            className="lg:hidden relative group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isScrolled ? 'bg-primary-100' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <svg
                className={`w-6 h-6 transition-all duration-300 ${
                  isScrolled ? 'text-primary-600' : 'text-white'
                } ${isMobileMenuOpen ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </div>
          </button>
        </div>

        {/* Mobile Menu - Enhanced */}
        {isMobileMenuOpen && (
          <nav className={`lg:hidden mt-6 pb-4 space-y-2 animate-fadeIn ${
            isScrolled ? 'bg-white/95' : 'bg-black/30 backdrop-blur-md'
          } rounded-2xl p-4`}>
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{ animationDelay: `${index * 50}ms` }}
                className={`block w-full text-left px-5 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:translate-x-2 ${
                  activeSection === item.id
                    ? isScrolled
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                      : 'bg-white text-primary-600 shadow-xl'
                    : isScrolled
                      ? 'text-gray-700 hover:bg-primary-50'
                      : 'text-white hover:bg-white/20'
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span>{item.label}</span>
                </span>
              </button>
            ))}
            
            {/* Mobile CTA */}
            <button
              onClick={() => scrollToSection('iletisim')}
              className={`w-full mt-3 px-5 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                isScrolled
                  ? 'bg-gradient-to-r from-wood-600 to-wood-700 text-white shadow-lg'
                  : 'bg-gradient-to-r from-wood-500 to-wood-600 text-white shadow-xl'
              }`}
            >
              💬 Ücretsiz Teklif Alın
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header

