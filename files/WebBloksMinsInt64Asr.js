__d(
  "WebBloksMinsInt64Asr",
  ["WebBloksMinsUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = o("WebBloksMinsUtils").toBigIntOperand(t, e, "INT64_ASR"),
        a =
          o("WebBloksMinsUtils").toBigIntOperand(n, e, "INT64_ASR") &
          BigInt(63);
      return r >> a;
    }
    l.default = e;
  },
  98,
);
