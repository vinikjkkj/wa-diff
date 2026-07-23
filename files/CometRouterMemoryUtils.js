__d(
  "CometRouterMemoryUtils",
  ["MaintainedRouteConfig", "cr:1813330", "performance"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var n,
        a = o("MaintainedRouteConfig").getMaintainedRouteConfig(t),
        i = a == null ? void 0 : a.maintainRouteWhenJSHeapBelow;
      return (
        i == null ||
        i <= 0 ||
        ((e || (e = r("performance"))) == null ||
        (n = (e || (e = r("performance"))).memory) == null
          ? void 0
          : n.usedJSHeapSize) <= i
      );
    }
    function u(e) {
      if (n("cr:1813330") != null) {
        var t;
        (t = n("cr:1813330")).setPreviousUri(document.URL);
        var r = t.getCurrentUsedJSHeapSize();
        (t.setPreviousUsedJSHeapSize(r), t.setNavigationCount(e));
      }
    }
    var c = { hasNoMemoryConcern: s, logNavigationCount: u };
    l.default = c;
  },
  98,
);
