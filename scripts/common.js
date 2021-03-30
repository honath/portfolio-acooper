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
