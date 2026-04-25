/* DIM Won, LLC — minimal site script.
   Mobile nav toggle and current-year footer stamp. */
(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("primary-nav");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Auto-update footer year if a [data-year] node exists.
  var yearEls = document.querySelectorAll("[data-year]");
  if (yearEls.length) {
    var y = new Date().getFullYear();
    yearEls.forEach(function (el) { el.textContent = String(y); });
  }
})();
