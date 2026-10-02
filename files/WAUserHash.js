__d(
  "WAUserHash",
  ["WACryptoSha256BuilderV2", "WAMemoizeCache"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e5,
      s = 5,
      u = "maw-decrypt-v1:";
    function c(t) {
      var n = new (o("WACryptoSha256BuilderV2").Sha256BuilderV2)();
      n.update(new TextEncoder().encode("" + u + t));
      var r = n.finish(),
        a = new DataView(r.buffer, r.byteOffset, r.byteLength).getUint32(0);
      return String(a % e).padStart(s, "0");
    }
    var d = o("WAMemoizeCache").memoizeWithArgs(c, function (e) {
      return e;
    });
    l.getUserHash = d;
  },
  98,
);
