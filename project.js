/* =======================================================
   SPACE EDGE DESIGN — PROJECT PAGE JS
   Video-centric portfolio with Intersection Observer
   ======================================================= */

// ── NAVIGATION ──────────────────────────────────────────
const hamburgerBtn  = document.getElementById('hamburgerBtn');
const mobileMenu    = document.getElementById('mobileMenu');
const mobileCloseBtn = document.getElementById('mobileCloseBtn');

if (hamburgerBtn && mobileMenu && mobileCloseBtn) {
  hamburgerBtn.addEventListener('click', () => mobileMenu.classList.add('open'));
  mobileCloseBtn.addEventListener('click', () => mobileMenu.classList.remove('open'));
}

const nav = document.getElementById('mainNav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

// ── PROJECT DATA ─────────────────────────────────────────
// To add a new project: append another object to this array.
// Set video to '' or a URL. If empty, the elegant placeholder is shown.
const projects = [
  {
    number:      '01',
    title:       '2 BHK Residence',
    location:    'Jaipuria Sunrise Green, Indirapuram',
    description: 'A complete interior design project for a modern 2 BHK home featuring premium finishes, smart storage solutions, elegant false ceilings, modular kitchen, and contemporary living spaces designed for comfortable family living.',
    services:    ['Full Home Interior', 'Modular Kitchen', 'Wardrobes', 'False Ceiling'],
    area:        '1200 sq.ft.',
    year:        '2025',
    video:       'videos/project1.mp4',
  },
  {
    number:      '02',
    title:       'Modern 2 BHK Home',
    location:    'Jaipuria Sunrise Green, Indirapuram',
    description: 'A stylish full-home interior project designed with modern aesthetics, functional layouts, premium materials, and customized furniture to maximize comfort and space utilization.',
    services:    ['Full Home Interior', 'TV Unit', 'Modular Kitchen', 'Living Room'],
    area:        '1200 sq.ft.',
    year:        '2025',
    video:       'videos/project2.mp4',
  },
  {
    number:      '03',
    title:       'Elegant 2 BHK Interior',
    location:    'Jaipuria Sunrise Green, Indirapuram',
    description: 'A thoughtfully designed 2 BHK interior combining minimal elegance with practical functionality, including premium modular solutions, sophisticated lighting, and high-quality finishes throughout the home.',
    services:    ['Full Home Interior', 'Modular Kitchen', 'False Ceiling', 'Wardrobes'],
    area:        '1200 sq.ft.',
    year:        '2025',
<<<<<<< HEAD
    video:       'videos/project3.mp4',
  },
  {
    number:      '04',
    title:       '2 BHK Residence',
    location:    'Jaipuria Sunrise Green, Indirapuram',
    description: 'A complete interior design project for a modern 2 BHK home featuring premium finishes, smart storage solutions, elegant false ceilings, modular kitchen, and contemporary living spaces designed for comfortable family living.',
    services:    ['Full Home Interior', 'Modular Kitchen', 'Wardrobes', 'False Ceiling'],
    area:        '1200 sq.ft.',
    year:        '2025',
    video:       'videos/project4.mp4',
  },
  {
    number:      '05',
    title:       'Modern 2 BHK Home',
    location:    'Jaipuria Sunrise Green, Indirapuram',
    description: 'A stylish full-home interior project designed with modern aesthetics, functional layouts, premium materials, and customized furniture to maximize comfort and space utilization.',
    services:    ['Full Home Interior', 'TV Unit', 'Modular Kitchen', 'Living Room'],
    area:        '1200 sq.ft.',
    year:        '2025',
    video:       'videos/project5.mp4',
  },
  {
    number:      '06',
    title:       'Elegant 2 BHK Interior',
    location:    'Jaipuria Sunrise Green, Indirapuram',
    description: 'A thoughtfully designed 2 BHK interior combining minimal elegance with practical functionality, including premium modular solutions, sophisticated lighting, and high-quality finishes throughout the home.',
    services:    ['Full Home Interior', 'Modular Kitchen', 'False Ceiling', 'Wardrobes'],
    area:        '1200 sq.ft.',
    year:        '2025',
    video:       'videos/project6.mp4',
  },
  {
    number:      '07',
    title:       '2 BHK Residence',
    location:    'Jaipuria Sunrise Green, Indirapuram',
    description: 'A complete interior design project for a modern 2 BHK home featuring premium finishes, smart storage solutions, elegant false ceilings, modular kitchen, and contemporary living spaces designed for comfortable family living.',
    services:    ['Full Home Interior', 'Modular Kitchen', 'Wardrobes', 'False Ceiling'],
    area:        '1200 sq.ft.',
    year:        '2025',
    video:       'videos/project7.mp4',
  },
  {
    number:      '08',
    title:       'Modern 2 BHK Home',
    location:    'Jaipuria Sunrise Green, Indirapuram',
    description: 'A stylish full-home interior project designed with modern aesthetics, functional layouts, premium materials, and customized furniture to maximize comfort and space utilization.',
    services:    ['Full Home Interior', 'TV Unit', 'Modular Kitchen', 'Living Room'],
    area:        '1200 sq.ft.',
    year:        '2025',
    video:       'videos/project8.mp4',
  },
];

// ── RENDER PROJECTS ──────────────────────────────────────
function buildProjectsHTML() {
  const list = document.getElementById('projectsList');
  if (!list) return;

  list.innerHTML = projects.map((p, i) => `
    <article class="pv-card" data-index="${i}" aria-label="Project ${p.number}: ${p.title}">

      <!-- VIDEO COLUMN -->
      <div class="pv-video-col">
        <div class="pv-video-frame">

          <span class="pv-video-badge">Project ${p.number}</span>

          <!-- Placeholder shown when no video src -->
          <div class="pv-video-placeholder${p.video ? ' hidden' : ''}" aria-hidden="true">
            <div class="placeholder-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5v14l11-7L8 5z"/>
              </svg>
            </div>
            <span class="placeholder-label">Video Walkthrough<br>Coming Soon</span>
          </div>

          ${p.video ? `
          <video
            class="pv-video"
            muted
            loop
            playsinline
            preload="metadata"
            data-src="${p.video}"
            aria-label="${p.title} interior walkthrough video"
          ></video>` : ''}

        </div>
      </div>

      <!-- CONTENT COLUMN -->
      <div class="pv-content-col">

        <h2 class="pv-title">${p.title}</h2>

        <p class="pv-location">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
          </svg>
          ${p.location}
        </p>

        <p class="pv-desc">${p.description}</p>

        <div class="pv-meta">
          <div class="pv-meta-item">
            <span class="pv-meta-label">Area</span>
            <span class="pv-meta-value">${p.area}</span>
          </div>
          <div class="pv-meta-item">
            <span class="pv-meta-label">Year</span>
            <span class="pv-meta-value">${p.year}</span>
          </div>
        </div>

        <div class="pv-services">
          ${p.services.map(s => `<span class="pv-service-tag">${s}</span>`).join('')}
        </div>

        <div class="pv-actions">
          <a href="contact.html#inquiryForm" class="pv-btn pv-btn-primary">
            <svg viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
            View Details
          </a>
          <a href="contact.html" class="pv-btn pv-btn-outline">
            <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            Contact Us
          </a>
        </div>
      </div>

    </article>
  `).join('');
}

// ── INTERSECTION OBSERVER: card entrance ─────────────────
function initCardReveal() {
  const cards = document.querySelectorAll('.pv-card');
  if (!cards.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  cards.forEach(card => observer.observe(card));
}

// ── INTERSECTION OBSERVER: video autoplay/pause ──────────
function initVideoPlayback() {
  const videos = document.querySelectorAll('.pv-video[data-src]');
  if (!videos.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target;

      // Lazy-load: set src on first intersection
      if (!video.src && video.dataset.src) {
        video.src = video.dataset.src;
        video.load();
      }

      if (entry.isIntersecting) {
        video.play().catch(() => {}); // silently ignore autoplay policy errors
        // Hide placeholder when video is playing
        const placeholder = video.closest('.pv-video-frame').querySelector('.pv-video-placeholder');
        if (placeholder) placeholder.classList.add('hidden');
      } else {
        video.pause();
      }
    });
  }, {
    threshold: 0.3  // 30% visible before playing
  });

  videos.forEach(v => observer.observe(v));
}

// ── CONSULTATION FORM ────────────────────────────────────
function initConsultForm() {
  const consultForm = document.getElementById('projectConsultForm');
  const formMsg     = document.getElementById('projectFormMessage');
  if (!consultForm) return;

  consultForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name    = document.getElementById('pName').value.trim();
    const email   = (document.getElementById('pEmail').value || '').trim();
    const phone   = document.getElementById('pPhone').value.trim();
    const city    = (document.getElementById('pCity').value  || '').trim();
    const service = document.getElementById('pSpace').value;
    const message = (document.getElementById('pMessage').value || '').trim();
    const source  = (document.getElementById('pSource').value  || 'Book Consultation');

    const submitBtn = consultForm.querySelector('button[type="submit"]');
    const origText  = submitBtn.textContent;
    submitBtn.disabled  = true;
    submitBtn.textContent = 'Sending…';

    const now = new Date();
    const enquiry = {
      name, phone, email, city, service, message, source,
      date: now.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }),
      time: now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    };

    submitEnquiry(enquiry)
      .then(() => {
        if (formMsg) {
          formMsg.innerHTML = 'Thank you! Your enquiry has been received.<br>Our team will contact you shortly.';
          formMsg.className = 'form-message success';
          formMsg.style.display = 'block';
        }
        consultForm.reset();
      })
      .catch(err => {
        console.error(err);
        if (formMsg) {
          formMsg.textContent = 'Something went wrong. Please try again.';
          formMsg.className = 'form-message error';
          formMsg.style.display = 'block';
        }
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = origText;
      });
  });
}

// ── BOOT ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildProjectsHTML();
  initCardReveal();
  initVideoPlayback();
  initConsultForm();
});