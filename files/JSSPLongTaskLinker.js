__d(
  "JSSPLongTaskLinker",
  [
    "JSSPSetting",
    "JSSPTraceBaseDataCollector",
    "asyncToGeneratorRuntime",
    "one-trace",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map(),
      s = new Map(),
      u = (function (t) {
        function a() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.onProfilerStarts = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, n) {
                (n === void 0 && (n = null),
                  s.set(t, Date.now()),
                  n != null && e.set(t, new Set(n)));
              },
            );
            function r(e, n) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (i.onProfilerEnds = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, n, r) {
                return (s.delete(t), e.delete(t), r);
              },
            );
            function r(e, n, r) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (i.onProfilerAborts = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                (s.delete(t), e.delete(t));
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.startLongtaskObserver = function () {
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
          a
        );
      })(r("JSSPTraceBaseDataCollector"));
    (o("JSSPSetting").isCollectingINP && u.startLongtaskObserver(),
      (l.default = u));
  },
  98,
);
