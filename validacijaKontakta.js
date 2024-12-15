document
  .getElementById("kontakt-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const ime = document.getElementById("ime").value.trim();
    const email = document.getElementById("email").value.trim();
    const poruka = document.getElementById("poruka").value.trim();

    document.getElementById("ime-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("poruka-error").textContent = "";

    let isValid = true;

    if (ime === "") {
      document.getElementById("ime-error").textContent = "Ime je obavezno.";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      document.getElementById("email-error").textContent = "Email je obavezan.";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      document.getElementById("email-error").textContent =
        "Unesite ispravan email.";
      isValid = false;
    }

    if (poruka === "") {
      document.getElementById("poruka-error").textContent =
        "Poruka je obavezna.";
      isValid = false;
    }

    if (isValid) {
      alert(`Hvala, ${ime}! Uspješno popunjena forma.`);
      document.getElementById("kontakt-form").reset();
    }
  });
