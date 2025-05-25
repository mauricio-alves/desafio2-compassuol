export function handleNewsletterForm() {
  const newsForm = document.getElementById("newsletter-form") as HTMLFormElement;
  const emailInput = document.getElementById("newsletter-email") as HTMLInputElement;

  newsForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email) {
      alert("Email is required.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    newsForm.submit();
  });
}
