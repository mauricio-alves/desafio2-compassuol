export function handleHamburgerMenu() {
  const openModal = document.querySelector("#hbIcon") as HTMLElement;
  const navModal = document.querySelector("#modal") as HTMLElement;
  const closeModal = document.querySelector("#closeModal svg") as HTMLElement;

  if (openModal && navModal && closeModal) {
    openModal.addEventListener("click", () => {
      navModal.style.display = "flex";
    });

    closeModal.addEventListener("click", () => {
      navModal.style.display = "none";
    });
  }
}
