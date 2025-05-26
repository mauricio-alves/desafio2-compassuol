export function handleDropdown() {
  document
    .querySelectorAll<SVGElement>(".dropdown-toggle")
    .forEach((toggle) => {
      toggle.addEventListener("click", (e: MouseEvent) => {
        e.preventDefault();

        const target = e.currentTarget as SVGElement;
        const parentLi = target.closest(".has-dropdown") as HTMLElement | null;

        if (parentLi) {
          parentLi.classList.toggle("open");
        }
      });
    });

  document.addEventListener("click", (e: MouseEvent) => {
    const target = e.target as Node;
    document.querySelectorAll<HTMLElement>(".has-dropdown").forEach((drop) => {
      if (!drop.contains(target)) {
        drop.classList.remove("open");
      }
    });
  });
}
