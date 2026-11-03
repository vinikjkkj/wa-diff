__d(
  "JSSPLongTaskLinker",
  ["JSSPSetting", "JSSPTraceBaseDataCollector", "one-trace"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map(),
      s = new Map(),
      u = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.onProfilerStarts = async function (n, r) {
            (r === void 0 && (r = null),
              s.set(n, Date.now()),
              r != null && e.set(n, new Set(r)));
          }),
          (a.onProfilerEnds = async function (n, r, o) {
            return (s.delete(n), e.delete(n), o);
          }),
          (a.onProfilerAborts = async function (n) {
            (s.delete(n), e.delete(n));
          }),
          (n.startLongtaskObserver = function () {
            r("one-trace").subscribe("trace-end-before-logging", function (t) {
              if (t.traceType === "LONGTASK") {
                var n = !1;
                e.forEach(function (a, i) {
                  if (n !== !0) {
                    var l = e.get(i),
                      u = s.get(i);
                    if (l != null && u != null) {
                      var c = Date.now() - u,
                        d = c > o("JSSPSetting").slowProfilerSpan;
                      if (
                        (d && l.has("fast-profiler")) ||
                        (!d && l.has("slow-profiler"))
                      )
                        return;
                    }
                    (r("one-trace").addAnnotations(t.annotations, {
                      string: { JSSPId: i },
                    }),
                      (n = !0));
                  }
                });
              }
            });
          }),
          n
        );
      })(r("JSSPTraceBaseDataCollector"));
    (o("JSSPSetting").isCollectingINP && u.startLongtaskObserver(),
      (l.default = u));
  },
  98,
);
