__d(
  "JSSPLongAnimationFrameCollector",
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
                  (r.LoAFEntryList = o("JSSelfProfilerUtils").mergeList(
                    (a = r.LoAFEntryList) != null ? a : [],
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
          (a.startLoAFObserver = function () {
            (r("one-trace").subscribe("trace-end", function (t) {
              if (t.traceType === "LONG_ANIMATION_FRAME") {
                var n, r, o, a, i, l, s, u, c, d, m, p, _, f;
                if (t.endTime == null) return;
                var g = t.annotations,
                  h = t.markerPoints,
                  y = {
                    startTime: t.startTime,
                    endTime: t.endTime,
                    blockingDuration:
                      (n = (r = g.int) == null ? void 0 : r.blockingDuration) !=
                      null
                        ? n
                        : 0,
                    firstUIEventTimestamp:
                      (o =
                        (a = h.firstUIEventTimestamp) == null
                          ? void 0
                          : a.timeSinceStart) != null
                        ? o
                        : 0,
                    renderStart:
                      (i =
                        (l = h.renderStart) == null
                          ? void 0
                          : l.timeSinceStart) != null
                        ? i
                        : 0,
                    styleAndLayoutStart:
                      (s =
                        (u = h.styleAndLayoutStart) == null
                          ? void 0
                          : u.timeSinceStart) != null
                        ? s
                        : 0,
                    LoAFTotalScriptExecutionDuration:
                      (c = (d = g.int) == null ? void 0 : d.startToRender) !=
                      null
                        ? c
                        : 0,
                    LoAFTotalRenderToStyleAndLayoutDuration:
                      (m =
                        (p = g.int) == null
                          ? void 0
                          : p.renderToStyleAndLayout) != null
                        ? m
                        : 0,
                    LoAFTotalStyleAndLayoutToPaintDuration:
                      (_ =
                        (f = g.int) == null
                          ? void 0
                          : f.styleAndLayoutToPaint) != null
                        ? _
                        : 0,
                  };
                e.forEach(function (e) {
                  e.push(y);
                });
              }
            }),
              r("one-trace").subscribe(
                "trace-end-before-logging",
                function (t) {
                  if (t.traceType === "LONG_ANIMATION_FRAME") {
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
    (o("JSSPSetting").isCollectingLoAF && c.startLoAFObserver(),
      (l.default = c));
  },
  98,
);
