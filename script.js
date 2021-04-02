const hrefURLs = {
  github: "https://github.com/honath",
  linkedin: "https://www.linkedin.com/in/alexander-cooper97/",
};

// Add click functionality to icons in header
document
  .querySelectorAll(".header-icon-container")
  .forEach((icon) =>
    icon.addEventListener("click", (event) => headerIconClickHandler(icon.id))
  );

function headerIconClickHandler(iconId) {
  if (iconId == "github") window.open(hrefURLs.github);
  if (iconId == "linkedin") window.open(hrefURLs.linkedin);
}

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
      (line) => (line.style.backgroundColor = "rgb(197, 197, 197)")
    );
  }

  hamToggle = !hamToggle;
}

// Show relevant contact info on image click
const contactInfo = {
  email: "ajwcooper97@gmail.com",
  phone: "704-996-5173",
};

document
  .querySelectorAll(".contact img")
  .forEach((img) => img.addEventListener("click", (event) => toggleInfo(img)));

function toggleInfo(image) {
  if (image.id == "email-img") {
    image.classList.add("hidden");
    const el = document.querySelector("#email-text");
    el.classList.remove("hidden");
    el.textContent = contactInfo.email;
    el.href = `mailto:${contactInfo.email}`;
  }
  if (image.id == "phone-img") {
    image.classList.add("hidden");
    const el = document.querySelector("#phone-text");
    el.classList.remove("hidden");
    el.textContent = contactInfo.phone;
    el.href = `tel:${contactInfo.phone}`;
  }
}


// ????????????
let n = 0;

document.querySelector(".copyright").addEventListener("click", (event) => {
  n++;
  if (n == 2) event.target.classList.add("thing");
  if (n == 3) theThing();
});

function theThing() {
  window.location.href = "https://tinyurl.com/rd43pvzr";
}
