__d(
  "WebBloksMatch",
  ["WebBloksEqual"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      for (var a of n)
        if (o("WebBloksEqual").isEqual(a.case, t)) return a.expression(e);
      return r(e);
    }
    l.default = e;
  },
  98,
);
