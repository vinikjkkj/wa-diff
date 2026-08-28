__d(
  "NetworkResourceTimingMatcher",
  ["performance"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return typeof (e || (e = r("performance"))).getEntriesByType != "function"
        ? []
        : (e || (e = r("performance"))).getEntriesByType("resource");
    }
    function u(e) {
      return {
        fetchStart: e.fetchStart,
        responseEnd: e.responseEnd,
        transferSize: e.transferSize,
        duration: e.duration,
      };
    }
    function c(e) {
      for (var t = s(), n = t.length - 1; n >= 0; n--) {
        var r = t[n];
        if (
          r instanceof PerformanceResourceTiming &&
          r.initiatorType === "xmlhttprequest" &&
          r.name.includes(e)
        )
          return u(r);
      }
      return null;
    }
    function d(e) {
      for (
        var t = "__crash_obid=" + e, n = s(), r = n.length - 1;
        r >= 0;
        r--
      ) {
        var o = n[r];
        if (
          o instanceof PerformanceResourceTiming &&
          o.initiatorType === "xmlhttprequest"
        ) {
          var a = o.name.indexOf(t);
          if (a !== -1) {
            var i = o.name.charAt(a + t.length);
            if (i === "" || i === "&" || i === "#") return u(o);
          }
        }
      }
      return null;
    }
    ((l.getResourceTimingByObid = d), (l.getResourceTimingByXref = c));
  },
  98,
);
