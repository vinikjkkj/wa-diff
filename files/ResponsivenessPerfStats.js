__d(
  "ResponsivenessPerfStats",
  ["PerformanceObserver"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      longTaskCount: 0,
      longTaskTotalDurationMs: 0,
      loafCount: 0,
      loafTotalDurationMs: 0,
      inpCount: 0,
      inpTotalInputDelayMs: 0,
      inpTotalProcessingTimeMs: 0,
      inpTotalPresentationDelayMs: 0,
      inpTotalDurationMs: 0,
      layoutShiftCount: 0,
      layoutShiftTotalValue: 0,
    };
    function s(t) {
      var n = typeof t.duration == "number" ? t.duration : 0;
      ((e.longTaskCount += 1), (e.longTaskTotalDurationMs += n));
    }
    function u(t) {
      var n = typeof t.duration == "number" ? t.duration : 0;
      ((e.loafCount += 1), (e.loafTotalDurationMs += n));
    }
    function c(t) {
      var n = t.duration,
        r = t.processingEnd,
        o = t.processingStart,
        a = t.startTime,
        i = a + n,
        l = o - a,
        s = r - o,
        u = i - r;
      ((e.inpCount += 1),
        (e.inpTotalInputDelayMs += l),
        (e.inpTotalProcessingTimeMs += s),
        (e.inpTotalPresentationDelayMs += u),
        (e.inpTotalDurationMs += n));
    }
    function d(t) {
      if (!(t && t.hadRecentInput)) {
        e.layoutShiftCount += 1;
        var n = typeof t.value == "number" ? t.value : 0;
        e.layoutShiftTotalValue += n;
      }
    }
    function m() {
      return babelHelpers.extends({}, e);
    }
    var p = !1;
    function _() {
      p ||
        ((p = !0),
        o("PerformanceObserver").observe("longtask", s),
        o("PerformanceObserver").observe("long-animation-frame", u),
        o("PerformanceObserver").observe("event", c),
        o("PerformanceObserver").observe("layout-shift", d));
    }
    ((l.getResponsivenssPerfStats = m), (l.startMonitoring = _));
  },
  98,
);
