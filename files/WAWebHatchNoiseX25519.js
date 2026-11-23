__d(
  "WAWebHatchNoiseX25519",
  [
    "WACryptoCurve25519Dependencies",
    "WASignalKeys",
    "WASignalOther",
    "WAWebHatchNoiseBytes",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 32,
      s = Object.freeze([
        "0000000000000000000000000000000000000000000000000000000000000000",
        "0100000000000000000000000000000000000000000000000000000000000000",
        "e0eb7a7c3b41b8ae1656e3faf19fc46ada098deb9c32b1fd866205165f49b800",
        "5f9c95bca3508c24b1d0b1559c83ef5b04445cc4581c8e86d8224eddd09f1157",
        "ecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f",
        "edffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f",
        "eeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f",
      ]);
    function u(t, n) {
      if (t.length !== e)
        throw r("err")("WAWebHatchNoiseX25519: invalid " + n + " length");
    }
    function c(t) {
      var n = t.privateKey,
        a = t.publicKey;
      if (n.length !== e || a.length !== e)
        throw (
          o("WAWebHatchNoiseBytes").zeroBytes(n),
          o("WAWebHatchNoiseBytes").zeroBytes(a),
          r("err")(
            "WAWebHatchNoiseX25519: primitive returned an invalid key pair",
          )
        );
      return { privateKeyBytes: n, publicKeyBytes: a };
    }
    function d() {
      return Promise.resolve().then(function () {
        return c(o("WASignalKeys").makeKeyPair());
      });
    }
    function m(t) {
      return Promise.resolve().then(function () {
        u(t, "private key");
        var n = t.slice(),
          r = o("WASignalOther").ensureSize(n, e);
        try {
          var a = c(o("WASignalKeys").makeKeyPairFrom(r));
          return (
            r !== a.privateKeyBytes && o("WAWebHatchNoiseBytes").zeroBytes(r),
            n !== a.privateKeyBytes && o("WAWebHatchNoiseBytes").zeroBytes(n),
            a
          );
        } catch (e) {
          throw (
            o("WAWebHatchNoiseBytes").zeroBytes(r),
            r !== n && o("WAWebHatchNoiseBytes").zeroBytes(n),
            e
          );
        }
      });
    }
    async function p(t, n) {
      (u(t, "private key"), u(n, "public key"));
      var a = 0;
      for (var i of s) {
        var l = o("WAWebHatchNoiseBytes").hexToBytes(i);
        ((a += o("WAWebHatchNoiseBytes").constantTimeEqual(n, l) ? 1 : 0),
          o("WAWebHatchNoiseBytes").zeroBytes(l));
      }
      if (a !== 0)
        throw r("err")("WAWebHatchNoiseX25519: rejected low-order public key");
      var c = t.slice(),
        d = n.slice(),
        m;
      try {
        m = new Uint8Array(
          await o("WACryptoCurve25519Dependencies").calculateAgreement(d, c),
        );
      } finally {
        (o("WAWebHatchNoiseBytes").zeroBytes(c),
          o("WAWebHatchNoiseBytes").zeroBytes(d));
      }
      if (m.length !== e)
        throw (
          o("WAWebHatchNoiseBytes").zeroBytes(m),
          r("err")(
            "WAWebHatchNoiseX25519: primitive returned an invalid shared secret",
          )
        );
      var p = new Uint8Array(e),
        _ = o("WAWebHatchNoiseBytes").constantTimeEqual(m, p);
      if (_)
        throw (
          o("WAWebHatchNoiseBytes").zeroBytes(m),
          r("err")("WAWebHatchNoiseX25519: rejected all-zero shared secret")
        );
      return m;
    }
    function _(e) {
      (o("WAWebHatchNoiseBytes").zeroBytes(e.privateKeyBytes),
        o("WAWebHatchNoiseBytes").zeroBytes(e.publicKeyBytes));
    }
    ((l.generateKeyPair = d),
      (l.keyPairFromPrivateBytes = m),
      (l.dh = p),
      (l.destroyKeyPair = _));
  },
  98,
);
