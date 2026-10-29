__d(
  "WAWebWindowsStartupWebTimings",
  [],
  function (t, n, r, o, a, i) {
    var e = null;
    function l() {
      e != null || (e = self.performance.now());
    }
    function s() {
      return e;
    }
    function u() {
      return self.performance.getEntriesByType("navigation")[0];
    }
    function c() {
      var e;
      return (e = self.performance.getEntriesByType("paint").find(function (e) {
        return e.name === "first-paint";
      })) == null
        ? void 0
        : e.startTime;
    }
    function d(e) {
      var t =
        self.performance.timeOrigin || Date.now() - self.performance.now();
      return t + e;
    }
    ((i.markWindowsBridgeReady = l),
      (i.getWindowsBridgeReadyTime = s),
      (i.getNavigationTiming = u),
      (i.getFirstPaintTime = c),
      (i.toQplTimestamp = d));
  },
  66,
);
