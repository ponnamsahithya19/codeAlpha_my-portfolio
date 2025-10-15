// Example: Simple scroll animation
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 200;
    let height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      sec.classList.add("animate");
    } else {
      sec.classList.remove("animate");
    }
  });
});