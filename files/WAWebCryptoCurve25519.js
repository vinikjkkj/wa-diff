__d(
  "WAWebCryptoCurve25519",
  ["Promise", "WAWeb-curve25519-donna", "asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      s || (s = n("WAWeb-curve25519-donna"));
    }
    var c = new Uint8Array(32);
    c[0] = 9;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          return (
            e === void 0
              ? ((t = new Uint8Array(32)), self.crypto.getRandomValues(t))
              : (t = new Uint8Array(e)),
            (t[0] &= 248),
            (t[31] &= 127),
            (t[31] |= 64),
            R({ pubKey: 32, privKey: t, basepoint: c }, function (e) {
              var n = s._curve25519_donna(e.pubKey, e.privKey, e.basepoint);
              if (n) throw r("err")("Curve25519:keyPair Error Code " + n);
              return { pubKey: S(e.pubKey, 32), privKey: t.buffer };
            })
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(t, o) {
      return (e || (e = n("Promise"))).resolve().then(function () {
        return R({ sharedKey: 32, pubKey: t, privKey: o }, function (e) {
          var t = s._curve25519_donna(e.sharedKey, e.privKey, e.pubKey);
          if (t) throw r("err")("Curve25519:sharedSecret Error Code " + t);
          return S(e.sharedKey, 32);
        });
      });
    }
    var _ = 5;
    function f(e) {
      return e.pubKey.byteLength === 33 && e.privKey.byteLength === 32;
    }
    function g(e) {
      if (f(e)) return e;
      if (e.pubKey.byteLength !== 32 || e.privKey.byteLength !== 32)
        throw r("err")("Invalid key pair type");
      var t = h(e.pubKey),
        n = new Uint8Array(32);
      return (
        n.set(new Uint8Array(e.privKey)),
        { pubKey: t, privKey: n.buffer }
      );
    }
    function h(e) {
      if (e.byteLength !== 32) throw r("err")("Invalid key type");
      var t = new Uint8Array(33);
      return ((t[0] = _), t.set(new Uint8Array(e), 1), t.buffer);
    }
    function y(e) {
      return e.privKey.byteLength === 32 && e.pubKey.byteLength === 32;
    }
    function C(e) {
      if (y(e)) return e;
      if (e.pubKey.byteLength !== 33 || e.privKey.byteLength !== 32)
        throw r("err")("Invalid key pair type");
      var t = new Uint8Array(32),
        n = new Uint8Array(32);
      return (
        t.set(new Uint8Array(e.pubKey).subarray(1)),
        n.set(new Uint8Array(e.privKey)),
        { pubKey: t.buffer, privKey: n.buffer }
      );
    }
    function b(e) {
      if (e.byteLength !== 33) throw r("err")("Invalid key type");
      var t = new Uint8Array(32);
      return (t.set(new Uint8Array(e).subarray(1)), t.buffer);
    }
    function v(e) {
      if (typeof e == "number") return s._malloc(e);
      var t = new Uint8Array(e.buffer || e),
        n = s._malloc(t.length);
      return (s.HEAPU8.set(t, n), n);
    }
    function S(e, t) {
      var n = new Uint8Array(t);
      return (n.set(s.HEAPU8.subarray(e, e + t)), n.buffer);
    }
    function R(e, t) {
      u();
      var n = {};
      try {
        for (var r in e) n[r] = v(e[r]);
        return t(n);
      } finally {
        for (var o in n) s._free(n[o]);
      }
    }
    ((l.keyPair = d),
      (l.sharedSecret = p),
      (l.toSignalCurveKeyPair = g),
      (l.toSignalCurvePubKey = h),
      (l.toCurveKeyPair = C),
      (l.toCurveKeyPubKey = b));
  },
  98,
);
