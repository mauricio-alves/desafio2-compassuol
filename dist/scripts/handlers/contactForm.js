export function handleContactForm() {
    const contactForm = document.querySelector(".contact-form");
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const contactEmailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const policyInput = document.getElementById("policy");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const email = contactEmailInput.value.trim();
        const message = messageInput.value.trim();
        const policyChecked = policyInput.checked;
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
        if (!email) {
            alert("Por favor, preencha o campo de email.");
            return;
        }
        if (!emailRegex.test(email)) {
            alert("Por favor, insira um email válido.");
            return;
        }
        const formData = {
            firstName,
            lastName,
            email,
            message,
            policyAccepted: policyChecked,
        };
        console.log("formData:", formData);
    });
}
