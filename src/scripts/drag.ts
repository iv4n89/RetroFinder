import { getCanvas, getCtx } from "./zoom";

export function makeDraggable(wrapper: HTMLElement) {
  const titleBar = wrapper.querySelector(".window-title-bar") as HTMLElement;
  if (!titleBar) return;

  let isDragging = false;
  let startX: number, startY: number, startLeft: number, startTop: number;

  function drawOutline(x: number, y: number, w: number, h: number) {
    const ctx = getCtx();
    const canvas = getCanvas();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#ffffff";
    ctx.setLineDash([2, 2]);
    ctx.lineDashOffset = 0;
    ctx.strokeRect(x, y, w, h);
    ctx.strokeStyle = "#000000";
    ctx.lineDashOffset = 2;
    ctx.strokeRect(x, y, w, h);
  }

  function clearOutline() {
    const ctx = getCtx();
    const canvas = getCanvas();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  titleBar.addEventListener("mousedown", (e) => {
    if ((e.target as HTMLElement).closest(".window-close-btn")) return;
    if ((e.target as HTMLElement).closest(".window-minimize-btn")) return;
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    const rect = wrapper.getBoundingClientRect();
    startLeft = rect.left;
    startTop = rect.top;
    e.preventDefault();
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const rect = wrapper.getBoundingClientRect();
    drawOutline(
      startLeft + e.clientX - startX,
      startTop + e.clientY - startY,
      rect.width,
      rect.height,
    );
  });

  document.addEventListener("mouseup", (e) => {
    if (!isDragging) return;
    isDragging = false;
    clearOutline();
    wrapper.style.left = `${startLeft + e.clientX - startX}px`;
    wrapper.style.top = `${startTop + e.clientY - startY}px`;
  });
}
