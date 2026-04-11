__d(
  "requestAnimationFramePolyfill",
  ["ExecutionEnvironment", "nativeRequestAnimationFrame", "performanceNow"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 0,
      c = r("nativeRequestAnimationFrame");
    if ((e || (e = r("ExecutionEnvironment"))).isInWorker && c != null)
      try {
        c(function () {});
      } catch (e) {
        c = null;
      }
    var d =
        c ||
        function (e) {
          var n = (s || (s = r("performanceNow")))(),
            o = Math.max(0, 16 - (n - u));
          return (
            (u = n + o),
            t.setTimeout(function () {
              e((s || (s = r("performanceNow")))());
            }, o)
          );
        },
      m = d;
    l.default = m;
  },
  98,
);
