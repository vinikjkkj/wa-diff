__d(
  "shield",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      for (
        var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
        o < n;
        o++
      )
        r[o - 2] = arguments[o];
      if (typeof e != "function") {
        var a = new TypeError(
          "shield expects a function as the first argument",
        );
        throw (a.stack, a);
      }
      return function () {
        return e.apply(t, r);
      };
    }
    i.default = e;
  },
  66,
);
