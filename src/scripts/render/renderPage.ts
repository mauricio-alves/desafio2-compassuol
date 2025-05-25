import { loadComponent } from "../utils/loadComponent.js";
import { handleScrollNavbar } from "../handlers/scrollNavbar.js";
import { handleHamburgerMenu } from "../handlers/hamburgerMenu.js";
import { handleDropdown } from "../handlers/dropdown.js";
import { handleProductCart } from "../handlers/productCart.js";
import { handleContactForm } from "../handlers/contactForm.js";
import { handleNewsletterForm } from "../handlers/newsletterForm.js";

export async function renderPage() {
  const app = document.getElementById("app") as HTMLElement;

  if (!app) return;

  const [
    header,
    banner,
    shop,
    services,
    aboutUs,
    ourTeam,
    blog,
    contact,
    footer,
  ] = await Promise.all([
    loadComponent("/src/components/header/header.html"),
    loadComponent("/src/components/banner/banner.html"),
    loadComponent("/src/components/shop/shop.html"),
    loadComponent("/src/components/services/services.html"),
    loadComponent("/src/components/aboutUs/aboutUs.html"),
    loadComponent("/src/components/ourTeam/ourTeam.html"),
    loadComponent("/src/components/blog/blog.html"),
    loadComponent("/src/components/contact/contact.html"),
    loadComponent("/src/components/footer/footer.html"),
  ]);

  app.innerHTML = `
    ${header}
    ${banner}
    ${shop}
    ${services}
    ${aboutUs}
    ${ourTeam}
    ${blog}
    ${contact}
    ${footer}
  `;

  handleScrollNavbar();
  handleHamburgerMenu();
  handleDropdown();
  handleProductCart();
  handleContactForm();
  handleNewsletterForm();
}
