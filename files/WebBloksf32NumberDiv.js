__d(
  "WebBloksf32NumberDiv",
  ["WebBloksNumberUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = o("WebBloksNumberUtils").getConversionFactor(t, n);
      return Math.round(r * t) / Math.round(r * n);
    }
    l.default = e;
  },
  98,
);
