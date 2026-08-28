__d(
  "randomShuffle",
  ["randomInt"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      if (
        (t === void 0 && (t = 0), n === void 0 && (n = 0), t > e.length - 1 - n)
      )
        return e;
      for (var o = e.length - 1 - n; o > t; o--) {
        var a = r("randomInt")(o + 1);
        if (a !== o) {
          var i = e[a];
          ((e[a] = e[o]), (e[o] = i));
        }
      }
      return e;
    }
    l.default = e;
  },
  98,
);
