__d(
  "WebBloksAccessibilityAnnouncement",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      var n,
        r = document.createElement("div");
      (r.setAttribute("aria-live", "polite"),
        (r.style.position = "absolute"),
        (r.style.top = "-10000px"),
        (r.style.left = "-10000px"),
        (r.style.width = "500px"),
        (r.textContent = t),
        (n = document.body) == null || n.appendChild(r),
        window.setTimeout(function () {
          var e;
          (e = document.body) == null || e.removeChild(r);
        }, 100));
    }
    i.default = e;
  },
  66,
);
