// Moved inline scripts from 02-dashboard-gestor.html
window.addEventListener("load", function () {
  document.querySelectorAll(".pfill[data-w]").forEach(function (el) {
    setTimeout(function () {
      el.style.transition = "width 1s cubic-bezier(.23,1,.32,1)";
      el.style.width = el.getAttribute("data-w");
    }, 200);
  });
  document.querySelectorAll(".kpi-val[data-target]").forEach(function (el) {
    var t = parseInt(el.getAttribute("data-target")),
      c = 0,
      s = Math.ceil(t / 20);
    var iv = setInterval(function () {
      c = Math.min(c + s, t);
      el.textContent = c;
      if (c >= t) clearInterval(iv);
    }, 45);
  });
  document.querySelectorAll(".zona-btn").forEach(function (b) {
    b.addEventListener("click", function () {
      document.querySelectorAll(".zona-btn").forEach(function (x) {
        x.classList.remove("active");
      });
      b.classList.add("active");
    });
  });
});