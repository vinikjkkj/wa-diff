__d(
  "WAWebRegistration",
  [
    "WALogger",
    "WAWebCryptoCurve25519",
    "WAWebCryptoLibraryUtilsApi",
    "WAWebSignalKeyApi",
    "WAWebSignalStoreApi",
    "WAWebUserPrefsInfoStore",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s() {
      var e = await o("WAWebCryptoCurve25519").keyPair(),
        t = new Uint8Array(24);
      return (
        self.crypto.getRandomValues(t),
        Promise.resolve(
          o("WAWebUserPrefsInfoStore").waNoiseInfo.set({
            recoveryToken: t.buffer,
            staticKeyPair: e,
            certificateChainBuffer: void 0,
          }),
        )
      );
    }
    function u() {
      return r("WAWebCryptoLibraryUtilsApi").makeRegistrationId();
    }
    async function c() {
      var t = u();
      await o("WAWebSignalStoreApi").waSignalStore.clearCredential();
      var n = o("WAWebSignalKeyApi").generateIdentityKeyPair();
      try {
        await Promise.all([
          o("WAWebSignalStoreApi").waSignalStore.setRegistrationInfo({
            registrationId: t,
            identityKeyPair: n,
          }),
          o("WAWebSignalStoreApi").waSignalStore.rotateSignedPreKey(
            o("WAWebCryptoCurve25519").toSignalCurveKeyPair(n),
            o("WAWebSignalKeyApi").generateSignedKeyPair,
          ),
        ]);
      } catch (t) {
        throw (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "failed to refreshSignalCredentials: ",
                "",
              ])),
            t,
          ),
          t
        );
      }
    }
    ((l.refreshNoiseCredentials = s), (l.refreshSignalCredentials = c));
  },
  98,
);
