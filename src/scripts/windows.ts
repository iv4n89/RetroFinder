import { setActiveNav } from "./nav";
import { zoomRect } from "./zoom";

export const defaultPositions: Record<string, { top: number; left: number }> = {
  archive: { top: 40, left: 160 },
  museum: { top: 40, left: 120 },
  terminal: { top: 60, left: 160 },
  specs: { top: 60, left: 200 },
  manual: { top: 80, left: 220 },
  credits: { top: 100, left: 240 },
};

export const minimizedSlots: Record<string, number> = {
  archive: 0,
  museum: 1,
  terminal: 2,
  specs: 3,
  manual: 4,
  credits: 5,
};

export function getWrappers(): Record<string, HTMLElement | null> {
  return {
    archive: document.getElementById("window-archive-wrapper"),
    museum: document.getElementById("window-museum-wrapper"),
    terminal: document.getElementById("window-terminal-wrapper"),
    specs: document.getElementById("window-specs-wrapper"),
    manual: document.getElementById("window-manual-wrapper"),
    credits: document.getElementById("window-credits-wrapper"),
  };
}

export interface WindowManagerOptions {
  onArchiveFirstOpen: () => void;
  onMuseumFirstOpen: () => void;
}

export function createWindowManager(opts: WindowManagerOptions) {
  const wrappers = getWrappers();
  let topZ = 30;
  let archiveInitialized = false;
  let museumInitialized = false;

  function bringToFront(wrapper: HTMLElement) {
    topZ++;
    wrapper.style.zIndex = String(topZ);
  }

  function findHighestVisible(excludeId: string): string {
    let highestZ = 0;
    let highestId = "desktop";
    Object.entries(wrappers).forEach(([k, w]) => {
      if (k === excludeId || !w) return;
      if (w.classList.contains("hidden") || w.classList.contains("window-minimized")) return;
      const z = parseInt(w.style.zIndex) || 0;
      if (z > highestZ) { highestZ = z; highestId = k; }
    });
    return highestId;
  }

  function openWindow(
    id: string,
    fromRect: { x: number; y: number; w: number; h: number } | null = null,
  ) {
    const wrapper = wrappers[id];
    if (!wrapper) return;

    if (!wrapper.classList.contains("hidden") && !wrapper.classList.contains("window-minimized")) {
      bringToFront(wrapper);
      setActiveNav(id);
      return;
    }

    const pos = defaultPositions[id];
    document.body.classList.add("cursor-wait");

    setTimeout(() => {
      const doOpen = () => {
        document.body.classList.remove("cursor-wait");
        if (wrapper.classList.contains("window-minimized")) {
          restoreWindow(id);
        } else {
          wrapper.classList.remove("hidden");
        }
        bringToFront(wrapper);
        setActiveNav(id);
        if (id === "archive" && !archiveInitialized) {
          opts.onArchiveFirstOpen();
          archiveInitialized = true;
        }
        if (id === "museum" && !museumInitialized) {
          opts.onMuseumFirstOpen();
          museumInitialized = true;
        }
      };

      if (fromRect) {
        zoomRect(fromRect, { x: pos.left, y: pos.top, w: wrapper.offsetWidth || 600, h: wrapper.offsetHeight || 400 }, doOpen);
      } else {
        doOpen();
      }
    }, 600 + Math.random() * 600);
  }

  function closeWindow(id: string) {
    const wrapper = document.getElementById(`window-${id}-wrapper`);
    if (!wrapper) return;

    const icon = document.querySelector<HTMLElement>(`.desktop-icon[data-window="${id}"]`);

    const finish = () => {
      wrapper.classList.remove("window-minimized");
      wrapper.classList.add("hidden");
      const pos = defaultPositions[id];
      wrapper.style.top = `${pos.top}px`;
      wrapper.style.left = `${pos.left}px`;
      setActiveNav(findHighestVisible(id));
    };

    if (icon) {
      const wRect = wrapper.getBoundingClientRect();
      const iRect = icon.getBoundingClientRect();
      zoomRect(
        { x: wRect.left, y: wRect.top, w: wRect.width, h: wRect.height },
        { x: iRect.left, y: iRect.top, w: iRect.width, h: iRect.height },
        finish,
      );
    } else {
      finish();
    }
  }

  function minimizeWindow(id: string) {
    const wrapper = document.getElementById(`window-${id}-wrapper`);
    if (!wrapper) return;

    const rect = wrapper.getBoundingClientRect();
    wrapper.dataset.prevTop = `${rect.top}px`;
    wrapper.dataset.prevLeft = `${rect.left}px`;

    const slot = minimizedSlots[id] ?? 0;
    wrapper.style.top = `calc(100dvh - 8px - 60px)`;
    wrapper.style.left = `calc(100dvw - 180px - ${168 * (slot + 1)}px)`;
    wrapper.style.zIndex = "25";
    wrapper.classList.add("window-minimized");

    setActiveNav(findHighestVisible(id));
  }

  function restoreWindow(id: string) {
    const wrapper = document.getElementById(`window-${id}-wrapper`);
    if (!wrapper) return;

    wrapper.style.top = wrapper.dataset.prevTop || `${defaultPositions[id].top}px`;
    wrapper.style.left = wrapper.dataset.prevLeft || `${defaultPositions[id].left}px`;
    wrapper.classList.remove("window-minimized");
    bringToFront(wrapper);
    setActiveNav(id);
  }

  return { wrappers, openWindow, closeWindow, minimizeWindow, restoreWindow, bringToFront };
}
