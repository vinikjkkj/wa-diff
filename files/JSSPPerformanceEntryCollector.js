__d(
  "JSSPPerformanceEntryCollector",
  ["JSSPTraceBaseDataCollector", "JSSelfProfilerProbe", "JSSelfProfilerUtils"],
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
      var n = t.prototype;
      return (
        (n.onProfilerStarts = async function (t) {
          s.set(t, []);
        }),
        (n.onProfilerEnds = async function (t, n, r) {
          var e, a;
          return (
            (r.performanceEntryList = o("JSSelfProfilerUtils").mergeList(
              (e = r.performanceEntryList) != null ? e : [],
              (a = s.get(t)) != null ? a : [],
            )),
            s.delete(t),
            r
          );
        }),
        (n.onProfilerAborts = async function (t) {
          s.delete(t);
        }),
        t
      );
    })(r("JSSPTraceBaseDataCollector"));
    l.default = c;
  },
  98,
);
