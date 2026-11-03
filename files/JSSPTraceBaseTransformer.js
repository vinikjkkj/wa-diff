__d(
  "JSSPTraceBaseTransformer",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.transform = async function (t, n, o) {
          return (
            r("FBLogger")("JSSelfProfiler").warn(
              "JSSP base transformer should be overridden.",
            ),
            t
          );
        }),
        (t.onProfilerAborts = async function (t) {}),
        e
      );
    })();
    l.default = e;
  },
  98,
);
