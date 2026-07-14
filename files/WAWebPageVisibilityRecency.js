__d(
  "WAWebPageVisibilityRecency",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = globalThis.document,
      l = -1,
      s = -1,
      u = -1;
    function c() {
      if (e != null) {
        var t = self.performance.now();
        e.visibilityState === "visible"
          ? (s >= 0 && (u = t - s), (l = t))
          : (s = t);
      }
    }
    e != null &&
      (e.visibilityState === "visible"
        ? (l = self.performance.now())
        : (s = self.performance.now()),
      e.addEventListener("visibilitychange", c));
    function d() {
      return l < 0 ? -1 : self.performance.now() - l;
    }
    function m() {
      return u;
    }
    function p(e) {
      return l < 0 || u < 0 ? !1 : self.performance.now() - l <= e;
    }
    ((i.getMsSinceDocumentVisible = d),
      (i.getLastHiddenDurationMs = m),
      (i.wasDocumentHiddenWithinMs = p));
  },
  66,
);
