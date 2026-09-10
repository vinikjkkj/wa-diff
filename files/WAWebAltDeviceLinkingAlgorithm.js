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
    var e, s, u, c;
    function d() {
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
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            return yield e();
          } catch (e) {
            throw (o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(t), e);
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
        f.apply(this, arguments)
      );
    }
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "alt pairing: encrypt companion hello",
              ])),
          );
          var r = { name: "AES-CTR", length: 64, counter: t },
            a = yield self.crypto.subtle.encrypt(r, n, e);
          return a;
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "alt pairing: decrypt primary hello",
              ])),
          );
          var r = { name: "AES-CTR", length: 64, counter: t },
            a = yield m(function () {
              return self.crypto.subtle.decrypt(r, n, e);
            }, "fail decrypt primary ephemeral pub");
          return a;
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
          var e = d(),
            t = yield o("WAWebCryptoCurve25519").keyPair(),
            n = new Uint8Array(32);
          self.crypto.getRandomValues(n);
          var r = new Uint8Array(16);
          self.crypto.getRandomValues(r);
          var a = yield S(e, t, n, r);
          return babelHelpers.extends({}, a, { linkCodePairingSecret: e });
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t, n, r) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield self.crypto.subtle.importKey(
                "raw",
                new TextEncoder().encode(e),
                { name: "PBKDF2" },
                !1,
                ["deriveKey"],
              ),
              i = yield _(a, n),
              l = yield m(function () {
                return g(t.pubKey, r, i);
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
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WACryptoHkdf").extractWithSaltAndExpand(
            e,
            t,
            "link_code_pairing_key_bundle_encryption_key",
            32,
          );
          return n;
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t, n) {
      return o("WAArrayBufferUtils").concatBuffers([
        e,
        t,
        o("WAByteArray").uint8ArrayToBuffer(n),
      ]);
    }
    function I(e, t, n) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
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
            i = yield m(function () {
              return self.crypto.subtle.encrypt(a, r, n);
            }, "fail encrypt wrapped key bundle");
          return i;
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
          var t = e.linkCodeKey,
            n = e.linkCodePairingCompanionADVEphemeralKeyPair,
            a = e.linkCodePairingWrappedPrimaryEphemeralPub,
            i = e.primaryIdentityPublic,
            l = yield o(
              "WAWebSignalStoreApi",
            ).waSignalStore.getRegistrationInfo();
          if (l == null)
            throw r("err")("alt pairing: Did not find registration info");
          var s = new Uint8Array(32);
          self.crypto.getRandomValues(s);
          var u = new Uint8Array(32);
          self.crypto.getRandomValues(u);
          var c = new Uint8Array(12);
          return (
            self.crypto.getRandomValues(c),
            $(
              a,
              i,
              t,
              n,
              l.identityKeyPair.pubKey,
              l.identityKeyPair.privKey,
              s,
              u,
              c,
            )
          );
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t, n, r, o, a, i, l, s) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l, s, u, c) {
            var d = new (o("WABinary").Binary)(e),
              p = d.readByteArrayView(32),
              f = d.readByteArrayView(16),
              g = d.readByteArrayView(),
              h = yield _(n, p),
              C = yield m(function () {
                return y(g, f, h);
              }, "fail decrypt primary ephemeral pub");
            if (C.byteLength === 0)
              throw r("err")(
                "alt pairing: linkCodePairingDecryptedPrimaryEphemeralPub is an empty buffer",
              );
            var b = yield m(function () {
                return o("WAWebCryptoCurve25519").sharedSecret(C, a.privKey);
              }, "fail generate ephemeral shared secret"),
              v = yield L(b, u),
              S = k(i, t, s),
              R = yield I(v, c, S),
              E = new (o("WABinary").Binary)();
            (E.writeByteArray(u), E.writeByteArray(c), E.writeBuffer(R));
            var T = yield m(function () {
                return o("WAWebCryptoCurve25519").sharedSecret(t, l);
              }, "fail generate identity shared secret"),
              D = o("WAArrayBufferUtils").concatBuffers([
                b,
                T,
                o("WAByteArray").uint8ArrayToBuffer(s),
              ]),
              x = yield o("WACryptoHkdf").extractWithSaltAndExpand(
                D,
                null,
                "adv_secret",
                32,
              ),
              $ = E.readBuffer();
            return {
              companionIdentityPublic: i,
              linkCodePairingWrappedKeyBundle: $,
              advSecret: x,
            };
          },
        )),
        P.apply(this, arguments)
      );
    }
    ((l.generateRandomCode = d),
      (l.deriveKey = _),
      (l.encryptCompanionHello = g),
      (l.decryptPrimaryHello = y),
      (l.companionHello = b),
      (l.companionHelloInternal = S),
      (l.getBundleEncryptionKey = L),
      (l.getKeyBundle = k),
      (l.encryptKeyBundle = I),
      (l.companionFinish = D),
      (l.companionFinishInternal = $));
  },
  98,
);
