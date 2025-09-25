// Alterar cor do header ao rolar
window.addEventListener("scroll", function() {
    const header = document.getElementById("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
  });
  
  // Menu mobile toggle
  document.getElementById("menu-toggle").addEventListener("click", function() {
    document.querySelector(".menu").classList.toggle("show");
  });
  