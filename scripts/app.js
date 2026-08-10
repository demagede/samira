const CONFIG = Object.freeze({
        SCROLL_STEP: 340,
        HEADER_OFFSET: -90,
        SCROLL_DELAY: 150,
        MUSIC_VOLUME: 40,
      });

      let CONTACT = { WHATSAPP: "6287783073536" };

      

      const CLS = Object.freeze({
        HIDDEN: "is-hidden",
        ACTIVE: "active",
        PRIMARY: "tab-state-active",
        TEXT_WHITE: "tab-state-active",
        SHADOW: "tab-state-active",
        TEXT_DEFAULT: "tab-state-idle",
        HOVER_PRIMARY: "tab-state-idle",
        HOVER_BG: "tab-state-idle",
        ROTATE: "rotate-180",
        FADE_IN: "animate__fadeIn",
        ANIMATE: "animate__animated",
        FAST: "animate__faster",
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
        proTabList: null,
        eduTabList: null,
        paketTabList: null,
        waForm: null,
        init() {
          this.year = document.getElementById("year");
          this.mobileMenu = document.getElementById("mobileMenu");
          this.musicToggle = document.getElementById("musicToggle");
          this.iconPlay = document.getElementById("icon-play");
          this.iconPause = document.getElementById("icon-pause");
          this.videoContainer = document.getElementById("video-container");
          this.photoContainer = document.getElementById("photo-container");
          this.testimonialContainer = document.getElementById("testimonial-container");
          this.proTabList = document.getElementById("proTabList");
          this.eduTabList = document.getElementById("eduTabList");
          this.paketTabList = document.getElementById("paketTabList");
          this.waForm = document.getElementById("waForm");
        },
      };

      const PHOTO_GALLERY_ASSETS = [];

      const VIDEO_GALLERY_ASSETS = [
        { id: "W6CFhcArx_I", title: "Zero to Hero Samira" },
        { id: "Mw4Gd1koPk8", title: "Seminar Inspirasi Umrohku" },
        { id: "Gx1UuT0uEsU", title: "Manasik Akbar" },
        { id: "NhbZMVGX1BA", title: "Kisah Pasien Cuci Darah" },
        { id: "q3OWDU271j4", title: "Umroh Bareng Satu Pesawat" },
        { id: "XRExnPvAWX8", title: "Gelar Guiness World Record" },
      ];

      const TESTIMONIAL_DATA = [
        {
          name: "Bu Siti",
          img: "image/20250623-073943_WhatsApp%20Image%202025-06-22%20at%2014.58.05.webp",
          text: "“Pelayanan sangat ramah, ibadah kami sekeluarga menjadi tenang dan khusyuk. Terima kasih Samira!”",
        },
        {
          name: "Pak Ahmad",
          img: "image/20250708-015010_WhatsApp%20Image%202025-07-07%20at%2011.35.44.webp?v=1.1",
          text: "“Hotel yang disediakan sangat nyaman dan dekat ke masjid. Mutawwif/pembimbing sabar membimbing kami.”",
        },
        {
          name: "Bu Wulan",
          img: "image/20250525-111617_WhatsApp%20Image%202025-05-25%20at%2005.50.23%20(1).webp",
          text: "“Proses pendaftaran sangat rapi dan dipandu sejak manasik hingga kami pulang kembali ke tanah air. Luar biasa!”",
        },
        {
          name: "Pak Rudi",
          img: "image/20250524-040937_WhatsApp%20Image%202025-05-24%20at%2015.49.52.webp",
          text: "“Tim operasional sangat responsif membantu 24 jam penuh di Tanah Suci. Jamaah benar-benar terurus dengan baik.”",
        },
      ];

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
          btn.setAttribute("aria-selected", "false");
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
        button.setAttribute("aria-selected", "true");
      }

      function showTabPanel(panel) {
        if (!panel) return;
        panel.classList.remove(CLS.HIDDEN);
      }

      function scrollActiveTab(button) {
        if (!button) return;
        button.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }

      function renderPhotoGallery(photoList) {
        if (!DOM.photoContainer) return;
        const photosToRender = (photoList && photoList.length > 0) ? photoList : PHOTO_GALLERY_ASSETS;
        let photoHTML = "";
        photosToRender.forEach((imgSrc, idx) => {
          const fullPath = (imgSrc.startsWith('http') || imgSrc.startsWith('image/')) ? imgSrc : `image/${imgSrc}`;
          photoHTML += `
          <div class="gallery-photo-card">
            <img class="gallery-photo-card__image" src="${fullPath}" loading="lazy" decoding="async" width="240" height="160" alt="Galeri Samira ${idx + 1}" onerror="this.src='https://placehold.co/300x200/1e40af/ffffff?text=Dokumentasi+${idx + 1}'">
          </div>
        `;
        });
        DOM.photoContainer.innerHTML = photoHTML;
      }

      function renderVideoGallery() {
        if (!DOM.videoContainer) return;
        let videoHTML = "";
        VIDEO_GALLERY_ASSETS.forEach((vid) => {
          videoHTML += `
          <div class="info-card gallery-video-card">
            <div class="gallery-video-card__media">
              <button class="gallery-video-card__button" data-action="lazy-iframe" data-id="${vid.id}" data-title="${vid.title}" aria-label="Putar Video ${vid.title}">
                <img src="https://img.youtube.com/vi/${vid.id}/0.jpg" alt="${vid.title}" class="gallery-video-card__preview" loading="lazy" decoding="async" width="320" height="180">
                <div class="gallery-video-card__overlay">
                  <div class="gallery-video-card__play">
                    <svg class="floating-action__icon" viewBox="0 0 20 20" aria-hidden="true"><path d="M4.512 1.512a1 1 0 0 1 1.025-.03l11.4 6.6a1 1 0 0 1 0 1.736l-11.4 6.6a1 1 0 0 1-1.512-.868V2.38a1 1 0 0 1 .487-.868z"/></svg>
                  </div>
                </div>
              </button>
            </div>
            <p class="gallery-video-card__title">${vid.title}</p>
          </div>
        `;
        });
        DOM.videoContainer.innerHTML = videoHTML;
      }

      function renderTestimonials() {
        if (!DOM.testimonialContainer) return;
        let testimonialHTML = "";
        TESTIMONIAL_DATA.forEach((t) => {
          testimonialHTML += `
          <div class="info-card testimonial-card">
            <img class="testimonial-card__avatar" src="${t.img}" alt="Testimoni ${t.name}" loading="lazy" decoding="async" width="64" height="64" onerror="this.src='https://placehold.co/90x90/1e40af/ffffff?text=${t.name}'">
            <h6 class="testimonial-card__name">${t.name}</h6>
            <p class="testimonial-card__quote">${t.text}</p>
          </div>
        `;
        });
        DOM.testimonialContainer.innerHTML = testimonialHTML + testimonialHTML;
      }

      const allPages = {
        home: null,
        profil: null,
        edukasi: null,
        "paket-info": null,
        dokumentasi: null,
        "form-pendaftaran": null,
        "program-mitra": null,
      };

      function initSPAPages() {
        allPages.home = document.getElementById("spa-home");
        allPages.profil = document.getElementById("spa-profil");
        allPages.edukasi = document.getElementById("spa-edukasi");
        allPages["paket-info"] = document.getElementById("spa-paket-info");
        allPages.dokumentasi = document.getElementById("spa-dokumentasi");
        allPages["form-pendaftaran"] = document.getElementById("spa-form-pendaftaran");
        allPages["program-mitra"] = document.getElementById("spa-program-mitra");
      }

      function selectSPAPage(pageId, subIndex = null, scrollToSection = null) {
        Object.keys(allPages).forEach((key) => {
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

        document.querySelectorAll("#desktopNav button, #desktopNav a").forEach((btn) => {
          const target = btn.getAttribute("data-target");
          if (target === pageId) {
            btn.classList.add("nav-active");
          } else {
            btn.classList.remove("nav-active");
          }
        });

        if (subIndex !== null) {
          if (pageId === "profil") {
            const btn = document.querySelectorAll("#proTabList .pro-tab-btn")[subIndex];
            if (btn) showProTab(subIndex, btn);
          } else if (pageId === "edukasi") {
            const btn = document.querySelectorAll("#eduTabList .edu-tab-btn")[subIndex];
            if (btn) showEduTab(subIndex, btn);
          } else if (pageId === "paket-info") {
            const btn = document.querySelectorAll("#paketTabList .paket-tab-btn")[subIndex];
            if (btn) showPaketTab(subIndex, btn);
          } else if (pageId === "dokumentasi") {
            const btn = document.querySelectorAll(".doc-tab-btn")[subIndex];
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
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }, CONFIG.SCROLL_DELAY);
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }

      function toggleMobileSubmenu(submenuId) {
        const submenu = document.getElementById(submenuId);
        const arrowMap = {
          "mob-sub-pro": "mob-arrow-pro",
          "mob-sub-edu": "mob-arrow-edu",
          "mob-sub-paket": "mob-arrow-paket",
          "mob-sub-doc": "mob-arrow-doc",
        };

        const arrow = document.getElementById(arrowMap[submenuId]);
        const allSubmenus = ["mob-sub-pro", "mob-sub-edu", "mob-sub-paket", "mob-sub-doc"];

        allSubmenus.forEach((id) => {
          if (id !== submenuId) {
            const targetSub = document.getElementById(id);
            if (targetSub) targetSub.classList.add(CLS.HIDDEN);
            const otherArrow = document.getElementById(arrowMap[id]);
            if (otherArrow) otherArrow.classList.remove(CLS.ROTATE);
            const parentBtn = document.querySelector(`[data-target="${id}"]`);
            if (parentBtn) parentBtn.setAttribute("aria-expanded", "false");
          }
        });

        if (submenu) {
          const isHidden = submenu.classList.contains(CLS.HIDDEN);
          const triggerBtn = document.querySelector(`[data-target="${submenuId}"]`);
          if (isHidden) {
            submenu.classList.remove(CLS.HIDDEN);
            if (arrow) arrow.classList.add(CLS.ROTATE);
            if (triggerBtn) triggerBtn.setAttribute("aria-expanded", "true");
          } else {
            submenu.classList.add(CLS.HIDDEN);
            if (arrow) arrow.classList.remove(CLS.ROTATE);
            if (triggerBtn) triggerBtn.setAttribute("aria-expanded", "false");
          }
        }
      }

      function showProTab(index, btnEl) {
        const panels = document.querySelectorAll(".pro-pane");
        const buttons = document.querySelectorAll(".pro-tab-btn");
        resetTabButtons(buttons);
        hideTabPanels(panels);
        const activePane = document.getElementById(`pro-tab-content-${index}`);
        showTabPanel(activePane);
        activateTabButton(btnEl);
        scrollActiveTab(btnEl);
      }

      function showEduTab(index, btnEl) {
        const panels = document.querySelectorAll(".edu-pane");
        const buttons = document.querySelectorAll(".edu-tab-btn");
        resetTabButtons(buttons);
        hideTabPanels(panels);
        const activePane = document.getElementById(`edu-tab-content-${index}`);
        showTabPanel(activePane);
        activateTabButton(btnEl);
        scrollActiveTab(btnEl);
      }

      function showPaketTab(index, btnEl) {
        const panels = document.querySelectorAll(".paket-pane");
        const buttons = document.querySelectorAll(".paket-tab-btn");
        resetTabButtons(buttons);
        hideTabPanels(panels);
        const activePane = document.getElementById(`paket-tab-content-${index}`);
        showTabPanel(activePane);
        activateTabButton(btnEl);
        scrollActiveTab(btnEl);
      }

      function showDocTab(index, btnEl) {
        const panels = document.querySelectorAll(".doc-pane");
        const buttons = document.querySelectorAll(".doc-tab-btn");
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
          left: direction === "left" ? -CONFIG.SCROLL_STEP : CONFIG.SCROLL_STEP,
          behavior: "smooth",
        });
      });

      function loadTabYoutubeIframe(container) {
        const videoId = container.dataset.id;
        const title = container.dataset.title;
        if (!videoId) return;

        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        iframe.title = title || "Video";
        iframe.className = "embedded-video";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;

        container.parentElement?.replaceChildren(iframe);
      }

      var player;
      var musicPlayed = false;
      var youtubeApiLoaded = false;

      function loadYTMusicScript() {
        if (youtubeApiLoaded) return;
        youtubeApiLoaded = true;
        var tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      }

      window.onYouTubeIframeAPIReady = function () {
        player = new YT.Player("yt-bg-player", {
          height: "0",
          width: "0",
          videoId: "uE0_nQf2KXc",
          playerVars: {
            autoplay: 0,
            loop: 1,
            playlist: "uE0_nQf2KXc",
            controls: 0,
            showinfo: 0,
            rel: 0,
            enablejsapi: 1,
          },
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
          },
        });
      };

      function onPlayerReady(event) {
        event.target.setVolume(CONFIG.MUSIC_VOLUME);
        const attemptAutoPlay = () => {
          if (!musicPlayed && player && typeof player.playVideo === "function") {
            player.playVideo();
            musicPlayed = true;
            removePlayTriggers();
          }
        };

        const removePlayTriggers = () => {
          document.body.removeEventListener("click", attemptAutoPlay);
          document.body.removeEventListener("touchstart", attemptAutoPlay);
        };

        document.body.addEventListener("click", attemptAutoPlay, { once: true });
        document.body.addEventListener("touchstart", attemptAutoPlay, { once: true, passive: true });
      }

      function onPlayerStateChange(event) {
        var iconPlay = document.getElementById("icon-play");
        var iconPause = document.getElementById("icon-pause");
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
        if (!player || typeof player.playVideo !== "function") {
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
          console.error("Error playing music: ", err);
        }
      }

      document.addEventListener("click", (e) => {
        const target = e.target.closest("[data-action]");
        if (!target) return;

        const action = target.getAttribute("data-action");

        switch (action) {
          case "spa-nav": {
            const pageId = target.getAttribute("data-target");
            const subIndex = target.getAttribute("data-index") !== null ? parseInt(target.getAttribute("data-index"), 10) : null;
            const scrollTarget = target.getAttribute("data-scroll") || null;
            selectSPAPage(pageId, subIndex, scrollTarget);
            break;
          }
          case "toggle-submenu": {
            const targetId = target.getAttribute("data-target");
            toggleMobileSubmenu(targetId);
            break;
          }
          case "slide": {
            const containerId = target.getAttribute("data-target");
            const direction = target.getAttribute("data-direction");
            scrollSlider(containerId, direction);
            break;
          }
          case "lazy-iframe": {
            loadTabYoutubeIframe(target);
            break;
          }
          case "toggle-mobile-menu": {
            if (DOM.mobileMenu) {
              const isHidden = DOM.mobileMenu.classList.contains(CLS.HIDDEN);
              DOM.mobileMenu.classList.toggle(CLS.HIDDEN);
              target.setAttribute("aria-expanded", isHidden ? "true" : "false");
            }
            break;
          }
          case "pro-tab": {
            const idx = parseInt(target.getAttribute("data-index"), 10);
            showProTab(idx, target);
            break;
          }
          case "edu-tab": {
            const idx = parseInt(target.getAttribute("data-index"), 10);
            showEduTab(idx, target);
            break;
          }
          case "paket-tab": {
            const idx = parseInt(target.getAttribute("data-index"), 10);
            showPaketTab(idx, target);
            break;
          }
          case "doc-tab": {
            const idx = parseInt(target.getAttribute("data-index"), 10);
            showDocTab(idx, target);
            break;
          }
          case "toggle-music": {
            toggleMusic();
            break;
          }
        }
      });

      function initFormHandler() {
        if (DOM.waForm) {
          DOM.waForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const nama = document.getElementById("nama").value.trim();
            const wa = document.getElementById("wa").value.trim();
            const alamat = document.getElementById("alamat").value.trim();
            const pesan = document.getElementById("pesan").value.trim();

            const greet = "Assalaamualaikum Customer Service Samira, saya ingin bertanya tentang program umroh Samira Travel. Berikut data saya:";
            const body = `${greet}%0A%0ANama: ${encodeURIComponent(nama)}%0AWhatsApp: ${encodeURIComponent(wa)}%0ADomisili: ${encodeURIComponent(alamat)}%0APertanyaan: ${encodeURIComponent(pesan)}`;

            const url = `https://wa.me/${CONTACT.WHATSAPP}?text=${body}`;
            window.open(url, "_blank", "noopener,noreferrer");
          });
        }
      }

window.addEventListener("DOMContentLoaded", () => {
  DOM.init();
  initSPAPages();
  initFormHandler();

  const loadMitraAfterInitialRender = () => {
    if (typeof window.loadMitraReplica === 'function') {
      window.loadMitraReplica();
    } else {
      console.warn('loadMitraReplica is not available yet.');
    }
  };

  if ('requestIdleCallback' in window) {
    requestIdleCallback(loadMitraAfterInitialRender, { timeout: 1500 });
  } else {
    setTimeout(loadMitraAfterInitialRender, 1000);
  }

  if (DOM.year) {
    DOM.year.textContent = new Date().getFullYear();
  }

  setTimeout(() => {
    renderVideoGallery();
    renderTestimonials();
  }, 50);
});

      window.addEventListener("hashchange", () => {
        if (typeof window.loadMitraReplica === 'function') {
          window.loadMitraReplica();
        }
      });
      window.addEventListener("popstate", () => {
        if (typeof window.loadMitraReplica === 'function') {
          window.loadMitraReplica();
        }
      });
