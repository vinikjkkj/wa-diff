__d(
  "JSSPMemoryCollector",
  ["JSSPTraceBaseDataCollector", "MemoryUtils", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map(),
      s = (function (t) {
        function r() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.onProfilerStarts = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, n) {
                (n === void 0 && (n = null),
                  e.set(t, {
                    start: o("MemoryUtils").getCurrentMemory({ runGC: !1 }),
                    end: null,
                  }));
              },
            );
            function r(e, n) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.onProfilerEnds = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, n, r) {
                var a = e.get(t);
                return (
                  a != null &&
                    ((a.end = o("MemoryUtils").getCurrentMemory({ runGC: !1 })),
                    (r.memoryData = a)),
                  e.delete(t),
                  r
                );
              },
            );
            function r(e, n, r) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.onProfilerAborts = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                e.delete(t);
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          r
        );
      })(r("JSSPTraceBaseDataCollector"));
    l.default = s;
  },
  98,
);
