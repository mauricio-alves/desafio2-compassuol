export function handleDropdown() {
    document
        .querySelectorAll(".dropdown-toggle")
        .forEach((toggle) => {
        toggle.addEventListener("click", (e) => {
            e.preventDefault();
            const target = e.currentTarget;
            const parentLi = target.closest(".has-dropdown");
            if (parentLi) {
                parentLi.classList.toggle("open");
            }
        });
    });
    document.addEventListener("click", (e) => {
        const target = e.target;
        document.querySelectorAll(".has-dropdown").forEach((drop) => {
            if (!drop.contains(target)) {
                drop.classList.remove("open");
            }
        });
    });
}
