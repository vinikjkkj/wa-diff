__d(
  "WAWebPerformanceObserver",
  ["WAWebLongAnimationFrameObserver", "WAWebLongTaskObserver", "WAWebNoop"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.longAnimationFrame,
        n = e.longtask,
        a = [],
        i = null,
        l = null;
      if (
        (n.enabled &&
          ((i = new (o("WAWebLongTaskObserver").WAWebLongTaskObserver)()),
          i.isSupported() && a.push("longtask")),
        t.enabled &&
          ((l = new (o(
            "WAWebLongAnimationFrameObserver",
          ).WAWebLongAnimationFrameObserver)()),
          l.isSupported() && a.push("long-animation-frame")),
        a.length === 0)
      )
        return r("WAWebNoop");
      var s = new window.PerformanceObserver(function (e) {
        if (
          (i &&
            a.includes("longtask") &&
            i.handle(e.getEntriesByType("longtask")),
          l && a.includes("long-animation-frame"))
        ) {
          var t = e.getEntriesByType("long-animation-frame");
          l.handle(t);
        }
      });
      return (
        s.observe({ entryTypes: a }),
        i && i.documentVisibilityObserver.observe(),
        function () {
          s.disconnect();
        }
      );
    }
    l.initPerformanceObserver = e;
  },
  98,
);
