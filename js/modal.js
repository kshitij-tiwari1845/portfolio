/**
 * Modal Controller - Aniket Kumar Singh Portfolio
 */

const ProjectModal = (function () {
  const modalBackdrop = document.getElementById("projectModal");
  const modalBox = document.getElementById("modalContent");
  const closeBtn = document.getElementById("modalCloseBtn");

  if (!modalBackdrop || !modalBox) {
    return { open: () => {}, close: () => {} };
  }

  function open(projectId) {
    const project = portfolioProjects.find((p) => p.id === projectId);
    if (!project) return;

    modalBox.innerHTML = `
      <div class="modal-hero-cover">
        <img src="${project.image}" alt="${project.title}" loading="lazy" />
      </div>
      <div class="modal-content-inner">
        <span class="project-category-chip">${project.categoryLabel}</span>
        <h2 style="font-size: 1.6rem; font-weight: 700; margin: 0.75rem 0 0.5rem 0; color: var(--text-primary);">${project.title}</h2>
        <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem;">${project.shortDescription}</p>

        <h4 style="font-family: var(--font-mono); font-size: 0.9rem; color: var(--accent-light); margin-bottom: 0.6rem;">// KEY_ENGINEERING_HIGHLIGHTS</h4>
        <ul style="list-style: none; margin-bottom: 1.5rem;">
          ${project.highlights.map((h) => `<li style="display: flex; gap: 0.6rem; margin-bottom: 0.45rem; font-size: 0.88rem; color: var(--text-secondary);"><span style="color: #10B981;">></span> ${h}</li>`).join("")}
        </ul>

        <h4 style="font-family: var(--font-mono); font-size: 0.9rem; color: var(--accent-light); margin-bottom: 0.4rem;">// ARCHITECTURE</h4>
        <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.55; margin-bottom: 1.5rem;">${project.architecture}</p>

        <h4 style="font-family: var(--font-mono); font-size: 0.9rem; color: var(--accent-light); margin-bottom: 0.5rem;">// TECH_STACK</h4>
        <div class="project-item-tags" style="margin-bottom: 2rem;">
          ${project.tags.map((t) => `<span class="project-item-tag">${t}</span>`).join("")}
        </div>

        <div style="display: flex; justify-content: flex-end; gap: 0.75rem; padding-top: 1.25rem; border-top: 1px solid var(--border-subtle);">
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-hero-secondary">
            GitHub Source
          </a>
          <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-hero-primary">
            Live Preview ↗
          </a>
        </div>
      </div>
    `;

    modalBackdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function close() {
    modalBackdrop.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (closeBtn) closeBtn.addEventListener("click", close);

  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) close();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop.classList.contains("active")) close();
  });

  return { open, close };
})();
