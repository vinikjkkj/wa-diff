__d(
  "JSSPMemoryCollector",
  ["JSSPTraceBaseDataCollector", "MemoryUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map(),
      s = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.onProfilerStarts = async function (n, r) {
            (r === void 0 && (r = null),
              e.set(n, {
                start: o("MemoryUtils").getCurrentMemory({ runGC: !1 }),
                end: null,
              }));
          }),
          (r.onProfilerEnds = async function (n, r, a) {
            var t = e.get(n);
            return (
              t != null &&
                ((t.end = o("MemoryUtils").getCurrentMemory({ runGC: !1 })),
                (a.memoryData = t)),
              e.delete(n),
              a
            );
          }),
          (r.onProfilerAborts = async function (n) {
            e.delete(n);
          }),
          n
        );
      })(r("JSSPTraceBaseDataCollector"));
    l.default = s;
  },
  98,
);
