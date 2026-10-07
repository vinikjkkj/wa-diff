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
      g = 512,
      h = "#PWD_WAFFLE",
      y = 12,
      C = 1,
      b = 255;
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        S.apply(this, arguments)
      );
    }
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return self.crypto.subtle.generateKey(
            { name: "AES-GCM", length: 256 },
            !0,
            ["encrypt", "decrypt"],
          );
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            return yield I(t);
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
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e[0],
            n = e[1],
            a,
            i;
          if (t.subject.isEqual(n.issuer)) ((a = t), (i = n));
          else if (n.subject.isEqual(t.issuer)) ((a = n), (i = t));
          else throw r("err")("[WAFFLE] Certificates do not form a chain");
          var l = yield $(a),
            s = yield o("WAWebX509Utils").validateCertificates([a, i], [l]);
          if (!s.result)
            throw r("err")(
              "[WAFFLE] Certificate chain signature validation failed",
            );
          return i;
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = "SHA-1");
          var n = yield o("WAWebX509Utils").extractCertificates(e);
          if (n.length !== 2)
            throw r("err")(
              "[WAFFLE] Payload encryption certificate chain is invalid",
            );
          var a = yield E(n);
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
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = N(e.issuer);
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
            M(o("WAWebAccountLinkingConstants").ProdRootCertificatePem)
          );
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      var t;
      return (t = e.typesAndValues.find(function (e) {
        var t = e.type;
        return t === m;
      })) == null
        ? void 0
        : t.value.valueBlock.value;
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = "-----BEGIN CERTIFICATE-----",
            n = "-----END CERTIFICATE-----",
            a = t + "\n" + e + "\n" + n,
            i = yield o("WAWebX509Utils").extractCertificates(a);
          if (i.length !== 1)
            throw r("err")("[WAFFLE] Root certificate failed extraction");
          return i[0];
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
          var t = new TextEncoder(),
            n = t.encode(e),
            r = self.crypto.getRandomValues(new Uint8Array(12)),
            o = yield R(),
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
        F.apply(this, arguments)
      );
    }
    function O(e, t, n, r) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(
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
        B.apply(this, arguments)
      );
    }
    function W(e, t) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return self.crypto.subtle.encrypt(
            { name: "RSA-OAEP", padding: "OAEP" },
            e,
            t,
          );
        })),
        q.apply(this, arguments)
      );
    }
    function U(e, t) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return self.crypto.subtle.decrypt(
            { name: "RSA-OAEP", padding: "OAEP" },
            e,
            t,
          );
        })),
        V.apply(this, arguments)
      );
    }
    function H(e) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        G.apply(this, arguments)
      );
    }
    function z(e, t, n) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
        j.apply(this, arguments)
      );
    }
    function K(e, t) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield z(e, !1, ["encrypt"]),
            r = yield z(t, !0, ["decrypt"]);
          return { publicKey: n, privateKey: r };
        })),
        Q.apply(this, arguments)
      );
    }
    function X(e) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield self.crypto.subtle.exportKey("raw", e);
          return new Uint8Array(t);
        })),
        Y.apply(this, arguments)
      );
    }
    function J(e, t, n, r, o) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            try {
              var l = yield ne(e, t, n, a, i);
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
        Z.apply(this, arguments)
      );
    }
    function ee(e) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.data,
            n = e.key,
            a = e.nonce,
            i = e.privateKey,
            l = e.tag;
          try {
            return yield ne(i, n, t, a, l);
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
        te.apply(this, arguments)
      );
    }
    function ne(e, t, n, r, o) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, o, a) {
            var i = yield U(e, t),
              l = yield oe(i),
              s = yield O(l, n, o, a),
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
        re.apply(this, arguments)
      );
    }
    function oe(e) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield self.crypto.subtle.importKey("raw", e, "AES-GCM", !0, [
            "encrypt",
            "decrypt",
          ]);
          return t;
        })),
        ae.apply(this, arguments)
      );
    }
    function ie(e, t) {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t;
          if (n == null) {
            var a = yield o("WAWebAccountLinkingAPI").fetchValidCertificate();
            if (a == null)
              throw r("err")("[WAFFLE] fetchValidCertificate failed");
            n = a.encryptionKey;
          }
          var i = yield A(JSON.stringify(e)),
            l = i.cipherText,
            s = i.iv,
            u = i.key,
            c = i.tag,
            d = yield X(u),
            m = yield W(n, d);
          return { tag: c, nonce: s, cipherText: l, encryptedKey: m };
        })),
        le.apply(this, arguments)
      );
    }
    function se(e, t, n) {
      return ue.apply(this, arguments);
    }
    function ue() {
      return (
        (ue = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var a = yield o("WAWebRSAPublicKeyDer").getRSAPublicKeyDer(t),
              i = new Uint8Array(f),
              l = yield R(),
              s = yield self.crypto.subtle.encrypt(
                { name: "AES-GCM", additionalData: a, iv: i, tagLength: _ * 8 },
                l,
                new TextEncoder().encode(JSON.stringify(e)),
              ),
              u = new Uint8Array(s),
              c = yield X(l),
              d = new Uint8Array(
                yield self.crypto.subtle.encrypt({ name: "RSA-OAEP" }, t, c),
              );
            if (d.length !== g)
              throw r("err")(
                "[WAFFLE] PKI V2 needs a 4096-bit payload key, got a " +
                  d.length * 8 +
                  "-bit wrap",
              );
            return {
              cipherText: u.slice(0, -_),
              encryptedKey: d,
              keyId: n,
              tag: u.slice(-_),
            };
          },
        )),
        ue.apply(this, arguments)
      );
    }
    function ce(e, t) {
      return de.apply(this, arguments);
    }
    function de() {
      return (
        (de = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            ? { params: yield ie(e, a), version: 1 }
            : { params: yield se(e, i, l), version: 2 };
        })),
        de.apply(this, arguments)
      );
    }
    var me = 1,
      pe = 2,
      _e = "rsa2048",
      fe = "rsa4096";
    function ge(e) {
      if (e.version === 2) {
        var t = e.params;
        return JSON.stringify({
          algorithm: fe,
          auth_tag: o("WABase64").encodeB64(t.tag),
          encrypted_data: o("WABase64").encodeB64(t.cipherText),
          encrypted_key: o("WABase64").encodeB64(t.encryptedKey),
          key_id: t.keyId,
          v: pe,
        });
      }
      var n = e.params;
      return JSON.stringify({
        algorithm: _e,
        auth_tag: o("WABase64").encodeB64(n.tag),
        encrypted_data: o("WABase64").encodeB64(n.cipherText),
        encrypted_key: o("WABase64").encodeB64(n.encryptedKey),
        nonce: o("WABase64").encodeB64(n.nonce),
        v: me,
      });
    }
    function he(e, t, n) {
      return ye.apply(this, arguments);
    }
    function ye() {
      return (
        (ye = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r = new TextEncoder(),
              a = r.encode(e),
              i = self.crypto.getRandomValues(new Uint8Array(12)),
              l = yield R(),
              s = yield self.crypto.subtle.encrypt(
                { name: "AES-GCM", iv: i, length: 256 },
                l,
                a,
              ),
              u = new Uint8Array(s),
              c = u.slice(-16),
              d = u.slice(0, -16),
              m = yield X(l),
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
        ye.apply(this, arguments)
      );
    }
    function Ce(e, t, n) {
      return be.apply(this, arguments);
    }
    function be() {
      return (
        (be = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            if (!Number.isInteger(n) || n < 0 || n > b)
              throw r("err")(
                "[WAFFLE] password key_id " +
                  n +
                  " does not fit the CSPE Format 1 single-byte field",
              );
            var a = new TextEncoder(),
              i = Math.floor(Date.now() / 1e3),
              l = a.encode(String(i)),
              s = new Uint8Array(f),
              u = yield R(),
              c = yield self.crypto.subtle.encrypt(
                { name: "AES-GCM", additionalData: l, iv: s, tagLength: _ * 8 },
                u,
                a.encode(e),
              ),
              d = new Uint8Array(c),
              m = d.slice(-_),
              p = d.slice(0, -_),
              g = yield X(u),
              C = new Uint8Array(
                yield self.crypto.subtle.encrypt({ name: "RSA-OAEP" }, t, g),
              ),
              v = ve(n, C, m, p);
            return (
              h + ":" + y + ":" + i + ":" + o("WABase64").encodeB64UrlSafe(v)
            );
          },
        )),
        be.apply(this, arguments)
      );
    }
    function ve(e, t, n, r) {
      var o = t.length,
        a = new Uint8Array(4 + o + _ + r.length),
        i = new DataView(a.buffer),
        l = 0;
      return (
        (a[l++] = C),
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
    function Se(e) {
      return Re.apply(this, arguments);
    }
    function Re() {
      return (
        (Re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        Re.apply(this, arguments)
      );
    }
    function Le(e, t) {
      return Ee.apply(this, arguments);
    }
    function Ee() {
      return (
        (Ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        Ee.apply(this, arguments)
      );
    }
    ((l.generateRSAKeys = v),
      (l.generateAESKey = R),
      (l.validateCertificateChain = E),
      (l.importPayloadEncryptionKey = D),
      (l.cryptoKeyToPem = H),
      (l.convertTestKeys = K),
      (l.decryptRSAEncryptedPayload = J),
      (l.decryptRSAEncryptedData = ee),
      (l.wrapPayloadWithRSAAESEncryption = ie),
      (l.wrapPayloadWithRSAAESEncryptionV2 = se),
      (l.wrapWafflePayload = ce),
      (l.WAFFLE_AUTH_ENVELOPE_VERSION_V1 = me),
      (l.WAFFLE_AUTH_ENVELOPE_VERSION_V2 = pe),
      (l.serializeWaffleEncryptedEnvelope = ge),
      (l.encryptPassword = he),
      (l.encryptPasswordWithOaep = Ce),
      (l.computeIdSign = Se),
      (l.importPasswordPublicKey = Le));
  },
  98,
);
