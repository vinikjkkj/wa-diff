__d(
  "JSSPInteractionToNextPaintCollector",
  [
    "JSSPSetting",
    "JSSPTraceBaseDataCollector",
    "JSSelfProfilerUtils",
    "asyncToGeneratorRuntime",
    "one-trace",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map(),
      s = new Map(),
      u = new Map(),
      c = (function (t) {
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
                  e.set(t, []),
                  u.set(t, Date.now()),
                  n != null && s.set(t, new Set(n)));
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
                var a, i;
                return (
                  (r.INPEntryList = o("JSSelfProfilerUtils").mergeList(
                    (a = r.INPEntryList) != null ? a : [],
                    (i = e.get(t)) != null ? i : [],
                  )),
                  e.delete(t),
                  u.delete(t),
                  s.delete(t),
                  r
                );
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
                (e.delete(t), u.delete(t), s.delete(t));
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.startINPObserver = function () {
            (r("one-trace").subscribe("trace-end", function (t) {
              if (t.traceType === "INP") {
                var n, r, o, a, i, l, s;
                if (
                  t.endTime == null ||
                  ((n = t.annotations.string) == null
                    ? void 0
                    : n.inputEventType) == null
                )
                  return;
                var u = {
                  startTime: t.startTime,
                  endTime: t.endTime,
                  processingEnd:
                    (r =
                      (o = t.markerPoints.processingEnd) == null
                        ? void 0
                        : o.timeSinceStart) != null
                      ? r
                      : t.endTime,
                  processingStart:
                    (a =
                      (i = t.markerPoints.processingStart) == null
                        ? void 0
                        : i.timeSinceStart) != null
                      ? a
                      : t.startTime,
                  eventType:
                    (l = t.annotations.string) == null
                      ? void 0
                      : l.inputEventType,
                  componentName:
                    (s = t.annotations.string) == null
                      ? void 0
                      : s.reactComponentName,
                };
                e.forEach(function (e) {
                  e.push(u);
                });
              }
            }),
              r("one-trace").subscribe(
                "trace-end-before-logging",
                function (t) {
                  if (t.traceType === "INP") {
                    var n = !1;
                    e.forEach(function (e, a) {
                      if (n !== !0) {
                        var i = s.get(a),
                          l = u.get(a);
                        if (i != null && l != null) {
                          var c = Date.now() - l,
                            d = c > o("JSSPSetting").slowProfilerSpan;
                          if (
                            (d && i.has("fast-profiler")) ||
                            (!d && i.has("slow-profiler"))
                          )
                            return;
                        }
                        (r("one-trace").addAnnotations(t.annotations, {
                          string: { JSSPId: a },
                        }),
                          (n = !0));
                      }
                    });
                  }
                },
              ));
          }),
          a
        );
      })(r("JSSPTraceBaseDataCollector"));
    (o("JSSPSetting").isCollectingINP && c.startINPObserver(), (l.default = c));
  },
  98,
);
