__d(
  "FBPayCardinal3DSCryptoUtils",
  [
    "ConcatKDF",
    "Promise",
    "XPlatReactCrypto",
    "XPlatReactTextDecoder",
    "XPlatReactTextEncoder",
    "asyncToGeneratorRuntime",
    "base64Binary",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 256,
      u = 16,
      c = 32;
    function d(e) {
      for (var t = new Uint8Array(e.length), n = 0; n < e.length; n++)
        t[n] = e.charCodeAt(n);
      return t;
    }
    function m(e) {
      return new (o("XPlatReactTextEncoder").TextEncoder)().encode(e);
    }
    function p(e) {
      return o("base64Binary")
        .encode(e)
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
    }
    function _(e) {
      var t = e.length % 4 === 0 ? 0 : 4 - (e.length % 4),
        n = e.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat(t);
      return o("base64Binary").decode(n);
    }
    function f(e) {
      return new (o("XPlatReactTextDecoder").TextDecoder)().decode(e);
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e.byteLength < c)
            throw r("err")(
              "deriveDirectionalSessionKeys: sharedSecret must be at least the 32-byte P-256 ECDH shared secret",
            );
          var n = yield o("ConcatKDF").concatKDF(e, s, "", "", t);
          return { cekSdkToAcs: n.slice(0, u), cekAcsToSdk: n.slice(u, 2 * u) };
        })),
        h.apply(this, arguments)
      );
    }
    var y = 12,
      C = 16,
      b = 16,
      v = 1,
      S = 255;
    function R(e) {
      if (!Number.isInteger(e) || e < v || e > S)
        throw r("err")(
          "FBPayCardinal3DSCryptoUtils: invalid CReq counter " + e,
        );
      var t = new Uint8Array(y);
      return ((t[y - 1] = e), t);
    }
    function L(e, t, n, r) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            if (e.byteLength !== b)
              throw r("err")(
                "FBPayCardinal3DSCryptoUtils: CEK must be 16 bytes for A128GCM",
              );
            var i = yield o("XPlatReactCrypto").subtleImportKey(
                "raw",
                e,
                "AES-GCM",
                !1,
                ["encrypt"],
              ),
              l = R(t),
              s = { alg: "dir", enc: "A128GCM", kid: a },
              u = p(m(JSON.stringify(s))),
              c = d(u),
              _ = m(JSON.stringify(n)),
              f = yield o("XPlatReactCrypto").subtleEncrypt(
                { name: "AES-GCM", iv: l, additionalData: c, tagLength: C * 8 },
                i,
                _,
              ),
              g = new Uint8Array(f),
              h = g.byteLength - C;
            if (h < 0)
              throw r("err")(
                "FBPayCardinal3DSCryptoUtils: AES-GCM output shorter than tag",
              );
            var y = g.subarray(0, h),
              v = g.subarray(h);
            return [u, "", p(l), p(y), p(v)].join(".");
          },
        )),
        E.apply(this, arguments)
      );
    }
    var k = 5;
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.split(".");
          if (n.length !== k)
            throw r("err")("FBPayCardinal3DSCryptoUtils: malformed CRes JWE");
          var a = n[0],
            i = n[1],
            l = n[2],
            s = n[3],
            u = n[4];
          if (i !== "")
            throw r("err")(
              "FBPayCardinal3DSCryptoUtils: CRes JWE encrypted key must be empty for dir",
            );
          var c = _(l),
            m = _(s),
            p = _(u),
            g = new Uint8Array(m.byteLength + p.byteLength);
          (g.set(m, 0), g.set(p, m.byteLength));
          var h = yield o("XPlatReactCrypto").subtleImportKey(
              "raw",
              e,
              "AES-GCM",
              !1,
              ["decrypt"],
            ),
            y = d(a),
            b = yield o("XPlatReactCrypto").subtleDecrypt(
              { name: "AES-GCM", iv: c, additionalData: y, tagLength: C * 8 },
              h,
              g,
            ),
            v = JSON.parse(f(_(a)));
          if (v == null || typeof v != "object")
            throw r("err")(
              "FBPayCardinal3DSCryptoUtils: invalid CRes JWE header",
            );
          if (v.alg !== "dir" || v.enc !== "A128GCM")
            throw r("err")(
              "FBPayCardinal3DSCryptoUtils: unexpected CRes JWE header",
            );
          return JSON.parse(f(new Uint8Array(b)));
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      try {
        new Uint8Array(e).fill(0);
      } catch (e) {}
    }
    function x(e) {
      (D(e.cekSdkToAcs), D(e.cekAcsToSdk));
    }
    var $ = "P-256";
    function P() {
      return o("XPlatReactCrypto").subtleGenerateKeyPair(
        { name: "ECDH", namedCurve: $ },
        !1,
        ["deriveBits"],
      );
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.type !== "public")
            throw r("err")("exportPublicKeyJwk: key must be a public key");
          var t = yield o("XPlatReactCrypto").subtleExportKeyJwk(e);
          if (t.d != null)
            throw r("err")(
              "exportPublicKeyJwk: refusing to export a JWK with a private component (d)",
            );
          return t;
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t) {
      return (
        e.kty === "EC" &&
        t.kty === "EC" &&
        e.crv === t.crv &&
        e.x === t.x &&
        e.y === t.y
      );
    }
    function A(e) {
      return typeof e == "object" && e !== null && !Array.isArray(e);
    }
    function F(e, t, n) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = e.split(".");
          if (a.length !== 3)
            throw r("err")(
              "FBPayCardinal3DSCryptoUtils: malformed acsSignedContent (expected JWS)",
            );
          var i = a[0],
            l = a[1],
            s = a[2],
            u = d(i + "." + l).buffer,
            c = _(s).buffer,
            m = t.algorithm.name,
            p;
          if (m === "ECDSA")
            p = yield o("XPlatReactCrypto").subtleVerify(
              { hash: "SHA-256", name: "ECDSA" },
              t,
              c,
              u,
            );
          else if (m === "RSA-PSS")
            p = yield o("XPlatReactCrypto").subtleVerify(
              { name: "RSA-PSS", saltLength: 32 },
              t,
              c,
              u,
            );
          else
            throw r("err")(
              "FBPayCardinal3DSCryptoUtils: unsupported DS CA key type " + m,
            );
          if (!p)
            throw r("err")(
              "FBPayCardinal3DSCryptoUtils: acsSignedContent signature is invalid",
            );
          var g = JSON.parse(f(_(l)));
          if (!A(g))
            throw r("err")(
              "FBPayCardinal3DSCryptoUtils: malformed acsSignedContent payload",
            );
          if (g.sdkEphemPubKey == null || !w(g.sdkEphemPubKey, n))
            throw r("err")(
              "FBPayCardinal3DSCryptoUtils: sdkEphemPubKey in acsSignedContent does not match KEY #2",
            );
          if (g.acsEphemPubKey == null)
            throw r("err")(
              "FBPayCardinal3DSCryptoUtils: acsSignedContent missing acsEphemPubKey",
            );
          return g.acsEphemPubKey;
        })),
        O.apply(this, arguments)
      );
    }
    var B = 256;
    function W(t) {
      return t.kty !== "EC" || t.crv !== $
        ? (e || (e = n("Promise"))).reject(
            r("err")("importAcsPublicKey: ACS JWK must be an EC " + $ + " key"),
          )
        : t.d != null
          ? (e || (e = n("Promise"))).reject(
              r("err")(
                "importAcsPublicKey: ACS JWK must not contain a private component (d)",
              ),
            )
          : o("XPlatReactCrypto").subtleImportKeyJwk(
              t,
              { name: "ECDH", namedCurve: $ },
              !0,
              [],
            );
    }
    function q(e, t) {
      return o("XPlatReactCrypto").subtleDeriveBits(
        { name: "ECDH", public: t },
        e,
        B,
      );
    }
    function U() {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield P(),
            t = yield N(e.publicKey);
          return { keyPair: e, publicKeyJwk: t };
        })),
        V.apply(this, arguments)
      );
    }
    function H(e, t, n, r, o) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, o) {
            var a = yield F(e, t, r),
              i = yield W(a),
              l = yield q(n.privateKey, i),
              s = yield g(l, o);
            return { sessionKeys: s, sharedSecret: l };
          },
        )),
        G.apply(this, arguments)
      );
    }
    ((l.deriveDirectionalSessionKeys = g),
      (l.encryptCReq = L),
      (l.decryptCRes = I),
      (l.zeroize = D),
      (l.cleanupSessionKeys = x),
      (l.generateEphemeralKeyPair = P),
      (l.exportPublicKeyJwk = N),
      (l.validateAndParseAcsSignedContent = F),
      (l.importAcsPublicKey = W),
      (l.performKeyAgreement = q),
      (l.initializeSdkCrypto = U),
      (l.establishSecureChannel = H));
  },
  98,
);
