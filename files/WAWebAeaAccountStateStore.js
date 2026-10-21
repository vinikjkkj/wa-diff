__d(
  "WAWebAeaAccountStateStore",
  [
    "WAByteArray",
    "WAWebAeaAccountState",
    "WAWebCryptoCurve25519",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield u([e]),
            n = t[0];
          return n;
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSignalProtocolStore")
            .getPersistSignalProtocolStore()
            .bulkGetIdentityWithRowId(
              e.map(function (e) {
                return o("WAWebSignalCommonUtils").createSignalAddress(
                  o("WAWebWidFactory").asUserWidOrThrow(e),
                );
              }),
            );
          return t.map(function (e) {
            return {
              identityKey: e == null ? void 0 : e.identityKey,
              accountState: p(e == null ? void 0 : e.accountEncryptionState),
              rawAccountState: e == null ? void 0 : e.accountEncryptionState,
            };
          });
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n, r) {
      return o("WAWebSignalProtocolStore")
        .getPersistSignalProtocolStore()
        .compareAndSetAccountEncryptionState(
          o("WAWebSignalCommonUtils").createSignalAddress(
            o("WAWebWidFactory").asUserWidOrThrow(e),
          ),
          t,
          n,
          String(r),
        );
    }
    function m(e) {
      return o("WAWebSignalCommonUtils").bufferToStr(
        o("WAWebCryptoCurve25519").toSignalCurvePubKey(
          o("WAByteArray").uint8ArrayToBuffer(e),
        ),
      );
    }
    function p(e) {
      var t;
      return e == null
        ? o("WAWebAeaAccountState").AeaAccountState.NOT_SET
        : (t = o("WAWebAeaAccountState").AeaAccountState.cast(e)) != null
          ? t
          : o("WAWebAeaAccountState").AeaAccountState.NOT_SET;
    }
    ((l.readAeaStoredAccount = e),
      (l.readAeaStoredAccounts = u),
      (l.compareAndSetAeaAccountState = d),
      (l.toAeaIdentityKey = m));
  },
  98,
);
