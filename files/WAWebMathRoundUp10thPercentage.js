__d(
  "WAWebMathRoundUp10thPercentage",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      if (e === 0 || t === 0) return 0;
      var n = (e / t) * 100;
      return n % 10 === 0 ? n : (parseInt(n / 10, 10) + 1) * 10;
    }
    i.roundUp10thPercentage = e;
  },
  66,
);
