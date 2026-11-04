__d(
  "JSSPPerformanceEntryCollector",
  [
    "JSSPTraceBaseDataCollector",
    "JSSelfProfilerProbe",
    "JSSelfProfilerUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null,
      s = new Map();
    function u() {
      e != null ||
        !r("JSSelfProfilerProbe").isLongtaskAvailable ||
        ((e = new window.PerformanceObserver(function (e) {
          e.getEntries().forEach(function (e) {
            s.forEach(function (t) {
              return t.push(e);
            });
          });
        })),
        e.observe({ buffered: !0, entryTypes: ["longtask"] }));
    }
    u();
    var c = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var r = t.prototype;
      return (
        (r.onProfilerStarts = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            s.set(e, []);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (r.onProfilerEnds = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              var r, a;
              return (
                (n.performanceEntryList = o("JSSelfProfilerUtils").mergeList(
                  (r = n.performanceEntryList) != null ? r : [],
                  (a = s.get(e)) != null ? a : [],
                )),
                s.delete(e),
                n
              );
            },
          );
          function t(t, n, r) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (r.onProfilerAborts = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            s.delete(e);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        t
      );
    })(r("JSSPTraceBaseDataCollector"));
    l.default = c;
  },
  98,
);
