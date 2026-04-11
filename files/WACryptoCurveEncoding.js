__d(
  "WACryptoCurveEncoding",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      for (var t = BigInt(0), n = 0; n < e.length; n++)
        t |= BigInt(e[n]) << (BigInt(8) * BigInt(n));
      return t;
    }
    function s(e) {
      for (var t = new Uint8Array(32), n = e, r = 0; r < 32; r++)
        ((t[r] = Number(n & BigInt(255))), (n >>= BigInt(8)));
      return t;
    }
    function u(e) {
      if (e.length % 2) throw r("err")("hexToU8: odd string length");
      for (var t = new Uint8Array(e.length / 2), n = 0; n < t.length; n++)
        t[n] = parseInt(e.slice(2 * n, 2 * n + 2), 16);
      return t;
    }
    ((l.bytesToBigIntLE = e), (l.bigIntTo32LE = s), (l.hexToU8 = u));
  },
  98,
);
