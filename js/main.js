/**
 * Main Interactive Engine - Aniket Kumar Singh Portfolio
 * Pure Vanilla JavaScript: Fast, Modular, and Feature-rich
 */

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initNavigation();
  initTerminalTyping();
  initParticles();
  initProjects();
  initScrollSpy();
  initScrollReveals();
  initEmailCopy();
  initContactForm();
});

/* ==========================================================================
   1. THEME TOGGLE (DARK / LIGHT MODE)
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById("themeToggleBtn");
  const storedTheme = localStorage.getItem("portfolio-theme") || "dark";

  document.documentElement.setAttribute("data-theme", storedTheme);
  updateToggleIcon(storedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("portfolio-theme", nextTheme);
      updateToggleIcon(nextTheme);
    });
  }

  function updateToggleIcon(theme) {
    if (!toggleBtn) return;
    toggleBtn.innerHTML =
      theme === "dark"
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  }
}

/* ==========================================================================
   2. TERMINAL TYPING SIMULATION (EXACT SCREENSHOT)
   ========================================================================== */
function initTerminalTyping() {
  const cmdEl = document.getElementById("termCmdInput");
  if (!cmdEl) return;

  const targetText = "status";
  let charIdx = 0;
  let isDeleting = false;

  function typeStep() {
    if (!isDeleting && charIdx <= targetText.length) {
      cmdEl.textContent = targetText.substring(0, charIdx);
      charIdx++;
      setTimeout(typeStep, 180);
    } else if (isDeleting && charIdx >= 3) {
      cmdEl.textContent = targetText.substring(0, charIdx);
      charIdx--;
      setTimeout(typeStep, 100);
    } else {
      isDeleting = !isDeleting;
      setTimeout(typeStep, isDeleting ? 2500 : 800);
    }
  }

  // Start typing with slight delay
  setTimeout(typeStep, 600);
}

/* ==========================================================================
   3. BACKGROUND PARTICLES (SUBTLE GLOWING DOTS FROM SCREENSHOT)
   ========================================================================== */
function initParticles() {
  const canvas = document.getElementById("particlesCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const colors = ["#818CF8", "#F59E0B", "#10B981", "#64748B"];
  const particles = [];
  const particleCount = 28;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: height * 0.5 + Math.random() * (height * 0.5), // cluster in bottom half
      radius: Math.random() * 2 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      alpha: Math.random() * 0.6 + 0.2
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < height * 0.4) p.y = height;
      if (p.y > height) p.y = height * 0.4;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.shadowBlur = 6;
      ctx.shadowColor = p.color;
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1.0;
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   4. NAVIGATION & MOBILE MENU
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector(".site-header");
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    },
    { passive: true }
  );

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
      });
    });
  }
}

/* ==========================================================================
   5. PROJECTS RENDERING & FILTER TABS
   ========================================================================== */
function initProjects() {
  const container = document.getElementById("projectsGridList");
  const filterTabs = document.querySelectorAll(".filter-tab");

  if (!container || typeof portfolioProjects === "undefined") return;

  function render(category = "all") {
    const filtered =
      category === "all"
        ? portfolioProjects
        : portfolioProjects.filter((p) => p.category === category);

    container.innerHTML = filtered
      .map(
        (project) => `
      <div class="project-card-item reveal" data-category="${project.category}">
        <div class="project-card-cover" style="cursor: pointer;" onclick="ProjectModal.open('${project.id}')">
          <img src="${project.image}" alt="${project.title}" loading="lazy" onerror="this.onerror=null; this.src='assets/images/project-1.svg';" />
          <span class="project-category-chip">${project.categoryLabel}</span>
        </div>
        <div class="project-card-body">
          <h3 class="project-item-title" style="cursor: pointer;" onclick="ProjectModal.open('${project.id}')">${project.title}</h3>
          <p class="project-item-desc">${project.shortDescription}</p>
          <div class="project-item-tags">
            ${project.tags.map((t) => `<span class="project-item-tag">${t}</span>`).join("")}
          </div>
          <div class="project-card-actions">
            <button type="button" class="btn-copy-email" onclick="ProjectModal.open('${project.id}')">
              inspect_architecture()
            </button>
            <div style="display: flex; gap: 0.5rem;">
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-theme-toggle" title="GitHub Source">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-theme-toggle" title="Live Preview">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    `
      )
      .join("");

    initScrollReveals();
  }

  render("all");

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      render(tab.getAttribute("data-filter"));
    });
  });
}

/* ==========================================================================
   6. SCROLL SPY & REVEALS
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener(
    "scroll",
    () => {
      const scrollY = window.pageYOffset + 140;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${sectionId}`) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    { passive: true }
  );
}

function initScrollReveals() {
  const reveals = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  reveals.forEach((el) => observer.observe(el));
}

/* ==========================================================================
   7. EMAIL COPY TO CLIPBOARD & TOAST
   ========================================================================== */
function showToast(msg) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span style="color: #10B981;">✓</span> <span>${msg}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "toastOut 0.3s forwards";
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

function initEmailCopy() {
  const btn = document.getElementById("copyEmailBtn");
  const emailText = document.getElementById("userEmailText");
  if (!btn || !emailText) return;

  btn.addEventListener("click", () => {
    navigator.clipboard
      .writeText(emailText.innerText.trim())
      .then(() => showToast("Copied email to clipboard!"))
      .catch(() => showToast(emailText.innerText.trim()));
  });
}

/* ==========================================================================
   8. CONTACT FORM
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("Message sent! Thanks for reaching out.");
    form.reset();
  });
}
