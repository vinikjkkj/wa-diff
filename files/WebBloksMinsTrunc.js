__d(
  "WebBloksMinsTrunc",
  ["WebBloksErrors"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (typeof e == "number") return e;
      throw new (o("WebBloksErrors").WebBloksScriptError)(
        "TRUNC operand must be numeric",
        t,
      );
    }
    function s(t, n) {
      var r = e(n, t);
      return r > 0 ? Math.floor(r) : Math.ceil(r);
    }
    l.default = s;
  },
  98,
);
