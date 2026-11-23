__d(
  "WAWebCryptoCurve25519",
  [
    "WACryptoPrimitives",
    "WALogger",
    "WAWeb-curve25519-donna",
    "WAWebABProps",
    "err",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      s || (s = n("WAWeb-curve25519-donna"));
    }
    var c = new Uint8Array(32);
    c[0] = 9;
    var d = 32,
      m = 256,
      p = new Uint8Array([
        48, 46, 2, 1, 0, 48, 5, 6, 3, 43, 101, 110, 4, 34, 4, 32,
      ]),
      _ = null;
    async function f(e) {
      var t;
      (e === void 0
        ? ((t = new Uint8Array(32)), self.crypto.getRandomValues(t))
        : (t = new Uint8Array(e)),
        (t[0] &= 248),
        (t[31] &= 127),
        (t[31] |= 64));
      var n = await h(t, c);
      if (n != null) return { pubKey: n, privKey: t.buffer };
      var o = C(t, c);
      return o != null
        ? { pubKey: o, privKey: t.buffer }
        : x({ pubKey: 32, privKey: t, basepoint: c }, function (e) {
            var n = s._curve25519_donna(e.pubKey, e.privKey, e.basepoint);
            if (n) throw r("err")("Curve25519:keyPair Error Code " + n);
            return { pubKey: D(e.pubKey, 32), privKey: t.buffer };
          });
    }
    function g(e, t) {
      return Promise.resolve().then(async function () {
        var n = await h(new Uint8Array(t), new Uint8Array(e));
        if (n != null) return n;
        var o = C(new Uint8Array(t), new Uint8Array(e));
        return o != null
          ? o
          : x({ sharedKey: 32, pubKey: e, privKey: t }, function (e) {
              var t = s._curve25519_donna(e.sharedKey, e.privKey, e.pubKey);
              if (t) throw r("err")("Curve25519:sharedSecret Error Code " + t);
              return D(e.sharedKey, 32);
            });
      });
    }
    async function h(t, n) {
      var a,
        i = (a = self.crypto) == null ? void 0 : a.subtle;
      if (
        !r("gkx")("7643") ||
        i == null ||
        i === _ ||
        t.length !== d ||
        n.length !== d
      )
        return null;
      var l = new Uint8Array(p.length + d);
      (l.set(p), l.set(t, p.length));
      try {
        var s = await Promise.all([
            i.importKey("pkcs8", l, { name: "X25519" }, !1, ["deriveBits"]),
            i.importKey("raw", n, { name: "X25519" }, !1, []),
          ]),
          u = s[0],
          c = s[1];
        return await i.deriveBits({ name: "X25519", public: c }, u, m);
      } catch (t) {
        return (
          y(t) !== "OperationError" &&
            ((_ = i),
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[curve25519] WebCrypto X25519 failed, using the JS fallback: ",
                  "",
                ])),
              r("getErrorSafe")(t).message,
            )),
          null
        );
      }
    }
    function y(e) {
      return e != null && typeof e == "object" && typeof e.name == "string"
        ? e.name
        : null;
    }
    function C(e, t) {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_curve25519_donna_migration_enabled",
      )
        ? o("WACryptoPrimitives").scalarMult(b(e), b(t)).buffer
        : null;
    }
    function b(e) {
      if (e.length === d) return e;
      var t = new Uint8Array(d);
      return (t.set(e.subarray(0, d)), t);
    }
    var v = 5;
    function S(e) {
      return e.pubKey.byteLength === 33 && e.privKey.byteLength === 32;
    }
    function R(e) {
      if (S(e)) return e;
      if (e.pubKey.byteLength !== 32 || e.privKey.byteLength !== 32)
        throw r("err")("Invalid key pair type");
      var t = L(e.pubKey),
        n = new Uint8Array(32);
      return (
        n.set(new Uint8Array(e.privKey)),
        { pubKey: t, privKey: n.buffer }
      );
    }
    function L(e) {
      if (e.byteLength !== 32) throw r("err")("Invalid key type");
      var t = new Uint8Array(33);
      return ((t[0] = v), t.set(new Uint8Array(e), 1), t.buffer);
    }
    function E(e) {
      return e.privKey.byteLength === 32 && e.pubKey.byteLength === 32;
    }
    function k(e) {
      if (E(e)) return e;
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
    function I(e) {
      if (e.byteLength !== 33) throw r("err")("Invalid key type");
      var t = new Uint8Array(32);
      return (t.set(new Uint8Array(e).subarray(1)), t.buffer);
    }
    function T(e) {
      if (typeof e == "number") return s._malloc(e);
      var t = new Uint8Array(e instanceof Uint8Array ? e.buffer : e),
        n = s._malloc(t.length);
      return (s.HEAPU8.set(t, n), n);
    }
    function D(e, t) {
      var n = new Uint8Array(t);
      return (n.set(s.HEAPU8.subarray(e, e + t)), n.buffer);
    }
    function x(e, t) {
      u();
      var n = {};
      try {
        for (var r in e) n[r] = T(e[r]);
        return t(n);
      } finally {
        for (var o in n) s._free(n[o]);
      }
    }
    ((l.keyPair = f),
      (l.sharedSecret = g),
      (l.toSignalCurveKeyPair = R),
      (l.toSignalCurvePubKey = L),
      (l.toCurveKeyPair = k),
      (l.toCurveKeyPubKey = I));
  },
  98,
);
