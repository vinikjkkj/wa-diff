__d(
  "WAWebSyncdMdSession",
  [
    "WABinary",
    "WACryptoSha256",
    "WANullthrows",
    "WAWebCryptoCurve25519",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebUserPrefsMeUser",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e() {
      var e = o("WAWebSignalCommonUtils")
          .createSignalAddress(
            o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
          )
          .toString(),
        t = r("WANullthrows")(
          await o("WAWebSignalProtocolStore")
            .getPersistSignalProtocolStore()
            .loadIdentityKey(e),
        ),
        n = o("WAWebCryptoCurve25519").toCurveKeyPubKey(
          o("WAWebSignalCommonUtils").strToBuffer(t),
        ),
        a = r("WANullthrows")(
          await o("WAWebSignalProtocolStore")
            .getPersistSignalProtocolStore()
            .getIdentityKeyPair(),
        ),
        i = o("WAWebCryptoCurve25519").toCurveKeyPubKey(a.pubKey);
      return s(n, i);
    }
    async function s(e, t) {
      if (e.byteLength !== 32)
        throw r("err")(
          "genSessionId: primary identity public key is " +
            e.byteLength +
            " bytes, should be 32!",
        );
      if (t.byteLength !== 32)
        throw r("err")(
          "genSessionId: companion identity public key is " +
            e.byteLength +
            " bytes, should be 32!",
        );
      var n = new (o("WABinary").Binary)();
      (n.writeBuffer(e), n.write(95), n.writeBuffer(t));
      var a = n.readByteArrayView(),
        i = await o("WACryptoSha256").sha256Base64(a);
      return i;
    }
    ((l.genCurrentSessionId = e), (l.genSessionId = s));
  },
  98,
);
