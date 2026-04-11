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
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebSignalCommonUtils")
              .createSignalAddress(
                o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              )
              .toString(),
            t = r("WANullthrows")(
              yield o("WAWebSignalProtocolStore")
                .getPersistSignalProtocolStore()
                .loadIdentityKey(e),
            ),
            n = o("WAWebCryptoCurve25519").toCurveKeyPubKey(
              o("WAWebSignalCommonUtils").strToBuffer(t),
            ),
            a = r("WANullthrows")(
              yield o("WAWebSignalProtocolStore")
                .getPersistSignalProtocolStore()
                .getIdentityKeyPair(),
            ),
            i = o("WAWebCryptoCurve25519").toCurveKeyPubKey(a.pubKey);
          return u(n, i);
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            i = yield o("WACryptoSha256").sha256Base64(a);
          return i;
        })),
        c.apply(this, arguments)
      );
    }
    ((l.genCurrentSessionId = e), (l.genSessionId = u));
  },
  98,
);
