const USER_CONFIG = {
  // Profil & Kemitraan
  name: "Dina MBS (M-DGI-9725)",
  id: "M-DGI-9725",
  phone: "6287783073536",
  runningText: "Promo Musim ini & Kuota Terbatas! Amankan Seat Anda Sekarang • Selamat datang di Samira Travel, bersama Dina MBS kami menyediakan layanan Umroh, Tour Halal, Haji Khusus, dan Haji Furodha • Nikmati kemudahan beribadah bersama tim profesional kami ...... <strong class=\"text-red-800\">Landing Page Replika Umroh menarik seperti ini hanya Rp 350.000,- sekali bayar selamanya! Komen \"Mau Webreplika Umroh\" kirim ke WA kami......</strong> • Dapatkan komisi Rp 50.000,- menawarkan web ini ke mitra lainnya •",
  
  // Konfigurasi SEO
  seo: {
    title: "Mitra Resmi Samira Travel — Pendaftaran Umroh & Haji Dina MBS (M-DGI-9725)",
    description: "Wujudkan niat suci Umroh & Haji Anda bersama Dina MBS (M-DGI-9725) Mitra Resmi Samira Travel. Solusi umroh aman, nyaman, resmi Kemenag RI dengan skema tabungan syariah & program berangkat dulu bayar belakangan.",
    keywords: "samira travel cijantung, umroh samira travel, Dina mbs samira, agen umroh terpercaya, daftar umroh cijantung, paket umroh syariah, daftar umroh jakarta, travel umroh resmi, paket umroh terpercaya 2026, biaya umroh samira travel, tabungan umroh syariah, berangkat umroh dulu bayar belakangan"
  },
  
  // Konten Hero & Storytelling
  profileImage: "image/dinafoto.webp",
  profileImageAlt: "Profil Dina MBS - Mitra Resmi Samira Travel Cijantung",
  heroTitle: "Dina MBS (M-DGI-9725)",
  heroCta: "Wujudkan Niat Suci Sekarang",
  storyHeading: "Apakah Ini yang Selama Ini Anda Rasakan?",
  storyCta: "Wujudkan Impian Umroh Anda",
  
  // Konten Portal & Heading Section
  edukasiHeading: "Edukasi, Legalitas & Layanan Samira",
  paketHeading: "Paket & Info Perjalanan",
  dokumentasiHeading: "Dokumentasi Kegiatan & Testimoni",
  formHeading: "Konsultasi & Pendaftaran Seat",
  
  // Footer
  footerName: "Dina MBS (M-DGI-9725)",
  
  // Format Pesan / Sapaan Awal WhatsApp
  waMessages: {
    promo: "Assalaamualaikum Customer Service Samira, saya tertarik dengan info Promo Umroh Kuota Terbatas dari website Anda. Mohon info selengkapnya.",
    main: "Assalaamualaikum Customer Service Samira, saya tertarik dengan info program Umroh Samira Travel. Mohon info selengkapnya.",
    consultation: "Assalaamualaikum Customer Service Samira, saya tertarik dengan info program Umroh Samira Travel. Mohon bantuannya segera.",
    footer: "Assalaamualaikum Customer Service Samira, saya tertarik dengan info program Umroh Samira Travel. Mohon info selengkapnya.",
    formGreet: "Assalaamualaikum Customer Service Samira, saya ingin bertanya tentang program umroh Samira Travel. Berikut data saya:"
  }
};

const CONFIG = Object.freeze({
  SCROLL_STEP: 340,
  HEADER_OFFSET: -90,
  SCROLL_DELAY: 150,
  MUSIC_VOLUME: 40
});

const CLS = Object.freeze({
  HIDDEN: 'hidden',
  ACTIVE: 'active',
  PRIMARY: 'bg-primary',
  TEXT_WHITE: 'text-white',
  SHADOW: 'shadow-md',
  TEXT_DEFAULT: 'text-slate-600',
  HOVER_PRIMARY: 'hover:text-primary',
  HOVER_BG: 'hover:bg-white/50',
  ROTATE: 'rotate-180',
  FADE_IN: 'animate__fadeIn',
  ANIMATE: 'animate__animated',
  FAST: 'animate__faster'
});

const DOM = {
  year: null,
  mobileMenu: null,
  musicToggle: null,
  iconPlay: null,
  iconPause: null,
  videoContainer: null,
  photoContainer: null,
  testimonialContainer: null,
  eduTabList: null,
  paketTabList: null,
  waForm: null,
  init() {
    this.year = document.getElementById('year');
    this.mobileMenu = document.getElementById('mobileMenu');
    this.musicToggle = document.getElementById('musicToggle');
    this.iconPlay = document.getElementById('icon-play');
    this.iconPause = document.getElementById('icon-pause');
    this.videoContainer = document.getElementById('video-container');
    this.photoContainer = document.getElementById('photo-container');
    this.testimonialContainer = document.getElementById('testimonial-container');
    this.eduTabList = document.getElementById('eduTabList');
    this.paketTabList = document.getElementById('paketTabList');
    this.waForm = document.getElementById('waForm');
  }
};

const PHOTO_GALLERY_ASSETS = [
  "20250106-075317_WhatsApp%20Image%202024-12-24%20at%2008.42.59(2).webp",
  "20250106-075316_WhatsApp%20Image%202024-12-24%20at%2008.45.34(1).webp",
  "20250106-075316_WhatsApp%20Image%202024-12-24%20at%2008.43.01(3).webp",
  "20250106-075316_WhatsApp%20Image%202024-12-24%20at%2008.43.01(2).webp",
  "20250106-075316_WhatsApp%20Image%202024-12-24%20at%2008.43.00(5).webp",
  "20250106-075316_WhatsApp%20Image%202024-12-24%20at%2008.43.00(4).webp",
  "20250106-075316_WhatsApp%20Image%202024-12-24%20at%2008.43.00(3).webp",
  "20251202-093117_WhatsApp%20Image%202025-12-02%20at%2009.30.17.webp?v=1.1",
  "20251202-093116_WhatsApp%20Image%202025-12-02%20at%2009.30.17%20(1).webp",
  "20251202-093116_WhatsApp%20Image%202025-12-02%20at%2009.30.18.webp",
  "20251202-093115_WhatsApp Image 2025-12-02 at 09.30.18 (1).webp?v=1.1",
  "20251202-093115_WhatsApp%20Image%202025-12-02%20at%2009.30.18%20(2).webp",
  "20251202-093115_WhatsApp%20Image%202025-12-02%20at%2009.30.18%20(3).webp",
  "20251202-093114_WhatsApp%20Image%202025-12-02%20at%2009.34.19.webp",
  "20251202-093542_WhatsApp%20Image%202025-12-02%20at%2009.34.49.webp",
  "20251202-093542_WhatsApp%20Image%202025-12-02%20at%2009.34.49%20(1).webp",
  "20251202-093542_WhatsApp%20Image%202025-12-02%20at%2009.34.50.webp",
  "20251202-093542_WhatsApp%20Image%202025-12-02%20at%2009.34.50%20(1).webp",
  "20251202-093541_WhatsApp%20Image%202025-12-02%20at%2009.34.50%20(2).webp",
  "20251202-093541_WhatsApp%20Image%202025-12-02%20at%2009.34.50%20(3).webp?v=1.1",
  "20251202-093541_WhatsApp%20Image%202025-12-02%20at%2009.34.51.webp?v=1.1",
  "20251202-093541_WhatsApp%20Image%202025-12-02%20at%2009.34.51%20(1).webp",
  "20251202-093540_WhatsApp%20Image%202025-12-02%20at%2009.34.51%20(2).webp",
  "20251202-093540_WhatsApp%20Image%202025-12-02%20at%2009.34.51%20(3).webp"
];

const VIDEO_GALLERY_ASSETS = [
  { id: "W6CFhcArx_I", title: "Zero to Hero Samira" },
  { id: "Mw4Gd1koPk8", title: "Seminar Inspirasi Umrohku" },
  { id: "Gx1UuT0uEsU", title: "Manasik Akbar" },
  { id: "NhbZMVGX1BA", title: "Kisah Pasien Cuci Darah" },
  { id: "q3OWDU271j4", title: "Umroh Bareng Satu Pesawat" },
  { id: "XRExnPvAWX8", title: "Gelar Guiness World Record" }
];

const TESTIMONIAL_DATA = [
  {
    name: "Bu Siti",
    img: "image/20250623-073943_WhatsApp%20Image%202025-06-22%20at%2014.58.05.webp",
    text: "“Pelayanan sangat ramah, ibadah kami sekeluarga menjadi tenang dan khusyuk. Terima kasih Samira!”"
  },
  {
    name: "Pak Ahmad",
    img: "image/20250708-015010_WhatsApp%20Image%202025-07-07%20at%2011.35.44.webp?v=1.1",
    text: "“Hotel yang disediakan sangat nyaman dan dekat ke masjid. Mutawwif/pembimbing sabar membimbing kami.”"
  },
  {
    name: "Bu Wulan",
    img: "image/20250525-111617_WhatsApp%20Image%202025-05-25%20at%2005.50.23%20(1).webp",
    text: "“Proses pendaftaran sangat rapi dan dipandu sejak manasik hingga kami pulang kembali to tanah air. Luar biasa!”"
  },
  {
    name: "Pak Rudi",
    img: "image/20250524-040937_WhatsApp%20Image%202025-05-24%20at%2015.49.52.webp",
    text: "“Tim operasional sangat responsif membantu 24 jam penuh di Tanah Suci. Jamaah benar-benar terurus dengan baik.”"
  }
];

function applyUserConfigToDOM() {
  // 1. Injeksi Metadata Head / SEO
  document.title = USER_CONFIG.seo.title;
  
  const mDesc = document.getElementById('seo-description');
  if (mDesc) mDesc.setAttribute('content', USER_CONFIG.seo.description);
  
  const mKeys = document.getElementById('seo-keywords');
  if (mKeys) mKeys.setAttribute('content', USER_CONFIG.seo.keywords);
  
  const mAuth = document.getElementById('seo-author');
  if (mAuth) mAuth.setAttribute('content', USER_CONFIG.name);

  const tTitle = document.getElementById('twitter-title');
  if (tTitle) tTitle.setAttribute('content', USER_CONFIG.seo.title);

  const tDesc = document.getElementById('twitter-description');
  if (tDesc) tDesc.setAttribute('content', USER_CONFIG.seo.description);

  const ogTitle = document.getElementById('og-title');
  if (ogTitle) ogTitle.setAttribute('content', USER_CONFIG.seo.title);

  const ogDesc = document.getElementById('og-description');
  if (ogDesc) ogDesc.setAttribute('content', USER_CONFIG.seo.description);

  const ogImgAlt = document.getElementById('og-image-alt');
  if (ogImgAlt) ogImgAlt.setAttribute('content', USER_CONFIG.profileImageAlt);

  // 2. Bar Promo Marquee & WhatsApp Link
  const promoLink = document.getElementById('promo-link');
  if (promoLink) {
    promoLink.href = `https://wa.me/${USER_CONFIG.phone}?text=${encodeURIComponent(USER_CONFIG.waMessages.promo)}`;
  }
  const promoText1 = document.getElementById('promo-text-1');
  const promoText2 = document.getElementById('promo-text-2');
  if (promoText1) promoText1.innerHTML = USER_CONFIG.runningText;
  if (promoText2) promoText2.innerHTML = USER_CONFIG.runningText;

  // 3. Mobile WhatsApp Button & Label
  const mobileWaLink = document.getElementById('mobile-wa-link');
  if (mobileWaLink) {
    mobileWaLink.href = `https://wa.me/${USER_CONFIG.phone}?text=${encodeURIComponent(USER_CONFIG.waMessages.main)}`;
  }
  const mobileWaLabel = document.getElementById('mobile-wa-label');
  if (mobileWaLabel) {
    mobileWaLabel.textContent = USER_CONFIG.footerName;
  }

  // 4. Hero Section & Gambar Profil
  const profileImg = document.getElementById('profile-img');
  if (profileImg) {
    profileImg.src = USER_CONFIG.profileImage;
    profileImg.srcset = `${USER_CONFIG.profileImage} 176w, ${USER_CONFIG.profileImage} 352w`;
    profileImg.alt = USER_CONFIG.profileImageAlt;
  }
  const heroTitle = document.getElementById('hero-title');
  if (heroTitle) {
    heroTitle.textContent = USER_CONFIG.heroTitle;
  }
  const heroCtaBtn = document.getElementById('hero-cta-btn');
  if (heroCtaBtn) {
    heroCtaBtn.textContent = USER_CONFIG.heroCta;
  }

  // 5. Storytelling
  const storyHeading = document.getElementById('story-heading');
  if (storyHeading) {
    storyHeading.textContent = USER_CONFIG.storyHeading;
  }
  const storyCtaBtn = document.getElementById('story-cta-btn');
  if (storyCtaBtn) {
    storyCtaBtn.textContent = USER_CONFIG.storyCta;
  }

  // 6. Portal Headings
  const eduHeading = document.getElementById('edukasi-heading');
  if (eduHeading) {
    eduHeading.textContent = USER_CONFIG.edukasiHeading;
  }
  const paketHeading = document.getElementById('paket-heading');
  if (paketHeading) {
    paketHeading.textContent = USER_CONFIG.paketHeading;
  }
  const docHeading = document.getElementById('dokumentasi-heading');
  if (docHeading) {
    docHeading.textContent = USER_CONFIG.dokumentasiHeading;
  }
  const formHeading = document.getElementById('form-heading');
  if (formHeading) {
    formHeading.textContent = USER_CONFIG.formHeading;
  }

  // 7. Tombol WhatsApp Tambahan (Konsultasi Langsung)
  const consultLink = document.getElementById('consultation-direct-link');
  if (consultLink) {
    consultLink.href = `https://wa.me/${USER_CONFIG.phone}?text=${encodeURIComponent(USER_CONFIG.waMessages.consultation)}`;
  }

  // 8. Footer Name
  const footerCopyrightName = document.getElementById('footer-copyright-name');
  if (footerCopyrightName) {
    footerCopyrightName.textContent = USER_CONFIG.footerName;
  }

  // 9. Floating Widgets
  const floatWaBtn = document.getElementById('floating-wa-btn');
  if (floatWaBtn) {
    floatWaBtn.href = `https://wa.me/${USER_CONFIG.phone}?text=${encodeURIComponent(USER_CONFIG.waMessages.footer)}`;
  }
  const floatWaLabel = document.getElementById('floating-wa-label');
  if (floatWaLabel) {
    floatWaLabel.textContent = USER_CONFIG.footerName;
  }
}

const rAFThrottle = (callback) => {
  let active = false;
  return (...args) => {
    if (active) return;
    active = true;
    requestAnimationFrame(() => {
      callback(...args);
      active = false;
    });
  };
};

function resetTabButtons(buttons) {
  buttons.forEach((btn) => {
    btn.classList.remove(CLS.ACTIVE, CLS.PRIMARY, CLS.TEXT_WHITE, CLS.SHADOW);
    btn.classList.add(CLS.TEXT_DEFAULT, CLS.HOVER_PRIMARY, CLS.HOVER_BG);
    btn.setAttribute('aria-selected', 'false');
  });
}

function hideTabPanels(panels) {
  panels.forEach((panel) => {
    panel.classList.add(CLS.HIDDEN);
  });
}

function activateTabButton(button) {
  if (!button) return;
  button.classList.add(CLS.ACTIVE, CLS.PRIMARY, CLS.TEXT_WHITE, CLS.SHADOW);
  button.classList.remove(CLS.TEXT_DEFAULT, CLS.HOVER_PRIMARY, CLS.HOVER_BG);
  button.setAttribute('aria-selected', 'true');
}

function showTabPanel(panel) {
  if (!panel) return;
  panel.classList.remove(CLS.HIDDEN);
}

function scrollActiveTab(button) {
  if (!button) return;
  button.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center'
  });
}

function renderPhotoGallery() {
  if (!DOM.photoContainer) return;
  let photoHTML = '';
  PHOTO_GALLERY_ASSETS.forEach((imgSrc, idx) => {
    photoHTML += `
      <div class="shrink-0 w-[240px] h-[160px] bg-slate-100 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
        <img src="image/${imgSrc}" loading="lazy" decoding="async" class="w-full h-full object-cover transition-all duration-300 hover:scale-105" style="aspect-ratio: 3/2;" width="240" height="160" alt="Galeri Samira ${idx + 1}" onerror="this.src='https://placehold.co/300x200/1e40af/ffffff?text=Dokumentasi+${idx + 1}'">
      </div>
    `;
  });
  DOM.photoContainer.innerHTML = photoHTML;
}

function renderVideoGallery() {
  if (!DOM.videoContainer) return;
  let videoHTML = '';
  VIDEO_GALLERY_ASSETS.forEach((vid) => {
    videoHTML += `
      <div class="bg-slate-50 p-2 rounded-2xl border border-slate-100 shadow-sm shrink-0 w-[280px] md:w-[320px]">
        <div class="aspect-[16/9] overflow-hidden rounded-xl relative bg-slate-200">
          <button class="w-full h-full cursor-pointer group focus:outline-none" data-action="lazy-iframe" data-id="${vid.id}" data-title="${vid.title}" aria-label="Putar Video ${vid.title}">
            <img src="https://img.youtube.com/vi/${vid.id}/0.jpg" alt="${vid.title}" class="w-full h-full object-cover" loading="lazy" decoding="async" width="320" height="180">
            <div class="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-premium">
              <div class="bg-primary/90 text-white rounded-full p-3 shadow-lg transform group-hover:scale-110 transition-premium">
                <svg class="w-6 h-6 fill-current" viewBox="0 0 20 20" aria-hidden="true"><path d="M4.512 1.512a1 1 0 0 1 1.025-.03l11.4 6.6a1 1 0 0 1 0 1.736l-11.4 6.6a1 1 0 0 1-1.512-.868V2.38a1 1 0 0 1 .487-.868z"/></svg>
              </div>
            </div>
          </button>
        </div>
        <p class="text-[11px] font-bold text-center text-slate-600 uppercase tracking-wide mt-2 mb-0">${vid.title}</p>
      </div>
    `;
  });
  DOM.videoContainer.innerHTML = videoHTML;
}

function renderTestimonials() {
  if (!DOM.testimonialContainer) return;
  let testimonialHTML = '';
  TESTIMONIAL_DATA.forEach(t => {
    testimonialHTML += `
      <div class="w-[280px] shrink-0 mx-3 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center">
        <img class="w-16 h-16 rounded-full mx-auto object-cover mb-3 border-2 border-accent" src="${t.img}" alt="Testimoni ${t.name}" loading="lazy" decoding="async" style="aspect-ratio: 1/1;" width="64" height="64" onerror="this.src='https://placehold.co/90x90/1e40af/ffffff?text=${t.name}'">
        <h6 class="font-extrabold text-sm text-slate-900 mb-1">${t.name}</h6>
        <p class="text-[11px] text-slate-500 leading-relaxed italic mb-0">${t.text}</p>
      </div>
    `;
  });
  DOM.testimonialContainer.innerHTML = testimonialHTML + testimonialHTML;
}

const allPages = {
  home: null,
  edukasi: null,
  'paket-info': null,
  dokumentasi: null,
  'form-pendaftaran': null
};

function initSPAPages() {
  allPages.home = document.getElementById('spa-home');
  allPages.edukasi = document.getElementById('spa-edukasi');
  allPages['paket-info'] = document.getElementById('spa-paket-info');
  allPages.dokumentasi = document.getElementById('spa-dokumentasi');
  allPages['form-pendaftaran'] = document.getElementById('spa-form-pendaftaran');
}

function selectSPAPage(pageId, subIndex = null, scrollToSection = null) {
  Object.keys(allPages).forEach(key => {
    if (allPages[key]) {
      if (key === pageId) {
        allPages[key].classList.remove(CLS.HIDDEN);
        allPages[key].classList.add(CLS.ANIMATE, CLS.FADE_IN, CLS.FAST);
      } else {
        allPages[key].classList.add(CLS.HIDDEN);
        allPages[key].classList.remove(CLS.ANIMATE, CLS.FADE_IN, CLS.FAST);
      }
    }
  });

  document.querySelectorAll('#desktopNav button, #desktopNav a').forEach(btn => {
    const target = btn.getAttribute('data-target');
    if (target === pageId) {
      btn.classList.add('nav-active');
    } else {
      btn.classList.remove('nav-active');
    }
  });

  if (subIndex !== null) {
    if (pageId === 'edukasi') {
      const btn = document.querySelectorAll('#eduTabList .edu-tab-btn')[subIndex];
      if (btn) showEduTab(subIndex, btn);
    } else if (pageId === 'paket-info') {
      const btn = document.querySelectorAll('#paketTabList .paket-tab-btn')[subIndex];
      if (btn) showPaketTab(subIndex, btn);
    } else if (pageId === 'dokumentasi') {
      const btn = document.querySelectorAll('.doc-tab-btn')[subIndex];
      if (btn) showDocTab(subIndex, btn);
    }
  }

  if (DOM.mobileMenu) {
    DOM.mobileMenu.classList.add(CLS.HIDDEN);
  }

  if (scrollToSection) {
    setTimeout(() => {
      const element = document.getElementById(scrollToSection);
      if (element) {
        const y = element.offsetTop + CONFIG.HEADER_OFFSET;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, CONFIG.SCROLL_DELAY);
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function toggleMobileSubmenu(submenuId) {
  const submenu = document.getElementById(submenuId);
  const arrowMap = {
    'mob-sub-home': 'mob-arrow-home',
    'mob-sub-edu': 'mob-arrow-edu',
    'mob-sub-paket': 'mob-arrow-paket',
    'mob-sub-doc': 'mob-arrow-doc'
  };

  const arrow = document.getElementById(arrowMap[submenuId]);
  const allSubmenus = ['mob-sub-home', 'mob-sub-edu', 'mob-sub-paket', 'mob-sub-doc'];

  allSubmenus.forEach(id => {
    if (id !== submenuId) {
      const targetSub = document.getElementById(id);
      if (targetSub) targetSub.classList.add(CLS.HIDDEN);
      const otherArrow = document.getElementById(arrowMap[id]);
      if (otherArrow) otherArrow.classList.remove(CLS.ROTATE);
      const parentBtn = document.querySelector(`[data-target="${id}"]`);
      if (parentBtn) parentBtn.setAttribute('aria-expanded', 'false');
    }
  });

  if (submenu) {
    const isHidden = submenu.classList.contains(CLS.HIDDEN);
    const triggerBtn = document.querySelector(`[data-target="${submenuId}"]`);
    if (isHidden) {
      submenu.classList.remove(CLS.HIDDEN);
      if (arrow) arrow.classList.add(CLS.ROTATE);
      if (triggerBtn) triggerBtn.setAttribute('aria-expanded', 'true');
    } else {
      submenu.classList.add(CLS.HIDDEN);
      if (arrow) arrow.classList.remove(CLS.ROTATE);
      if (triggerBtn) triggerBtn.setAttribute('aria-expanded', 'false');
    }
  }
}

function showEduTab(index, btnEl) {
  const panels = document.querySelectorAll('.edu-pane');
  const buttons = document.querySelectorAll('.edu-tab-btn');

  resetTabButtons(buttons);
  hideTabPanels(panels);

  const activePane = document.getElementById(`edu-tab-content-${index}`);
  showTabPanel(activePane);
  activateTabButton(btnEl);
  scrollActiveTab(btnEl);
}

function showPaketTab(index, btnEl) {
  const panels = document.querySelectorAll('.paket-pane');
  const buttons = document.querySelectorAll('.paket-tab-btn');

  resetTabButtons(buttons);
  hideTabPanels(panels);

  const activePane = document.getElementById(`paket-tab-content-${index}`);
  showTabPanel(activePane);
  activateTabButton(btnEl);
  scrollActiveTab(btnEl);
}

function showDocTab(index, btnEl) {
  const panels = document.querySelectorAll('.doc-pane');
  const buttons = document.querySelectorAll('.doc-tab-btn');

  resetTabButtons(buttons);
  hideTabPanels(panels);

  const activePane = document.getElementById(`doc-tab-content-${index}`);
  showTabPanel(activePane);
  activateTabButton(btnEl);
  scrollActiveTab(btnEl);
}

const scrollSlider = rAFThrottle((containerId, direction) => {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.scrollBy({
    left: direction === 'left' ? -CONFIG.SCROLL_STEP : CONFIG.SCROLL_STEP,
    behavior: 'smooth'
  });
});

function loadTabYoutubeIframe(container) {
  const videoId = container.dataset.id;
  const title = container.dataset.title;

  if (!videoId) return;

  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  iframe.title = title || 'Video';
  iframe.className = 'w-full h-full border-0';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;

  container.parentElement?.replaceChildren(iframe);
}

var player;
var musicPlayed = false;
var youtubeApiLoaded = false;

function loadYTMusicScript() {
  if (youtubeApiLoaded) return;
  youtubeApiLoaded = true;
  var tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

window.onYouTubeIframeAPIReady = function() {
  player = new YT.Player('yt-bg-player', {
    height: '0',
    width: '0',
    videoId: 'uE0_nQf2KXc',
    playerVars: {
      autoplay: 0,
      loop: 1,
      playlist: 'uE0_nQf2KXc',
      controls: 0,
      showinfo: 0,
      rel: 0,
      enablejsapi: 1
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
};

function onPlayerReady(event) {
  event.target.setVolume(CONFIG.MUSIC_VOLUME);

  const attemptAutoPlay = () => {
    if (!musicPlayed && player && typeof player.playVideo === 'function') {
      player.playVideo();
      musicPlayed = true;
      removePlayTriggers();
    }
  };

  const removePlayTriggers = () => {
    document.body.removeEventListener('click', attemptAutoPlay);
    document.body.removeEventListener('touchstart', attemptAutoPlay);
  };

  document.body.addEventListener('click', attemptAutoPlay, { once: true });
  document.body.addEventListener('touchstart', attemptAutoPlay, { once: true, passive: true });
}

function onPlayerStateChange(event) {
  var iconPlay = document.getElementById('icon-play');
  var iconPause = document.getElementById('icon-pause');
  if (event.data == YT.PlayerState.PLAYING) {
    if (iconPlay) iconPlay.classList.add(CLS.HIDDEN);
    if (iconPause) iconPause.classList.remove(CLS.HIDDEN);
    musicPlayed = true;
  } else {
    if (iconPlay) iconPlay.classList.remove(CLS.HIDDEN);
    if (iconPause) iconPause.classList.add(CLS.HIDDEN);
  }
}

function toggleMusic() {
  if (!player || typeof player.playVideo !== 'function') {
    loadYTMusicScript();
    return;
  }
  try {
    var state = player.getPlayerState();
    if (state == YT.PlayerState.PLAYING) {
      player.pauseVideo();
    } else {
      player.playVideo();
      musicPlayed = true;
    }
  } catch (err) {
    console.error('Error playing music: ', err);
  }
}

document.addEventListener('click', (e) => {
  const target = e.target.closest('[data-action]');
  if (!target) return;

  const action = target.getAttribute('data-action');

  switch (action) {
    case 'spa-nav': {
      const pageId = target.getAttribute('data-target');
      const subIndex = target.getAttribute('data-index') !== null ? parseInt(target.getAttribute('data-index'), 10) : null;
      const scrollTarget = target.getAttribute('data-scroll') || null;
      selectSPAPage(pageId, subIndex, scrollTarget);
      break;
    }
    case 'toggle-submenu': {
      const targetId = target.getAttribute('data-target');
      toggleMobileSubmenu(targetId);
      break;
    }
    case 'slide': {
      const containerId = target.getAttribute('data-target');
      const direction = target.getAttribute('data-direction');
      scrollSlider(containerId, direction);
      break;
    }
    case 'lazy-iframe': {
      loadTabYoutubeIframe(target);
      break;
    }
    case 'toggle-mobile-menu': {
      if (DOM.mobileMenu) {
        const isHidden = DOM.mobileMenu.classList.contains(CLS.HIDDEN);
        DOM.mobileMenu.classList.toggle(CLS.HIDDEN);
        target.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
      }
      break;
    }
    case 'edu-tab': {
      const idx = parseInt(target.getAttribute('data-index'), 10);
      showEduTab(idx, target);
      break;
    }
    case 'paket-tab': {
      const idx = parseInt(target.getAttribute('data-index'), 10);
      showPaketTab(idx, target);
      break;
    }
    case 'doc-tab': {
      const idx = parseInt(target.getAttribute('data-index'), 10);
      showDocTab(idx, target);
      break;
    }
    case 'toggle-music': {
      toggleMusic();
      break;
    }
  }
});

function initFormHandler() {
  if (DOM.waForm) {
    DOM.waForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const nama = document.getElementById('nama').value.trim();
      const wa = document.getElementById('wa').value.trim();
      const alamat = document.getElementById('alamat').value.trim();
      const pesan = document.getElementById('pesan').value.trim();

      const greet = USER_CONFIG.waMessages.formGreet;
      const body = `${greet}%0A%0ANama: ${encodeURIComponent(nama)}%0AWhatsApp: ${encodeURIComponent(wa)}%0ADomisili: ${encodeURIComponent(alamat)}%0APertanyaan: ${encodeURIComponent(pesan)}`;

      const url = `https://wa.me/${USER_CONFIG.phone}?text=${body}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  // Inisialisasi DOM and data USER_CONFIG
  DOM.init();
  applyUserConfigToDOM();
  initSPAPages();
  initFormHandler();

  if (DOM.year) {
    DOM.year.textContent = new Date().getFullYear();
  }

  // Merender komponen antarmuka sekunder
  setTimeout(() => {
    renderPhotoGallery();
    renderVideoGallery();
    renderTestimonials();
  }, 50);
});

document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'F12' || event.keyCode === 123) {
    event.preventDefault();
    return false;
  }
  if (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'i' || event.keyCode === 73)) {
    event.preventDefault();
    return false;
  }
  if (event.ctrlKey && event.shiftKey && (event.key === 'Menu' || event.key === 'j' || event.keyCode === 74)) {
    event.preventDefault();
    return false;
  }
  if (event.ctrlKey && event.shiftKey && (event.key === 'C' || event.key === 'c' || event.keyCode === 67)) {
    event.preventDefault();
    return false;
  }
  if (event.ctrlKey && (event.key === 'U' || event.key === 'u' || event.keyCode === 85)) {
    event.preventDefault();
    return false;
  }
  if (event.ctrlKey && (event.key === 'S' || event.key === 's' || event.keyCode === 83)) {
    event.preventDefault();
    return false;
  }
  if (event.ctrlKey && (event.key === 'P' || event.key === 'p' || event.keyCode === 80)) {
    event.preventDefault();
    return false;
  }
});