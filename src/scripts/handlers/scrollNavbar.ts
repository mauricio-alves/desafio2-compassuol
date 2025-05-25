export function handleScrollNavbar() {
  const navbar = document.querySelector(".navbar") as HTMLElement;
  const mobileNavbar = document.querySelector(
    ".mobileNavbar-content"
  ) as HTMLElement;
  const bannerSection = document.querySelector(".banner") as HTMLElement;

  if ((navbar || mobileNavbar) && bannerSection) {
    window.addEventListener("scroll", () => {
      const bannerHeight = bannerSection.getBoundingClientRect().height;

      if (window.scrollY > bannerHeight - 50) {
        navbar?.classList.add("scrolled");
        mobileNavbar?.classList.add("scrolled");
      } else {
        navbar?.classList.remove("scrolled");
        mobileNavbar?.classList.remove("scrolled");
      }
    });
  }
}
