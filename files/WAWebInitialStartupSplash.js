__d(
  "WAWebInitialStartupSplash",
  [],
  function (t, n, r, o, a, i) {
    var e = "wa_web_initial_startup",
      l = "wa_web_initial_startup_logo",
      s = "wa_web_initial_startup_footer",
      u = "wa_web_initial_startup_background",
      c = 1200,
      d = 0.35,
      m = 1.2,
      p = "1100";
    function _(t) {
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
        if (i == null) {
          o();
          return;
        }
        try {
          var u,
            _ = { duration: c, fill: "forwards" };
          r.style.zIndex = p;
          var g = i.animate(
            [
              { easing: "ease-out", offset: 0, transform: "scale(1)" },
              {
                easing: "ease-in-out",
                offset: d,
                transform: "scale(" + m + ")",
              },
              { offset: 1, transform: "scale(0)" },
            ],
            _,
          );
          (f(r, d, _),
            (u = document.getElementById(s)) == null ||
              u.animate(
                [
                  { offset: 0, opacity: 1 },
                  { offset: d, opacity: 1 },
                  { offset: 1, opacity: 0 },
                ],
                _,
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
    function f(e, t, n) {
      var r = document.getElementById(u);
      if (r != null)
        return r.animate(
          [
            { offset: 0, opacity: 1 },
            { offset: t, opacity: 1 },
            { offset: 1, opacity: 0 },
          ],
          n,
        );
      var o = window.getComputedStyle(e).backgroundColor;
      return e.animate(
        [
          { backgroundColor: o, offset: 0 },
          { backgroundColor: o, offset: t },
          { backgroundColor: "transparent", offset: 1 },
        ],
        n,
      );
    }
    ((i.INITIAL_STARTUP_SPLASH_ID = e),
      (i.INITIAL_STARTUP_SPLASH_LOGO_ID = l),
      (i.INITIAL_STARTUP_SPLASH_FOOTER_ID = s),
      (i.INITIAL_STARTUP_SPLASH_BACKGROUND_ID = u),
      (i.INITIAL_STARTUP_SPLASH_EXIT_DURATION_MS = c),
      (i.INITIAL_STARTUP_SPLASH_EXIT_ZOOM_PEAK_OFFSET = d),
      (i.INITIAL_STARTUP_SPLASH_EXIT_ZOOM_PEAK_SCALE = m),
      (i.INITIAL_STARTUP_SPLASH_EXIT_Z_INDEX = p),
      (i.removeInitialStartupSplash = _),
      (i.fadeOutInitialStartupSplashBackground = f));
  },
  66,
);
