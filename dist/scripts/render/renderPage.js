var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { loadComponent } from "../utils/loadComponent.js";
import { handleScrollNavbar } from "../handlers/scrollNavbar.js";
import { handleHamburgerMenu } from "../handlers/hamburgerMenu.js";
import { handleDropdown } from "../handlers/dropdown.js";
import { handleProductCart } from "../handlers/productCart.js";
import { handleContactForm } from "../handlers/contactForm.js";
import { handleNewsletterForm } from "../handlers/newsletterForm.js";
import { handlePlayBtn } from "../handlers/playBtn.js";
export function renderPage() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = document.getElementById("app");
        if (!app)
            return;
        const [header, banner, shop, services, aboutUs, ourTeam, blog, contact, footer,] = yield Promise.all([
            loadComponent("src/components/header/header.html"),
            loadComponent("src/components/banner/banner.html"),
            loadComponent("src/components/shop/shop.html"),
            loadComponent("src/components/services/services.html"),
            loadComponent("src/components/aboutUs/aboutUs.html"),
            loadComponent("src/components/ourTeam/ourTeam.html"),
            loadComponent("src/components/blog/blog.html"),
            loadComponent("src/components/contact/contact.html"),
            loadComponent("src/components/footer/footer.html"),
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
        handlePlayBtn();
    });
}
