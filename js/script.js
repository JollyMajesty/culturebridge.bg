function toggleBar() {
  const toggleMenu = document.querySelector(".main-menu ul");
  const menuIcon = document.querySelector(".toggle-bar");
  const menuItems = document.querySelectorAll(".main-menu ul li");
  const openIcon = document.querySelector(".fa-bars");
  const closeIcon = document.querySelector(".fa-x");

  menuIcon.addEventListener("click", () => {
    if (toggleMenu.classList.contains("active")) {
      menuItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.remove("visible");
        }, index * 100);
      });

      setTimeout(() => {
        toggleMenu.classList.remove("active");
        openIcon.style.display = "inline-block";
        closeIcon.style.display = "none";
      }, menuItems.length * 100);
    } else {
      toggleMenu.classList.add("active");
      openIcon.style.display = "none";
      closeIcon.style.display = "inline-block";

      menuItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("visible");
        }, index * 100);
      });
    }
  });
}
toggleBar();

function activeLink() {
  const menuLinks = document.querySelectorAll(".main-menu ul li a");

  menuLinks.forEach((link) => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });
}
activeLink();