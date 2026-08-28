__d(
  "WebBloksSolveRsaTimelockV2",
  ["WebBloksRsaTimelockSolver"],
  function (t, n, r, o, a, i, l) {
    var e = 5e6,
      s = 6e4;
    function u(t, n, o, a, i) {
      return r("WebBloksRsaTimelockSolver")(n, o, a, i, e, s, function () {
        return window.performance.now();
      });
    }
    l.default = u;
  },
  98,
);
