__d(
  "WAWebPerformanceObserver",
  ["WAWebLongAnimationFrameObserver", "WAWebLongTaskObserver", "WAWebNoop"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        a = e.longAnimationFrame,
        i = e.longtask,
        l = [],
        s = null,
        u = null;
      if (
        (i.enabled &&
          ((s = new (o("WAWebLongTaskObserver").WAWebLongTaskObserver)()),
          s.isSupported() && l.push("longtask")),
        a.enabled &&
          ((u = new (o(
            "WAWebLongAnimationFrameObserver",
          ).WAWebLongAnimationFrameObserver)()),
          u.isSupported() && l.push("long-animation-frame")),
        l.length === 0)
      )
        return r("WAWebNoop");
      var c = !1,
        d = new window.PerformanceObserver(function (e) {
          if (
            !c &&
            (s &&
              l.includes("longtask") &&
              s.handle(e.getEntriesByType("longtask")),
            u && l.includes("long-animation-frame"))
          ) {
            var t = e.getEntriesByType("long-animation-frame");
            u.handle(t);
          }
        });
      d.observe({ entryTypes: l });
      var m =
        (t =
          (n = s) == null ? void 0 : n.documentVisibilityObserver.observe()) !=
        null
          ? t
          : r("WAWebNoop");
      return function () {
        c || ((c = !0), d.disconnect(), m());
      };
    }
    l.initPerformanceObserver = e;
  },
  98,
);
