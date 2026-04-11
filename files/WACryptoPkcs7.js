__d(
  "WACryptoPkcs7",
  ["WACryptoDependencies", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = new Uint8Array(1);
      do o("WACryptoDependencies").getCrypto().getRandomValues(t);
      while (t[0] === 0);
      u(e, t[0]);
    }
    function s(e) {
      var t = new Uint8Array(1);
      (o("WACryptoDependencies").getCrypto().getRandomValues(t),
        u(e, (t[0] & 15) + 1));
    }
    function u(e, t) {
      for (var n = 0; n < t; n++) e.writeUint8(t);
    }
    function c(e) {
      if (e.length === 0) throw r("err")("unpadPkcs7 given empty bytes");
      var t = e[e.length - 1];
      if (t > e.length)
        throw r("err")(
          "unpadPkcs7 given " + e.length + " bytes, but pad is " + t,
        );
      return new Uint8Array(e.buffer, e.byteOffset, e.length - t);
    }
    ((l.writeRandomPad = e), (l.writeRandomPadMax16 = s), (l.unpadPkcs7 = c));
  },
  98,
);
