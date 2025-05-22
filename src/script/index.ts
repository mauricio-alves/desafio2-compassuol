async function loadComponent(path: string): Promise<string> {
  const response = await fetch(path);
  return await response.text();
}

async function renderPage() {
  const app = document.getElementById("app");

  if (app) {
    const header = await loadComponent("/src/components/header/header.html");
    const banner = await loadComponent("/src/components/banner/banner.html");
    const shop = await loadComponent("/src/components/shop/shop.html");
    const services = await loadComponent(
      "/src/components/services/services.html"
    );
    const aboutUs = await loadComponent("/src/components/aboutUs/aboutUs.html");
    const ourTeam = await loadComponent("/src/components/ourTeam/ourTeam.html");
    const blog = await loadComponent("/src/components/blog/blog.html");
    const contact = await loadComponent("/src/components/contact/contact.html");

    app.innerHTML = `${header}${banner}${shop}${services}${aboutUs}${ourTeam}${blog}${contact}`;

    const navbar = document.querySelector(".navbar");
    const bannerSection = document.querySelector(".banner");
    if (navbar && bannerSection) {
      window.addEventListener("scroll", () => {
        const bannerHeight = bannerSection.getBoundingClientRect().height;

        if (window.scrollY > bannerHeight - 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    }
  }
}

renderPage();
