import React from 'react'

const About = () => {
  const stats = [
    { number: '30+', label: 'Yıllık Deneyim' },
    { number: '500+', label: 'Tamamlanan Proje' },
    { number: '100%', label: 'Müşteri Memnuniyeti' },
    { number: '24/7', label: 'Destek' },
  ]

  const features = [
    {
      title: 'Kaliteli Malzeme',
      description: 'Sadece en kaliteli ve dayanıklı malzemeleri kullanıyoruz.'
    },
    {
      title: 'Uygun Fiyat',
      description: 'Kaliteden ödün vermeden en uygun fiyat garantisi.'
    },
    {
      title: 'Garantili İş',
      description: 'Tüm işlerimiz için garanti ve satış sonrası destek.'
    },
  ]

  return (
    <section id="hakkimizda" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <div>
            <h2 className="section-title">Hakkımızda</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Yeşilbağ Dekorasyon Mobilya olarak, 30 yılı aşkın süredir mobilya ve dekorasyon 
              sektöründe hizmet vermekteyiz. Müşterilerimizin hayallerini gerçeğe dönüştürmek 
              için özel tasarım mobilyalar üretiyoruz.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Kaliteli malzeme, uzman işçilik ve modern tasarım anlayışımızla her projede 
              mükemmelliği hedefliyoruz. Sizin için özel olarak tasarlanan mobilyalarla 
              mekanlarınıza değer katıyoruz.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Müşteri memnuniyeti bizim için her şeyden önce gelir. Bu nedenle projelerimizin 
              her aşamasında sizinle birlikte çalışıyor ve en ince detayına kadar ilgileniyoruz.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80"
                alt="Atölye"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-8 rounded-xl shadow-xl">
              <p className="text-4xl font-bold mb-2">30+</p>
              <p className="text-lg">Yıllık Tecrübe</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</p>
              <p className="text-lg md:text-xl opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

