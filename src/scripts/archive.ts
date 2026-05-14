import type { Computer } from "../data/computer";

export function initArchive(computers: Computer[]) {
  const rows = document.querySelectorAll<HTMLElement>(".computer-row");
  const detailEmpty = document.getElementById("detail-empty")!;
  const detailContent = document.getElementById("detail-content")!;

  rows.forEach((row) => {
    row.addEventListener("click", () => {
      const computer = computers.find((c) => c.id === row.dataset.id);
      if (!computer) return;

      rows.forEach((r) => r.classList.remove("bg-primary", "text-on-primary"));
      row.classList.add("bg-primary", "text-on-primary");

      detailEmpty.classList.add("hidden");
      detailContent.classList.remove("hidden");
      detailContent.classList.add("flex");

      document.getElementById("detail-name")!.textContent = `${computer.name} (${computer.year})`;
      document.getElementById("detail-type")!.textContent = computer.type.toUpperCase();
      document.getElementById("detail-description")!.textContent = computer.description;
      document.getElementById("detail-significance")!.textContent = computer.significance;
      document.getElementById("spec-cpu")!.textContent = computer.cpu;
      document.getElementById("spec-speed")!.textContent = computer.cpuSpeed;
      document.getElementById("spec-ram")!.textContent = computer.ram;
      document.getElementById("spec-os")!.textContent = computer.os;
      document.getElementById("spec-price")!.textContent = computer.price;
    });
  });
}
