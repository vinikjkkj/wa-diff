__d(
  "WebBloksMinsInt64Shr",
  ["WebBloksMinsUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = o("WebBloksMinsUtils").toBigIntOperand(t, e, "INT64_SHR"),
        a =
          o("WebBloksMinsUtils").toBigIntOperand(n, e, "INT64_SHR") &
          BigInt(63);
      return BigInt.asUintN(64, r) >> a;
    }
    l.default = e;
  },
  98,
);
