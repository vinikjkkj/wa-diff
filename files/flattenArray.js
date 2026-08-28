__d(
  "flattenArray",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = [];
      return (l(e, t), t);
    }
    function l(e, t) {
      for (var n = e.length, r = 0; n--; ) {
        var o = e[r++];
        Array.isArray(o) ? l(o, t) : t.push(o);
      }
    }
    i.default = e;
  },
  66,
);
