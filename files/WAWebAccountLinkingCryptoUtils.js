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
    "WAWebRSAPublicKeyDer",
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
      p = "Facebook Rootcanal Prod Root CA",
      _ = 16,
      f = 16,
      g = "#PWD_WAFFLE",
      h = 12,
      y = 1,
      C = 255;
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        v.apply(this, arguments)
      );
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return self.crypto.subtle.generateKey(
            { name: "AES-GCM", length: 256 },
            !0,
            ["encrypt", "decrypt"],
          );
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            return yield k(t);
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
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e[0],
            n = e[1],
            a,
            i;
          if (t.subject.isEqual(n.issuer)) ((a = t), (i = n));
          else if (n.subject.isEqual(t.issuer)) ((a = n), (i = t));
          else throw r("err")("[WAFFLE] Certificates do not form a chain");
          var l = yield x(a),
            s = yield o("WAWebX509Utils").validateCertificates([a, i], [l]);
          if (!s.result)
            throw r("err")(
              "[WAFFLE] Certificate chain signature validation failed",
            );
          return i;
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
          t === void 0 && (t = "SHA-1");
          var n = yield o("WAWebX509Utils").extractCertificates(e);
          if (n.length !== 2)
            throw r("err")(
              "[WAFFLE] Payload encryption certificate chain is invalid",
            );
          var a = yield L(n);
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
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = P(e.issuer);
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
            N(o("WAWebAccountLinkingConstants").ProdRootCertificatePem)
          );
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      var t;
      return (t = e.typesAndValues.find(function (e) {
        var t = e.type;
        return t === m;
      })) == null
        ? void 0
        : t.value.valueBlock.value;
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = "-----BEGIN CERTIFICATE-----",
            n = "-----END CERTIFICATE-----",
            a = t + "\n" + e + "\n" + n,
            i = yield o("WAWebX509Utils").extractCertificates(a);
          if (i.length !== 1)
            throw r("err")("[WAFFLE] Root certificate failed extraction");
          return i[0];
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new TextEncoder(),
            n = t.encode(e),
            r = self.crypto.getRandomValues(new Uint8Array(12)),
            o = yield S(),
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
        A.apply(this, arguments)
      );
    }
    function F(e, t, n, r) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(
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
        O.apply(this, arguments)
      );
    }
    function B(e, t) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return self.crypto.subtle.encrypt(
            { name: "RSA-OAEP", padding: "OAEP" },
            e,
            t,
          );
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
          return self.crypto.subtle.decrypt(
            { name: "RSA-OAEP", padding: "OAEP" },
            e,
            t,
          );
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
        H.apply(this, arguments)
      );
    }
    function G(e, t, n) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
        z.apply(this, arguments)
      );
    }
    function j(e, t) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield G(e, !1, ["encrypt"]),
            r = yield G(t, !0, ["decrypt"]);
          return { publicKey: n, privateKey: r };
        })),
        K.apply(this, arguments)
      );
    }
    function Q(e) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield self.crypto.subtle.exportKey("raw", e);
          return new Uint8Array(t);
        })),
        X.apply(this, arguments)
      );
    }
    function Y(e, t, n, r, o) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            try {
              var l = yield te(e, t, n, a, i);
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
        J.apply(this, arguments)
      );
    }
    function Z(e) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.data,
            n = e.key,
            a = e.nonce,
            i = e.privateKey,
            l = e.tag;
          try {
            return yield te(i, n, t, a, l);
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
        ee.apply(this, arguments)
      );
    }
    function te(e, t, n, r, o) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, o, a) {
            var i = yield q(e, t),
              l = yield re(i),
              s = yield F(l, n, o, a),
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
        ne.apply(this, arguments)
      );
    }
    function re(e) {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield self.crypto.subtle.importKey("raw", e, "AES-GCM", !0, [
            "encrypt",
            "decrypt",
          ]);
          return t;
        })),
        oe.apply(this, arguments)
      );
    }
    function ae(e, t) {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t;
          if (n == null) {
            var a = yield o("WAWebAccountLinkingAPI").fetchValidCertificate();
            if (a == null)
              throw r("err")("[WAFFLE] fetchValidCertificate failed");
            n = a.encryptionKey;
          }
          var i = yield w(JSON.stringify(e)),
            l = i.cipherText,
            s = i.iv,
            u = i.key,
            c = i.tag,
            d = yield Q(u),
            m = yield B(n, d);
          return { tag: c, nonce: s, cipherText: l, encryptedKey: m };
        })),
        ie.apply(this, arguments)
      );
    }
    function le(e, t, n) {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r = yield o("WAWebRSAPublicKeyDer").getRSAPublicKeyDer(t),
              a = new Uint8Array(f),
              i = yield S(),
              l = yield self.crypto.subtle.encrypt(
                { name: "AES-GCM", additionalData: r, iv: a, tagLength: _ * 8 },
                i,
                new TextEncoder().encode(JSON.stringify(e)),
              ),
              s = new Uint8Array(l),
              u = yield Q(i),
              c = new Uint8Array(
                yield self.crypto.subtle.encrypt({ name: "RSA-OAEP" }, t, u),
              );
            return {
              cipherText: s.slice(0, -_),
              encryptedKey: c,
              keyId: n,
              tag: s.slice(-_),
            };
          },
        )),
        se.apply(this, arguments)
      );
    }
    function ue(e, t) {
      return ce.apply(this, arguments);
    }
    function ce() {
      return (
        (ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n =
            t != null
              ? t
              : yield o("WAWebAccountLinkingAPI").fetchValidCertificate();
          if (n == null)
            throw r("err")("[WAFFLE] fetchValidCertificate failed");
          var a = n.encryptionKey,
            i = n.payloadEncryptionKeyV2,
            l = n.payloadKeyId;
          return l == null || i == null
            ? { params: yield ae(e, a), version: 1 }
            : { params: yield le(e, i, l), version: 2 };
        })),
        ce.apply(this, arguments)
      );
    }
    var de = 1,
      me = "rsa2048";
    function pe(e) {
      var t;
      return JSON.stringify({
        algorithm: me,
        auth_tag: (t = o("WABase64")).encodeB64(e.tag),
        encrypted_data: t.encodeB64(e.cipherText),
        encrypted_key: t.encodeB64(e.encryptedKey),
        nonce: t.encodeB64(e.nonce),
        v: de,
      });
    }
    function _e(e, t, n) {
      return fe.apply(this, arguments);
    }
    function fe() {
      return (
        (fe = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r = new TextEncoder(),
              a = r.encode(e),
              i = self.crypto.getRandomValues(new Uint8Array(12)),
              l = yield S(),
              s = yield self.crypto.subtle.encrypt(
                { name: "AES-GCM", iv: i, length: 256 },
                l,
                a,
              ),
              u = new Uint8Array(s),
              c = u.slice(-16),
              d = u.slice(0, -16),
              m = yield Q(l),
              p = yield o("WAWebRSAPkcs1v15").rsaPkcs1v15Encrypt(t, m),
              _ = p.length,
              f = 16 + _ + 16 + d.length,
              g = new Uint8Array(f),
              h = 0,
              y = new DataView(g.buffer);
            ((g[h++] = 1),
              (g[h++] = n % 256),
              g.set(i, h),
              (h += 12),
              y.setUint16(h, _, !0),
              (h += 2),
              g.set(p, h),
              (h += _),
              g.set(c, h),
              (h += 16),
              g.set(d, h));
            var C = o("WABase64").encodeB64UrlSafe(g),
              b = Math.floor(Date.now() / 1e3);
            return "#PWD_WA:11:" + b + ":" + C;
          },
        )),
        fe.apply(this, arguments)
      );
    }
    function ge(e, t, n) {
      return he.apply(this, arguments);
    }
    function he() {
      return (
        (he = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            if (!Number.isInteger(n) || n < 0 || n > C)
              throw r("err")(
                "[WAFFLE] password key_id " +
                  n +
                  " does not fit the CSPE Format 1 single-byte field",
              );
            var a = new TextEncoder(),
              i = Math.floor(Date.now() / 1e3),
              l = a.encode(String(i)),
              s = new Uint8Array(f),
              u = yield S(),
              c = yield self.crypto.subtle.encrypt(
                { name: "AES-GCM", additionalData: l, iv: s, tagLength: _ * 8 },
                u,
                a.encode(e),
              ),
              d = new Uint8Array(c),
              m = d.slice(-_),
              p = d.slice(0, -_),
              y = yield Q(u),
              b = new Uint8Array(
                yield self.crypto.subtle.encrypt({ name: "RSA-OAEP" }, t, y),
              ),
              v = ye(n, b, m, p);
            return (
              g + ":" + h + ":" + i + ":" + o("WABase64").encodeB64UrlSafe(v)
            );
          },
        )),
        he.apply(this, arguments)
      );
    }
    function ye(e, t, n, r) {
      var o = t.length,
        a = new Uint8Array(4 + o + _ + r.length),
        i = new DataView(a.buffer),
        l = 0;
      return (
        (a[l++] = y),
        (a[l++] = e),
        i.setUint16(l, o, !0),
        (l += 2),
        a.set(t, l),
        (l += o),
        a.set(n, l),
        (l += _),
        a.set(r, l),
        a
      );
    }
    function Ce(e) {
      return be.apply(this, arguments);
    }
    function be() {
      return (
        (be = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        be.apply(this, arguments)
      );
    }
    function ve(e, t) {
      return Se.apply(this, arguments);
    }
    function Se() {
      return (
        (Se = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if ((t === void 0 && (t = "SHA-1"), e.length === 0))
            throw r("err")("Empty PEM string");
          var n = "-----BEGIN PUBLIC KEY-----",
            o = "-----END PUBLIC KEY-----",
            a = e;
          (e.includes(n) &&
            (a = e.substring(e.indexOf(n) + n.length, e.indexOf(o))),
            (a = a.replace(/\s/g, "")));
          for (
            var i = atob(a), l = new Uint8Array(i.length), s = 0;
            s < i.length;
            s++
          )
            l[s] = i.charCodeAt(s);
          return self.crypto.subtle.importKey(
            "spki",
            l,
            { name: "RSA-OAEP", hash: t },
            !0,
            ["encrypt"],
          );
        })),
        Se.apply(this, arguments)
      );
    }
    ((l.generateRSAKeys = b),
      (l.generateAESKey = S),
      (l.validateCertificateChain = L),
      (l.importPayloadEncryptionKey = T),
      (l.cryptoKeyToPem = V),
      (l.convertTestKeys = j),
      (l.decryptRSAEncryptedPayload = Y),
      (l.decryptRSAEncryptedData = Z),
      (l.wrapPayloadWithRSAAESEncryption = ae),
      (l.wrapPayloadWithRSAAESEncryptionV2 = le),
      (l.wrapWafflePayload = ue),
      (l.WAFFLE_AUTH_ENVELOPE_VERSION_V1 = de),
      (l.serializeWaffleEncryptedEnvelope = pe),
      (l.encryptPassword = _e),
      (l.encryptPasswordWithOaep = ge),
      (l.computeIdSign = Ce),
      (l.importPasswordPublicKey = ve));
  },
  98,
);
