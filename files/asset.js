__d(
  "asset",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      throw new Error("asset(" + t.join(",") + "): Unexpected asset reference");
    }
    a.exports = e;
  },
  null,
);
