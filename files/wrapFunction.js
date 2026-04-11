__d(
  "wrapFunction",
  [],
  function (t, n, r, o, a, i) {
    var e = {};
    function l(t, n, r) {
      var o = n in e ? e[n](t, r) : t;
      return function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return o.apply(this, t);
      };
    }
    ((l.setWrapper = function (t, n) {
      e[n] = t;
    }),
      (i.default = l));
  },
  66,
);
