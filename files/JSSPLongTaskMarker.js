__d(
  "JSSPLongTaskMarker",
  ["JSSPTraceBaseTransformer", "JSSelfProfilerUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.transform = async function (t, n, r) {
          var e = r.performanceEntryList;
          if (e == null) return t;
          var a = t;
          return (
            t.samples.forEach(function (t) {
              e.forEach(function (e) {
                if (e.entryType === "longtask") {
                  var n = e.startTime,
                    r = e.startTime + e.duration;
                  t.timestamp >= n &&
                    t.timestamp <= r &&
                    (o("JSSelfProfilerUtils").addMarkerToSample(t, "longtask"),
                    (t.longtaskDuration = e.duration));
                }
              });
            }),
            a
          );
        }),
        t
      );
    })(r("JSSPTraceBaseTransformer"));
    l.default = e;
  },
  98,
);
