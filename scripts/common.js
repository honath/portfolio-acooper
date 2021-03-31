const hrefURLs = {
  github: "https://github.com/honath",
  linkedin: "https://www.linkedin.com/in/alexander-cooper97/",
  home: "./index.html",
  about: "./about.html",
  projects: "./projects.html",
  contact: "./contact.html",
};

// Sticky navbar functionality
window.onscroll = () => toggleSticky();
const navLinks = document.querySelector(".nav-links");
const sticky = navLinks.offsetTop;

function toggleSticky() {
  if (window.pageYOffset >= sticky) {
    navLinks.classList.add("sticky");
  } else {
    navLinks.classList.remove("sticky");
  }
}

// Add click functionality to navbar buttons
document
  .querySelectorAll(".link-item")
  .forEach((button) =>
    button.addEventListener("click", (event) => navBtnClickHandler(button.id))
  );

function navBtnClickHandler(buttonId) {
  if (buttonId == "home") location.href = hrefURLs.home;
  if (buttonId == "about") location.href = hrefURLs.about;
  if (buttonId == "projects") location.href = hrefURLs.projects;
  if (buttonId == "contact") location.href = hrefURLs.contact;
}

// Add click functionality to hamburger menu
document
  .querySelector(".hamburger")
  .addEventListener("click", (event) => hamClickHandler());
let hamToggle = false;

function hamClickHandler() {
  const hamOverlay = document.querySelector(".hamburger-overlay");
  const hamIcon = document.querySelectorAll(".ham-line");

  if (!hamToggle) {
    hamOverlay.style.width = "100%";
    hamIcon.forEach((line) => (line.style.backgroundColor = "#fffef9"));
  } else {
    hamOverlay.style.width = "0%";
    hamIcon.forEach(
      (line) => (line.style.backgroundColor = "rgba(124, 124, 124, 0.562)")
    );
  }

  hamToggle = !hamToggle;
}
