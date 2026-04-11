__d(
  "minBy",
  [],
  function (t, n, r, o, a, i) {
    var e = function (t, n) {
      return t - n;
    };
    function l(t, n, r) {
      var o = r || e,
        a = void 0,
        i = null;
      for (var l of t) {
        var s = n(l);
        (i === null || o(s, i) < 0) && ((a = l), (i = s));
      }
      return a;
    }
    i.default = l;
  },
  66,
);
