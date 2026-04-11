__d(
  "WebBloksApply",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      for (
        var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
        o < n;
        o++
      )
        r[o - 2] = arguments[o];
      return t.apply(void 0, [e].concat(r));
    }
    i.default = e;
  },
  66,
);
