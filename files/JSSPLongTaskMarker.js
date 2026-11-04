__d(
  "JSSPLongTaskMarker",
  [
    "JSSPTraceBaseTransformer",
    "JSSelfProfilerUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var r = t.prototype;
      return (
        (r.transform = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              var r = n.performanceEntryList;
              if (r == null) return e;
              var a = e;
              return (
                e.samples.forEach(function (e) {
                  r.forEach(function (t) {
                    if (t.entryType === "longtask") {
                      var n = t.startTime,
                        r = t.startTime + t.duration;
                      e.timestamp >= n &&
                        e.timestamp <= r &&
                        (o("JSSelfProfilerUtils").addMarkerToSample(
                          e,
                          "longtask",
                        ),
                        (e.longtaskDuration = t.duration));
                    }
                  });
                }),
                a
              );
            },
          );
          function t(t, n, r) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        t
      );
    })(r("JSSPTraceBaseTransformer"));
    l.default = e;
  },
  98,
);
