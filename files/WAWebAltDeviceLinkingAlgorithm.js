__d(
  "WAWebAltDeviceLinkingAlgorithm",
  [
    "WAArrayBufferUtils",
    "WABinary",
    "WAByteArray",
    "WACryptoHkdf",
    "WALogger",
    "WAWebAltDeviceLinkingBase32Encode",
    "WAWebAltDeviceLinkingQpl",
    "WAWebCryptoCurve25519",
    "WAWebSignalStoreApi",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m() {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "alt pairing: generate random code",
          ])),
      );
      var t = new Uint8Array(5);
      return (
        self.crypto.getRandomValues(t),
        o("WAWebAltDeviceLinkingBase32Encode").bytesToCrockford(t)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            return yield e();
          } catch (e) {
            throw (o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(t), e);
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n === void 0 && (n = !1);
          var r = new (o("WABinary").Binary)(t),
            a = yield self.crypto.subtle.deriveKey(
              {
                name: "PBKDF2",
                hash: "SHA-256",
                salt: r.readBuffer(),
                iterations: 2 << 16,
              },
              e,
              { name: "AES-CTR", length: 256 },
              n,
              ["encrypt", "decrypt"],
            );
          return a;
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "alt pairing: encrypt companion hello",
              ])),
          );
          var r = { name: "AES-CTR", length: 64, counter: t },
            a = yield self.crypto.subtle.encrypt(r, n, e);
          return a;
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t, n) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "alt pairing: decrypt primary hello",
              ])),
          );
          var r = { name: "AES-CTR", length: 64, counter: t },
            a = yield p(function () {
              return self.crypto.subtle.decrypt(r, n, e);
            }, "fail decrypt primary ephemeral pub");
          return a;
        })),
        b.apply(this, arguments)
      );
    }
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = m(),
            t = yield o("WAWebCryptoCurve25519").keyPair(),
            n = new Uint8Array(32);
          self.crypto.getRandomValues(n);
          var r = new Uint8Array(16);
          self.crypto.getRandomValues(r);
          var a = yield R(e, t, n, r);
          return babelHelpers.extends({}, a, { linkCodePairingSecret: e });
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t, n, r) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield self.crypto.subtle.importKey(
                "raw",
                new TextEncoder().encode(e),
                { name: "PBKDF2" },
                !1,
                ["deriveKey"],
              ),
              i = yield f(a, n),
              l = yield p(function () {
                return h(t.pubKey, r, i);
              }, "fail encrypt companion hello"),
              s = new (o("WABinary").Binary)();
            (s.writeByteArray(n),
              s.writeByteArray(r),
              s.writeByteArray(new Uint8Array(l)));
            var u = s.readBuffer();
            return {
              linkCodePairingWrappedCompanionEphemeralPub: u,
              linkCodeKey: a,
              linkCodePairingCompanionADVEphemeralKeyPair: t,
            };
          },
        )),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WACryptoHkdf").extractWithSaltAndExpand(
            e,
            t,
            "link_code_pairing_key_bundle_encryption_key",
            32,
          );
          return n;
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t, n) {
      return o("WAArrayBufferUtils").concatBuffers([
        e,
        t,
        o("WAByteArray").uint8ArrayToBuffer(n),
      ]);
    }
    function T(e, t, n) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "alt pairing: encrypt key bundle",
              ])),
          );
          var r = yield self.crypto.subtle.importKey(
              "raw",
              e,
              { name: "AES-GCM" },
              !1,
              ["encrypt"],
            ),
            a = { name: "AES-GCM", iv: t },
            i = yield p(function () {
              return self.crypto.subtle.encrypt(a, r, n);
            }, "fail encrypt wrapped key bundle");
          return i;
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t, n) {
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "alt pairing: create adv secret material",
          ])),
      );
      var r = o("WAArrayBufferUtils").concatBuffers([
        e,
        t,
        o("WAByteArray").uint8ArrayToBuffer(n),
      ]);
      return r;
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WACryptoHkdf").extractWithSaltAndExpand(
            e,
            null,
            "adv_secret",
            32,
          );
          return t;
        })),
        P.apply(this, arguments)
      );
    }
    function N(e, t, n, r) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i = yield o(
              "WAWebSignalStoreApi",
            ).waSignalStore.getRegistrationInfo();
            if (i == null)
              throw r("err")("alt pairing: Did not find registration info");
            var l = new Uint8Array(32);
            self.crypto.getRandomValues(l);
            var s = new Uint8Array(32);
            self.crypto.getRandomValues(s);
            var u = new Uint8Array(12);
            return (
              self.crypto.getRandomValues(u),
              w(
                e,
                t,
                n,
                a,
                i.identityKeyPair.pubKey,
                i.identityKeyPair.privKey,
                l,
                s,
                u,
              )
            );
          },
        )),
        M.apply(this, arguments)
      );
    }
    function w(e, t, n, r, o, a, i, l, s) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l, s, u, c) {
            var d = new (o("WABinary").Binary)(e),
              m = d.readByteArrayView(32),
              _ = d.readByteArrayView(16),
              g = d.readByteArrayView(),
              h = yield f(n, m),
              y = yield p(function () {
                return C(g, _, h);
              }, "fail decrypt primary ephemeral pub");
            if (y.byteLength === 0)
              throw r("err")(
                "alt pairing: linkCodePairingDecryptedPrimaryEphemeralPub is an empty buffer",
              );
            var b = yield p(function () {
                return o("WAWebCryptoCurve25519").sharedSecret(y, a.privKey);
              }, "fail generate ephemeral shared secret"),
              v = yield E(b, u),
              S = I(i, t, s),
              R = yield T(v, c, S),
              L = new (o("WABinary").Binary)();
            (L.writeByteArray(u), L.writeByteArray(c), L.writeBuffer(R));
            var k = yield p(function () {
                return o("WAWebCryptoCurve25519").sharedSecret(t, l);
              }, "fail generate identity shared secret"),
              D = o("WAArrayBufferUtils").concatBuffers([
                b,
                k,
                o("WAByteArray").uint8ArrayToBuffer(s),
              ]),
              x = yield o("WACryptoHkdf").extractWithSaltAndExpand(
                D,
                null,
                "adv_secret",
                32,
              ),
              $ = L.readBuffer();
            return {
              companionIdentityPublic: i,
              linkCodePairingWrappedKeyBundle: $,
              advSecret: x,
            };
          },
        )),
        A.apply(this, arguments)
      );
    }
    ((l.generateRandomCode = m),
      (l.deriveKey = f),
      (l.encryptCompanionHello = h),
      (l.decryptPrimaryHello = C),
      (l.companionHello = v),
      (l.companionHelloInternal = R),
      (l.getBundleEncryptionKey = E),
      (l.getKeyBundle = I),
      (l.encryptKeyBundle = T),
      (l.createAdvSecretMaterial = x),
      (l.createAdvSecret = $),
      (l.companionFinish = N),
      (l.companionFinishInternal = w));
  },
  98,
);
