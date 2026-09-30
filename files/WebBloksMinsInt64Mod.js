__d(
  "WebBloksMinsInt64Mod",
  ["WebBloksErrors", "WebBloksMinsUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = o("WebBloksMinsUtils").toBigIntOperand(t, e, "INT64_MOD"),
        a = o("WebBloksMinsUtils").toBigIntOperand(n, e, "INT64_MOD");
      if (a === BigInt(0))
        throw new (o("WebBloksErrors").WebBloksScriptError)(
          "Division by zero",
          e,
        );
      return r % a;
    }
    l.default = e;
  },
  98,
);
