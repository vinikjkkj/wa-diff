__d(
  "oz-player/networks/withRetries",
  ["oz-player/shims/ozSetTimeoutAcrossTransitions"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return new Promise(function (o, a) {
        async function i(l) {
          try {
            o(await e());
          } catch (e) {
            if (l > 0) {
              var s = typeof n == "function" ? n(t - l) : n;
              r("oz-player/shims/ozSetTimeoutAcrossTransitions")(function () {
                i(l - 1);
              }, s);
            } else a(e);
          }
        }
        i(t);
      });
    }
    l.default = e;
  },
  98,
);
