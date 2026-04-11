__d(
  "WAWebAdjustDelimitedRange",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      return function (t, n) {
        var r = 2 * e.length + t[1].length,
          o = t[0].length - r;
        return (
          o > 0 && ((t.index += o), (t[0] = t[0].slice(o))),
          n.lastIndex--,
          t
        );
      };
    }
    i.default = e;
  },
  66,
);
