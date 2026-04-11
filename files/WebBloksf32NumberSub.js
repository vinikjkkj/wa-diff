__d(
  "WebBloksf32NumberSub",
  ["WebBloksNumberUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = o("WebBloksNumberUtils").getConversionFactor(t, n);
      return Math.round(t * r - n * r) / r;
    }
    l.default = e;
  },
  98,
);
