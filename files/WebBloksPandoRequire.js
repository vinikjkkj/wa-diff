__d(
  "WebBloksPandoRequire",
  ["WebBloksErrors"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t == null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "Unexpected null node in pando.Require",
        );
      for (
        var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2;
        a < n;
        a++
      )
        r[a - 2] = arguments[a];
      return t.getFieldValue(r, !0);
    }
    l.default = e;
  },
  98,
);
