__d(
  "WAWebAccountLinkingCryptoUtils",
  [
    "WABase64",
    "WALogger",
    "WAWebAccountLinkingAPI",
    "WAWebAccountLinkingConstants",
    "WAWebCryptoCurve25519CalculateSignature",
    "WAWebFeaturePkiRootCertificate",
    "WAWebRSAPkcs1v15",
    "WAWebSignalProtocolStore",
    "WAWebX509Utils",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = "2.5.4.3",
      p = "Facebook Rootcanal Prod Root CA";
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        f.apply(this, arguments)
      );
    }
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return self.crypto.subtle.generateKey(
            { name: "AES-GCM", length: 256 },
            !0,
            ["encrypt", "decrypt"],
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            return yield b(t);
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Certificate Chain Validation Failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("waffle-cert-chain-validation-error"),
              null
            );
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e[0],
            n = e[1],
            a,
            i;
          if (t.subject.isEqual(n.issuer)) ((a = t), (i = n));
          else if (n.subject.isEqual(t.issuer)) ((a = n), (i = t));
          else throw r("err")("[WAFFLE] Certificates do not form a chain");
          var l = yield L(a),
            s = yield o("WAWebX509Utils").validateCertificates([a, i], [l]);
          if (!s.result)
            throw r("err")(
              "[WAFFLE] Certificate chain signature validation failed",
            );
          return i;
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = "SHA-1");
          var n = yield o("WAWebX509Utils").extractCertificates(e);
          if (n.length !== 2)
            throw r("err")(
              "[WAFFLE] Payload encryption certificate chain is invalid",
            );
          var a = yield y(n);
          if (a == null)
            throw r("err")(
              "[WAFFLE] Payload encryption certificate validation failed",
            );
          return a.getPublicKey({
            algorithm: {
              algorithm: { name: "RSA-OAEP", hash: { name: t } },
              usages: ["encrypt"],
            },
          });
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = k(e.issuer);
          if (
            t === o("WAWebFeaturePkiRootCertificate").FeaturePkiRootCommonName
          ) {
            var n = yield o(
              "WAWebFeaturePkiRootCertificate",
            ).loadFeaturePkiRootCertificate();
            if (n == null)
              throw r("err")(
                "[WAFFLE] Feature PKI root certificate failed extraction",
              );
            return n;
          }
          return (
            t !== p &&
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Intermediate issuer ",
                      " matches no known root, falling back to Rootcanal",
                    ])),
                  t != null ? t : "missing",
                )
                .sendLogs("waffle-unknown-cert-issuer"),
            I(o("WAWebAccountLinkingConstants").ProdRootCertificatePem)
          );
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      var t;
      return (t = e.typesAndValues.find(function (e) {
        var t = e.type;
        return t === m;
      })) == null
        ? void 0
        : t.value.valueBlock.value;
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = "-----BEGIN CERTIFICATE-----",
            n = "-----END CERTIFICATE-----",
            a = t + "\n" + e + "\n" + n,
            i = yield o("WAWebX509Utils").extractCertificates(a);
          if (i.length !== 1)
            throw r("err")("[WAFFLE] Root certificate failed extraction");
          return i[0];
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new TextEncoder(),
            n = t.encode(e),
            r = self.crypto.getRandomValues(new Uint8Array(12)),
            o = yield g(),
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
        x.apply(this, arguments)
      );
    }
    function $(e, t, n, r) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(
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
        P.apply(this, arguments)
      );
    }
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return self.crypto.subtle.encrypt(
            { name: "RSA-OAEP", padding: "OAEP" },
            e,
            t,
          );
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return self.crypto.subtle.decrypt(
            { name: "RSA-OAEP", padding: "OAEP" },
            e,
            t,
          );
        })),
        A.apply(this, arguments)
      );
    }
    function F(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield self.crypto.subtle.exportKey("spki", e),
            n = new Uint8Array(t),
            r = btoa(
              Array.from(n, function (e) {
                return String.fromCharCode(e);
              }).join(""),
            );
          return (
            "-----BEGIN PUBLIC KEY-----\n" + r + "\n-----END PUBLIC KEY-----\n"
          );
        })),
        O.apply(this, arguments)
      );
    }
    function B(e, t, n) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
        W.apply(this, arguments)
      );
    }
    function q(e, t) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield B(e, !1, ["encrypt"]),
            r = yield B(t, !0, ["decrypt"]);
          return { publicKey: n, privateKey: r };
        })),
        U.apply(this, arguments)
      );
    }
    function V(e) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield self.crypto.subtle.exportKey("raw", e);
          return new Uint8Array(t);
        })),
        H.apply(this, arguments)
      );
    }
    function G(e, t, n, r, o) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            try {
              var l = yield Q(e, t, n, a, i);
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
        z.apply(this, arguments)
      );
    }
    function j(e) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.data,
            n = e.key,
            a = e.nonce,
            i = e.privateKey,
            l = e.tag;
          try {
            return yield Q(i, n, t, a, l);
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
        K.apply(this, arguments)
      );
    }
    function Q(e, t, n, r, o) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, o, a) {
            var i = yield w(e, t),
              l = yield Y(i),
              s = yield $(l, n, o, a),
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
        X.apply(this, arguments)
      );
    }
    function Y(e) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield self.crypto.subtle.importKey("raw", e, "AES-GCM", !0, [
            "encrypt",
            "decrypt",
          ]);
          return t;
        })),
        J.apply(this, arguments)
      );
    }
    function Z(e, t) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t;
          if (n == null) {
            var a = yield o("WAWebAccountLinkingAPI").fetchValidCertificate();
            if (a == null)
              throw r("err")("[WAFFLE] fetchValidCertificate failed");
            n = a.encryptionKey;
          }
          var i = yield D(JSON.stringify(e)),
            l = i.cipherText,
            s = i.iv,
            u = i.key,
            c = i.tag,
            d = yield V(u),
            m = yield N(n, d);
          return { tag: c, nonce: s, cipherText: l, encryptedKey: m };
        })),
        ee.apply(this, arguments)
      );
    }
    var te = 1,
      ne = "rsa2048";
    function re(e) {
      var t;
      return JSON.stringify({
        algorithm: ne,
        auth_tag: (t = o("WABase64")).encodeB64(e.tag),
        encrypted_data: t.encodeB64(e.cipherText),
        encrypted_key: t.encodeB64(e.encryptedKey),
        nonce: t.encodeB64(e.nonce),
        v: te,
      });
    }
    function oe(e, t, n) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r = new TextEncoder(),
              a = r.encode(e),
              i = self.crypto.getRandomValues(new Uint8Array(12)),
              l = yield g(),
              s = yield self.crypto.subtle.encrypt(
                { name: "AES-GCM", iv: i, length: 256 },
                l,
                a,
              ),
              u = new Uint8Array(s),
              c = u.slice(-16),
              d = u.slice(0, -16),
              m = yield V(l),
              p = yield o("WAWebRSAPkcs1v15").rsaPkcs1v15Encrypt(t, m),
              _ = p.length,
              f = 16 + _ + 16 + d.length,
              h = new Uint8Array(f),
              y = 0,
              C = new DataView(h.buffer);
            ((h[y++] = 1),
              (h[y++] = n % 256),
              h.set(i, y),
              (y += 12),
              C.setUint16(y, _, !0),
              (y += 2),
              h.set(p, y),
              (y += _),
              h.set(c, y),
              (y += 16),
              h.set(d, y));
            var b = o("WABase64").encodeB64UrlSafe(h),
              v = Math.floor(Date.now() / 1e3);
            return "#PWD_WA:11:" + v + ":" + b;
          },
        )),
        ae.apply(this, arguments)
      );
    }
    function ie(e) {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        le.apply(this, arguments)
      );
    }
    function se(e) {
      return ue.apply(this, arguments);
    }
    function ue() {
      return (
        (ue = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        ue.apply(this, arguments)
      );
    }
    ((l.generateRSAKeys = _),
      (l.generateAESKey = g),
      (l.validateCertificateChain = y),
      (l.importPayloadEncryptionKey = S),
      (l.cryptoKeyToPem = F),
      (l.convertTestKeys = q),
      (l.decryptRSAEncryptedPayload = G),
      (l.decryptRSAEncryptedData = j),
      (l.wrapPayloadWithRSAAESEncryption = Z),
      (l.WAFFLE_AUTH_ENVELOPE_VERSION_V1 = te),
      (l.serializeWaffleEncryptedEnvelope = re),
      (l.encryptPassword = oe),
      (l.computeIdSign = ie),
      (l.importPasswordPublicKey = se));
  },
  98,
);
