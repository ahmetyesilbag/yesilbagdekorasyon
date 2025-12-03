import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // WhatsApp numarası (boşluksuz)
    const whatsappNumber = '905375095613'
    
    // WhatsApp mesajını oluştur
    let whatsappMessage = `Merhaba! Web sitesinden iletişime geçiyorum.%0A%0A`
    whatsappMessage += `*Ad Soyad:* ${formData.name}%0A`
    if (formData.email) {
      whatsappMessage += `*E-posta:* ${formData.email}%0A`
    }
    if (formData.phone) {
      whatsappMessage += `*Telefon:* ${formData.phone}%0A`
    }
    whatsappMessage += `%0A*Mesaj:*%0A${formData.message}`
    
    // WhatsApp URL'i oluştur ve aç
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    window.open(whatsappURL, '_blank')
    
    // Formu temizle
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Telefon',
      info: '+90 (537) 509 56 13',
      link: 'tel:+905375095613'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'E-posta',
      info: 'yesil-bag@hotmail.com',
      link: 'mailto:yesil-bag@hotmail.com'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Adres',
      info: 'Camikebir, Sanayi 8. Sk. No.16, 35460 Seferihisar/İzmir',
      link: 'https://maps.google.com/?q=Camikebir,Sanayi+8.+Sk.+No.16 Seferihisar,İzmir'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Çalışma Saatleri',
      info: 'Pzt-Cmt: 08:30 - 19:00',
      link: '#'
    },
  ]

  return (
    <section id="iletisim" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">İletişim</h2>
          <p className="section-subtitle">
            Projeleriniz için bizimle iletişime geçin
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Bize Ulaşın
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Adınız Soyadınız *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition"
                  placeholder="Adınızı girin"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  E-posta Adresiniz *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition"
                  placeholder="ornek@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Telefon Numaranız
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition"
                  placeholder="+90 (537) 509 56 13"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Mesajınız *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition resize-none"
                  placeholder="Proje detaylarınızı bizimle paylaşın..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary"
              >
                Mesaj Gönder
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                İletişim Bilgileri
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.info}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Konumumuz
              </h3>
              <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.8929547865986!2d26.83513!3d38.19583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbddb5f3a4e1d1%3A0x1c0e1d0f0e0e0e0e!2sCamikebir%2C%20Sanayi%208.%20Sk.%20No.16%2C%2035460%20Seferihisar%2F%C4%B0zmir!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Yeşilbağ Dekorasyon - Seferihisar/İzmir"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

