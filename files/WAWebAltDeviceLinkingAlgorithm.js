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
    async function p(e, t) {
      try {
        return await e();
      } catch (e) {
        throw (o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(t), e);
      }
    }
    async function _(e, t, n) {
      n === void 0 && (n = !1);
      var r = new (o("WABinary").Binary)(t),
        a = await self.crypto.subtle.deriveKey(
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
    }
    async function f(e, t, n) {
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "alt pairing: encrypt companion hello",
          ])),
      );
      var r = { name: "AES-CTR", length: 64, counter: t },
        a = await self.crypto.subtle.encrypt(r, n, e);
      return a;
    }
    async function g(e, t, n) {
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "alt pairing: decrypt primary hello",
          ])),
      );
      var r = { name: "AES-CTR", length: 64, counter: t },
        a = await p(function () {
          return self.crypto.subtle.decrypt(r, n, e);
        }, "fail decrypt primary ephemeral pub");
      return a;
    }
    async function h() {
      var e = m(),
        t = await o("WAWebCryptoCurve25519").keyPair(),
        n = new Uint8Array(32);
      self.crypto.getRandomValues(n);
      var r = new Uint8Array(16);
      self.crypto.getRandomValues(r);
      var a = await y(e, t, n, r);
      return babelHelpers.extends({}, a, { linkCodePairingSecret: e });
    }
    async function y(e, t, n, r) {
      var a = await self.crypto.subtle.importKey(
          "raw",
          new TextEncoder().encode(e),
          { name: "PBKDF2" },
          !1,
          ["deriveKey"],
        ),
        i = await _(a, n),
        l = await p(function () {
          return f(t.pubKey, r, i);
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
    }
    async function C(e, t) {
      var n = await o("WACryptoHkdf").extractWithSaltAndExpand(
        e,
        t,
        "link_code_pairing_key_bundle_encryption_key",
        32,
      );
      return n;
    }
    function b(e, t, n) {
      return o("WAArrayBufferUtils").concatBuffers([
        e,
        t,
        o("WAByteArray").uint8ArrayToBuffer(n),
      ]);
    }
    async function v(e, t, n) {
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "alt pairing: encrypt key bundle",
          ])),
      );
      var r = await self.crypto.subtle.importKey(
          "raw",
          e,
          { name: "AES-GCM" },
          !1,
          ["encrypt"],
        ),
        a = { name: "AES-GCM", iv: t },
        i = await p(function () {
          return self.crypto.subtle.encrypt(a, r, n);
        }, "fail encrypt wrapped key bundle");
      return i;
    }
    function S(e, t, n) {
      o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
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
    async function R(e) {
      var t = await o("WACryptoHkdf").extractWithSaltAndExpand(
        e,
        null,
        "adv_secret",
        32,
      );
      return t;
    }
    async function L(e) {
      var t = e.linkCodeKey,
        n = e.linkCodePairingCompanionADVEphemeralKeyPair,
        a = e.linkCodePairingWrappedPrimaryEphemeralPub,
        i = e.primaryIdentityPublic,
        l = await o("WAWebSignalStoreApi").waSignalStore.getRegistrationInfo();
      if (l == null)
        throw r("err")("alt pairing: Did not find registration info");
      var s = new Uint8Array(32);
      self.crypto.getRandomValues(s);
      var u = new Uint8Array(32);
      self.crypto.getRandomValues(u);
      var c = new Uint8Array(12);
      return (
        self.crypto.getRandomValues(c),
        E(
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
    }
    async function E(e, t, n, a, i, l, s, u, c) {
      var d = new (o("WABinary").Binary)(e),
        m = d.readByteArrayView(32),
        f = d.readByteArrayView(16),
        h = d.readByteArrayView(),
        y = await _(n, m),
        S = await p(function () {
          return g(h, f, y);
        }, "fail decrypt primary ephemeral pub");
      if (S.byteLength === 0)
        throw r("err")(
          "alt pairing: linkCodePairingDecryptedPrimaryEphemeralPub is an empty buffer",
        );
      var R = await p(function () {
          return o("WAWebCryptoCurve25519").sharedSecret(S, a.privKey);
        }, "fail generate ephemeral shared secret"),
        L = await C(R, u),
        E = b(i, t, s),
        k = await v(L, c, E),
        I = new (o("WABinary").Binary)();
      (I.writeByteArray(u), I.writeByteArray(c), I.writeBuffer(k));
      var T = await p(function () {
          return o("WAWebCryptoCurve25519").sharedSecret(t, l);
        }, "fail generate identity shared secret"),
        D = o("WAArrayBufferUtils").concatBuffers([
          R,
          T,
          o("WAByteArray").uint8ArrayToBuffer(s),
        ]),
        x = await o("WACryptoHkdf").extractWithSaltAndExpand(
          D,
          null,
          "adv_secret",
          32,
        ),
        $ = I.readBuffer();
      return {
        companionIdentityPublic: i,
        linkCodePairingWrappedKeyBundle: $,
        advSecret: x,
      };
    }
    ((l.generateRandomCode = m),
      (l.deriveKey = _),
      (l.encryptCompanionHello = f),
      (l.decryptPrimaryHello = g),
      (l.companionHello = h),
      (l.companionHelloInternal = y),
      (l.getBundleEncryptionKey = C),
      (l.getKeyBundle = b),
      (l.encryptKeyBundle = v),
      (l.createAdvSecretMaterial = S),
      (l.createAdvSecret = R),
      (l.companionFinish = L),
      (l.companionFinishInternal = E));
  },
  98,
);
