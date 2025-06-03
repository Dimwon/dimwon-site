
document.addEventListener("DOMContentLoaded", function() {
  const toggle = document.getElementById("darkToggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("aos-animate");
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll(".aos").forEach(el => {
    observer.observe(el);
  });
});
