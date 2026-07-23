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
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 32,
      s = 5,
      u = 12,
      c = 32,
      d = "Pairing Information Encryption Key";
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = yield o("WAWebCryptoCurve25519").keyPair(),
            a = new Uint8Array(e);
          self.crypto.getRandomValues(a);
          var i = o("encodeProtobuf")
              .encodeProtobuf(
                o("WAWebProtobufsCompanionReg.pb")
                  .CompanionEphemeralIdentitySpec,
                { publicKey: r.pubKey, deviceType: n, ref: t },
              )
              .readBuffer(),
            l = yield _(i, a),
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
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAArrayBufferUtils").concatBuffers([
            e,
            o("WAByteArray").uint8ArrayToBuffer(t),
          ]);
          return o("WACryptoSha256").sha256(n);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
          return y(e, new Uint8Array(o), new Uint8Array(n));
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
          for (
            var r = o("WAArrayBufferUtils").concatBuffers([
                o("WAByteArray").uint8ArrayToBuffer(e),
                o("WAByteArray").uint8ArrayToBuffer(t),
              ]),
              a = new Uint8Array(yield o("WACryptoSha256").sha256(r)),
              i = new Uint8Array(s),
              l = 0;
            l < s;
            l++
          )
            i[l] = n[l] ^ a[l];
          return o("WAWebAltDeviceLinkingBase32Encode").bytesToCrockford(i);
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
          var t = e.companionEphemeralPrivateKey,
            n = e.deviceType,
            r = e.primaryPublicKey,
            a = e.ref,
            i = yield o("WAWebCryptoCurve25519").sharedSecret(r, t),
            l = new TextEncoder().encode(
              "Companion Pairing " + String(n) + " with ref " + a,
            );
          return o("WACryptoHkdf").extractWithSaltAndExpand(i, l, d, c);
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
          var n = new Uint8Array(u);
          return (self.crypto.getRandomValues(n), L(e, t, n));
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t, n) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o("WACryptoAesGcm").gcmEncrypt(t, n, e);
          return {
            encryptedPayload: r,
            iv: o("WAByteArray").uint8ArrayToBuffer(n),
          };
        })),
        E.apply(this, arguments)
      );
    }
    ((l.generateCompanionEphemeralKeypair = m),
      (l.generateCompanionCommitment = _),
      (l.deriveVerificationCode = g),
      (l.deriveVerificationCodeInternal = y),
      (l.deriveEncryptionKey = b),
      (l.encryptPairingRequest = S),
      (l.encryptPairingRequestInternal = L));
  },
  98,
);
