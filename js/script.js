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

// pop up 1
function openPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

// pop up 2
function openPopup1() {
  var popup1 = document.getElementById("popup1");
  popup1.style.display = "block";
}

function closePopup1() {
  var popup1 = document.getElementById("popup1");
  popup1.style.display = "none";
}

// pop up 3
function openPopup2() {
  var popup1 = document.getElementById("popup2");
  popup1.style.display = "block";
}

function closePopup2() {
  var popup1 = document.getElementById("popup2");
  popup1.style.display = "none";
}

// pop up 4
function openPopup3() {
  var popup1 = document.getElementById("popup3");
  popup1.style.display = "block";
}

function closePopup3() {
  var popup1 = document.getElementById("popup3");
  popup1.style.display = "none";
}

// keyframe pop up
function openPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
}
