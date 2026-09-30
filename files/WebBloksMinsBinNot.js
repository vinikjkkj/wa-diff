__d(
  "WebBloksMinsBinNot",
  ["WebBloksErrors"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (typeof t != "number")
        throw new (o("WebBloksErrors").WebBloksScriptError)(
          "BIN_NOT operand must be numeric",
          e,
        );
      return ~(t | 0);
    }
    l.default = e;
  },
  98,
);
