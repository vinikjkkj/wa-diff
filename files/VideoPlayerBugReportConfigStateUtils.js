__d(
  "VideoPlayerBugReportConfigStateUtils",
  ["ifRequired"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e;
      return (e = r("ifRequired")(
        "VideoPlayerContextSensitiveConfigResolver",
        function (e) {
          var t = new e(),
            n = e.getPayload(),
            r = e.getSources(),
            o = {};
          return (
            r != null &&
              (o = Object.keys(r.sources_by_parameter).reduce(function (e, n) {
                var o = r.sources_by_parameter[n];
                return (
                  o.type === "QUICK_EXPERIMENT" &&
                    o.name != null &&
                    (e[n] = { experiment: o.name, value: t.getValue(n) }),
                  e
                );
              }, {})),
            { config: n, parameters_from_experiments: o }
          );
        },
      )) != null
        ? e
        : null;
    }
    l.getStateSnapshot = e;
  },
  98,
);
