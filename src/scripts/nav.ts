export function setActiveNav(id: string) {
  document.querySelectorAll("[data-nav]").forEach((el) => {
    const isFooter = el.closest("footer");
    const isActive = !isFooter && (el as HTMLElement).dataset.nav === id;
    el.classList.toggle("bg-primary", isActive);
    el.classList.toggle("text-on-primary", isActive);
    el.classList.toggle("text-primary", !isActive);
  });
}
