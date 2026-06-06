__d(
  "WAWebShortcakeLinkingAlgorithm",
  [
    "WAArrayBufferUtils",
    "WAByteArray",
    "WACryptoAesGcm",
    "WACryptoHkdf",
    "WACryptoSha256",
    "WAWebAltDeviceLinkingBase32Encode",
    "WAWebCryptoCurve25519",
    "WAWebProtobufsCompanionReg.pb",
    "encodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 32,
      s = 5,
      u = 12,
      c = 32,
      d = "Pairing Information Encryption Key";
    async function m(t, n) {
      var r = await o("WAWebCryptoCurve25519").keyPair(),
        a = new Uint8Array(e);
      self.crypto.getRandomValues(a);
      var i = o("encodeProtobuf")
          .encodeProtobuf(
            o("WAWebProtobufsCompanionReg.pb").CompanionEphemeralIdentitySpec,
            { publicKey: r.pubKey, deviceType: n, ref: t },
          )
          .readBuffer(),
        l = await p(i, a),
        s = o("encodeProtobuf")
          .encodeProtobuf(
            o("WAWebProtobufsCompanionReg.pb").ProloguePayloadSpec,
            { companionEphemeralIdentity: i, commitment: { hash: l } },
          )
          .readBuffer();
      return {
        keypair: r,
        companionNonce: a,
        companionEphemeralIdentityBytes: i,
        companionCommitmentHash: l,
        prologuePayloadBytes: s,
      };
    }
    async function p(e, t) {
      var n = o("WAArrayBufferUtils").concatBuffers([
        e,
        o("WAByteArray").uint8ArrayToBuffer(t),
      ]);
      return o("WACryptoSha256").sha256(n);
    }
    async function _(e, t) {
      var n = t.nonce,
        o = t.publicKey;
      if (o == null || o.byteLength !== 32)
        throw r("err")(
          "Shortcake: PrimaryEphemeralIdentity.publicKey must be 32 bytes",
        );
      if (n == null || n.byteLength !== 32)
        throw r("err")(
          "Shortcake: PrimaryEphemeralIdentity.nonce must be 32 bytes",
        );
      return f(e, new Uint8Array(o), new Uint8Array(n));
    }
    async function f(e, t, n) {
      for (
        var r = o("WAArrayBufferUtils").concatBuffers([
            o("WAByteArray").uint8ArrayToBuffer(e),
            o("WAByteArray").uint8ArrayToBuffer(t),
          ]),
          a = new Uint8Array(await o("WACryptoSha256").sha256(r)),
          i = new Uint8Array(s),
          l = 0;
        l < s;
        l++
      )
        i[l] = n[l] ^ a[l];
      return o("WAWebAltDeviceLinkingBase32Encode").bytesToCrockford(i);
    }
    async function g(e, t, n, r) {
      var a = await o("WAWebCryptoCurve25519").sharedSecret(t, e),
        i = new TextEncoder().encode(
          "Companion Pairing " + String(n) + " with ref " + r,
        );
      return o("WACryptoHkdf").extractWithSaltAndExpand(a, i, d, c);
    }
    async function h(e, t) {
      var n = new Uint8Array(u);
      return (self.crypto.getRandomValues(n), y(e, t, n));
    }
    async function y(e, t, n) {
      var r = await o("WACryptoAesGcm").gcmEncrypt(t, n, e);
      return {
        encryptedPayload: r,
        iv: o("WAByteArray").uint8ArrayToBuffer(n),
      };
    }
    ((l.generateCompanionEphemeralKeypair = m),
      (l.generateCompanionCommitment = p),
      (l.deriveVerificationCode = _),
      (l.deriveVerificationCodeInternal = f),
      (l.deriveEncryptionKey = g),
      (l.encryptPairingRequest = h),
      (l.encryptPairingRequestInternal = y));
  },
  98,
);
