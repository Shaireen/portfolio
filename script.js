window.addEventListener("DOMContentLoaded", start);

let windowHeight;

function start() {
  checkPosition();
  burgerMenu();
  window.addEventListener("resize", checkHeight);
}

function checkPosition() {
  document.querySelectorAll(".section").forEach((section) => {
    let sectionId = section.getAttribute("id");
    if (section.getBoundingClientRect().y === 0 && sectionId !== "section0" && sectionId !== "section1") {
      let gridText = section.querySelector(`#${sectionId} .gridtext`);
      let photoContainer = section.querySelector(`#${sectionId} .projectphoto`);

      if (gridText.classList.contains("slide-right2") == false) {
        gridText.classList.add("slide-right2");
        photoContainer.classList.add("slide-right2");
      }
    }
    if (section.getBoundingClientRect().y === 0 && sectionId == "section1") {
      const projectsHeading = document.querySelector(".mainheading");
      if (projectsHeading.classList.contains("slide-in") == false) {
        projectsHeading.classList.add("slide-in");
      }
    }
  });
  setTimeout(checkPosition, 10);
}

function burgerMenu() {
  const icon = document.querySelector(".spanwrapper");
  icon.addEventListener("click", animateSpans);

  const menuLinks = document.querySelectorAll("#menu li");
  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      menuLinks.forEach((link) => {
        if (link.classList.contains("active")) {
          link.classList.remove("active");
        }
      });
      this.classList.add("active");
    });
  });
}

function animateSpans() {
  const menu = document.querySelector("#menuToggle");
  menu.classList.toggle("animatespan");
}

function checkHeight() {
  windowHeight = window.innerHeight;
}
