__d(
  "WAWebStartupProfileSplashExit",
  ["WAWebInitialStartupSplash", "WAWebStartupProfile"],
  function (t, n, r, o, a, i, l) {
    var e = 1e3;
    function s(t, n) {
      var r = u(t);
      if (r == null) return null;
      var a = !1,
        i = function () {
          ((a = !0), window.clearTimeout(s));
        },
        l = function () {
          a ||
            (i(),
            o("WAWebInitialStartupSplash").removeInitialStartupSplash({
              animate: !1,
            }),
            n());
        },
        s = window.setTimeout(
          l,
          o("WAWebInitialStartupSplash")
            .INITIAL_STARTUP_SPLASH_EXIT_DURATION_MS + e,
        );
      return { target: r, finish: l, cancel: i };
    }
    function u(e) {
      var t;
      if (e || !c()) return null;
      var n = o("WAWebStartupProfile").getPreparedStartupProfile(),
        r =
          (t = document.getElementById(
            o("WAWebInitialStartupSplash").INITIAL_STARTUP_SPLASH_LOGO_ID,
          )) == null
            ? void 0
            : t.parentElement;
      return n == null || r == null
        ? null
        : { profile: n, profileContainer: r };
    }
    function c() {
      return (
        document.visibilityState !== "hidden" &&
        (window.matchMedia == null
          ? void 0
          : window.matchMedia("(prefers-reduced-motion: reduce)").matches) !==
          !0
      );
    }
    l.beginStartupProfileSplashExit = s;
  },
  98,
);
