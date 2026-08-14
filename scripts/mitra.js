window.loadMitraReplica = async function () {
        try {
          const [globalRes, mitraRes] = await Promise.all([
            fetch('data/global.json'),
            fetch('data/mitra.json')
          ]);

          const globalData = await globalRes.json();
          const dataMitra = await mitraRes.json();

          function handleMitraRouting() {
            const urlParams = new URLSearchParams(window.location.search);
            let mitraKey = urlParams.get('mitra');

            if (!mitraKey && window.location.hash) {
              mitraKey = window.location.hash.replace('#', '').trim();
            }

            if (!mitraKey) {
              mitraKey = 'default';
            }

            mitraKey = mitraKey.toLowerCase();
            const currentMitra = dataMitra[mitraKey] || dataMitra['default'];

            if (currentMitra) {
              if (currentMitra.whatsapp) {
                CONTACT.WHATSAPP = currentMitra.whatsapp;
              }

              document.querySelectorAll('.mitra-nama').forEach(el => {
                el.textContent = currentMitra.nama || "Mitra Samira";
              });

              document.querySelectorAll('.mitra-id').forEach(el => {
                el.textContent = currentMitra.idMitra || "M-DGI-9725";
              });

              const fotoElem = document.getElementById('foto-mitra');
              if (fotoElem && currentMitra.fotoDedy) {
                fotoElem.src = currentMitra.fotoDedy;
              }

              if (currentMitra.linkDrive) {
                document.querySelectorAll('a[href*="drive.google.com"]').forEach(link => {
                  link.href = currentMitra.linkDrive;
                });
              }

              document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
                const oldUrl = link.href;
                const newUrl = oldUrl.replace(/wa\.me\/\d+/, `wa.me/${currentMitra.whatsapp}`);
                link.href = newUrl;
              });

              const globalPhotos = globalData.globalPhotos || [];
              const mitraPhotos = (currentMitra && currentMitra.fotoGaleri) ? currentMitra.fotoGaleri : [];
              const isExclusive = (currentMitra && currentMitra.hanyaFotoSendiri === true);

              let activePhotos = [];
              if (isExclusive) {
                activePhotos = (mitraPhotos.length > 0) ? mitraPhotos : globalPhotos;
              } else if (mitraPhotos.length > 0) {
                activePhotos = [...mitraPhotos, ...globalPhotos];
              } else {
                activePhotos = globalPhotos;
              }

              renderPhotoGallery(activePhotos);
            }
          }

          handleMitraRouting();

          const bannerWrapper = document.getElementById('hero-swiper-wrapper');
          const dotsWrapper = document.getElementById('sliderDots');
          const banners = globalData.globalBanners || [];

          if (bannerWrapper && banners.length > 0) {
            let bannerHTML = '';
            let dotsHTML = '';

            banners.forEach((bannerUrl, idx) => {
              const isFirst = idx === 0;
              const isLandscape = bannerUrl.toLowerCase().includes('lanscape') || bannerUrl.toLowerCase().includes('landscape');
              const imgClass = isLandscape ? 'landscape-img' : 'portrait-img';

              bannerHTML += `
                <div class="custom-slide ${isFirst ? 'active' : ''}" data-index="${idx}">
                  <img 
                    src="${bannerUrl}" 
                    alt="Banner Promo ${idx + 1}" 
                    class="${imgClass}"
                    ${isFirst ? 'fetchpriority="high" decoding="async"' : 'loading="lazy"'}
                  />
                </div>
              `;

              dotsHTML += `<div class="slider-dot ${isFirst ? 'active' : ''}" data-slide="${idx}"></div>`;
            });

            bannerWrapper.innerHTML = bannerHTML;
            if (dotsWrapper) dotsWrapper.innerHTML = dotsHTML;

            if (window.customSliderInterval) clearInterval(window.customSliderInterval);

            let currentIndex = 0;
            const slides = bannerWrapper.querySelectorAll('.custom-slide');
            const dots = dotsWrapper ? dotsWrapper.querySelectorAll('.slider-dot') : [];

            function goToSlide(index) {
              if (!slides.length) return;
              slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
              dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
              currentIndex = index;
            }

            function nextSlide() {
              if (slides.length <= 1) return;
              let nextIndex = (currentIndex + 1) % slides.length;
              goToSlide(nextIndex);
            }

            if (slides.length > 1) {
              // autoplay helpers
              function startAutoplay() {
                if (window.customSliderInterval) clearInterval(window.customSliderInterval);
                window.customSliderInterval = setInterval(nextSlide, 3500);
              }
              function stopAutoplay() {
                if (window.customSliderInterval) clearInterval(window.customSliderInterval);
                window.customSliderInterval = null;
              }

              // start autoplay initially
              startAutoplay();

              // pause when pointer/finger is over the banner, resume when leaves
              bannerWrapper.addEventListener('pointerenter', stopAutoplay);
              bannerWrapper.addEventListener('pointerleave', startAutoplay);
              // touch/swipe handling: pause on touchstart, keep paused during touchmove (swipe), resume after touchend
              let isTouchSwiping = false;
              let isPointerDown = false;

              bannerWrapper.addEventListener('touchstart', (e) => {
                isTouchSwiping = false;
                stopAutoplay();
              }, { passive: true });

              bannerWrapper.addEventListener('touchmove', (e) => {
                // treat any touchmove as a swipe/drag and keep autoplay paused
                isTouchSwiping = true;
                stopAutoplay();
              }, { passive: true });

              bannerWrapper.addEventListener('touchend', () => {
                // resume after short delay so the swipe/gesture finishes
                setTimeout(() => {
                  if (!isTouchSwiping) startAutoplay();
                  else startAutoplay();
                }, 600);
              }, { passive: true });

              // pointer events for pointer-capable devices (pen/touch). Keep logic conservative to only handle touch/pen.
              bannerWrapper.addEventListener('pointerdown', (e) => {
                if (e.pointerType === 'touch' || e.pointerType === 'pen') {
                  isPointerDown = true;
                  stopAutoplay();
                }
              });
              bannerWrapper.addEventListener('pointermove', (e) => {
                if ((e.pointerType === 'touch' || e.pointerType === 'pen') && isPointerDown) {
                  // user is dragging with finger/pen
                  stopAutoplay();
                }
              });
              bannerWrapper.addEventListener('pointerup', (e) => {
                if (e.pointerType === 'touch' || e.pointerType === 'pen') {
                  isPointerDown = false;
                  setTimeout(startAutoplay, 600);
                }
              });

              // pause autoplay while the page is being scrolled; resume after idle
              let scrollResumeTimer = null;
              window.addEventListener('scroll', () => {
                // stop immediately on any scroll
                stopAutoplay();
                if (scrollResumeTimer) clearTimeout(scrollResumeTimer);
                // resume only after user stopped scrolling and no touch-drag in progress
                scrollResumeTimer = setTimeout(() => {
                  if (!isTouchSwiping && !isPointerDown && !bannerWrapper.matches(':hover')) {
                    startAutoplay();
                  }
                }, 800);
              }, { passive: true });

              dots.forEach((dot, i) => {
                dot.addEventListener('click', () => {
                  goToSlide(i);
                  // reset autoplay timer
                  stopAutoplay();
                  startAutoplay();
                });
              });
            }
          }

          const paketContainer = document.getElementById('paket-slider');
          const pakets = globalData.globalPaket || [];

          if (paketContainer && pakets.length > 0) {
            let paketHTML = '';
            pakets.forEach((paketUrl, idx) => {
              paketHTML += `
                <div class="pure-paket-card">
                  <img 
                    src="${paketUrl}" 
                    alt="Brosur Paket Umroh ${idx + 1}" 
                    loading="lazy" 
                    decoding="async" 
                    onerror="this.onerror=null; this.parentElement.style.display='none';"
                  />
                </div>
              `;
            });
            paketContainer.innerHTML = paketHTML;
          }

        } catch (error) {
          console.error('Gagal memuat data mitra/routing:', error);
        }
      }
