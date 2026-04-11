__d(
  "camelize",
  [],
  function (t, n, r, o, a, i) {
    var e = /-(.)/g;
    function l(t) {
      return t.replace(e, function (e, t) {
        return t.toUpperCase();
      });
    }
    i.default = l;
  },
  66,
);
