__d(
  "WAWebHatchNoiseX25519",
  [
    "Promise",
    "WACryptoCurve25519Dependencies",
    "WASignalKeys",
    "WASignalOther",
    "WAWebHatchNoiseBytes",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 32,
      u = Object.freeze([
        "0000000000000000000000000000000000000000000000000000000000000000",
        "0100000000000000000000000000000000000000000000000000000000000000",
        "e0eb7a7c3b41b8ae1656e3faf19fc46ada098deb9c32b1fd866205165f49b800",
        "5f9c95bca3508c24b1d0b1559c83ef5b04445cc4581c8e86d8224eddd09f1157",
        "ecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f",
        "edffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f",
        "eeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f",
      ]);
    function c(e, t) {
      if (e.length !== s)
        throw r("err")("WAWebHatchNoiseX25519: invalid " + t + " length");
    }
    function d(e) {
      var t = e.privateKey,
        n = e.publicKey;
      if (t.length !== s || n.length !== s)
        throw (
          o("WAWebHatchNoiseBytes").zeroBytes(t),
          o("WAWebHatchNoiseBytes").zeroBytes(n),
          r("err")(
            "WAWebHatchNoiseX25519: primitive returned an invalid key pair",
          )
        );
      return { privateKeyBytes: t, publicKeyBytes: n };
    }
    function m() {
      return (e || (e = n("Promise"))).resolve().then(function () {
        return d(o("WASignalKeys").makeKeyPair());
      });
    }
    function p(t) {
      return (e || (e = n("Promise"))).resolve().then(function () {
        c(t, "private key");
        var e = t.slice(),
          n = o("WASignalOther").ensureSize(e, s);
        try {
          var r = d(o("WASignalKeys").makeKeyPairFrom(n));
          return (
            n !== r.privateKeyBytes && o("WAWebHatchNoiseBytes").zeroBytes(n),
            e !== r.privateKeyBytes && o("WAWebHatchNoiseBytes").zeroBytes(e),
            r
          );
        } catch (t) {
          throw (
            o("WAWebHatchNoiseBytes").zeroBytes(n),
            n !== e && o("WAWebHatchNoiseBytes").zeroBytes(e),
            t
          );
        }
      });
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (c(e, "private key"), c(t, "public key"));
          var n = 0;
          for (var a of u) {
            var i = o("WAWebHatchNoiseBytes").hexToBytes(a);
            ((n += o("WAWebHatchNoiseBytes").constantTimeEqual(t, i) ? 1 : 0),
              o("WAWebHatchNoiseBytes").zeroBytes(i));
          }
          if (n !== 0)
            throw r("err")(
              "WAWebHatchNoiseX25519: rejected low-order public key",
            );
          var l = e.slice(),
            d = t.slice(),
            m;
          try {
            m = new Uint8Array(
              yield o("WACryptoCurve25519Dependencies").calculateAgreement(
                d,
                l,
              ),
            );
          } finally {
            (o("WAWebHatchNoiseBytes").zeroBytes(l),
              o("WAWebHatchNoiseBytes").zeroBytes(d));
          }
          if (m.length !== s)
            throw (
              o("WAWebHatchNoiseBytes").zeroBytes(m),
              r("err")(
                "WAWebHatchNoiseX25519: primitive returned an invalid shared secret",
              )
            );
          var p = new Uint8Array(s),
            _ = o("WAWebHatchNoiseBytes").constantTimeEqual(m, p);
          if (_)
            throw (
              o("WAWebHatchNoiseBytes").zeroBytes(m),
              r("err")("WAWebHatchNoiseX25519: rejected all-zero shared secret")
            );
          return m;
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      (o("WAWebHatchNoiseBytes").zeroBytes(e.privateKeyBytes),
        o("WAWebHatchNoiseBytes").zeroBytes(e.publicKeyBytes));
    }
    ((l.generateKeyPair = m),
      (l.keyPairFromPrivateBytes = p),
      (l.dh = _),
      (l.destroyKeyPair = g));
  },
  98,
);
