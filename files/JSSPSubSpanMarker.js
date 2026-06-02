__d(
  "JSSPSubSpanMarker",
  [
    "JSSPTraceBaseTransformer",
    "JSSelfProfilerUtils",
    "interaction-tracing-metrics",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set(["LONGTASK", "INP", "LONG_ANIMATION_FRAME"]),
      s = 5,
      u = 300,
      c = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.getSubSpanList = function (n) {
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
          (r.transform = async function (t) {
            var e,
              n,
              r = this,
              a = this.getSubSpanList(t),
              i = [],
              l = new Map();
            if (a == null) return t;
            t.metadata = (e = t.metadata) != null ? e : { subSpanNames: [] };
            var s = (n = t.metadata.subSpanNames) != null ? n : [],
              c = s.length;
            function d(e) {
              if (l.has(e)) {
                var t;
                return (t = l.get(e)) != null ? t : -1;
              }
              return (l.set(e, c), i.push(e), c++);
            }
            for (
              var m = async function (n) {
                  await o("JSSelfProfilerUtils").nextEventLoop(function () {
                    return r.batchProcess(t, n, a, d);
                  });
                },
                p = 0;
              p < t.samples.length;
              p += u
            )
              await m(p);
            return (
              t.metadata != null && (t.metadata.subSpanNames = [].concat(s, i)),
              t
            );
          }),
          (r.batchProcess = function (t, n, r, o) {
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
          n
        );
      })(r("JSSPTraceBaseTransformer"));
    l.default = c;
  },
  98,
);
