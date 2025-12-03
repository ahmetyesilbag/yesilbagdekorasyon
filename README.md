# Yeşilbağ Dekorasyon Mobilya

Modern ve responsive bir mobilya & dekorasyon atölye web sitesi. React ve Tailwind CSS ile geliştirilmiştir.

## 🎨 Özellikler

- ✅ Tamamen responsive tasarım
- ✅ Modern ve temiz kullanıcı arayüzü
- ✅ Smooth scroll navigasyon
- ✅ Dinamik galeri filtreleme sistemi
- ✅ İletişim formu
- ✅ Google Maps entegrasyonu
- ✅ Sosyal medya linkleri
- ✅ SEO uyumlu yapı

## 📋 Bölümler

1. **Ana Sayfa (Hero)** - Etkileyici hero section ve CTA butonları
2. **Galeri** - Filtreli proje galerisi ve lightbox görüntüleme
3. **Hizmetler** - Sunulan hizmetlerin detaylı açıklamaları
4. **Hakkımızda** - Şirket bilgileri ve istatistikler
5. **İletişim** - İletişim formu ve konum bilgileri

## 🚀 Kurulum

### Gereksinimler

- Node.js (v16 veya üzeri)
- npm veya yarn

### Adımlar

1. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

2. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm run dev
   ```

3. **Tarayıcıda açın:**
   ```
   http://localhost:5173
   ```

## 🛠️ Komutlar

- `npm run dev` - Geliştirme sunucusunu başlatır
- `npm run build` - Production build oluşturur
- `npm run preview` - Production build'i önizler

## 📦 Kullanılan Teknolojiler

- **React 18** - UI framework
- **Vite** - Build tool ve dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **React Router DOM** - Smooth scroll navigation
- **Unsplash Images** - Placeholder görseller

## 🎨 Renk Paleti

```css
Primary (Yeşil): #22c55e - #14532d
Wood (Ahşap Tonları): #faf8f5 - #4c4134
Gray Tones: Tailwind default grays
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 Tarayıcı Desteği

- Chrome (son 2 versiyon)
- Firefox (son 2 versiyon)
- Safari (son 2 versiyon)
- Edge (son 2 versiyon)

## 📝 Özelleştirme

### Renkleri Değiştirmek

`tailwind.config.js` dosyasındaki `theme.extend.colors` bölümünü düzenleyin.

### İçerikleri Güncellemek

Her component kendi içeriğini içerir. İlgili component dosyalarını düzenleyerek metinleri, görselleri ve bilgileri değiştirebilirsiniz:

- `src/components/Hero.jsx` - Ana sayfa hero bölümü
- `src/components/Gallery.jsx` - Galeri görselleri ve kategorileri
- `src/components/Services.jsx` - Hizmet kartları
- `src/components/About.jsx` - Hakkımızda bilgileri
- `src/components/Contact.jsx` - İletişim bilgileri ve form
- `src/components/Footer.jsx` - Footer bilgileri

### Görselleri Değiştirmek

Proje şu anda Unsplash placeholder görselleri kullanmaktadır. Kendi görsellerinizi kullanmak için:

1. Görselleri `public/images/` klasörüne ekleyin
2. Component'lerdeki image URL'lerini güncelleyin

## 📄 Lisans

Bu proje Yeşilbağ Dekorasyon Mobilya için özel olarak geliştirilmiştir.

## 📞 İletişim

Sorularınız için: yesil-bag@hotmail.com

---

Made with ❤️ for Yeşilbağ Dekorasyon Mobilya
