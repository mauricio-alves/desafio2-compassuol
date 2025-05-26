export function handleProductCart() {
    document.querySelectorAll(".product-card").forEach((card) => {
        const decreaseBtn = card.querySelector(".decrease");
        const increaseBtn = card.querySelector(".increase");
        const quantityEl = card.querySelector(".quantity");
        let quantity = 1;
        decreaseBtn === null || decreaseBtn === void 0 ? void 0 : decreaseBtn.addEventListener("click", () => {
            if (quantity > 1 && quantityEl) {
                quantity--;
                quantityEl.textContent = quantity.toString();
            }
        });
        increaseBtn === null || increaseBtn === void 0 ? void 0 : increaseBtn.addEventListener("click", () => {
            if (quantityEl) {
                quantity++;
                quantityEl.textContent = quantity.toString();
            }
        });
    });
}
