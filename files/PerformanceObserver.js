__d(
  "PerformanceObserver",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [];
    function l(e) {
      try {
        var t =
          typeof PerformanceObserver != "undefined" &&
          PerformanceObserver.supportedEntryTypes &&
          Array.isArray(PerformanceObserver.supportedEntryTypes) &&
          PerformanceObserver.supportedEntryTypes.includes(e);
        return !!t;
      } catch (e) {
        return !1;
      }
    }
    function s(t, n) {
      if (l(t))
        try {
          var r = new PerformanceObserver(function (e) {
            for (var t = e.getEntries(), r = 0; r < t.length; r++) n(t[r]);
          });
          (r.observe({ type: t, buffered: !0 }), e.push(r));
        } catch (e) {}
    }
    i.observe = s;
  },
  66,
);
