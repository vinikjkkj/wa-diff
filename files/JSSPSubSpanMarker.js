__d(
  "JSSPSubSpanMarker",
  [
    "JSSPTraceBaseTransformer",
    "JSSelfProfilerUtils",
    "asyncToGeneratorRuntime",
    "interaction-tracing-metrics",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set(["LONGTASK", "INP", "LONG_ANIMATION_FRAME"]),
      s = 5,
      u = 300,
      c = (function (t) {
        function r() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.getSubSpanList = function (n) {
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
          (a.transform = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  n,
                  r = this,
                  a = this.getSubSpanList(e),
                  i = [],
                  l = new Map();
                if (a == null) return e;
                e.metadata =
                  (t = e.metadata) != null ? t : { subSpanNames: [] };
                var s = (n = e.metadata.subSpanNames) != null ? n : [],
                  c = s.length;
                function d(e) {
                  if (l.has(e)) {
                    var t;
                    return (t = l.get(e)) != null ? t : -1;
                  }
                  return (l.set(e, c), i.push(e), c++);
                }
                for (
                  var m = function* (n) {
                      yield o("JSSelfProfilerUtils").nextEventLoop(function () {
                        return r.batchProcess(e, n, a, d);
                      });
                    },
                    p = 0;
                  p < e.samples.length;
                  p += u
                )
                  yield* m(p);
                return (
                  e.metadata != null &&
                    (e.metadata.subSpanNames = [].concat(s, i)),
                  e
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.batchProcess = function (t, n, r, o) {
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
          r
        );
      })(r("JSSPTraceBaseTransformer"));
    l.default = c;
  },
  98,
);
