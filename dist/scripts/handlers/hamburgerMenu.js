export function handleHamburgerMenu() {
    const openModal = document.querySelector("#hbIcon");
    const navModal = document.querySelector("#modal");
    const closeModal = document.querySelector("#closeModal svg");
    if (openModal && navModal && closeModal) {
        openModal.addEventListener("click", () => {
            navModal.style.display = "flex";
        });
        closeModal.addEventListener("click", () => {
            navModal.style.display = "none";
        });
    }
}
