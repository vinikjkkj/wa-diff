__d(
  "WAWebCryptoCurve25519",
  ["WAWeb-curve25519-donna", "err"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      e || (e = n("WAWeb-curve25519-donna"));
    }
    var u = new Uint8Array(32);
    u[0] = 9;
    async function c(t) {
      var n;
      return (
        t === void 0
          ? ((n = new Uint8Array(32)), self.crypto.getRandomValues(n))
          : (n = new Uint8Array(t)),
        (n[0] &= 248),
        (n[31] &= 127),
        (n[31] |= 64),
        v({ pubKey: 32, privKey: n, basepoint: u }, function (t) {
          var o = e._curve25519_donna(t.pubKey, t.privKey, t.basepoint);
          if (o) throw r("err")("Curve25519:keyPair Error Code " + o);
          return { pubKey: b(t.pubKey, 32), privKey: n.buffer };
        })
      );
    }
    function d(t, n) {
      return Promise.resolve().then(function () {
        return v({ sharedKey: 32, pubKey: t, privKey: n }, function (t) {
          var n = e._curve25519_donna(t.sharedKey, t.privKey, t.pubKey);
          if (n) throw r("err")("Curve25519:sharedSecret Error Code " + n);
          return b(t.sharedKey, 32);
        });
      });
    }
    var m = 5;
    function p(e) {
      return e.pubKey.byteLength === 33 && e.privKey.byteLength === 32;
    }
    function _(e) {
      if (p(e)) return e;
      if (e.pubKey.byteLength !== 32 || e.privKey.byteLength !== 32)
        throw r("err")("Invalid key pair type");
      var t = f(e.pubKey),
        n = new Uint8Array(32);
      return (
        n.set(new Uint8Array(e.privKey)),
        { pubKey: t, privKey: n.buffer }
      );
    }
    function f(e) {
      if (e.byteLength !== 32) throw r("err")("Invalid key type");
      var t = new Uint8Array(33);
      return ((t[0] = m), t.set(new Uint8Array(e), 1), t.buffer);
    }
    function g(e) {
      return e.privKey.byteLength === 32 && e.pubKey.byteLength === 32;
    }
    function h(e) {
      if (g(e)) return e;
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
    function y(e) {
      if (e.byteLength !== 33) throw r("err")("Invalid key type");
      var t = new Uint8Array(32);
      return (t.set(new Uint8Array(e).subarray(1)), t.buffer);
    }
    function C(t) {
      if (typeof t == "number") return e._malloc(t);
      var n = new Uint8Array(t.buffer || t),
        r = e._malloc(n.length);
      return (e.HEAPU8.set(n, r), r);
    }
    function b(t, n) {
      var r = new Uint8Array(n);
      return (r.set(e.HEAPU8.subarray(t, t + n)), r.buffer);
    }
    function v(t, n) {
      s();
      var r = {};
      try {
        for (var o in t) r[o] = C(t[o]);
        return n(r);
      } finally {
        for (var a in r) e._free(r[a]);
      }
    }
    ((l.keyPair = c),
      (l.sharedSecret = d),
      (l.toSignalCurveKeyPair = _),
      (l.toSignalCurvePubKey = f),
      (l.toCurveKeyPair = h),
      (l.toCurveKeyPubKey = y));
  },
  98,
);
