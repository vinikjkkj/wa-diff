__d(
  "WAWebInitialStartupSplash",
  [],
  function (t, n, r, o, a, i) {
    var e = "wa_web_initial_startup",
      l = "wa_web_initial_startup_logo",
      s = "wa_web_initial_startup_footer",
      u = 1200,
      c = 0.35,
      d = 1.2,
      m = "1100";
    function p(t) {
      var n = t.animate,
        r = document.getElementById(e);
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
        var i = document.getElementById(l);
        if (!(i instanceof SVGElement)) {
          o();
          return;
        }
        try {
          var p = window.getComputedStyle(i).transform,
            _ = window.getComputedStyle(r).backgroundColor,
            f = document.getElementById(s);
          ((r.style.zIndex = m),
            (i.style.transform = p),
            (i.style.animation = "none"));
          var g = i.animate(
            [
              { easing: "ease-out", offset: 0, transform: p },
              {
                easing: "ease-in-out",
                offset: c,
                transform: "scale(" + d + ")",
              },
              { offset: 1, transform: "scale(0)" },
            ],
            { duration: u, fill: "forwards" },
          );
          (r.animate(
            [
              { backgroundColor: _, offset: 0 },
              { backgroundColor: _, offset: c },
              { backgroundColor: "transparent", offset: 1 },
            ],
            { duration: u, fill: "forwards" },
          ),
            f instanceof HTMLElement &&
              f.animate(
                [
                  { offset: 0, opacity: 1 },
                  { offset: c, opacity: 1 },
                  { offset: 1, opacity: 0 },
                ],
                { duration: u, fill: "forwards" },
              ),
            g.finished.then(function () {
              window.requestAnimationFrame(function () {
                window.requestAnimationFrame(o);
              });
            }, o));
        } catch (e) {
          o();
        }
      }
    }
    ((i.INITIAL_STARTUP_SPLASH_ID = e),
      (i.INITIAL_STARTUP_SPLASH_LOGO_ID = l),
      (i.INITIAL_STARTUP_SPLASH_FOOTER_ID = s),
      (i.INITIAL_STARTUP_SPLASH_EXIT_DURATION_MS = u),
      (i.INITIAL_STARTUP_SPLASH_EXIT_ZOOM_PEAK_OFFSET = c),
      (i.INITIAL_STARTUP_SPLASH_EXIT_ZOOM_PEAK_SCALE = d),
      (i.INITIAL_STARTUP_SPLASH_EXIT_Z_INDEX = m),
      (i.removeInitialStartupSplash = p));
  },
  66,
);
