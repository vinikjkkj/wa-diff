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
    async function m(e, t) {
      try {
        return await e();
      } catch (e) {
        throw (o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(t), e);
      }
    }
    async function p(e, t, n) {
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
    async function _(e, t, n) {
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
    async function f(e, t, n) {
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "alt pairing: decrypt primary hello",
          ])),
      );
      var r = { name: "AES-CTR", length: 64, counter: t },
        a = await m(function () {
          return self.crypto.subtle.decrypt(r, n, e);
        }, "fail decrypt primary ephemeral pub");
      return a;
    }
    async function g() {
      var e = d(),
        t = await o("WAWebCryptoCurve25519").keyPair(),
        n = new Uint8Array(32);
      self.crypto.getRandomValues(n);
      var r = new Uint8Array(16);
      self.crypto.getRandomValues(r);
      var a = await h(e, t, n, r);
      return babelHelpers.extends({}, a, { linkCodePairingSecret: e });
    }
    async function h(e, t, n, r) {
      var a = await self.crypto.subtle.importKey(
          "raw",
          new TextEncoder().encode(e),
          { name: "PBKDF2" },
          !1,
          ["deriveKey"],
        ),
        i = await p(a, n),
        l = await m(function () {
          return _(t.pubKey, r, i);
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
    async function y(e, t) {
      var n = await o("WACryptoHkdf").extractWithSaltAndExpand(
        e,
        t,
        "link_code_pairing_key_bundle_encryption_key",
        32,
      );
      return n;
    }
    function C(e, t, n) {
      return o("WAArrayBufferUtils").concatBuffers([
        e,
        t,
        o("WAByteArray").uint8ArrayToBuffer(n),
      ]);
    }
    async function b(e, t, n) {
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
        i = await m(function () {
          return self.crypto.subtle.encrypt(a, r, n);
        }, "fail encrypt wrapped key bundle");
      return i;
    }
    async function v(e) {
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
        S({
          companionFinishIV: c,
          companionFinishKdfSalt: u,
          companionIdentityPrivate: l.identityKeyPair.privKey,
          companionIdentityPublic: l.identityKeyPair.pubKey,
          linkCodeKey: t,
          linkCodePairingAdvRootSecret: s,
          linkCodePairingCompanionADVEphemeralKeyPair: n,
          linkCodePairingWrappedPrimaryEphemeralPub: a,
          primaryIdentityPublic: i,
        })
      );
    }
    async function S(e) {
      var t = e.companionFinishIV,
        n = e.companionFinishKdfSalt,
        a = e.companionIdentityPrivate,
        i = e.companionIdentityPublic,
        l = e.linkCodeKey,
        s = e.linkCodePairingAdvRootSecret,
        u = e.linkCodePairingCompanionADVEphemeralKeyPair,
        c = e.linkCodePairingWrappedPrimaryEphemeralPub,
        d = e.primaryIdentityPublic,
        _ = new (o("WABinary").Binary)(c),
        g = _.readByteArrayView(32),
        h = _.readByteArrayView(16),
        v = _.readByteArrayView(),
        S = await p(l, g),
        R = await m(function () {
          return f(v, h, S);
        }, "fail decrypt primary ephemeral pub");
      if (R.byteLength === 0)
        throw r("err")(
          "alt pairing: linkCodePairingDecryptedPrimaryEphemeralPub is an empty buffer",
        );
      var L = await m(function () {
          return o("WAWebCryptoCurve25519").sharedSecret(R, u.privKey);
        }, "fail generate ephemeral shared secret"),
        E = await y(L, n),
        k = C(i, d, s),
        I = await b(E, t, k),
        T = new (o("WABinary").Binary)();
      (T.writeByteArray(n), T.writeByteArray(t), T.writeBuffer(I));
      var D = await m(function () {
          return o("WAWebCryptoCurve25519").sharedSecret(d, a);
        }, "fail generate identity shared secret"),
        x = o("WAArrayBufferUtils").concatBuffers([
          L,
          D,
          o("WAByteArray").uint8ArrayToBuffer(s),
        ]),
        $ = await o("WACryptoHkdf").extractWithSaltAndExpand(
          x,
          null,
          "adv_secret",
          32,
        ),
        P = T.readBuffer();
      return {
        companionIdentityPublic: i,
        linkCodePairingWrappedKeyBundle: P,
        advSecret: $,
      };
    }
    ((l.generateRandomCode = d),
      (l.deriveKey = p),
      (l.encryptCompanionHello = _),
      (l.decryptPrimaryHello = f),
      (l.companionHello = g),
      (l.companionHelloInternal = h),
      (l.getBundleEncryptionKey = y),
      (l.getKeyBundle = C),
      (l.encryptKeyBundle = b),
      (l.companionFinish = v),
      (l.companionFinishInternal = S));
  },
  98,
);
