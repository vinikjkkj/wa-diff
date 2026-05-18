__d(
  "WAWebOfflineSimulatorMockSignal",
  [
    "invariant",
    "Promise",
    "WAWebCryptoCurve25519",
    "WAWebCryptoLibrary",
    "WAWebCryptoLibrarySessionApi",
    "WAWebCryptoLibraryUtilsApi",
    "WAWebProtocolStoreCommonApi",
    "WAWebSignalKeyApi",
    "WAWebSignalProtocolStore",
    "WAWebSignalStoreApi",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = 1,
      c = (function () {
        function t() {
          ((this.Direction = { SENDING: 1, RECEIVING: 2 }),
            (this.regId = void 0),
            (this.identityKeyPair = void 0),
            (this.signedPreKey = void 0),
            (this.session = void 0),
            (this.identity = void 0));
        }
        var a = t.prototype;
        return (
          (a.init = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (this.regId == null ||
                !this.identityKeyPair ||
                !this.signedPreKey) &&
                ((this.regId = yield r(
                  "WAWebCryptoLibraryUtilsApi",
                ).makeRegistrationId()),
                (this.identityKeyPair = yield r(
                  "WAWebCryptoLibraryUtilsApi",
                ).makeKeyPair()),
                (this.signedPreKey = o(
                  "WAWebSignalKeyApi",
                ).generateSignedKeyPair(this.identityKeyPair, 1)));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.getIdentityKeyPair = function () {
            return (e || (e = n("Promise"))).resolve(this.identityKeyPair);
          }),
          (a.getLocalRegistrationId = function () {
            return (e || (e = n("Promise"))).resolve(this.regId);
          }),
          (a.isTrustedIdentity = function (r, o) {
            return (e || (e = n("Promise"))).resolve(!0);
          }),
          (a.loadIdentityKey = function (r) {
            return (e || (e = n("Promise"))).resolve(this.identity);
          }),
          (a.removeIdentity = function (r) {
            return (e || (e = n("Promise"))).resolve();
          }),
          (a.saveIdentity = function (r, a) {
            return (
              (this.identity = o(
                "WAWebProtocolStoreCommonApi",
              ).stringifyIdentityKey(a)),
              (e || (e = n("Promise"))).resolve()
            );
          }),
          (a.loadPreKey = function (r) {
            return (e || (e = n("Promise"))).resolve(void 0);
          }),
          (a.removePreKey = function (r) {
            return (e || (e = n("Promise"))).resolve();
          }),
          (a.loadSignedPreKey = function (r) {
            var t = this.signedPreKey
              ? {
                  pubKey: this.signedPreKey.keyPair.pubKey,
                  privKey: this.signedPreKey.keyPair.privKey,
                  signature: this.signedPreKey.signature,
                }
              : void 0;
            return (e || (e = n("Promise"))).resolve(t);
          }),
          (a.loadSession = function (r) {
            return (e || (e = n("Promise"))).resolve(this.session);
          }),
          (a.storeSession = function (r, o) {
            return ((this.session = o), (e || (e = n("Promise"))).resolve());
          }),
          (a.removeSession = function (r) {
            return (e || (e = n("Promise"))).resolve();
          }),
          (a.storeSenderKey = function (o, a) {
            return (e || (e = n("Promise"))).reject(
              r("err")("not implemented"),
            );
          }),
          (a.loadSenderKey = function (o) {
            return (e || (e = n("Promise"))).reject(
              r("err")("not implemented"),
            );
          }),
          (a.flushBufferToDiskIfNotMemOnlyMode = function () {
            return (e || (e = n("Promise"))).resolve();
          }),
          (a.generateSnapshot = function () {
            return null;
          }),
          (a.generateSnapshotThrottled = function () {
            return (e || (e = n("Promise"))).resolve(null);
          }),
          t
        );
      })(),
      d = new Map();
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSignalProtocolStore")
              .getPersistSignalProtocolStore()
              .getLocalRegistrationId(),
            n = yield o("WAWebSignalProtocolStore")
              .getPersistSignalProtocolStore()
              .getIdentityKeyPair(),
            r = yield o(
              "WAWebSignalStoreApi",
            ).waSignalStore.getSignedPreKeyById(u);
          (t != null && n != null && r != null) || s(0, 56326);
          var a = {
              registrationId: t,
              identityKey: n.pubKey,
              signedPreKey: {
                keyId: r.keyId,
                publicKey: o("WAWebCryptoCurve25519").toSignalCurvePubKey(
                  r.keyPair.pubKey,
                ),
                signature: r.signature,
              },
            },
            i = d.get(e);
          (i || ((i = new c()), yield i.init(), d.set(e, i)),
            yield o("WAWebCryptoLibrarySessionApi").createSignalSession(
              a,
              o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
            ));
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
          var n = d.get(e);
          return (
            n || (yield m(e), (n = d.get(e))),
            n != null || s(0, 72600),
            o("WAWebCryptoLibrary").encryptSignalProto(
              o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
              t,
            )
          );
        })),
        f.apply(this, arguments)
      );
    }
    l.encryptSignalProto = _;
  },
  98,
);
