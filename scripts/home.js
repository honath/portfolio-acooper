// Add click functionality to icons in header (home page only)
document
  .querySelectorAll(".header-icon-container")
  .forEach((icon) =>
    icon.addEventListener("click", (event) => headerIconClickHandler(icon.id))
  );

function headerIconClickHandler(iconId) {
  if (iconId == "github") window.open(hrefURLs.github);
  if (iconId == "linkedin") window.open(hrefURLs.linkedin);
}
