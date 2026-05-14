let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;

export function initCanvas() {
  canvas = document.getElementById("zoom-rect-canvas") as HTMLCanvasElement;
  ctx = canvas.getContext("2d")!;
  resize();
  window.addEventListener("resize", resize);
}

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

export function zoomRect(
  fromRect: { x: number; y: number; w: number; h: number },
  toRect: { x: number; y: number; w: number; h: number },
  onDone: () => void,
) {
  const steps = 6;
  const stepTime = 180 / steps;
  let step = 0;

  function drawRect(rect: typeof fromRect) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.strokeRect(rect.x, rect.y, rect.w, rect.h);
  }

  function animate() {
    if (step >= steps) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      onDone();
      return;
    }
    const t = step / steps;
    drawRect({
      x: fromRect.x + (toRect.x - fromRect.x) * t,
      y: fromRect.y + (toRect.y - fromRect.y) * t,
      w: fromRect.w + (toRect.w - fromRect.w) * t,
      h: fromRect.h + (toRect.h - fromRect.h) * t,
    });
    step++;
    setTimeout(animate, stepTime);
  }

  animate();
}

export function getCtx() {
  return ctx;
}
export function getCanvas() {
  return canvas;
}
