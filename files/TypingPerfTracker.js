__d(
  "TypingPerfTracker",
  [
    "OneTraceCore",
    "TypingPerfMetric",
    "TypingPerfMetric.experimental",
    "WebAPIs",
    "addAnnotations",
    "performanceNow",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null;
    function u(e) {
      var t, n;
      return (t = (n = s) == null ? void 0 : n.has(e)) != null ? t : !1;
    }
    var c = !1,
      d =
        o("WebAPIs").requestAnimationFrame != null &&
        o("WebAPIs").cancelAnimationFrame != null;
    function m() {
      c || (typeof WeakMap == "function" && (s = new WeakMap()), (c = !0));
    }
    function p(t, n, a, i, l) {
      var m,
        p =
          l === !0
            ? o("TypingPerfMetric").measureAverageTypingPerformance
            : o("TypingPerfMetric.experimental")
                .measureAverageTypingPerformance;
      if (s == null || !c || !d) return function () {};
      if ((t !== a && a != null && u(a) && _(a), u(t))) return function () {};
      var f = null,
        g = p(
          t,
          function () {
            var t = r("uuidv4")();
            f = r("OneTraceCore").startTrace(
              t,
              n,
              "TYPING",
              (e || (e = r("performanceNow")))(),
            );
            var o = r("OneTraceCore").getCurrentTracePolicy();
            r("addAnnotations")(f.annotations, {
              string: { routeTracePolicy: o, identifier: n },
            });
          },
          function (n) {
            var t = n.allTimes,
              o = n.averageTimeToRender,
              a = n.keypresses,
              l = n.max,
              s = n.min;
            if (f) {
              var u = f,
                c = 0;
              if (
                (t.forEach(function (e) {
                  e < 50 && c++;
                }),
                i)
              ) {
                for (var d in i)
                  if (typeof i[d] == "string") {
                    var m;
                    r("addAnnotations")(u.annotations, {
                      string: ((m = {}), (m[d] = i[d]), m),
                    });
                  } else if (typeof i[d] == "number") {
                    var p;
                    r("addAnnotations")(u.annotations, {
                      int: ((p = {}), (p[d] = i[d]), p),
                    });
                  }
              }
              (r("addAnnotations")(u.annotations, {
                double: {
                  averageTimeToRender: o,
                  keypresses: a,
                  keypressesBelow50ms: c,
                  max: l,
                  min: s,
                },
              }),
                r("OneTraceCore").endTrace(
                  u.traceID,
                  (e || (e = r("performanceNow")))(),
                  "SUCCESS",
                ));
            }
          },
        ),
        h = function () {
          var e;
          (g(), (e = s) == null || e.delete(t));
        };
      return ((m = s) == null || m.set(t, h), h);
    }
    function _(e) {
      if (s != null) {
        var t = s.get(e);
        t && t();
      }
    }
    ((l.init = m), (l.trackTypingPerf = p), (l.unregisterTypingPerf = _));
  },
  98,
);
