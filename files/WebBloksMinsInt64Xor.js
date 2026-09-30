__d(
  "WebBloksMinsInt64Xor",
  ["WebBloksMinsUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return (
        o("WebBloksMinsUtils").toBigIntOperand(t, e, "INT64_XOR") ^
        o("WebBloksMinsUtils").toBigIntOperand(n, e, "INT64_XOR")
      );
    }
    l.default = e;
  },
  98,
);
