__d(
  "WebBloksMathMax",
  ["WebBloksErrors"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      if (n.length === 0)
        throw new (o("WebBloksErrors").WebBloksScriptError)(
          "bk.action.math.Max expects at least one operand",
          e,
        );
      return Math.max.apply(
        Math,
        n.map(function (e) {
          return Number(e);
        }),
      );
    }
    l.default = e;
  },
  98,
);
