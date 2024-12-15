const hoteliPoDestinaciji = {
  Pariz: [
    { naziv: "The Ritz", cijena: 500 },
    { naziv: "Hotel Lutetia", cijena: 300 },
    { naziv: "Budget Inn Pariz", cijena: 150 },
  ],
  Tokio: [
    { naziv: "Park Hyatt", cijena: 400 },
    { naziv: "Hilton Tokio", cijena: 350 },
    { naziv: "Tokio Capsule Hotel", cijena: 100 },
  ],
  Rim: [
    { naziv: "Hotel Eden", cijena: 450 },
    { naziv: "Roma Luxury Suites", cijena: 300 },
    { naziv: "Budget Inn Rim", cijena: 120 },
  ],
  Sidnej: [
    { naziv: "Four Seasons Sidnej", cijena: 500 },
    { naziv: "Sidnej Harbour Hotel", cijena: 350 },
    { naziv: "Sidnej Budget Hotel", cijena: 200 },
  ],
  Bali: [
    { naziv: "Bali Resort & Spa", cijena: 400 },
    { naziv: "Ubud Boutique Hotel", cijena: 250 },
    { naziv: "Budget Inn Bali", cijena: 100 },
  ],
};

document.getElementById("destinacija").addEventListener("change", function () {
  const odabranaDestinacija = this.value;
  const hotelSelect = document.getElementById("hotel");

  hotelSelect.innerHTML = "";

  hoteliPoDestinaciji[odabranaDestinacija].forEach((hotel) => {
    const option = document.createElement("option");
    option.value = `${hotel.naziv} (${hotel.cijena})`;
    option.textContent = `${hotel.naziv} (${hotel.cijena} €/noć)`;
    hotelSelect.appendChild(option);
  });
});

document
  .getElementById("planer-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const destinacija = document.getElementById("destinacija").value;
    const hotel = document.getElementById("hotel").value;
    const nocenja = parseInt(document.getElementById("nocenja").value, 10);
    const budzet = parseInt(document.getElementById("budzet").value, 10);

    const hotelCijena = parseInt(hotel.match(/\d+/)[0], 10);

    const ukupno = hotelCijena * nocenja;

    const rezultatDiv = document.getElementById("rezultat");
    rezultatDiv.innerHTML = "";

    if (isNaN(nocenja) || isNaN(budzet)) {
      rezultatDiv.innerHTML = `<p class="text-danger">Molimo unesite validne podatke za noćenja i budžet.</p>`;
      return;
    }

    if (budzet >= ukupno) {
      const ostatak = budzet - ukupno;
      rezultatDiv.innerHTML = `
            <p class="text-success">
                Možete otići u <strong>${destinacija}</strong> i boraviti u <strong>${hotel}</strong> za <strong>${nocenja}</strong> noći.
            </p>
            <p>Ostatak vašeg budžeta: <strong>${ostatak} €</strong></p>
        `;
    } else {
      const nedostatak = ukupno - budzet;
      rezultatDiv.innerHTML = `
            <p class="text-danger">
                Nažalost, nemate dovoljno budžeta za odlazak u <strong>${destinacija}</strong> i boravak u <strong>${hotel}</strong>.
            </p>
            <p>Nedostaje vam: <strong>${nedostatak} €</strong></p>
        `;
    }
  });

document.getElementById("destinacija").dispatchEvent(new Event("change"));
