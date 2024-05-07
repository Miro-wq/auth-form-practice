window.onload = function () {
  const password = "053742";
  const inputPassword = prompt("Introdu parola pentru a accesa site-ul:");

  if (inputPassword === null) {
    // Utilizatorul a apăsat butonul "Anulează"
    alert("Accesul la site a fost anulat.");
  } else if (inputPassword === "") {
    // Utilizatorul a introdus o parolă goală
    alert("Parola nu poate fi goală! Accesul la site este restricționat.");
  } else if (inputPassword === password) {
    // Parola introdusă este corectă
    window.location.href = "page.html";
  } else {
    // Parola introdusă este incorectă
    alert("Parolă incorectă! Accesul la site este restricționat.");
  }
};
