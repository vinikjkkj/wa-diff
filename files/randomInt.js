__d(
  "randomInt",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      var n = t === void 0 ? [0, e] : [e, t],
        r = n[0],
        o = n[1];
      return (
        o > r || s(0, 1180, o, r),
        Math.floor(r + Math.random() * (o - r))
      );
    }
    l.default = e;
  },
  98,
);
