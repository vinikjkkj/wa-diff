__d(
  "WAWebContactsAndGroupsBirthdayCakeWatch",
  [],
  function (t, n, r, o, a, i) {
    var e = 750,
      l = 0.5;
    function s(t, n) {
      var r = !1,
        o = null,
        a = new IntersectionObserver(
          function (e) {
            ((r = e[e.length - 1].intersectionRatio >= l), s());
          },
          { threshold: l },
        );
      function i() {
        o != null && (window.clearTimeout(o), (o = null));
      }
      function s() {
        (i(), r && u() && (o = window.setTimeout(m, e)));
      }
      function d() {
        (i(),
          a.disconnect(),
          document.removeEventListener("visibilitychange", s),
          window.removeEventListener("focus", s),
          window.removeEventListener("blur", i));
      }
      function m() {
        if (((o = null), !(!r || !u()))) {
          if (c(t)) {
            s();
            return;
          }
          (d(), n());
        }
      }
      return (
        a.observe(t),
        document.addEventListener("visibilitychange", s),
        window.addEventListener("focus", s),
        window.addEventListener("blur", i),
        d
      );
    }
    function u() {
      return document.visibilityState === "visible" && document.hasFocus();
    }
    function c(e) {
      var t = e.getBoundingClientRect(),
        n = t.height,
        r = t.left,
        o = t.top,
        a = t.width,
        i = document.elementFromPoint(r + a / 2, o + n / 2);
      return i == null || !(i === e || i.contains(e) || e.contains(i));
    }
    ((i.BIRTHDAY_CAKE_START_DELAY_MS = e), (i.watchBirthdayCake = s));
  },
  66,
);
