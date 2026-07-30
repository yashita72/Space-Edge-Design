// ================= NAVIGATION CONTROL =================
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileCloseBtn = document.getElementById("mobileCloseBtn");

if (hamburgerBtn && mobileMenu && mobileCloseBtn) {
  hamburgerBtn.addEventListener("click", () => {
    mobileMenu.classList.add("open");
  });

  mobileCloseBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
}

// Sticky Nav Scroll effect
const nav = document.getElementById("mainNav");
if (nav) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
}

// ================= PROJECTS DATA STORE =================
const projectsData = {
  project1: {
    id: "project1",
    number: "01",
    name: "The Sky Villa",
    overview: "A bespoke double-height penthouse design tailored for luxury and comfort in Gurugram. Featuring clean lines, premium Italian marble flooring, and smart automation systems integrated with modular custom cabinetry.",
    area: "4,500 sq ft",
    time: "60 Days",
    style: "Contemporary Luxury",
    services: "Full Home Design, Modular Kitchen, Wardrobes, Civil Automation",
    rooms: [
      { id: "bedroom", name: "Bedroom", imgPath: "images/projects/project1/bedroom/1.jpg", placeholder: "Bedroom Image Placeholder" },
      { id: "kitchen", name: "Kitchen", imgPath: "images/projects/project1/kitchen/1.jpg", placeholder: "Kitchen Image Placeholder" },
      { id: "living-room", name: "Living Room", imgPath: "images/projects/project1/living-room/1.jpg", placeholder: "Living Room Placeholder" },
      { id: "dining-room", name: "Dining Room", imgPath: "images/projects/project1/dining-room/1.jpg", placeholder: "Dining Room Placeholder" },
      { id: "wardrobe", name: "Wardrobe", imgPath: "images/projects/project1/wardrobe/1.jpg", placeholder: "Wardrobe Placeholder" },
      { id: "bathroom", name: "Bathroom", imgPath: "images/projects/project1/bathroom/1.jpg", placeholder: "Bathroom Placeholder" },
      { id: "study", name: "Study Room", imgPath: "images/projects/project1/study/1.jpg", placeholder: "Study Room Placeholder" },
      { id: "tv-unit", name: "TV Unit", imgPath: "images/projects/project1/tv-unit/1.jpg", placeholder: "TV Unit Placeholder" }
    ]
  },
  project2: {
    id: "project2",
    number: "02",
    name: "Minimalist Mansion",
    overview: "A grand residence centered around clean geometries and open spaces in Noida. Highlights include custom walnut cabinetry, pocket doors, and seamless storage integration that maximizes natural daylight.",
    area: "6,200 sq ft",
    time: "75 Days",
    style: "Minimalist Modern",
    services: "Full Interior Design, Custom Wardrobes, Modular Kitchen",
    rooms: [
      { id: "bedroom", name: "Bedroom", imgPath: "images/projects/project2/bedroom/1.jpg", placeholder: "Bedroom Image Placeholder" },
      { id: "kitchen", name: "Kitchen", imgPath: "images/projects/project2/kitchen/1.jpg", placeholder: "Kitchen Image Placeholder" },
      { id: "living-room", name: "Living Room", imgPath: "images/projects/project2/living-room/1.jpg", placeholder: "Living Room Placeholder" },
      { id: "dining-room", name: "Dining Room", imgPath: "images/projects/project2/dining-room/1.jpg", placeholder: "Dining Room Placeholder" },
      { id: "wardrobe", name: "Wardrobe", imgPath: "images/projects/project2/wardrobe/1.jpg", placeholder: "Wardrobe Placeholder" },
      { id: "bathroom", name: "Bathroom", imgPath: "images/projects/project2/bathroom/1.jpg", placeholder: "Bathroom Placeholder" },
      { id: "study", name: "Study Room", imgPath: "images/projects/project2/study/1.jpg", placeholder: "Study Room Placeholder" },
      { id: "tv-unit", name: "TV Unit", imgPath: "images/projects/project2/tv-unit/1.jpg", placeholder: "TV Unit Placeholder" }
    ]
  },
  project3: {
    id: "project3",
    number: "03",
    name: "Japandi Haven",
    overview: "A stunning South Delhi flat blending natural woods, paper textures, and minimal layout principles. It emphasizes organic textures, smart hidden storage, and highly functional modular solutions.",
    area: "2,800 sq ft",
    time: "45 Days",
    style: "Japandi (Japanese + Scandinavian)",
    services: "Space Planning, Modular Kitchen, Custom Closets",
    rooms: [
      { id: "bedroom", name: "Bedroom", imgPath: "images/projects/project3/bedroom/1.jpg", placeholder: "Bedroom Image Placeholder" },
      { id: "kitchen", name: "Kitchen", imgPath: "images/projects/project3/kitchen/1.jpg", placeholder: "Kitchen Image Placeholder" },
      { id: "living-room", name: "Living Room", imgPath: "images/projects/project3/living-room/1.jpg", placeholder: "Living Room Placeholder" },
      { id: "dining-room", name: "Dining Room", imgPath: "images/projects/project3/dining-room/1.jpg", placeholder: "Dining Room Placeholder" },
      { id: "wardrobe", name: "Wardrobe", imgPath: "images/projects/project3/wardrobe/1.jpg", placeholder: "Wardrobe Placeholder" },
      { id: "bathroom", name: "Bathroom", imgPath: "images/projects/project3/bathroom/1.jpg", placeholder: "Bathroom Placeholder" },
      { id: "study", name: "Study Room", imgPath: "images/projects/project3/study/1.jpg", placeholder: "Study Room Placeholder" },
      { id: "tv-unit", name: "TV Unit", imgPath: "images/projects/project3/tv-unit/1.jpg", placeholder: "TV Unit Placeholder" }
    ]
  },
  project4: {
    id: "project4",
    number: "04",
    name: "The Heritage Flat",
    overview: "A warm and inviting space in Dwarka combining traditional architectural motifs with cutting edge modern interior elements. Optimized with highly functional space layout, luxury storage units, and detailed false ceilings.",
    area: "3,100 sq ft",
    time: "50 Days",
    style: "Modern Classic Heritage",
    services: "False Ceilings, Modular Units, Complete Makeover",
    rooms: [
      { id: "bedroom", name: "Bedroom", imgPath: "images/projects/project4/bedroom/1.jpg", placeholder: "Bedroom Image Placeholder" },
      { id: "kitchen", name: "Kitchen", imgPath: "images/projects/project4/kitchen/1.jpg", placeholder: "Kitchen Image Placeholder" },
      { id: "living-room", name: "Living Room", imgPath: "images/projects/project4/living-room/1.jpg", placeholder: "Living Room Placeholder" },
      { id: "dining-room", name: "Dining Room", imgPath: "images/projects/project4/dining-room/1.jpg", placeholder: "Dining Room Placeholder" },
      { id: "wardrobe", name: "Wardrobe", imgPath: "images/projects/project4/wardrobe/1.jpg", placeholder: "Wardrobe Placeholder" },
      { id: "bathroom", name: "Bathroom", imgPath: "images/projects/project4/bathroom/1.jpg", placeholder: "Bathroom Placeholder" },
      { id: "study", name: "Study Room", imgPath: "images/projects/project4/study/1.jpg", placeholder: "Study Room Placeholder" },
      { id: "tv-unit", name: "TV Unit", imgPath: "images/projects/project4/tv-unit/1.jpg", placeholder: "TV Unit Placeholder" }
    ]
  },
  project5: {
    id: "project5",
    number: "05",
    name: "Urban Oasis",
    overview: "A premium design that prioritizes space efficiency and sleek minimalist styles in Ghaziabad. Excellent integration of smart wardrobes, a compact high-performance modular kitchen, and dual study rooms.",
    area: "2,200 sq ft",
    time: "40 Days",
    style: "Urban Chic Minimalist",
    services: "Full Home Interiors, TV units, Complete Modular Setup",
    rooms: [
      { id: "bedroom", name: "Bedroom", imgPath: "images/projects/project5/bedroom/1.jpg", placeholder: "Bedroom Image Placeholder" },
      { id: "kitchen", name: "Kitchen", imgPath: "images/projects/project5/kitchen/1.jpg", placeholder: "Kitchen Image Placeholder" },
      { id: "living-room", name: "Living Room", imgPath: "images/projects/project5/living-room/1.jpg", placeholder: "Living Room Placeholder" },
      { id: "dining-room", name: "Dining Room", imgPath: "images/projects/project5/dining-room/1.jpg", placeholder: "Dining Room Placeholder" },
      { id: "wardrobe", name: "Wardrobe", imgPath: "images/projects/project5/wardrobe/1.jpg", placeholder: "Wardrobe Placeholder" },
      { id: "bathroom", name: "Bathroom", imgPath: "images/projects/project5/bathroom/1.jpg", placeholder: "Bathroom Placeholder" },
      { id: "study", name: "Study Room", imgPath: "images/projects/project5/study/1.jpg", placeholder: "Study Room Placeholder" },
      { id: "tv-unit", name: "TV Unit", imgPath: "images/projects/project5/tv-unit/1.jpg", placeholder: "TV Unit Placeholder" }
    ]
  }
};

// ================= PROJECT SWITCHER LOGIC =================
const projectCards = document.querySelectorAll(".project-card");
const detailSection = document.getElementById("project-detail-section");
const detailPlaceholder = document.getElementById("project-detail-placeholder");
const detailContent = document.getElementById("project-detail-content");
const btnCloseDetail = document.getElementById("btn-close-detail");

// Detail DOM elements
const elProjNum = document.getElementById("detail-project-number");
const elProjTitle = document.getElementById("detail-project-title");
const elProjOverview = document.getElementById("detail-project-overview");
const elProjArea = document.getElementById("detail-project-area");
const elProjTime = document.getElementById("detail-project-time");
const elProjStyle = document.getElementById("detail-project-style");
const elProjServices = document.getElementById("detail-project-services");
const elRoomsGrid = document.getElementById("room-categories-grid");

let currentActiveProject = null;

projectCards.forEach(card => {
  card.addEventListener("click", () => {
    const projectId = card.dataset.projectId;
    loadProjectDetails(projectId);
  });
});

if (btnCloseDetail) {
  btnCloseDetail.addEventListener("click", closeProjectDetails);
}

function loadProjectDetails(projectId) {
  const data = projectsData[projectId];
  if (!data) return;

  currentActiveProject = data;

  // Set spec contents
  elProjNum.innerText = data.number;
  elProjTitle.innerText = data.name;
  elProjOverview.innerText = data.overview;
  elProjArea.innerText = data.area;
  elProjTime.innerText = data.time;
  elProjStyle.innerText = data.style;
  elProjServices.innerText = data.services;

  // Build Room Categories list
  elRoomsGrid.innerHTML = "";
  data.rooms.forEach(room => {
    const cardEl = document.createElement("div");
    cardEl.className = "room-card";
    
    // Each room has a main image element + onerror fallback placeholder
    cardEl.innerHTML = `
      <div class="room-img-wrapper">
        <img class="room-img" src="${room.imgPath}" alt="${room.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="placeholder-box room-placeholder">
          <span class="placeholder-text">${room.placeholder}</span>
        </div>
      </div>
      <div class="room-info">
        <h4 class="room-name">${room.name}</h4>
        <button class="btn-view-gallery" data-room-id="${room.id}">View Gallery &rarr;</button>
      </div>
    `;

    // Add click event for view gallery button
    cardEl.querySelector(".btn-view-gallery").addEventListener("click", (e) => {
      e.stopPropagation();
      openLightbox(projectId, room.id);
    });

    elRoomsGrid.appendChild(cardEl);
  });

  // Switch display active states
  detailPlaceholder.style.display = "none";
  detailContent.style.display = "block";
  setTimeout(() => {
    detailContent.classList.add("active");
  }, 50);

  // Smooth scroll to the details view
  detailSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeProjectDetails() {
  detailContent.classList.remove("active");
  setTimeout(() => {
    detailContent.style.display = "none";
    detailPlaceholder.style.display = "block";
  }, 600);
}

// ================= LIGHTBOX GALLERY INTERACTION =================
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxPlaceholder = document.getElementById("lightbox-placeholder");
const lightboxPlaceholderText = document.getElementById("lightbox-placeholder-text");
const lightboxCounter = document.getElementById("lightbox-counter");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxThumbnails = document.getElementById("lightbox-thumbnails");

const btnLClose = document.getElementById("lightbox-close");
const btnLPrev = document.getElementById("lightbox-prev");
const btnLNext = document.getElementById("lightbox-next");

let activeGalleryImages = [];
let currentImageIndex = 0;

function openLightbox(projectId, roomId) {
  const project = projectsData[projectId];
  if (!project) return;

  const room = project.rooms.find(r => r.id === roomId);
  if (!room) return;

  // Let's generate a list of mock photos for this room gallery folder
  // Standard structured folder expects images/projects/projectX/room-name/1.jpg, 2.jpg, etc.
  activeGalleryImages = [];
  for (let i = 1; i <= 5; i++) {
    activeGalleryImages.push({
      src: `images/projects/${projectId}/${roomId}/${i}.jpg`,
      placeholder: `${room.name} Image ${i} Placeholder`,
      roomName: room.name
    });
  }

  currentImageIndex = 0;
  lightbox.classList.add("active");
  lightbox.setAttribute("aria-hidden", "false");
  
  buildThumbnails();
  updateGalleryUI();
}

function closeLightbox() {
  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");
}

function updateGalleryUI() {
  const currentItem = activeGalleryImages[currentImageIndex];
  if (!currentItem) return;

  // Lazy load by setting source
  lightboxImg.style.display = "block";
  lightboxPlaceholder.style.display = "none";
  lightboxImg.src = currentItem.src;
  
  // Set fallback label if fails to load
  lightboxPlaceholderText.innerText = currentItem.placeholder;

  // Update caption & counters
  lightboxCaption.innerText = currentItem.roomName;
  lightboxCounter.innerText = `${currentImageIndex + 1} / ${activeGalleryImages.length}`;

  // Update active thumbnail
  const thumbs = lightboxThumbnails.querySelectorAll(".thumb-item");
  thumbs.forEach((t, index) => {
    if (index === currentImageIndex) {
      t.classList.add("active");
      t.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    } else {
      t.classList.remove("active");
    }
  });
}

function buildThumbnails() {
  lightboxThumbnails.innerHTML = "";
  activeGalleryImages.forEach((img, index) => {
    const thumb = document.createElement("div");
    thumb.className = "thumb-item";
    if (index === 0) thumb.classList.add("active");

    // Thumbnails also support fallbacks
    thumb.innerHTML = `
      <img src="${img.src}" alt="Thumb" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
      <div class="thumb-placeholder-box">IMG ${index + 1}</div>
    `;

    thumb.addEventListener("click", () => {
      currentImageIndex = index;
      updateGalleryUI();
    });

    lightboxThumbnails.appendChild(thumb);
  });
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % activeGalleryImages.length;
  updateGalleryUI();
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + activeGalleryImages.length) % activeGalleryImages.length;
  updateGalleryUI();
}

// Lightbox listeners
if (btnLClose) btnLClose.addEventListener("click", closeLightbox);
if (btnLNext) btnLNext.addEventListener("click", nextImage);
if (btnLPrev) btnLPrev.addEventListener("click", prevImage);

// Keyboard controls
window.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("active")) return;
  if (e.key === "ArrowRight") nextImage();
  if (e.key === "ArrowLeft") prevImage();
  if (e.key === "Escape") closeLightbox();
});

// Close when clicking empty backdrop space
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox || e.target.classList.contains("lightbox-content-wrapper")) {
    closeLightbox();
  }
});

// Touch Swipe navigation helper
let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

lightbox.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}, { passive: true });

function handleSwipe() {
  const threshold = 50; // swipe pixels
  if (touchEndX < touchStartX - threshold) {
    nextImage(); // Swiped Left
  }
  if (touchEndX > touchStartX + threshold) {
    prevImage(); // Swiped Right
  }
}

// ================= CONSULTATION FORM HANDLER =================
const consultForm = document.getElementById("projectConsultForm");
const formMsg = document.getElementById("projectFormMessage");

if (consultForm) {
  consultForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("pName").value;
    const email = document.getElementById("pEmail").value || "";
    const phone = document.getElementById("pPhone").value;
    const city = document.getElementById("pCity").value || "";
    const service = document.getElementById("pSpace").value;
    const message = document.getElementById("pMessage").value || "";
    const source = document.getElementById("pSource").value || "Book Consultation";

    submitBtn = consultForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    const originalText = submitBtn.innerText;
    submitBtn.innerText = "Sending...";

    const now = new Date();
    const enquiry = {
      name,
      phone,
      email,
      city,
      service,
      message,
      source,
      date: now.toLocaleDateString("en-US", { day: "2-digit", month: "short", year: "numeric" }),
      time: now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
    };

    submitEnquiry(enquiry)
      .then(() => {
        if (formMsg) {
          formMsg.innerHTML = "Thank you! Your enquiry has been received.<br>Our team will contact you shortly.";
          formMsg.className = "form-message success";
          formMsg.style.display = "block";
        }
        consultForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerText = originalText;
      })
      .catch(err => {
        console.error(err);
        if (formMsg) {
          formMsg.innerText = "Something went wrong. Please try again.";
          formMsg.className = "form-message error";
          formMsg.style.display = "block";
        }
        submitBtn.disabled = false;
        submitBtn.innerText = originalText;
      });
  });
}