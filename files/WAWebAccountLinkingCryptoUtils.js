__d(
  "WAWebAccountLinkingCryptoUtils",
  [
    "WABase64",
    "WALogger",
    "WAWebAccountLinkingAPI",
    "WAWebAccountLinkingConstants",
    "WAWebCryptoCurve25519CalculateSignature",
    "WAWebRSAPkcs1v15",
    "WAWebSignalProtocolStore",
    "WAWebX509Utils",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        p.apply(this, arguments)
      );
    }
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return self.crypto.subtle.generateKey(
            { name: "AES-GCM", length: 256 },
            !0,
            ["encrypt", "decrypt"],
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t[0],
            r = t[1],
            a,
            i;
          if (n.subject.isEqual(r.issuer)) ((a = n), (i = r));
          else if (r.subject.isEqual(n.issuer)) ((a = r), (i = n));
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
          var l = yield b(),
            s = yield o("WAWebX509Utils").validateCertificates([a, i], [l]);
          return s.result ? i : null;
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebX509Utils").extractCertificates(e);
          if (t.length !== 2)
            throw r("err")(
              "[WAFFLE] Payload encryption certificate chain is invalid",
            );
          var n = yield g(t);
          if (n == null)
            throw r("err")(
              "[WAFFLE] Payload encryption certificate validation failed",
            );
          return n.getPublicKey({
            algorithm: {
              algorithm: { name: "RSA-OAEP", hash: { name: "SHA-1" } },
              usages: ["encrypt"],
            },
          });
        })),
        C.apply(this, arguments)
      );
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = "-----BEGIN CERTIFICATE-----",
            t = "-----END CERTIFICATE-----",
            n =
              e +
              "\n" +
              o("WAWebAccountLinkingConstants").ProdRootCertificatePem +
              "\n" +
              t,
            r = yield o("WAWebX509Utils").extractCertificates(n);
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
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new TextEncoder(),
            n = t.encode(e),
            r = self.crypto.getRandomValues(new Uint8Array(12)),
            o = yield _(),
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
        R.apply(this, arguments)
      );
    }
    function L(e, t, n, r) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(
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
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return self.crypto.subtle.encrypt(
            { name: "RSA-OAEP", padding: "OAEP" },
            e,
            t,
          );
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return self.crypto.subtle.decrypt(
            { name: "RSA-OAEP", padding: "OAEP" },
            e,
            t,
          );
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        $.apply(this, arguments)
      );
    }
    function P(e, t, n) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
        N.apply(this, arguments)
      );
    }
    function M(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield P(e, !1, ["encrypt"]),
            r = yield P(t, !0, ["decrypt"]);
          return { publicKey: n, privateKey: r };
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield self.crypto.subtle.exportKey("raw", e);
          return new Uint8Array(t);
        })),
        F.apply(this, arguments)
      );
    }
    function O(e, t, n, r, o) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            try {
              var l = yield U(e, t, n, a, i);
              return JSON.parse(l);
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
        B.apply(this, arguments)
      );
    }
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.data,
            n = e.key,
            a = e.nonce,
            i = e.privateKey,
            l = e.tag;
          try {
            return yield U(i, n, t, a, l);
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Failed to decrypt RSA encrypted data",
                    ])),
                )
                .catching(e instanceof Error ? e : r("err")(String(e))),
              e
            );
          }
        })),
        q.apply(this, arguments)
      );
    }
    function U(e, t, n, r, o) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, o, a) {
            var i = yield T(e, t),
              l = yield H(i),
              s = yield L(l, n, o, a),
              u = new TextDecoder("utf-8").decode(s),
              c = JSON.parse(u),
              d = c.data;
            if (typeof d != "string")
              throw r("err")(
                "[WAFFLE] Decrypted RSA payload data is not a string",
              );
            return d;
          },
        )),
        V.apply(this, arguments)
      );
    }
    function H(e) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield self.crypto.subtle.importKey("raw", e, "AES-GCM", !0, [
            "encrypt",
            "decrypt",
          ]);
          return t;
        })),
        G.apply(this, arguments)
      );
    }
    function z(e, t) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t;
          if (n == null) {
            var a = yield o("WAWebAccountLinkingAPI").fetchValidCertificate();
            if (a == null)
              throw r("err")("[WAFFLE] fetchValidCertificate failed");
            n = a.encryptionKey;
          }
          var i = yield S(JSON.stringify(e)),
            l = i.cipherText,
            s = i.iv,
            u = i.key,
            c = i.tag,
            d = yield A(u),
            m = yield k(n, d);
          return { tag: c, nonce: s, cipherText: l, encryptedKey: m };
        })),
        j.apply(this, arguments)
      );
    }
    var K = 1,
      Q = "rsa2048";
    function X(e) {
      var t;
      return JSON.stringify({
        algorithm: Q,
        auth_tag: (t = o("WABase64")).encodeB64(e.tag),
        encrypted_data: t.encodeB64(e.cipherText),
        encrypted_key: t.encodeB64(e.encryptedKey),
        nonce: t.encodeB64(e.nonce),
        v: K,
      });
    }
    function Y(e, t, n) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = new TextEncoder(),
            a = r.encode(e),
            i = self.crypto.getRandomValues(new Uint8Array(12)),
            l = yield _(),
            s = yield self.crypto.subtle.encrypt(
              { name: "AES-GCM", iv: i, length: 256 },
              l,
              a,
            ),
            u = new Uint8Array(s),
            c = u.slice(-16),
            d = u.slice(0, -16),
            m = yield A(l),
            p = yield o("WAWebRSAPkcs1v15").rsaPkcs1v15Encrypt(t, m),
            f = p.length,
            g = 16 + f + 16 + d.length,
            h = new Uint8Array(g),
            y = 0,
            C = new DataView(h.buffer);
          ((h[y++] = 1),
            (h[y++] = n % 256),
            h.set(i, y),
            (y += 12),
            C.setUint16(y, f, !0),
            (y += 2),
            h.set(p, y),
            (y += f),
            h.set(c, y),
            (y += 16),
            h.set(d, y));
          var b = o("WABase64").encodeB64UrlSafe(h),
            v = Math.floor(Date.now() / 1e3);
          return "#PWD_WA:11:" + v + ":" + b;
        })),
        J.apply(this, arguments)
      );
    }
    function Z(e) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSignalProtocolStore")
            .getSignalProtocolStore()
            .getIdentityKeyPair();
          if (t == null) throw r("err")("Identity key pair not found");
          var n = { pubKey: t.pubKey.slice(1), privKey: t.privKey },
            a = new TextEncoder().encode("1539" + e),
            i = yield o(
              "WAWebCryptoCurve25519CalculateSignature",
            ).calculateSignature(n, a.buffer);
          return new Uint8Array(i);
        })),
        ee.apply(this, arguments)
      );
    }
    function te(e) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        ne.apply(this, arguments)
      );
    }
    ((l.generateRSAKeys = m),
      (l.generateAESKey = _),
      (l.validateCertificateChain = g),
      (l.importPayloadEncryptionKey = y),
      (l.cryptoKeyToPem = x),
      (l.convertTestKeys = M),
      (l.decryptRSAEncryptedPayload = O),
      (l.decryptRSAEncryptedData = W),
      (l.wrapPayloadWithRSAAESEncryption = z),
      (l.WAFFLE_AUTH_ENVELOPE_VERSION_V1 = K),
      (l.serializeWaffleEncryptedEnvelope = X),
      (l.encryptPassword = Y),
      (l.computeIdSign = Z),
      (l.importPasswordPublicKey = te));
  },
  98,
);
