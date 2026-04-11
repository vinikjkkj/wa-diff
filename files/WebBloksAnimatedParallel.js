__d(
  "WebBloksAnimatedParallel",
  ["WebBloksAnimationsParallelSet"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      var a = new (o(
        "WebBloksAnimationsParallelSet",
      ).WebBloksAnimationsParallelSet)({ animations: r, startDelay: n * 1e3 });
      return (
        t &&
          a.addOnCompleteListener(function (n) {
            return t == null ? void 0 : t(e, a, n, e.bloksContext);
          }),
        a
      );
    }
    l.default = e;
  },
  98,
);
