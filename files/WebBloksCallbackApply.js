__d(
  "WebBloksCallbackApply",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      if (t == null) return null;
      for (
        var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
        o < n;
        o++
      )
        r[o - 2] = arguments[o];
      return t.invoke.apply(t, [e].concat(r));
    }
    i.default = e;
  },
  66,
);
