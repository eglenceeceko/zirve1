'use client'; 
import { useState, useEffect } from 'react';


interface Paylasim {
  id: number;
  text: string;
  url: string;
  link: string;
}

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-09-15T09:00:00'); 
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);


  const paylasimlar: Paylasim[] = [
    { id: 1, text: "YamanArt 2026", url: "sitepost1.jpg", link: "https://www.instagram.com/p/DXUzJ0ljika/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
    { id: 2, text: "Gelecek Burada", url: "sitepost2.jpg", link: "https://www.instagram.com/p/DXR-S9YDCXl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
    { id: 3, text: "Sanat ve Teknoloji", url: "sitepost3.jpg", link: "https://www.instagram.com/p/DXZqMY3DDxT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  ];

  return (
    <main className="min-h-screen bg-[#0f172a] text-white scroll-smooth overflow-x-hidden w-full">

<div className="hidden md:block w-full bg-sky-600 py-2 overflow-hidden whitespace-nowrap">
  <div className="animate-pulse text-sm font-bold uppercase tracking-widest text-center w-full">
    KAYITLAR BAŞLADI - ERKEN ERİŞİM FIRSATINI KAÇIRMA! &nbsp;&nbsp;&nbsp; YAMANART 2026 - SANATIN VE TEKNOLOJİNİN GELECEĞİ
  </div>
</div>


<nav className="sticky top-0 z-50 bg-[#0f172a]/90 backdrop-blur-md border-b border-sky-900 py-4 px-4 flex flex-col items-center w-full">
  
  {/* Logo Bölümü */}
  <div className="w-full flex justify-center mb-4 md:mb-0 md:justify-start">
     <img src="logo.jpg" alt="Logo" className="h-8 w-auto" />
  </div>

  {/* Link Bölümü - 2-2-2-2 Dizilimi */}
  <div className="flex flex-col gap-3 w-full items-center md:flex-row md:justify-center md:gap-8 text-xs md:text-sm font-bold uppercase">
    
    {/* 1. Grup */}
    <div className="flex justify-between w-48">
      <a href="#akis" className="hover:text-sky-400">Akış</a>
      <a href="#konusmacilar" className="hover:text-sky-400">Konuşmacılar</a>
    </div>
    
    {/* 2. Grup */}
    <div className="flex justify-between w-48">
      <a href="#sosyal" className="hover:text-sky-400">Paylaşımlar</a>
      <a href="#sss" className="hover:text-sky-400">SSS</a>
    </div>

    {/* 3. Grup */}
    <div className="flex justify-between w-48">
      <a href="#basvuru" className="hover:text-sky-400">Başvuru</a>
      <a href="#ekibimiz" className="hover:text-sky-400">Ekibimiz</a>
    </div>

    {/* 4. Grup */}
    <div className="flex justify-between w-48">
      <a href="#sponsorlar" className="hover:text-sky-400">Sponsorlar</a>
      <a href="#iletisim" className="hover:text-sky-400">İletişim</a>
    </div>

  </div>
</nav>

      <section className="flex flex-col items-center justify-center h-[70vh] text-center">
        <h1 className="text-6xl md:text-8xl font-black mb-6 text-white">YAMANART</h1>
        <p className="text-xl md:text-2xl text-sky-200 mb-10">Sanatın ve Geleceğin Zirvesi</p>
        
        <div className="flex gap-4 mb-10 text-2xl font-mono">
          <div className="flex flex-col"><span className="text-4xl text-sky-400">{timeLeft.days}</span><span>Gün</span></div>
          <div className="flex flex-col"><span className="text-4xl text-sky-400">{timeLeft.hours}</span><span>Saat</span></div>
          <div className="flex flex-col"><span className="text-4xl text-sky-400">{timeLeft.minutes}</span><span>Dakika</span></div>
          <div className="flex flex-col"><span className="text-4xl text-sky-400">{timeLeft.seconds}</span><span>Saniye</span></div>
        </div>

        <a href="#basvuru" className="px-8 py-4 bg-sky-600 text-white font-bold text-lg hover:bg-sky-500 transition-all duration-300">
          HEMEN KAYIT OL
        </a>
      </section>


      <section id="akis" className="py-20 px-10 w-full bg-[#1e293b] border-t border-sky-900">
        <h2 className="text-4xl font-bold text-center mb-16 text-white tracking-tight">ETKİNLİK AKIŞI (ÖZELLEŞTİREBİLİR)</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            { time: "09:00", event: "Açılış Konuşması", desc: "Zirveye hoş geldin konuşması ve açılış." },
            { time: "10:30", event: "Sanatın Geleceği Paneli", desc: "Sektör liderleri ile vizyon tartışmaları." },
            { time: "13:00", event: "Öğle Arası ve Networking", desc: "Katılımcılar arası iletişim ve tanışma." },
            { time: "15:00", event: "Atölye Çalışmaları", desc: "Pratik uygulamalar ve yaratıcı seanslar." }
          ].map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-12 border-b border-sky-900 pb-6">
              <div className="w-24 font-bold text-sky-400 text-2xl font-mono">{item.time}</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1 text-white">{item.event}</h3>
                <p className="text-sky-100">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section id="konusmacilar" className="py-20 px-10 w-full bg-[#0f172a]">
        <h2 className="text-4xl font-bold text-center mb-16 text-white tracking-tight">KONUŞMACILARIMIZ</h2>
        <div className="group grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Dr. Ahmet Yılmaz", role: "Teknoloji Vizyoneri", topic: "Geleceğin Kodları", img: "/speaker1.jpg" },
            { name: "Ayşe Demir", role: "Dijital Sanatçı", topic: "Yaratıcılıkta Sınırlar", img: "/speaker2.jpg" },
            { name: "Mehmet Can", role: "Sürdürülebilirlik Uzmanı", topic: "Yeşil Gelecek", img: "/speaker3.jpg" },
            { name: "Zeynep Kaya", role: "Psikolog", topic: "Zihin ve Sanat", img: "/speaker4.jpg" },
            { name: "Caner Ekin", role: "İnfluencer", topic: "Dijital Etkileşim", img: "/speaker5.jpg" },
            { name: "Deniz Yıldız", role: "Oyuncu", topic: "Sahne Sanatları", img: "/speaker6.jpg" }
          ].map((speaker, index) => (
            <div 
              key={index} 
              className="border border-sky-900 cursor-pointer bg-[#1e293b] overflow-hidden transition-all duration-500 
                         group-hover:opacity-30 hover:!opacity-100 hover:scale-[1.15] hover:border-sky-400 
                         hover:shadow-[0_0_50px_rgba(2,132,199,0.7)] active:scale-95 scroll-m-24"
              onMouseEnter={(e) => e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            >
              <div className="w-full h-64 bg-slate-800 overflow-hidden">
                <img src={speaker.img} alt={speaker.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-1 text-white">{speaker.name}</h3>
                <p className="text-sky-400 text-sm font-bold uppercase mb-4 tracking-wider">{speaker.role}</p>
                <p className="text-sky-100">{speaker.topic}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="sosyal" className="py-20 px-10 w-full bg-[#1e293b] border-t border-sky-900">
        <h2 className="text-4xl font-bold text-center mb-16 text-white tracking-tight">ANLIK İNSTAGRAM PAYLAŞIMLARI</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {paylasimlar.map((item) => (
            <a key={item.id} href={item.link} target="_blank" className="aspect-square border border-sky-900 overflow-hidden group block">
              <img 
                src={item.url} 
                alt={item.text} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
            </a>
          ))}
        </div>
      </section>


      <section id="sss" className="py-20 px-10 w-full bg-[#0f172a] border-t border-sky-900">
        <h2 className="text-4xl font-bold text-center mb-16 text-white tracking-tight">SIKÇA SORULANLAR</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: "Etkinlik ücretli mi?", a: "Evet, YamanArt 2026 ucuz ve makul fiyatta kaliteli bir etkinliktir.." },
            { q: "Katılım belgesi verilecek mi?", a: "Evet, tüm katılımcılara dijital katılım belgesi iletilecektir." },
            { q: "Konum neresi?", a: "Etkinlik detayları ve lokasyon bilgisi başvurudan sonra e-posta ile gönderilecektir." },
            { q: "Kimler katılabilir?", a: "Sanata ve teknolojiye ilgi duyan lise çağındaki herkes başvuru yapabilir." }
          ].map((item, index) => (
            <details key={index} className="group bg-[#1e293b] border border-sky-900 p-6 hover:border-sky-500 transition-all">
              <summary className="font-bold text-lg text-white cursor-pointer list-none flex justify-between items-center">
                {item.q}
                <span className="text-sky-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-sky-100/80 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>


      <section id="basvuru" className="py-20 px-10 w-full bg-[#1e293b] border-t border-sky-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">DELEGE / EKİP BAŞVURUSU</h2>
          <div className="w-full">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLScGdHsWSjsiR3arqumQUMZwj6s4j5zf2sENz_R5GLdBX51jPQ/viewform?usp=dialog" 
              width="100%" 
              height="800" 
              frameBorder="0"
              className="bg-transparent"
            >
              Yükleniyor...
            </iframe>
          </div>
        </div>
      </section>


      <section id="ekibimiz" className="py-20 px-10 w-full bg-[#0f172a] border-t border-sky-900">
        <h2 className="text-4xl font-bold text-center mb-16 text-white tracking-tight">EKİBİMİZ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { isim: "İsim Soyisim", unvan: "GENEL KOORDİNATÖR", aciklama: "Etkinlik stratejilerini yönetir.", resim: "/avatar.jpg" },
            { isim: "İsim Soyisim", unvan: "ORGA BAŞKANI", aciklama: "Organizasyonel akışı düzenler.", resim: "/avatar.jpg" },
            { isim: "İsim Soyisim", unvan: "PR BAŞKANI", aciklama: "İletişim ağlarını yönetir.", resim: "/avatar.jpg" },
            { isim: "İsim Soyisim", unvan: "SAHA BAŞKANI", aciklama: "Operasyonel saha takibini sağlar.", resim: "/avatar.jpg" },
            { isim: "İsim Soyisim", unvan: "PRESS BAŞKANI", aciklama: "Basın ve medya ilişkilerini yürütür.", resim: "/avatar.jpg" },
            { isim: "İsim Soyisim", unvan: "FİNANS BAŞKANI", aciklama: "Bütçe ve kaynak planlamasını yönetir.", resim: "/avatar.jpg" },
            { isim: "İsim Soyisim", unvan: "GÜVENLİK BAŞKANI", aciklama: "Güvenlik stratejileri ve saha operasyonları alanında uzmandır.", resim: "/image_3449d9.jpg" },
            { isim: "İsim Soyisim", unvan: "AKADEMİ BAŞKANI", aciklama: "Eğitim içeriklerini denetler.", resim: "/avatar.jpg" },
            { isim: "İsim Soyisim", unvan: "IT BAŞKANI", aciklama: "Teknik altyapı ve yazılım süreçlerini yönetir.", resim: "/avatar.jpg" }
          ].map((uye, i) => (
            <div key={i} className="border border-sky-900 bg-[#1e293b] p-6 hover:border-sky-500 transition-all">
              <img src={uye.resim} alt={uye.isim} className="w-full h-64 object-cover mb-4" />
              <h3 className="text-2xl font-bold text-white mb-1">{uye.isim}</h3>
              <p className="text-sky-400 font-bold text-sm mb-4">{uye.unvan}</p>
              <p className="text-sky-100/70 text-sm leading-relaxed">{uye.aciklama}</p>
            </div>
          ))}
        </div>
      </section>


      <section id="sponsorlar" className="py-20 px-10 w-full bg-[#0f172a] border-t border-sky-900">
        <h2 className="text-2xl font-bold text-center mb-12 text-sky-400 tracking-widest uppercase">Destekçilerimiz</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto items-center opacity-60">
          <div className="text-center font-black text-xl text-white">SPONSOR 1</div>
          <div className="text-center font-black text-xl text-white">SPONSOR 2</div>
          <div className="text-center font-black text-xl text-white">SPONSOR 3</div>
          <div className="text-center font-black text-xl text-white">SPONSOR 4</div>
        </div>
      </section>


      <section id="iletisim" className="py-20 px-10 w-full bg-[#1e293b] border-t border-sky-900 text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">BİZE ULAŞIN</h2>
        <p className="text-sky-200 mb-8">Sorularınız için bizimle her zaman iletişime geçebilirsiniz.</p>
        <div className="flex justify-center gap-8">
          <a href="mailto:info@yamanart.com" className="px-6 py-3 border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white transition-all font-bold">
            E-POSTA GÖNDER
          </a>
          <a href="https://wa.me/905XXXXXXXXXX" target="_blank" className="px-6 py-3 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all font-bold">
            WHATSAPP
          </a>
        </div>
      </section>

      <footer className="w-full bg-[#050505] py-16 px-10 border-t border-sky-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-white">
          

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="logo.jpg" alt="Logo" className="h-8" />
              <h3 className="text-xl font-bold">YamanArt 2026</h3>
            </div>
            <p className="text-sky-100/60 text-sm leading-relaxed">
              Sanatın ve teknolojinin geleceğini lise seviyesinde buluşturuyor, yaratıcı vizyonu destekliyoruz.
            </p>
          </div>


          <div>
            <h4 className="font-bold mb-6 tracking-widest text-sky-400">HIZLI LİNKLER</h4>
            <div className="space-y-3 text-sm text-sky-100/70">
              <a href="#akis" className="block hover:text-sky-400 transition-colors">Akış</a>
              <a href="#konusmacilar" className="block hover:text-sky-400 transition-colors">Konuşmacılar</a>
              <a href="#sosyal" className="block hover:text-sky-400 transition-colors">Paylaşımlar</a>
              <a href="#sss" className="block hover:text-sky-400 transition-colors">SSS</a>
              <a href="#basvuru" className="block hover:text-sky-400 transition-colors">Başvuru</a>
              <a href="#ekibimiz" className="block hover:text-sky-400 transition-colors">Ekibimiz</a>
              <a href="#sponsorlar" className="block hover:text-sky-400 transition-colors">Sponsorlar</a>
              <a href="#iletisim" className="block hover:text-sky-400 transition-colors">İletişim</a>
            </div>
          </div>


          <div>
            <h4 className="font-bold mb-6 tracking-widest text-sky-400">İLETİŞİM</h4>
            <div className="space-y-4 text-sm text-sky-100/70">
              <p>info@yamanart.com</p>
              <p>+90 5XX XXX XX XX</p>
              <p>xxx Üniversitesi, İstanbul</p>
            </div>
          </div>


          <div>
            <h4 className="font-bold mb-6 tracking-widest text-sky-400">SOSYAL MEDYA</h4>
            <div className="space-y-3 text-sm text-sky-100/70">
              <a href="https://instagram.com/ccenkyaman" target="_blank" className="flex items-center gap-3 hover:text-sky-400 transition-colors">
                <img src="instagramlogo3.png" alt="Instagram" className="w-5 h-5" /> 
                @ccenkyaman
              </a>
              <a href="https://instagram.com/nexafinancegroup" target="_blank" className="flex items-center gap-3 hover:text-sky-400 transition-colors">
                <img src="instagramlogo3.png" alt="Instagram" className="w-5 h-5" /> 
                @nexafinancegroup
              </a>
              </div>
            </div>
          </div>


        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 flex justify-between items-center text-sm text-sky-100/40">
          

          <p>© 2026 YamanArt. Tüm hakları saklıdır.</p>
          

        <a 
  href="https://instagram.com/ccenkyaman" 
  target="_blank" 
  className="flex items-center gap-2 text-xl font-bold hover:scale-105 transition-transform"
>
            <span className="text-sky-500">Built by</span>
            <img src="instagramlogo3.png" alt="IG" className="w-6 h-6" />
            <span className="text-yellow-500">ccenkyaman</span>
          </a>
        </div>
      </footer>
    </main>
  );
}
