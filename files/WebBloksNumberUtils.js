__d(
  "WebBloksNumberUtils",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      var r = (("" + t[0]).split(".")[1] || "").length,
        o = t.reduce(function (e, t) {
          var n = (("" + t).split(".")[1] || "").length;
          return Math.max(e, n);
        }, r);
      return Math.pow(10, o);
    }
    i.getConversionFactor = e;
  },
  66,
);
