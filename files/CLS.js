__d(
  "CLS",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l =
        typeof ((e = window.PerformanceObserver) == null ||
        (e = e.supportedEntryTypes) == null
          ? void 0
          : e.includes) == "function" &&
        window.PerformanceObserver.supportedEntryTypes.includes("layout-shift");
    function s() {
      if (!l) return null;
      var e = 0,
        t = 0,
        n = [],
        r = new window.PerformanceObserver(function (r) {
          for (var o of r.getEntries())
            if (!o.hadRecentInput) {
              var a = n[0],
                i = n[n.length - 1];
              (t &&
              o.startTime - i.startTime < 1e3 &&
              o.startTime - a.startTime < 5e3
                ? ((t += o.value), n.push(o))
                : ((t = o.value), (n = [o])),
                t > e && (e = t));
            }
        });
      return (
        r.observe({ buffered: !0, type: "layout-shift" }),
        function () {
          return (r.disconnect(), e);
        }
      );
    }
    i.getCLSCallback = s;
  },
  66,
);
