__d(
  "WAWebAccountLinkingCryptoUtils",
  [
    "WALogger",
    "WAWebAccountLinkingAPI",
    "WAWebAccountLinkingConstants",
    "WAWebDirectConnectionX509",
    "asyncToGeneratorRuntime",
    "err",
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield self.crypto.subtle.generateKey(
              {
                name: "RSA-OAEP",
                hash: "SHA-1",
                modulusLength: 2048,
                publicExponent: new Uint8Array([1, 0, 1]),
              },
              !0,
              ["encrypt", "decrypt"],
            ),
            t = e.privateKey,
            n = e.publicKey;
          return { privateKey: t, publicKey: n };
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return self.crypto.subtle.generateKey(
            { name: "AES-GCM", length: 256 },
            !0,
            ["encrypt", "decrypt"],
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t[0],
            a = t[1],
            i,
            l;
          if (r("lodash").isEqual(n.subject, a.issuer)) ((i = n), (l = a));
          else if (r("lodash").isEqual(a.subject, n.issuer)) ((i = a), (l = n));
          else
            return (
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Certificate Chain Validation Failed",
                  ])),
              ),
              null
            );
          var s = yield h(),
            u = yield o("WAWebDirectConnectionX509").validateCertificates(
              [i, l],
              [s],
            );
          return u.result ? l : null;
        })),
        g.apply(this, arguments)
      );
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = "-----BEGIN CERTIFICATE-----",
            t = "-----END CERTIFICATE-----",
            n =
              e +
              "\n" +
              o("WAWebAccountLinkingConstants").ProdRootCertificatePem +
              "\n" +
              t,
            r = yield o("WAWebDirectConnectionX509").extractCertificates(n);
          return (
            r.length !== 1 &&
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Root certificate failed extraction",
                  ])),
              ),
            r[0]
          );
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new TextEncoder(),
            n = t.encode(e),
            r = self.crypto.getRandomValues(new Uint8Array(12)),
            o = yield p(),
            a = yield self.crypto.subtle.encrypt(
              { name: "AES-GCM", iv: r, length: 256 },
              o,
              n,
            ),
            i = new Uint8Array(a),
            l = i.slice(-16),
            s = i.slice(0, -16);
          return { key: o, cipherText: s, tag: l, iv: r };
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t, n, r) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var o = new Uint8Array(t.length + r.length);
            (o.set(t), o.set(r, t.length));
            var a = yield self.crypto.subtle.decrypt(
              { name: "AES-GCM", iv: n, length: 256 },
              e,
              o,
            );
            return a;
          },
        )),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return self.crypto.subtle.encrypt(
            { name: "RSA-OAEP", padding: "OAEP" },
            e,
            t,
          );
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return self.crypto.subtle.decrypt(
            { name: "RSA-OAEP", padding: "OAEP" },
            e,
            t,
          );
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = !1);
          var n = yield self.crypto.subtle.exportKey("spki", e),
            r = new Uint8Array(n),
            o = btoa(
              Array.from(r, function (e) {
                return String.fromCharCode(e);
              }).join(""),
            );
          return t
            ? "-----BEGIN PUBLIC KEY-----\n" +
                o +
                "\n-----END PUBLIC KEY-----\n"
            : "-----BEGIN PUBLIC KEY-----" + o + "-----END PUBLIC KEY-----";
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t, n) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          (t === void 0 && (t = !1),
            n === void 0 && (n = ["encrypt", "decrypt"]));
          var a = t
              ? "-----BEGIN PRIVATE KEY-----"
              : "-----BEGIN PUBLIC KEY-----",
            i = t ? "-----END PRIVATE KEY-----" : "-----END PUBLIC KEY-----",
            l = e;
          (e.includes(a) &&
            (l = e.substring(e.indexOf(a) + a.length, e.indexOf(i))),
            (l = l.replace(/\s/g, "")));
          try {
            for (
              var s = atob(l), c = new Uint8Array(s.length), d = 0;
              d < s.length;
              d++
            )
              c[d] = s.charCodeAt(d);
            var m = t ? "pkcs8" : "spki";
            return self.crypto.subtle.importKey(
              m,
              c,
              { name: "RSA-OAEP", hash: "SHA-1" },
              !0,
              n,
            );
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Error converting PEM to CryptoKey",
                    ])),
                )
                .catching(e instanceof Error ? e : r("err")(String(e))),
              e
            );
          }
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield D(e, !1, ["encrypt"]),
            r = yield D(t, !0, ["decrypt"]);
          return { publicKey: n, privateKey: r };
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield self.crypto.subtle.exportKey("raw", e);
          return new Uint8Array(t);
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t, n, r, o) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            try {
              var l = yield E(e, t),
                s = yield F(l),
                u = yield v(s, n, a, i),
                d = new TextDecoder("utf-8"),
                m = d.decode(u),
                p = JSON.parse(m),
                _ = p.data;
              return JSON.parse(_);
            } catch (e) {
              throw (
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] Failed to decrypt RSA encrypted payload",
                      ])),
                  )
                  .catching(e instanceof Error ? e : r("err")(String(e))),
                e
              );
            }
          },
        )),
        A.apply(this, arguments)
      );
    }
    function F(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield self.crypto.subtle.importKey("raw", e, "AES-GCM", !0, [
            "encrypt",
            "decrypt",
          ]);
          return t;
        })),
        O.apply(this, arguments)
      );
    }
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebAccountLinkingAPI").fetchValidCertificate();
          if (t == null)
            throw r("err")("[WAFFLE] fetchValidCertificate failed");
          var n = yield C(JSON.stringify(e)),
            a = n.cipherText,
            i = n.iv,
            l = n.key,
            s = n.tag,
            u = yield N(l),
            c = yield R(t.encryptionKey, u);
          return { tag: s, nonce: i, cipherText: a, encryptedKey: c };
        })),
        W.apply(this, arguments)
      );
    }
    function q(e) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length === 0) throw r("err")("Empty PEM string");
          var t = "-----BEGIN PUBLIC KEY-----",
            n = "-----END PUBLIC KEY-----",
            o = e;
          (e.includes(t) &&
            (o = e.substring(e.indexOf(t) + t.length, e.indexOf(n))),
            (o = o.replace(/\s/g, "")));
          for (
            var a = atob(o), i = new Uint8Array(a.length), l = 0;
            l < a.length;
            l++
          )
            i[l] = a.charCodeAt(l);
          return self.crypto.subtle.importKey(
            "spki",
            i,
            { name: "RSA-OAEP", hash: "SHA-1" },
            !0,
            ["encrypt"],
          );
        })),
        U.apply(this, arguments)
      );
    }
    ((l.generateRSAKeys = d),
      (l.generateAESKey = p),
      (l.validateCertificateChain = f),
      (l.cryptoKeyToPem = I),
      (l.convertTestKeys = $),
      (l.decryptRSAEncryptedPayload = w),
      (l.wrapPayloadWithRSAAESEncryption = B),
      (l.importPasswordPublicKey = q));
  },
  98,
);
