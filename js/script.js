// Bikin Side Bar Menggunakan JavaScript
// toggle class active untuk layar Tablet
const navbarNav = document.querySelector(".navbar-nav");
// ketika menu hamburger di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// menghilangkan side bar tanpa menyentuh menu hamburger.
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// test alert
function myalert() {
  alert("Maff Menu ini Belum Berfungsi.. Maklum Admin nya lagi Magerrr");
}
