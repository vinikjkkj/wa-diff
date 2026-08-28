__d(
  "XControllerInteractionRecorder",
  ["InteractionTracingMetrics", "IntervalTrackingBoundedBuffer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e3,
      s = new (r("IntervalTrackingBoundedBuffer"))(e),
      u = !1,
      c = null;
    function d() {
      var e;
      u ||
        (typeof PerformanceObserver != "undefined" &&
          (c = new PerformanceObserver(function (e) {
            var t = e.getEntries();
            for (var n of t) s.pushElement(n);
          })),
        (e = c) == null || e.observe({ entryTypes: ["resource"] }),
        (u = !0));
    }
    var m = function (t) {
        return function (e) {
          if (e instanceof PerformanceResourceTiming) {
            var n = "",
              o = "",
              a = "";
            try {
              var i = new URL(e.name);
              ((o = i.host), (a = i.origin), (n = i.pathname));
            } catch (e) {}
            e.initiatorType === "xmlhttprequest" &&
              !o.split(".")[0].includes("graph") &&
              !n.startsWith("/api/v1") &&
              !n.startsWith("/api/graphql") &&
              n !== "/ajax/bz" &&
              n !== "/logging/falco" &&
              !/\.(css|js)$/.test(n) &&
              r("InteractionTracingMetrics").addSubspan(
                t,
                n,
                "XController",
                e.fetchStart,
                e.responseEnd,
                { url: "" + a + n, full_duration: e.duration / 1e3 },
              );
          }
        };
      },
      p = {
        start: function () {
          var e = !1;
          d();
          var t = s.open();
          return {
            stop: function (r) {
              if (!e) {
                var n = t.close();
                ((e = !0), n.forEach(m(r)));
              }
            },
          };
        },
      };
    l.default = p;
  },
  98,
);
