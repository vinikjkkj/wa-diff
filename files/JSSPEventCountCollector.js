__d(
  "JSSPEventCountCollector",
  ["JSSPTraceBaseDataCollector", "asyncToGeneratorRuntime", "performance"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set(["click", "input"]),
      u = new Map(),
      c = (function (t) {
        function o() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(o, t);
        var a = o.prototype;
        return (
          (a.onProfilerStarts = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = 0;
                for (var o of s) {
                  var a, i;
                  n +=
                    (a =
                      (i = (e || (e = r("performance"))).eventCounts) == null
                        ? void 0
                        : i.get(o)) != null
                      ? a
                      : 0;
                }
                u.set(t, n);
              },
            );
            function o(e) {
              return t.apply(this, arguments);
            }
            return o;
          })()),
          (a.onProfilerEnds = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var r,
                  o = (r = u.get(e)) != null ? r : null;
                return (u.delete(e), (n.totalEventCount = o), n);
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.onProfilerAborts = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                u.delete(e);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          o
        );
      })(r("JSSPTraceBaseDataCollector"));
    l.default = c;
  },
  98,
);
