# Yeşilbağ Dekorasyon - Proje Dosya Yapısı

```
yesilbagdekorasyon/
├── public/
│   └── (static files)
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation bar with smooth scroll
│   │   ├── Hero.jsx            # Homepage hero section
│   │   ├── Gallery.jsx         # Filterable image gallery
│   │   ├── Services.jsx        # Services showcase
│   │   ├── About.jsx           # About company section
│   │   ├── Contact.jsx         # Contact form and info
│   │   └── Footer.jsx          # Footer with links and social media
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles with Tailwind
├── .eslintrc.cjs              # ESLint configuration
├── .gitignore                 # Git ignore rules
├── index.html                 # HTML entry point
├── package.json               # Dependencies and scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── vite.config.js             # Vite configuration
├── README.md                  # Project documentation
└── FILE_STRUCTURE.md          # This file

```

## 📁 Klasör ve Dosya Açıklamaları

### Root Dosyaları

- **package.json**: Proje bağımlılıkları ve npm scriptleri
- **vite.config.js**: Vite build tool yapılandırması
- **tailwind.config.js**: Tailwind CSS özel renk ve tema ayarları
- **postcss.config.js**: PostCSS ve Tailwind entegrasyonu
- **.eslintrc.cjs**: Code quality ve linting kuralları
- **.gitignore**: Git'in ignore edeceği dosyalar
- **index.html**: Ana HTML şablonu
- **README.md**: Proje dokümantasyonu ve kurulum rehberi

### src/ Klasörü

#### Ana Dosyalar
- **main.jsx**: React uygulamasının başlangıç noktası
- **index.css**: Global CSS ve Tailwind direktifleri
- **App.jsx**: Ana uygulama componenti, tüm section'ları içerir

#### src/components/

**Header.jsx** (Navigation)
- Sticky navigation bar
- Mobile responsive menü
- Smooth scroll navigation
- Scroll'da background değişimi

**Hero.jsx** (Ana Sayfa)
- Full-screen hero section
- Call-to-action butonları
- Parallax efekt
- Scroll indicator

**Gallery.jsx** (Galeri)
- Kategori bazlı filtreleme
- Lightbox görüntüleme
- Grid layout
- Hover efektleri

**Services.jsx** (Hizmetler)
- Service kartları
- Icon'larla görsel sunum
- Hover animasyonları
- CTA section

**About.jsx** (Hakkımızda)
- Şirket hikayesi
- İstatistik kartları
- Özellik listesi
- Görsel galeri

**Contact.jsx** (İletişim)
- İletişim formu (validation ile)
- İletişim bilgileri
- Google Maps entegrasyonu
- Form başarı mesajı

**Footer.jsx**
- Şirket bilgileri
- Quick links
- Sosyal medya linkleri
- Copyright bilgisi

## 🎨 Component Hiyerarşisi

```
App
├── Header
├── Main
│   ├── Hero
│   ├── Gallery
│   ├── Services
│   ├── About
│   └── Contact
└── Footer
```

## 🔧 Teknoloji Stack

- **React 18**: Modern React hooks ile
- **Vite**: Hızlı build ve HMR
- **Tailwind CSS 3**: Utility-first styling
- **React Router DOM**: Smooth scroll navigation

## 📦 Dependencies

### Production
- react: ^18.2.0
- react-dom: ^18.2.0
- react-router-dom: ^6.20.0

### Development
- @vitejs/plugin-react: ^4.2.1
- vite: ^5.0.8
- tailwindcss: ^3.3.6
- postcss: ^8.4.32
- autoprefixer: ^10.4.16
- eslint: latest

## 🚀 Başlangıç

1. Dependencies'leri yükleyin:
   ```bash
   npm install
   ```

2. Development server'ı başlatın:
   ```bash
   npm run dev
   ```

3. Tarayıcıda açın: http://localhost:5173

## 📝 Notlar

- Tüm component'ler fonksiyonel ve React Hooks kullanır
- Responsive tasarım için Tailwind breakpoint'leri kullanılır
- Görseller Unsplash'ten placeholder olarak kullanılmıştır
- Production için gerçek görseller eklenmelidir
- İletişim formu backend entegrasyonu gerektirir

