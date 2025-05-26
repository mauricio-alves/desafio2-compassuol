export function handleProductCart() {
  document.querySelectorAll(".product-card").forEach((card) => {
    const decreaseBtn = card.querySelector(
      ".decrease"
    ) as HTMLButtonElement | null;
    const increaseBtn = card.querySelector(
      ".increase"
    ) as HTMLButtonElement | null;
    const quantityEl = card.querySelector(".quantity") as HTMLElement | null;
    let quantity = 1;

    decreaseBtn?.addEventListener("click", () => {
      if (quantity > 1 && quantityEl) {
        quantity--;
        quantityEl.textContent = quantity.toString();
      }
    });

    increaseBtn?.addEventListener("click", () => {
      if (quantityEl) {
        quantity++;
        quantityEl.textContent = quantity.toString();
      }
    });
  });
}
