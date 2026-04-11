__d(
  "WebBloksArrayReduce",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t, n, r) {
      return t == null
        ? r
        : t.reduce(function (t, r, o) {
            return n(e, t, r, o);
          }, r);
    }
    i.default = e;
  },
  66,
);
