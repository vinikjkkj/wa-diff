__d(
  "JSSPEventCountCollector",
  ["JSSPTraceBaseDataCollector", "performance"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set(["click", "input"]),
      u = new Map(),
      c = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.onProfilerStarts = async function (n) {
            var t = 0;
            for (var o of s) {
              var a, i;
              t +=
                (a =
                  (i = (e || (e = r("performance"))).eventCounts) == null
                    ? void 0
                    : i.get(o)) != null
                  ? a
                  : 0;
            }
            u.set(n, t);
          }),
          (o.onProfilerEnds = async function (t, n, r) {
            var e,
              o = (e = u.get(t)) != null ? e : null;
            return (u.delete(t), (r.totalEventCount = o), r);
          }),
          (o.onProfilerAborts = async function (t) {
            u.delete(t);
          }),
          n
        );
      })(r("JSSPTraceBaseDataCollector"));
    l.default = c;
  },
  98,
);
