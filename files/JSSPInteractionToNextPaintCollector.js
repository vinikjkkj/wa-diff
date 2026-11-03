__d(
  "JSSPInteractionToNextPaintCollector",
  [
    "JSSPSetting",
    "JSSPTraceBaseDataCollector",
    "JSSelfProfilerUtils",
    "one-trace",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map(),
      s = new Map(),
      u = new Map(),
      c = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.onProfilerStarts = async function (n, r) {
            (r === void 0 && (r = null),
              e.set(n, []),
              u.set(n, Date.now()),
              r != null && s.set(n, new Set(r)));
          }),
          (a.onProfilerEnds = async function (n, r, a) {
            var t, i;
            return (
              (a.INPEntryList = o("JSSelfProfilerUtils").mergeList(
                (t = a.INPEntryList) != null ? t : [],
                (i = e.get(n)) != null ? i : [],
              )),
              e.delete(n),
              u.delete(n),
              s.delete(n),
              a
            );
          }),
          (a.onProfilerAborts = async function (n) {
            (e.delete(n), u.delete(n), s.delete(n));
          }),
          (n.startINPObserver = function () {
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
          n
        );
      })(r("JSSPTraceBaseDataCollector"));
    (o("JSSPSetting").isCollectingINP && c.startINPObserver(), (l.default = c));
  },
  98,
);
