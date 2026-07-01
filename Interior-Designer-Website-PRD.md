# Product Requirements Document
## Vintage-Inspired Interior Design Portfolio Website

**Prepared for:** [Designer's Name / Studio Name]
**Build tool:** Antigravity (AI coding agent)
**Version:** 1.0
**Date:** July 2026

---

## 1. Project Overview

A one-of-a-kind personal/business website for an interior designer to showcase completed projects, tell their design story, collect client inquiries, and display reviews/testimonials. The site should feel like a curated vintage design magazine — warm, tactile, and editorial — while still functioning as a modern, fast, mobile-friendly business tool.

**Primary goal:** Convert visitors into leads (consultation bookings / inquiry form submissions).

**Secondary goals:** Build brand credibility, showcase range of work, make it easy for past clients to leave reviews.

---

## 2. Target Audience

- Homeowners planning a renovation or redesign (mid-to-high budget)
- Real estate agents/developers looking for staging or design partners
- People browsing Pinterest/Instagram who land on the site for inspiration
- Repeat/referral clients checking recent work

---

## 3. Visual Design Direction ("Vintage but Premium")

| Element | Direction |
|---|---|
| **Color palette** | Warm neutrals — cream/parchment background, deep terracotta, olive green, brass/gold, ink black for text. Avoid pure white or cold grays. |
| **Typography** | Serif or vintage-script display font for headings (e.g. editorial/magazine feel) + a clean humanist sans for body text so it stays readable. |
| **Texture** | Subtle paper-grain or linen background texture, soft film-grain overlay on images, slightly worn/aged edges on cards or frames. |
| **Imagery style** | Warm-toned, softly lit photography; polaroid-style or gilded-frame treatments for portfolio thumbnails. |
| **Motion** | Gentle, slow fades and page-turn/reveal transitions — nothing sharp or "techy." Scroll-triggered reveals work well. |
| **Iconography** | Thin-line or hand-drawn style icons rather than flat modern icons. |
| **Layout inspiration** | Editorial magazine spreads, gallery walls, scrapbook-style asymmetric grids for the portfolio. |

**Reference mood:** mid-century modern meets old-world European apartment — brass fixtures, velvet textures, botanical illustrations as accents.

---

## 4. Site Map / Pages

1. **Home**
   - Full-bleed hero image/video of signature project
   - Short brand tagline + intro
   - Featured/selected projects (3–4 highlights)
   - Testimonial snippet carousel
   - CTA: "Book a Consultation"

2. **Portfolio / Projects**
   - Filterable gallery (by room type, style, location, budget tier)
   - Each project opens into a **Project Detail Page**:
     - Before/after slider
     - Photo gallery
     - Design brief / story of the project
     - Materials/palette used
     - Client quote (optional)

3. **About**
   - Designer's story, philosophy, process
   - Photo of designer
   - Press mentions / awards (if any)

4. **Services**
   - Service tiers (e.g. Full Design, Room Refresh, Virtual Consultation, Styling Only)
   - Process/timeline explainer (Discovery → Concept → Execution → Reveal)
   - Pricing guidance or "request a quote" CTA

5. **Reviews / Testimonials**
   - Full list of client reviews with star ratings
   - Option for clients to **submit a new review** (form + optional photo upload)
   - Optional integration with Google Reviews/Houzz if he has existing accounts

6. **Contact / Inquiry**
   - Contact form with fields: Name, Email, Phone, Project type, Budget range, Timeline, Message
   - Studio address/map (if applicable)
   - Social links (Instagram/Pinterest embed feed)
   - Calendly-style booking link (optional)

7. **Blog / Journal** *(optional, good for SEO)*
   - Design tips, project stories, trend commentary — reinforces vintage editorial feel

---

## 5. Core Features & Functional Requirements

### 5.1 Portfolio Gallery
- Masonry/asymmetric grid layout
- Filter/sort by category (living room, kitchen, full home, commercial, etc.)
- Lightbox image viewer with smooth transitions
- Before/after comparison slider component

### 5.2 Contact & Inquiry System
- Form validation (required fields, email format)
- Submissions saved to a database and/or emailed to the designer
- Auto-confirmation email to the client ("Thanks, we'll be in touch")
- Spam protection (honeypot field or simple CAPTCHA)

### 5.3 Reviews System
- Publicly visible list of reviews (name, rating, text, optional photo)
- Submission form for new reviews
- Simple moderation: new reviews go to a "pending" state until approved (so the designer can filter spam/fake reviews) — can be a simple flag in the database, no complex admin panel needed for v1
- Display average rating on homepage/services page

### 5.4 CMS / Content Management
- Designer should be able to add/edit/remove projects and reviews without touching code
- Options: lightweight headless CMS (e.g. simple JSON/database-driven admin page built by Antigravity) OR a no-code CMS integration
- **Recommendation for v1:** a simple password-protected admin page to add projects/reviews, since this can be built directly by Antigravity without external dependencies

### 5.5 Responsive & Performance
- Fully responsive (mobile-first, since most traffic will come from Instagram/Pinterest referrals)
- Fast image loading (lazy-load, optimized/compressed images)
- Accessible (proper alt text, readable contrast despite vintage muted palette)

### 5.6 SEO Basics
- Meta titles/descriptions per page
- Structured data for local business + reviews (helps show star ratings in Google search)
- Sitemap.xml

---

## 6. Nice-to-Have (v2 features)

- Instagram feed auto-embed
- Newsletter signup (design tips, new projects)
- Client portal/login for ongoing project updates
- Booking/calendar integration for consultations
- Multi-language support (if targeting international clients)

---

## 7. Content the Designer Needs to Provide

- High-quality photos of at least 6–10 completed projects
- Before/after photos where available
- Short write-up per project (concept, challenge, solution)
- Bio + headshot
- List of services + rough pricing structure
- Any existing client testimonials
- Logo / brand colors if already established (otherwise Antigravity/design pass can propose one)
- Social media handles

---

## 8. Technical Notes for Building in Antigravity

- Suggested stack: a modern frontend framework (e.g. React/Next.js) with a lightweight backend/database (e.g. Node + SQLite/Postgres, or a serverless database) for storing projects, reviews, and contact submissions.
- Use environment variables for any email-sending service (e.g. Resend, SendGrid) — do not hardcode credentials.
- Keep the vintage styling in a centralized design system (colors, fonts, spacing) so it's easy to adjust site-wide.
- Build the admin/content-editing page behind simple authentication (password or login) before launch.
- Ensure contact form and review form both have server-side validation, not just client-side.

---

## 9. Success Metrics

- Number of inquiry form submissions per month
- Average time on site / portfolio page views
- Number of new reviews submitted
- Mobile vs desktop traffic split (optimize accordingly)
- Search ranking for "[city] interior designer" type queries

---

## 10. Open Questions for the Designer

- Does he already have a logo/brand identity, or should one be designed as part of this?
- Does he want online payments (e.g. deposit for consultation) in v1?
- Preferred domain name?
- Any existing reviews (Google/Houzz/Yelp) to import initially so the site doesn't launch empty?
