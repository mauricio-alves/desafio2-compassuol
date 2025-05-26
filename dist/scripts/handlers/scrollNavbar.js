export function handleScrollNavbar() {
    const navbar = document.querySelector(".navbar");
    const mobileNavbar = document.querySelector(".mobileNavbar-content");
    const bannerSection = document.querySelector(".banner");
    if ((navbar || mobileNavbar) && bannerSection) {
        window.addEventListener("scroll", () => {
            const bannerHeight = bannerSection.getBoundingClientRect().height;
            if (window.scrollY > bannerHeight - 50) {
                navbar === null || navbar === void 0 ? void 0 : navbar.classList.add("scrolled");
                mobileNavbar === null || mobileNavbar === void 0 ? void 0 : mobileNavbar.classList.add("scrolled");
            }
            else {
                navbar === null || navbar === void 0 ? void 0 : navbar.classList.remove("scrolled");
                mobileNavbar === null || mobileNavbar === void 0 ? void 0 : mobileNavbar.classList.remove("scrolled");
            }
        });
    }
}
