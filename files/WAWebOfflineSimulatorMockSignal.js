__d(
  "WAWebOfflineSimulatorMockSignal",
  [
    "invariant",
    "WAWebCryptoCurve25519",
    "WAWebCryptoLibrary",
    "WAWebCryptoLibrarySessionApi",
    "WAWebCryptoLibraryUtilsApi",
    "WAWebProtocolStoreCommonApi",
    "WAWebSignalKeyApi",
    "WAWebSignalProtocolStore",
    "WAWebSignalStoreApi",
    "WAWebUserUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = 1,
      u = (function () {
        function e() {
          ((this.Direction = { SENDING: 1, RECEIVING: 2 }),
            (this.regId = void 0),
            (this.identityKeyPair = void 0),
            (this.signedPreKey = void 0),
            (this.session = void 0),
            (this.identity = void 0));
        }
        var t = e.prototype;
        return (
          (t.init = async function () {
            (this.regId == null ||
              !this.identityKeyPair ||
              !this.signedPreKey) &&
              ((this.regId = await r(
                "WAWebCryptoLibraryUtilsApi",
              ).makeRegistrationId()),
              (this.identityKeyPair = await r(
                "WAWebCryptoLibraryUtilsApi",
              ).makeKeyPair()),
              (this.signedPreKey = o("WAWebSignalKeyApi").generateSignedKeyPair(
                this.identityKeyPair,
                1,
              )));
          }),
          (t.getIdentityKeyPair = function () {
            return Promise.resolve(this.identityKeyPair);
          }),
          (t.getLocalRegistrationId = function () {
            return Promise.resolve(this.regId);
          }),
          (t.isTrustedIdentity = function (t, n) {
            return Promise.resolve(!0);
          }),
          (t.loadIdentityKey = function (t) {
            return Promise.resolve(this.identity);
          }),
          (t.removeIdentity = function (t) {
            return Promise.resolve();
          }),
          (t.saveIdentity = function (t, n) {
            return (
              (this.identity = o(
                "WAWebProtocolStoreCommonApi",
              ).stringifyIdentityKey(n)),
              Promise.resolve()
            );
          }),
          (t.loadPreKey = function (t) {
            return Promise.resolve(void 0);
          }),
          (t.removePreKey = function (t) {
            return Promise.resolve();
          }),
          (t.loadSignedPreKey = function (t) {
            var e = this.signedPreKey
              ? {
                  pubKey: this.signedPreKey.keyPair.pubKey,
                  privKey: this.signedPreKey.keyPair.privKey,
                  signature: this.signedPreKey.signature,
                }
              : void 0;
            return Promise.resolve(e);
          }),
          (t.loadSession = function (t) {
            return Promise.resolve(this.session);
          }),
          (t.storeSession = function (t, n) {
            return ((this.session = n), Promise.resolve());
          }),
          (t.removeSession = function (t) {
            return Promise.resolve();
          }),
          (t.storeSenderKey = function (t, n) {
            return Promise.reject(r("err")("not implemented"));
          }),
          (t.loadSenderKey = function (t) {
            return Promise.reject(r("err")("not implemented"));
          }),
          (t.flushBufferToDiskIfNotMemOnlyMode = function () {
            return Promise.resolve();
          }),
          (t.hasPendingPersistWrites = function () {
            return !1;
          }),
          (t.generateSnapshot = function () {
            return null;
          }),
          e
        );
      })(),
      c = new Map();
    async function d(t) {
      var n = await o("WAWebSignalProtocolStore")
          .getPersistSignalProtocolStore()
          .getLocalRegistrationId(),
        r = await o("WAWebSignalProtocolStore")
          .getPersistSignalProtocolStore()
          .getIdentityKeyPair(),
        a = await o("WAWebSignalStoreApi").waSignalStore.getSignedPreKeyById(e);
      (n != null && r != null && a != null) || s(0, 56326);
      var i = {
          registrationId: n,
          identityKey: r.pubKey,
          signedPreKey: {
            keyId: a.keyId,
            publicKey: o("WAWebCryptoCurve25519").toSignalCurvePubKey(
              a.keyPair.pubKey,
            ),
            signature: a.signature,
          },
        },
        l = c.get(t);
      (l || ((l = new u()), await l.init(), c.set(t, l)),
        await o("WAWebCryptoLibrarySessionApi").createSignalSession(
          i,
          o("WAWebUserUtils").getMeDeviceLidOrThrow(),
        ));
    }
    async function m(e, t) {
      var n = c.get(e);
      return (
        n || (await d(e), (n = c.get(e))),
        n != null || s(0, 72600),
        o("WAWebCryptoLibrary").encryptSignalProto(
          o("WAWebUserUtils").getMeDeviceLidOrThrow(),
          t,
        )
      );
    }
    l.encryptSignalProto = m;
  },
  98,
);
