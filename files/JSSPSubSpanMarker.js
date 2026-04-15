__d(
  "JSSPSubSpanMarker",
  [
    "JSSPTraceBaseTransformer",
    "JSSelfProfilerUtils",
    "asyncToGeneratorRuntime",
    "interaction-tracing-metrics",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set(["LONGTASK", "INP", "LONG_ANIMATION_FRAME"]),
      s = 5,
      u = 300,
      c = (function (t) {
        function a() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.getSubSpanList = function (n) {
            var t,
              r,
              a = (t = n.metadata) == null ? void 0 : t.interactionId;
            if (a == null) return null;
            var i =
              (r = o(
                "interaction-tracing-metrics",
              ).InteractionTracingMetricsCore.get(a)) == null
                ? void 0
                : r.subSpans;
            if (i == null) return null;
            var l = [];
            return (
              Object.entries(i).forEach(function (t) {
                var n = t[0],
                  r = t[1];
                (r != null ? r : []).forEach(function (t, r) {
                  var o = n;
                  (e.has(n) && (o = r < s ? n + "_" + r : n + "_{N}"),
                    l.push({ start: t.start, end: t.end, subSpanName: o }));
                });
              }),
              l.sort(function (e, t) {
                return e.start - t.start;
              }),
              l
            );
          }),
          (i.transform = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  n,
                  a = this,
                  i = this.getSubSpanList(e),
                  l = [],
                  s = new Map();
                if (i == null) return e;
                e.metadata =
                  (t = e.metadata) != null ? t : { subSpanNames: [] };
                var c = (n = e.metadata.subSpanNames) != null ? n : [],
                  d = c.length;
                function m(e) {
                  if (
                    (r("vulture")("MewU4cPqMKpS1VTLR8mmLJsfhuk="), s.has(e))
                  ) {
                    var t;
                    return (t = s.get(e)) != null ? t : -1;
                  }
                  return (s.set(e, d), l.push(e), d++);
                }
                for (
                  var p = function* (n) {
                      yield o("JSSelfProfilerUtils").nextEventLoop(function () {
                        return a.batchProcess(e, n, i, m);
                      });
                    },
                    _ = 0;
                  _ < e.samples.length;
                  _ += u
                )
                  yield* p(_);
                return (
                  e.metadata != null &&
                    (e.metadata.subSpanNames = [].concat(c, l)),
                  e
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.batchProcess = function (t, n, r, o) {
            for (
              var e = Math.min(n + u, t.samples.length),
                a = function () {
                  var e = t.samples[i];
                  r.forEach(function (t) {
                    if (t.start < e.timestamp && t.end > e.timestamp) {
                      var n;
                      ((e.subSpans = (n = e.subSpans) != null ? n : []),
                        e.subSpans.push(o(t.subSpanName)));
                    }
                  });
                },
                i = n;
              i < e;
              ++i
            )
              a();
          }),
          a
        );
      })(r("JSSPTraceBaseTransformer"));
    l.default = c;
  },
  98,
);
