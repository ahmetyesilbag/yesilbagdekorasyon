import React, { useState } from 'react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    { id: 1, url: '/images/WhatsApp Görsel 2025-12-03 saat 22.18.18_897e1a1b.jpg', category: 'oturma', title: 'Mobilya Projesi 1' },
    { id: 2, url: '/images/WhatsApp Görsel 2025-12-03 saat 22.18.19_598cbdb3.jpg', category: 'mutfak', title: 'Mutfak Dolabı' },
    { id: 3, url: '/images/WhatsApp Görsel 2025-12-03 saat 22.18.20_4238662e.jpg', category: 'oturma', title: 'Mobilya Projesi 2' },
    { id: 4, url: '/images/WhatsApp Görsel 2025-12-03 saat 22.20.00_c21b3785.jpg', category: 'yatak', title: 'Yatak Odası Projesi' },
    { id: 5, url: '/images/WhatsApp Görsel 2025-12-03 saat 22.20.00_e3c79fd0.jpg', category: 'oturma', title: 'Mobilya Projesi 3' },
    { id: 6, url: '/images/WhatsApp Görsel 2025-12-03 saat 22.20.01_dfd74674.jpg', category: 'ofis', title: 'Ofis Mobilyası' },
    { id: 7, url: '/images/WhatsApp Görsel 2025-12-03 saat 22.20.05_00964ae0.jpg', category: 'mutfak', title: 'Mutfak Tasarımı' },
    { id: 8, url: '/images/WhatsApp Görsel 2025-12-03 saat 22.20.05_594a751f.jpg', category: 'oturma', title: 'Mobilya Projesi 4' },
    { id: 9, url: '/images/WhatsApp Görsel 2025-12-03 saat 22.20.05_81e451ca.jpg', category: 'yatak', title: 'Yatak Odası Mobilyası' },
    { id: 10, url: '/images/WhatsApp Görsel 2025-12-03 saat 22.21.09_af388807.jpg', category: 'oturma', title: 'Mobilya Projesi 5' },
    { id: 11, url: '/images/WhatsApp Görsel 2025-12-03 saat 22.21.09_b734c441.jpg', category: 'ofis', title: 'Ofis Projesi' },
    { id: 12, url: '/images/WhatsApp Görsel 2025-12-03 saat 22.21.09_d550da5e.jpg', category: 'mutfak', title: 'Mutfak Projesi' },
    { id: 13, url: '/images/WhatsApp Görsel 2025-12-03 saat 22.21.09_d980663d.jpg', category: 'oturma', title: 'Mobilya Projesi 6' },
    { id: 14, url: '/images/WhatsApp Görsel 2025-12-03 saat 22.21.10_d081a0f8.jpg', category: 'yatak', title: 'Yatak Odası Tasarımı' },
  ]

  return (
    <section id="galeri" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Galeri</h2>
          <p className="section-subtitle">
            Tamamladığımız projelerden öne çıkan örnekler
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map(image => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery

