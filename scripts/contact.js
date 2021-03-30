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
