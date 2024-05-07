const overlay = document.createElement("div");
overlay.classList.add("overlay");
document.body.appendChild(overlay);
overlay.innerHTML =
  "<p>Conținutul este protejat. Te rugăm să te autentifici pentru a-l accesa.</p>";
overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.backgroundColor = "red";
overlay.style.color = "white";
overlay.style.fontSize = "24px";
overlay.style.display = "flex";
overlay.style.justifyContent = "center";
overlay.style.alignItems = "center";
overlay.style.zIndex = "9999";
function removeOverlay() {
  const overlay = document.querySelector(".overlay");
  if (overlay) {
    overlay.remove();
  }
}
// document.addEventListener("contextmenu", function (event) {
//   event.preventDefault();
// });
