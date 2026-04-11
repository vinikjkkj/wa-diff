__d(
  "ResourceTimingStore",
  ["performance"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 4e3,
      u = 3e3,
      c = new Map(),
      d = !1;
    function m() {
      var e = Array.from(c.entries());
      c = new Map(e.slice(-u));
    }
    function p(e) {
      var t = e.indexOf("#");
      return t === -1 ? e : e.slice(0, t);
    }
    function _(e) {
      for (var t of e)
        if (t instanceof PerformanceResourceTiming) {
          var n = "";
          try {
            n = new URL(t.name).pathname;
          } catch (e) {}
          if (/\.(css|js)$/.test(n)) {
            var r = t;
            r != null &&
              typeof r == "object" &&
              typeof r.encodedBodySize == "number" &&
              typeof r.decodedBodySize == "number" &&
              typeof r.transferSize == "number" &&
              c.set(p(t.name), r);
          }
        }
      c.size > s && m();
    }
    function f(e) {
      _(e.getEntries());
    }
    function g() {
      if (!d) {
        d = !0;
        var t = null;
        if (typeof PerformanceObserver != "undefined") {
          t = new PerformanceObserver(f);
          try {
            t.observe({ buffered: !0, type: "resource" });
          } catch (e) {}
        }
        typeof (e || (e = r("performance"))).getEntriesByType == "function" &&
          _((e || (e = r("performance"))).getEntriesByType("resource"));
      }
    }
    function h(e) {
      return (g(), c.get(p(e)));
    }
    ((l.init = g), (l.getEntryForURL = h));
  },
  98,
);
