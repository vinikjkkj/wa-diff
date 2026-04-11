__d(
  "mixin",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      for (
        var e = function () {},
          t = 0,
          n,
          r = arguments.length,
          o = new Array(r),
          a = 0;
        a < r;
        a++
      )
        o[a] = arguments[a];
      for (; o[t]; ) {
        n = o[t];
        for (var i in n)
          Object.prototype.hasOwnProperty.call(n, i) && (e.prototype[i] = n[i]);
        t += 1;
      }
      return e;
    }
    i.default = e;
  },
  66,
);
