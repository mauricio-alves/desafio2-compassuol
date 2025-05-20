async function loadComponent(path: string): Promise<string> {
  const response = await fetch(path);
  return await response.text();
}

async function renderPage() {
  const app = document.getElementById("app");

  if (app) {
    const banner = await loadComponent("/src/components/banner/banner.html");
    const shop = await loadComponent("/src/components/shop/shop.html");
    const services = await loadComponent(
      "/src/components/services/services.html"
    );
    const aboutUs = await loadComponent("/src/components/aboutUs/aboutUs.html");

    app.innerHTML = `${banner}${shop}${services}${aboutUs}`;
  }
}

renderPage();
