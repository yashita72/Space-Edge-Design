/* =======================================================
   SPACE EDGE DESIGN — DESIGN GALLERY JS
   Manages category listing, grid rendering, hash routing,
   and visual placeholders. Loads real local assets from project.
   ======================================================= */

// ── CENTRALIZED GALLERY DATA ─────────────────────────────────
// Centralized mapping using local photographs from the images folder.
const galleryData = {
  bedroom: [
    { src: 'images/bed.jpeg', caption: 'Luxury Master Bedroom Suite', alt: 'Space Edge Design Master Bedroom Interior' }
  ],
  kitchen: [
    { src: 'images/kitchen1.jpeg', caption: 'Modern Kitchen Cabinets and Countertop', alt: 'Space Edge Design Modular Kitchen' },
    { src: 'images/kitchen2.jpeg', caption: 'Contemporary L-Shaped Kitchen Layout', alt: 'Space Edge Design Modular Kitchen' },
    { src: 'images/kitchen3.jpeg', caption: 'Elegant Kitchen Storage and Island Design', alt: 'Space Edge Design Modular Kitchen' }
  ],
  mandir: [
    { src: 'images/mandir.jpeg', caption: 'Tranquil Custom Mandir Pooja Room Design', alt: 'Space Edge Design Mandir Interior' },
    { src: 'images/mandir2.jpeg', caption: 'Bespoke Wooden Mandir Setup', alt: 'Space Edge Design Mandir Interior' },
    { src: 'images/mandir3.jpeg', caption: 'Serene Pooja Mandir with Backlit CNC Cutting', alt: 'Space Edge Design Mandir Interior' },
    { src: 'images/mandir4.jpeg', caption: 'Contemporary Marble Pooja Mandir', alt: 'Space Edge Design Mandir Interior' },
    { src: 'images/mandir5.jpeg', caption: 'Traditional Carved Wood Mandir', alt: 'Space Edge Design Mandir Interior' },
    { src: 'images/mandir6.jpeg', caption: 'Elegant Glass-Door Pooja Room Mandir', alt: 'Space Edge Design Mandir Interior' },
    { src: 'images/mandir7.jpeg', caption: 'Minimalist Wall-Mounted Mandir Unit', alt: 'Space Edge Design Mandir Interior' },
    { src: 'images/mandir8.jpeg', caption: 'Modern Pooja Room with LED Lighting', alt: 'Space Edge Design Mandir Interior' },
    { src: 'images/mandir9.jpeg', caption: 'Bespoke Home Mandir with Storage Drawer', alt: 'Space Edge Design Mandir Interior' },
    { src: 'images/mandir10.jpeg', caption: 'Luxury White Marble Pooja Mandir', alt: 'Space Edge Design Mandir Interior' },
    { src: 'images/mandir11.jpeg', caption: 'Compact Pooja Cabinet Mandir', alt: 'Space Edge Design Mandir Interior' },
    { src: 'images/mandir12.jpeg', caption: 'Premium Wooden Mandir with Brass Bells', alt: 'Space Edge Design Mandir Interior' },
    { src: 'images/mandir13.jpeg', caption: 'Exquisite Pooja Mandir with Ambient Backlighting', alt: 'Space Edge Design Mandir Interior' }
  ],
  tvunit: [
    { src: 'images/tvunit1.jpeg', caption: 'Modern Wall-Mounted TV Unit Console', alt: 'Space Edge Design TV Unit' },
    { src: 'images/tvunit2.jpeg', caption: 'Minimalist Floating Console TV Unit', alt: 'Space Edge Design TV Unit' },
    { src: 'images/tvunit3.jpeg', caption: 'Bespoke Wooden TV Unit with Open Shelving', alt: 'Space Edge Design TV Unit' },
    { src: 'images/tvunit4.jpeg', caption: 'Sleek Modern TV Console Cabinet', alt: 'Space Edge Design TV Unit' },
    { src: 'images/tvunit5.jpeg', caption: 'Luxury Backlit Marble Pattern TV Unit', alt: 'Space Edge Design TV Unit' },
    { src: 'images/tvunit6.jpeg', caption: 'Contemporary Wooden TV Showcase Unit', alt: 'Space Edge Design TV Unit' },
    { src: 'images/tvunit7.jpeg', caption: 'Elegant Media Console with Built-In Storage', alt: 'Space Edge Design TV Unit' },
    { src: 'images/tvunit8.jpeg', caption: 'Compact Wall TV Unit for Living Rooms', alt: 'Space Edge Design TV Unit' },
    { src: 'images/tvunit9.jpeg', caption: 'High-End Customized TV Wall Unit', alt: 'Space Edge Design TV Unit' },
    { src: 'images/tvunit10.jpeg', caption: 'Floating Shelf TV Console Design', alt: 'Space Edge Design TV Unit' },
    { src: 'images/tvunit11.jpeg', caption: 'Sophisticated Living Room Entertainment Unit', alt: 'Space Edge Design TV Unit' },
    { src: 'images/tvunit12.jpeg', caption: 'Premium Modern TV Cabinet Unit', alt: 'Space Edge Design TV Unit' },
    { src: 'images/tvunit13.jpeg', caption: 'Bespoke Styled Entertainment Console', alt: 'Space Edge Design TV Unit' },
    { src: 'images/tvunit14.jpeg', caption: 'Chic Living Room TV Backdrop Setup', alt: 'Space Edge Design TV Unit' }
  ],
  wardrobe: [
    { src: 'images/wardrobe1.jpeg', caption: 'Premium Built-in Wardrobe Style 1', alt: 'Space Edge Design Wardrobe' },
    { src: 'images/wardrobe2.jpeg', caption: 'Elegant Sliding Wardrobe Style 2', alt: 'Space Edge Design Wardrobe' },
    { src: 'images/wardrobe3.jpeg', caption: 'Minimalist Wardrobe Design Style 3', alt: 'Space Edge Design Wardrobe' },
    { src: 'images/wardrobe4.jpeg', caption: 'Modern Wardrobe with Integrated Mirrors', alt: 'Space Edge Design Wardrobe' },
    { src: 'images/wardrobe5.jpeg', caption: 'Contemporary Walk-in Closet Wardrobe', alt: 'Space Edge Design Wardrobe' },
    { src: 'images/wardrobe6.jpeg', caption: 'High-End Modular Wardrobe System', alt: 'Space Edge Design Wardrobe' },
    { src: 'images/wardrobe7.jpeg', caption: 'Sleek Laminated Wardrobe with Handles', alt: 'Space Edge Design Wardrobe' },
    { src: 'images/wardrobe8.jpeg', caption: 'Luxury Custom Wardrobe with Loft Storage', alt: 'Space Edge Design Wardrobe' },
    { src: 'images/wardrobe9.jpeg', caption: 'Bespoke Wooden Sliding Wardrobe', alt: 'Space Edge Design Wardrobe' },
    { src: 'images/wardrobe10.jpeg', caption: 'Modern Bedroom Wardrobe Layout', alt: 'Space Edge Design Wardrobe' },
    { src: 'images/wardrobe11.jpeg', caption: 'Premium Styled Closet Wardrobe', alt: 'Space Edge Design Wardrobe' }
  ]
};

// ── CATEGORY CONFIGURATION ───────────────────────────────────
// Icons are optimized, elegant inline SVGs
const categoriesConfig = {
  bedroom: {
    name: 'Bedroom',
    desc: 'Serene, personal spaces crafted for rest and absolute relaxation.',
    icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/></svg>`
  },
  kitchen: {
    name: 'Kitchen',
    desc: 'Functional and beautiful cooking environments with modular cabinets.',
    icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm8-3H18V2h-2v4h-1v5h3v11h2V11c0-2.76-2.24-5-5-5z"/></svg>`
  },
  mandir: {
    name: 'Mandir / Pooja Room',
    desc: 'Bespoke, serene mandir arrangements for quiet contemplation.',
    icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`
  },
  tvunit: {
    name: 'TV Units / Entertainment Units',
    desc: 'Custom modern media consoles and premium TV entertainment units.',
    icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"/></svg>`
  },
  wardrobe: {
    name: 'Wardrobes',
    desc: 'Premium customizable storage and wardrobe modular systems.',
    icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6h-8V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-2 14H4V4h6v4h8v12z"/></svg>`
  }
};

// ── REUSABLE COMPONENTS ──────────────────────────────────────

// 1. GalleryCategoryCard Component
function GalleryCategoryCard(key, config, previewImageSrc) {
  let mediaHtml = '';

  if (previewImageSrc) {
    mediaHtml = `
      <div class="gallery-category-img-container">
        <img src="${previewImageSrc}" alt="${config.name} Preview Thumbnail" loading="lazy">
      </div>
    `;
  } else {
    mediaHtml = `
      <div class="gallery-category-img-placeholder" aria-hidden="true">
        ${config.icon}
        <span class="gallery-category-placeholder-text">Coming Soon</span>
      </div>
    `;
  }

  return `
    <a href="#${key}" class="gallery-category-card" aria-label="View ${config.name} Design Gallery">
      ${mediaHtml}
      <div class="gallery-category-info">
        <h2 class="gallery-category-title">${config.name}</h2>
        <p class="gallery-category-desc">${config.desc}</p>
      </div>
    </a>
  `;
}

// 2. GalleryGrid Layout Component
function GalleryGrid(contentHtml) {
  return `
    <div class="gallery-grid">
      ${contentHtml}
    </div>
  `;
}

// 3. GalleryImageCard Component
function GalleryImageCard(item, itemIndex, actualImgIndex) {
  const hasImage = item.src && item.src.trim() !== '';

  if (hasImage) {
    return `
      <article class="gallery-image-card has-image" data-img-index="${actualImgIndex}" aria-label="View larger image: ${item.caption || 'Interior Project'}" role="button" tabindex="0">
        <img src="${item.src}" alt="${item.alt || item.caption || 'Premium Interior Design'}" loading="lazy">
      </article>
    `;
  } else {
    // Elegant Camera outline SVG for empty placeholder
    const placeholderIcon = `
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="3.2"/>
        <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
      </svg>
    `;
    return `
      <article class="gallery-image-card is-placeholder" aria-label="Image slot placeholder" tabIndex="-1">
        <div class="gallery-image-placeholder">
          ${placeholderIcon}
          <span class="gallery-image-placeholder-label">Add Project Image</span>
          <span class="gallery-image-placeholder-subtext">${item.caption || 'Interior detail slot'}</span>
        </div>
      </article>
    `;
  }
}

// 4. GalleryLightbox Modal Component
class GalleryLightbox {
  constructor(lightboxId) {
    this.element = document.getElementById(lightboxId);
    if (!this.element) return;

    this.closeBtn = document.getElementById('lightboxClose');
    this.prevBtn = document.getElementById('lightboxPrev');
    this.nextBtn = document.getElementById('lightboxNext');
    this.image = document.getElementById('lightboxImage');
    this.caption = document.getElementById('lightboxCaption');

    this.imagesList = [];
    this.currentIndex = -1;

    this.initEvents();
  }

  initEvents() {
    this.closeBtn.addEventListener('click', () => this.close());
    
    // Close when clicking outside the content image
    this.element.addEventListener('click', (e) => {
      if (e.target === this.element) this.close();
    });

    this.prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.prev();
    });

    this.nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.next();
    });

    // Keyboard controls
    document.addEventListener('keydown', (e) => {
      if (!this.element.classList.contains('active')) return;

      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });
  }

  open(imagesList, index) {
    this.imagesList = imagesList;
    this.currentIndex = index;

    this.updateContent();
    
    this.element.style.display = 'flex';
    // Reflow trigger
    void this.element.offsetWidth;
    
    this.element.classList.add('active');
    this.element.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.element.classList.remove('active');
    this.element.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    setTimeout(() => {
      if (!this.element.classList.contains('active')) {
        this.element.style.display = 'none';
        this.image.src = '';
      }
    }, 250);
  }

  prev() {
    if (this.imagesList.length <= 1) return;
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.imagesList.length - 1;
    this.updateContent();
  }

  next() {
    if (this.imagesList.length <= 1) return;
    this.currentIndex = (this.currentIndex < this.imagesList.length - 1) ? this.currentIndex + 1 : 0;
    this.updateContent();
  }

  updateContent() {
    if (this.currentIndex < 0 || this.currentIndex >= this.imagesList.length) return;
    const item = this.imagesList[this.currentIndex];

    // Smooth image fade-in transition
    this.image.style.opacity = '0';
    this.image.src = item.src;
    this.caption.textContent = item.caption || '';

    this.image.onload = () => {
      this.image.style.transition = 'opacity 0.22s ease-in-out';
      this.image.style.opacity = '1';
    };

    // Hide navigation keys if only 1 image exists
    if (this.imagesList.length <= 1) {
      this.prevBtn.style.display = 'none';
      this.nextBtn.style.display = 'none';
    } else {
      this.prevBtn.style.display = 'flex';
      this.nextBtn.style.display = 'flex';
    }
  }
}

// ── DESIGN GALLERY SYSTEM ───────────────────────────────────
class DesignGallery {
  constructor(contentContainerId, data, config) {
    this.container = document.getElementById(contentContainerId);
    this.data = data;
    this.config = config;
    this.activeImagesList = [];
    this.lightbox = null;

    this.init();
  }

  init() {
    if (!this.container) return;

    // Handle hash routing
    window.addEventListener('hashchange', () => this.handleRoute());
    
    // Initialize the lightbox component
    this.lightbox = new GalleryLightbox('galleryLightbox');

    // Run layout routing immediately
    this.handleRoute();
  }

  handleRoute() {
    const hash = window.location.hash.substring(1);
    
    // Smooth scrolling to the gallery top when category changes
    const gallerySection = document.querySelector('.gallery-section');
    if (gallerySection && window.scrollY > gallerySection.offsetTop - 80) {
      window.scrollTo({
        top: gallerySection.offsetTop - 80,
        behavior: 'smooth'
      });
    }

    // Render the tabs and highlight the active one
    this.renderTabs(hash);

    if (hash && this.config[hash]) {
      this.renderCategoryView(hash);
    } else {
      this.renderCategoriesView();
    }
  }

  renderTabs(activeKey) {
    const tabsContainer = document.getElementById('galleryTabs');
    if (!tabsContainer) return;

    // Generate 'All' tab
    const allActive = !activeKey ? 'active' : '';
    let tabsHtml = `
      <a href="#" class="gallery-tab ${allActive}" aria-label="Show all categories">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"/></svg>
        All Categories
      </a>
    `;

    // Generate tabs for each category config
    tabsHtml += Object.keys(this.config).map(key => {
      const activeClass = (key === activeKey) ? 'active' : '';
      const cat = this.config[key];
      return `
        <a href="#${key}" class="gallery-tab ${activeClass}" aria-label="Show ${cat.name} Category">
          ${cat.icon}
          ${cat.name}
        </a>
      `;
    }).join('');

    tabsContainer.innerHTML = tabsHtml;
  }

  renderCategoriesView() {
    // Update headers and titles
    document.getElementById('galleryTitle').textContent = 'DESIGN GALLERY';
    document.getElementById('gallerySubtitle').textContent = 'A collection of spaces designed to inspire.';
    
    const backContainer = document.getElementById('galleryBackContainer');
    if (backContainer) backContainer.classList.add('hidden');

    // Generate grid cards HTML, showing the first image from each category as preview
    const cardsHtml = Object.keys(this.config).map(key => {
      const itemsList = this.data[key] || [];
      const firstImage = itemsList.find(item => item.src && item.src.trim() !== '');
      const previewSrc = firstImage ? firstImage.src : null;
      return GalleryCategoryCard(key, this.config[key], previewSrc);
    }).join('');

    this.container.innerHTML = GalleryGrid(cardsHtml);
  }

  renderCategoryView(categoryKey) {
    const catConfig = this.config[categoryKey];

    // Update headers and titles
    document.getElementById('galleryTitle').textContent = catConfig.name;
    document.getElementById('gallerySubtitle').textContent = catConfig.desc;

    const backContainer = document.getElementById('galleryBackContainer');
    if (backContainer) backContainer.classList.remove('hidden');

    // Get current files
    const items = this.data[categoryKey] || [];

    // Show dynamic coming soon empty state if category contains no images
    if (items.length === 0) {
      this.activeImagesList = [];
      this.container.innerHTML = `
        <div class="gallery-empty-state">
          <div class="gallery-empty-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" fill="none"/>
              <path d="M12 7v6M12 16h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
          </div>
          <h3 class="gallery-empty-title">Coming Soon</h3>
          <p class="gallery-empty-desc">We are currently executing premium projects in this category. Elegant photoshoot layouts and styling configurations will be added here soon.</p>
        </div>
      `;
      return;
    }

    // Identify images that are valid (non-placeholder) for lightbox pagination
    this.activeImagesList = items.filter(item => item.src && item.src.trim() !== '');

    // Generate grid contents
    const cardsHtml = items.map((item, index) => {
      const actualImgIndex = this.activeImagesList.indexOf(item);
      return GalleryImageCard(item, index, actualImgIndex);
    }).join('');

    this.container.innerHTML = GalleryGrid(cardsHtml);

    // Bind click events for images with actual files
    const imageCards = this.container.querySelectorAll('.gallery-image-card.has-image');
    imageCards.forEach(card => {
      const clickHandler = () => {
        const imgIndex = parseInt(card.dataset.imgIndex, 10);
        if (imgIndex !== -1) {
          this.lightbox.open(this.activeImagesList, imgIndex);
        }
      };

      card.addEventListener('click', clickHandler);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          clickHandler();
        }
      });
    });
  }
}

// ── BOOTSTRAP ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  new DesignGallery('galleryContent', galleryData, categoriesConfig);
});
