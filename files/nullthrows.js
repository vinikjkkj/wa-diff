__d(
  "nullthrows",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      if ((t === void 0 && (t = "Got unexpected null or undefined"), e != null))
        return e;
      var n = new Error(t);
      throw ((n.framesToPop = 1), n.stack, n);
    }
    i.default = e;
  },
  66,
);
