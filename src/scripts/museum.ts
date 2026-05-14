import type { Computer } from "../data/computer";

let current = 0;

function render(computers: Computer[], index: number) {
  const c = computers[index];
  document.getElementById("museum-name")!.textContent = `${c.name} (${c.year})`;
  document.getElementById("museum-type")!.textContent = c.type.toUpperCase();
  document.getElementById("museum-description")!.textContent = c.description;
  document.getElementById("museum-counter")!.textContent = `Card ${index + 1} of ${computers.length}`;
  document.getElementById("museum-id")!.textContent = `ID: ${String(index + 1).padStart(4, "0")}`;
  document.getElementById("mspec-cpu")!.textContent = c.cpu;
  document.getElementById("mspec-ram")!.textContent = c.ram;
  document.getElementById("mspec-speed")!.textContent = c.cpuSpeed;
  document.getElementById("mspec-os")!.textContent = c.os;
  document.getElementById("mspec-price")!.textContent = c.price;
  const img = document.getElementById("museum-img") as HTMLImageElement | null;
  if (img) { img.src = `/images/${c.id}.webp`; img.alt = c.name; }
}

export function initMuseum(computers: Computer[]) {
  render(computers, 0);

  document.getElementById("btn-next")?.addEventListener("click", () => {
    current = (current + 1) % computers.length;
    render(computers, current);
  });

  document.getElementById("btn-prev")?.addEventListener("click", () => {
    current = (current - 1 + computers.length) % computers.length;
    render(computers, current);
  });

  document.getElementById("museum-search")?.addEventListener("input", (e) => {
    const query = (e.target as HTMLInputElement).value.toLowerCase();
    if (!query) return;
    const index = computers.findIndex((c) => c.name.toLowerCase().includes(query));
    if (index !== -1) { current = index; render(computers, current); }
  });
}
