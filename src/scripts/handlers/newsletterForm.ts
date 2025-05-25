export function handleNewsletterForm() {
  const newsForm = document.getElementById("newsletter-form") as HTMLFormElement;
  const emailInput = document.getElementById("newsletter-email") as HTMLInputElement;

  newsForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email) {
      alert("Por favor, preencha o campo de email.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Por favor, insira um email válido.");
      return;
    }

    newsForm.submit();
  });
}
