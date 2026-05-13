// MOBILE MENU

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // 点击菜单后自动关闭

  const mobileLinks = mobileMenu.querySelectorAll("a");

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}



// HEADER SCROLL EFFECT

const header = document.getElementById("site-header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 20) {
    header.classList.add("shadow-md");
  } else {
    header.classList.remove("shadow-md");
  }

});