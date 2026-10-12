__d(
  "WAWebCryptoCurve25519",
  [
    "Promise",
    "WALogger",
    "WAWeb-curve25519-donna",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c() {
      u || (u = n("WAWeb-curve25519-donna"));
    }
    var d = new Uint8Array(32);
    d[0] = 9;
    var m = 32,
      p = 256,
      _ = new Uint8Array([
        48, 46, 2, 1, 0, 48, 5, 6, 3, 43, 101, 110, 4, 34, 4, 32,
      ]),
      f = null;
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          (e === void 0
            ? ((t = new Uint8Array(32)), self.crypto.getRandomValues(t))
            : (t = new Uint8Array(e)),
            (t[0] &= 248),
            (t[31] &= 127),
            (t[31] |= 64));
          var n = yield C(t, d);
          return n != null
            ? { pubKey: n, privKey: t.buffer }
            : $({ pubKey: 32, privKey: t, basepoint: d }, function (e) {
                var n = u._curve25519_donna(e.pubKey, e.privKey, e.basepoint);
                if (n) throw r("err")("Curve25519:keyPair Error Code " + n);
                return { pubKey: x(e.pubKey, 32), privKey: t.buffer };
              });
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return (s || (s = n("Promise"))).resolve().then(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var n = yield C(new Uint8Array(t), new Uint8Array(e));
          return n != null
            ? n
            : $({ sharedKey: 32, pubKey: e, privKey: t }, function (e) {
                var t = u._curve25519_donna(e.sharedKey, e.privKey, e.pubKey);
                if (t)
                  throw r("err")("Curve25519:sharedSecret Error Code " + t);
                return x(e.sharedKey, 32);
              });
        }),
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i,
            l = (i = self.crypto) == null ? void 0 : i.subtle;
          if (
            !r("gkx")("7643") ||
            l == null ||
            l === f ||
            t.length !== m ||
            a.length !== m
          )
            return null;
          var u = new Uint8Array(_.length + m);
          (u.set(_), u.set(t, _.length));
          try {
            var c = yield (s || (s = n("Promise"))).all([
                l.importKey("pkcs8", u, { name: "X25519" }, !1, ["deriveBits"]),
                l.importKey("raw", a, { name: "X25519" }, !1, []),
              ]),
              d = c[0],
              g = c[1];
            return yield l.deriveBits({ name: "X25519", public: g }, d, p);
          } catch (t) {
            return (
              v(t) !== "OperationError" &&
                ((f = l),
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[curve25519] WebCrypto X25519 failed, using donna: ",
                      "",
                    ])),
                  r("getErrorSafe")(t).message,
                )),
              null
            );
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return e != null && typeof e == "object" && typeof e.name == "string"
        ? e.name
        : null;
    }
    var S = 5;
    function R(e) {
      return e.pubKey.byteLength === 33 && e.privKey.byteLength === 32;
    }
    function L(e) {
      if (R(e)) return e;
      if (e.pubKey.byteLength !== 32 || e.privKey.byteLength !== 32)
        throw r("err")("Invalid key pair type");
      var t = E(e.pubKey),
        n = new Uint8Array(32);
      return (
        n.set(new Uint8Array(e.privKey)),
        { pubKey: t, privKey: n.buffer }
      );
    }
    function E(e) {
      if (e.byteLength !== 32) throw r("err")("Invalid key type");
      var t = new Uint8Array(33);
      return ((t[0] = S), t.set(new Uint8Array(e), 1), t.buffer);
    }
    function k(e) {
      return e.privKey.byteLength === 32 && e.pubKey.byteLength === 32;
    }
    function I(e) {
      if (k(e)) return e;
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
    function T(e) {
      if (e.byteLength !== 33) throw r("err")("Invalid key type");
      var t = new Uint8Array(32);
      return (t.set(new Uint8Array(e).subarray(1)), t.buffer);
    }
    function D(e) {
      if (typeof e == "number") return u._malloc(e);
      var t = new Uint8Array(e instanceof Uint8Array ? e.buffer : e),
        n = u._malloc(t.length);
      return (u.HEAPU8.set(t, n), n);
    }
    function x(e, t) {
      var n = new Uint8Array(t);
      return (n.set(u.HEAPU8.subarray(e, e + t)), n.buffer);
    }
    function $(e, t) {
      c();
      var n = {};
      try {
        for (var r in e) n[r] = D(e[r]);
        return t(n);
      } finally {
        for (var o in n) u._free(n[o]);
      }
    }
    ((l.keyPair = g),
      (l.sharedSecret = y),
      (l.toSignalCurveKeyPair = L),
      (l.toSignalCurvePubKey = E),
      (l.toCurveKeyPair = I),
      (l.toCurveKeyPubKey = T));
  },
  98,
);
