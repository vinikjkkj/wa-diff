__d(
  "WAWebRegistration",
  [
    "Promise",
    "WALogger",
    "WAWebCryptoCurve25519",
    "WAWebCryptoLibraryUtilsApi",
    "WAWebSignalKeyApi",
    "WAWebSignalStoreApi",
    "WAWebUserPrefsInfoStore",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebCryptoCurve25519").keyPair(),
            t = new Uint8Array(24);
          return (
            self.crypto.getRandomValues(t),
            (s || (s = n("Promise"))).resolve(
              o("WAWebUserPrefsInfoStore").waNoiseInfo.set({
                recoveryToken: t.buffer,
                staticKeyPair: e,
                certificateChainBuffer: void 0,
              }),
            )
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
      return r("WAWebCryptoLibraryUtilsApi").makeRegistrationId();
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = d();
          yield o("WAWebSignalStoreApi").waSignalStore.clearCredential();
          var r = yield o("WAWebSignalKeyApi").generateIdentityKeyPair();
          try {
            yield (s || (s = n("Promise"))).all([
              o("WAWebSignalStoreApi").waSignalStore.setRegistrationInfo({
                registrationId: t,
                identityKeyPair: r,
              }),
              o("WAWebSignalStoreApi").waSignalStore.rotateSignedPreKey(
                o("WAWebCryptoCurve25519").toSignalCurveKeyPair(r),
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
        })),
        p.apply(this, arguments)
      );
    }
    ((l.refreshNoiseCredentials = u), (l.refreshSignalCredentials = m));
  },
  98,
);
