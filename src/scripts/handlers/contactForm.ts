export function handleContactForm() {
  const contactForm = document.querySelector(".contact-form") as HTMLFormElement;
  const firstNameInput = document.getElementById("first-name") as HTMLInputElement;
  const lastNameInput = document.getElementById("last-name") as HTMLInputElement;
  const contactEmailInput = document.getElementById("email") as HTMLInputElement;
  const messageInput = document.getElementById("message") as HTMLTextAreaElement;
  const policyInput = document.getElementById("policy") as HTMLInputElement;

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
