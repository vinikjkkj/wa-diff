__d(
  "WAWebInitialStartupSplash",
  [],
  function (t, n, r, o, a, i) {
    var e = 1200,
      l = "1100";
    function s(t) {
      var n = t.animate,
        r = document.getElementById("wa_web_initial_startup");
      if (!(r == null || r.parentNode == null)) {
        var o = function () {
            r.parentNode != null && r.parentNode.removeChild(r);
          },
          a =
            (window.matchMedia == null
              ? void 0
              : window.matchMedia("(prefers-reduced-motion: reduce)")
                  .matches) === !0;
        if (!n || a) {
          o();
          return;
        }
        var i = document.getElementById("wa_web_initial_startup_logo");
        if (!(i instanceof SVGElement)) {
          o();
          return;
        }
        try {
          var s = window.getComputedStyle(i).transform,
            u = window.getComputedStyle(r).backgroundColor,
            c = document.getElementById("wa_web_initial_startup_footer");
          ((r.style.zIndex = l),
            (i.style.transform = s),
            (i.style.animation = "none"));
          var d = i.animate(
            [
              { easing: "ease-out", offset: 0, transform: s },
              { easing: "ease-in-out", offset: 0.35, transform: "scale(1.2)" },
              { offset: 1, transform: "scale(0)" },
            ],
            { duration: e, fill: "forwards" },
          );
          (r.animate(
            [
              { backgroundColor: u, offset: 0 },
              { backgroundColor: u, offset: 0.35 },
              { backgroundColor: "transparent", offset: 1 },
            ],
            { duration: e, fill: "forwards" },
          ),
            c instanceof HTMLElement &&
              c.animate(
                [
                  { offset: 0, opacity: 1 },
                  { offset: 0.35, opacity: 1 },
                  { offset: 1, opacity: 0 },
                ],
                { duration: e, fill: "forwards" },
              ),
            d.finished.then(function () {
              window.requestAnimationFrame(function () {
                window.requestAnimationFrame(o);
              });
            }, o));
        } catch (e) {
          o();
        }
      }
    }
    ((i.INITIAL_STARTUP_SPLASH_EXIT_DURATION_MS = e),
      (i.removeInitialStartupSplash = s));
  },
  66,
);
