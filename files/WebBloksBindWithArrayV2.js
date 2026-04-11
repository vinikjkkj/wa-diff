__d(
  "WebBloksBindWithArrayV2",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t, n) {
      return function (e) {
        for (
          var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1;
          a < r;
          a++
        )
          o[a - 1] = arguments[a];
        return t.apply(void 0, [e].concat(n, o));
      };
    }
    i.default = e;
  },
  66,
);
