__d(
  "WAWebAccountLinkingCryptoUtils",
  [
    "WABase64",
    "WALogger",
    "WAWebAccountLinkingConstants",
    "WAWebCryptoCurve25519CalculateSignature",
    "WAWebFeaturePkiRootCertificate",
    "WAWebRSAPkcs1v15",
    "WAWebRSAPublicKeyDer",
    "WAWebSignalProtocolStore",
    "WAWebWaffleCertificateDiagnostics",
    "WAWebX509Utils",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = r("requireDeferred")("WAWebAccountLinkingAPI").__setRef(
        "WAWebAccountLinkingCryptoUtils",
      ),
      p = "2.5.4.3",
      _ = "Facebook Rootcanal Prod Root CA",
      f = 16,
      g = 16,
      h = 512,
      y = "#PWD_WAFFLE",
      C = 12,
      b = 1,
      v = 255;
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        R.apply(this, arguments)
      );
    }
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return self.crypto.subtle.generateKey(
            { name: "AES-GCM", length: 256 },
            !0,
            ["encrypt", "decrypt"],
          );
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = { checkedAtMs: null, resultCode: null, validity: {} };
          try {
            return yield T(t, a);
          } catch (t) {
            return (
              o(
                "WAWebWaffleCertificateDiagnostics",
              ).logCertificateValidationDiagnostic(n, a),
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
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e[0],
            a = e[1],
            i,
            l;
          if (n.subject.isEqual(a.issuer)) ((i = n), (l = a));
          else if (a.subject.isEqual(n.issuer)) ((i = a), (l = n));
          else throw r("err")("[WAFFLE] Certificates do not form a chain");
          t.validity = { leaf: l, intermediate: i };
          var s = yield P(i);
          t.validity.root = s;
          var u = yield o("WAWebX509Utils").validateCertificates(
            [i, l],
            [s],
            function (e) {
              t.checkedAtMs = e;
            },
          );
          if (((t.resultCode = u.resultCode), !u.result))
            throw r("err")(
              "[WAFFLE] Certificate chain validation failed (" +
                u.resultCode +
                "): " +
                u.resultMessage,
            );
          return l;
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
          t === void 0 && (t = "SHA-1");
          var n = yield o("WAWebX509Utils").extractCertificates(e);
          if (n.length !== 2)
            throw r("err")(
              "[WAFFLE] Payload encryption certificate chain is invalid",
            );
          var a = yield k(n, { source: "unknown", role: "payload" });
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
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = M(e.issuer);
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
            t !== _ &&
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
            w(o("WAWebAccountLinkingConstants").ProdRootCertificatePem)
          );
        })),
        N.apply(this, arguments)
      );
    }
    function M(e) {
      var t;
      return (t = e.typesAndValues.find(function (e) {
        var t = e.type;
        return t === p;
      })) == null
        ? void 0
        : t.value.valueBlock.value;
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = "-----BEGIN CERTIFICATE-----",
            n = "-----END CERTIFICATE-----",
            a = t + "\n" + e + "\n" + n,
            i = yield o("WAWebX509Utils").extractCertificates(a);
          if (i.length !== 1)
            throw r("err")("[WAFFLE] Root certificate failed extraction");
          return i[0];
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
          var t = new TextEncoder(),
            n = t.encode(e),
            r = self.crypto.getRandomValues(new Uint8Array(12)),
            o = yield L(),
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
        O.apply(this, arguments)
      );
    }
    function B(e, t, n, r) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(
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
        W.apply(this, arguments)
      );
    }
    function q(e, t) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return self.crypto.subtle.encrypt(
            { name: "RSA-OAEP", padding: "OAEP" },
            e,
            t,
          );
        })),
        U.apply(this, arguments)
      );
    }
    function V(e, t) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return self.crypto.subtle.decrypt(
            { name: "RSA-OAEP", padding: "OAEP" },
            e,
            t.slice(),
          );
        })),
        H.apply(this, arguments)
      );
    }
    function G(e) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        z.apply(this, arguments)
      );
    }
    function j(e, t, n) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
        K.apply(this, arguments)
      );
    }
    function Q(e, t) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield j(e, !1, ["encrypt"]),
            r = yield j(t, !0, ["decrypt"]);
          return { publicKey: n, privateKey: r };
        })),
        X.apply(this, arguments)
      );
    }
    function Y(e) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield self.crypto.subtle.exportKey("raw", e);
          return new Uint8Array(t);
        })),
        J.apply(this, arguments)
      );
    }
    function Z(e, t, n, r, o) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            try {
              var l = yield re({
                data: n,
                key: t,
                nonce: a,
                privateKey: e,
                tag: i,
              });
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
        ee.apply(this, arguments)
      );
    }
    function te(e) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.data,
            n = e.key,
            a = e.nonce,
            i = e.privateKey,
            l = e.tag;
          try {
            return yield re({
              data: t,
              key: n,
              nonce: a,
              privateKey: i,
              tag: l,
            });
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
        ne.apply(this, arguments)
      );
    }
    function re(e) {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.data,
            n = e.key,
            o = e.nonce,
            a = e.privateKey,
            i = e.tag,
            l = yield V(a, n),
            s = yield ae(l),
            u = yield B(s, t, o, i),
            c = new TextDecoder("utf-8").decode(u),
            d = JSON.parse(c),
            m = d.data;
          if (typeof m != "string")
            throw r("err")(
              "[WAFFLE] Decrypted RSA payload data is not a string",
            );
          return m;
        })),
        oe.apply(this, arguments)
      );
    }
    function ae(e) {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield self.crypto.subtle.importKey("raw", e, "AES-GCM", !0, [
            "encrypt",
            "decrypt",
          ]);
          return t;
        })),
        ie.apply(this, arguments)
      );
    }
    function le(e, t) {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t;
          if (n == null) {
            var o = yield m.load(),
              a = o.fetchValidCertificate,
              i = yield a();
            if (i == null)
              throw r("err")("[WAFFLE] fetchValidCertificate failed");
            n = i.encryptionKey;
          }
          var l = yield F(JSON.stringify(e)),
            s = l.cipherText,
            u = l.iv,
            c = l.key,
            d = l.tag,
            p = yield Y(c),
            _ = yield q(n, p);
          return { tag: d, nonce: u, cipherText: s, encryptedKey: _ };
        })),
        se.apply(this, arguments)
      );
    }
    function ue(e, t, n) {
      return ce.apply(this, arguments);
    }
    function ce() {
      return (
        (ce = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var a = yield o("WAWebRSAPublicKeyDer").getRSAPublicKeyDer(t),
              i = new Uint8Array(g),
              l = yield L(),
              s = yield self.crypto.subtle.encrypt(
                { name: "AES-GCM", additionalData: a, iv: i, tagLength: f * 8 },
                l,
                new TextEncoder().encode(JSON.stringify(e)),
              ),
              u = new Uint8Array(s),
              c = yield Y(l),
              d = new Uint8Array(
                yield self.crypto.subtle.encrypt({ name: "RSA-OAEP" }, t, c),
              );
            if (d.length !== h)
              throw r("err")(
                "[WAFFLE] PKI V2 needs a 4096-bit payload key, got a " +
                  d.length * 8 +
                  "-bit wrap",
              );
            return {
              cipherText: u.slice(0, -f),
              encryptedKey: d,
              keyId: n,
              tag: u.slice(-f),
            };
          },
        )),
        ce.apply(this, arguments)
      );
    }
    function de(e, t) {
      return me.apply(this, arguments);
    }
    function me() {
      return (
        (me = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t;
          if (n == null) {
            var o = yield m.load(),
              a = o.fetchValidCertificate;
            n = yield a();
          }
          if (n == null)
            throw r("err")("[WAFFLE] fetchValidCertificate failed");
          var i = n,
            l = i.encryptionKey,
            s = i.payloadEncryptionKeyV2,
            u = i.payloadKeyId;
          return u == null || s == null
            ? { params: yield le(e, l), version: 1 }
            : { params: yield ue(e, s, u), version: 2 };
        })),
        me.apply(this, arguments)
      );
    }
    var pe = 1,
      _e = 2,
      fe = "rsa2048",
      ge = "rsa4096";
    function he(e) {
      if (e.version === 2) {
        var t = e.params;
        return JSON.stringify({
          algorithm: ge,
          auth_tag: o("WABase64").encodeB64(t.tag),
          encrypted_data: o("WABase64").encodeB64(t.cipherText),
          encrypted_key: o("WABase64").encodeB64(t.encryptedKey),
          key_id: t.keyId,
          v: _e,
        });
      }
      var n = e.params;
      return JSON.stringify({
        algorithm: fe,
        auth_tag: o("WABase64").encodeB64(n.tag),
        encrypted_data: o("WABase64").encodeB64(n.cipherText),
        encrypted_key: o("WABase64").encodeB64(n.encryptedKey),
        nonce: o("WABase64").encodeB64(n.nonce),
        v: pe,
      });
    }
    function ye(e, t, n) {
      return Ce.apply(this, arguments);
    }
    function Ce() {
      return (
        (Ce = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r = new TextEncoder(),
              a = r.encode(e),
              i = self.crypto.getRandomValues(new Uint8Array(12)),
              l = yield L(),
              s = yield self.crypto.subtle.encrypt(
                { name: "AES-GCM", iv: i, length: 256 },
                l,
                a,
              ),
              u = new Uint8Array(s),
              c = u.slice(-16),
              d = u.slice(0, -16),
              m = yield Y(l),
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
        Ce.apply(this, arguments)
      );
    }
    function be(e, t, n) {
      return ve.apply(this, arguments);
    }
    function ve() {
      return (
        (ve = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            if (!Number.isInteger(n) || n < 0 || n > v)
              throw r("err")(
                "[WAFFLE] password key_id " +
                  n +
                  " does not fit the CSPE Format 1 single-byte field",
              );
            var a = new TextEncoder(),
              i = Math.floor(Date.now() / 1e3),
              l = a.encode(String(i)),
              s = new Uint8Array(g),
              u = yield L(),
              c = yield self.crypto.subtle.encrypt(
                { name: "AES-GCM", additionalData: l, iv: s, tagLength: f * 8 },
                u,
                a.encode(e),
              ),
              d = new Uint8Array(c),
              m = d.slice(-f),
              p = d.slice(0, -f),
              _ = yield Y(u),
              h = new Uint8Array(
                yield self.crypto.subtle.encrypt({ name: "RSA-OAEP" }, t, _),
              ),
              b = Se(n, h, m, p);
            return (
              y + ":" + C + ":" + i + ":" + o("WABase64").encodeB64UrlSafe(b)
            );
          },
        )),
        ve.apply(this, arguments)
      );
    }
    function Se(e, t, n, r) {
      var o = t.length,
        a = new Uint8Array(4 + o + f + r.length),
        i = new DataView(a.buffer),
        l = 0;
      return (
        (a[l++] = b),
        (a[l++] = e),
        i.setUint16(l, o, !0),
        (l += 2),
        a.set(t, l),
        (l += o),
        a.set(n, l),
        (l += f),
        a.set(r, l),
        a
      );
    }
    function Re(e) {
      return Le.apply(this, arguments);
    }
    function Le() {
      return (
        (Le = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        Le.apply(this, arguments)
      );
    }
    function Ee(e, t) {
      return ke.apply(this, arguments);
    }
    function ke() {
      return (
        (ke = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        ke.apply(this, arguments)
      );
    }
    ((l.generateRSAKeys = S),
      (l.generateAESKey = L),
      (l.validateCertificateChain = k),
      (l.importPayloadEncryptionKey = x),
      (l.cryptoKeyToPem = G),
      (l.convertTestKeys = Q),
      (l.decryptRSAEncryptedPayload = Z),
      (l.decryptRSAEncryptedData = te),
      (l.wrapPayloadWithRSAAESEncryption = le),
      (l.wrapPayloadWithRSAAESEncryptionV2 = ue),
      (l.wrapWafflePayload = de),
      (l.WAFFLE_AUTH_ENVELOPE_VERSION_V1 = pe),
      (l.WAFFLE_AUTH_ENVELOPE_VERSION_V2 = _e),
      (l.serializeWaffleEncryptedEnvelope = he),
      (l.encryptPassword = ye),
      (l.encryptPasswordWithOaep = be),
      (l.computeIdSign = Re),
      (l.importPasswordPublicKey = Ee));
  },
  98,
);
