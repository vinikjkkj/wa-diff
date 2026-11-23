__d(
  "WAWebAeaAccountStateStore",
  [
    "WAByteArray",
    "WAWebAeaAccountState",
    "WAWebCryptoCurve25519",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = await s([e]),
        n = t[0];
      return n;
    }
    async function s(e) {
      var t = await o("WAWebSignalProtocolStore")
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
          accountState: d(e == null ? void 0 : e.accountEncryptionState),
          rawAccountState: e == null ? void 0 : e.accountEncryptionState,
        };
      });
    }
    function u(e, t, n, r) {
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
    function c(e) {
      return o("WAWebSignalCommonUtils").bufferToStr(
        o("WAWebCryptoCurve25519").toSignalCurvePubKey(
          o("WAByteArray").uint8ArrayToBuffer(e),
        ),
      );
    }
    function d(e) {
      var t;
      return e == null
        ? o("WAWebAeaAccountState").AeaAccountState.NOT_SET
        : (t = o("WAWebAeaAccountState").AeaAccountState.cast(e)) != null
          ? t
          : o("WAWebAeaAccountState").AeaAccountState.NOT_SET;
    }
    ((l.readAeaStoredAccount = e),
      (l.readAeaStoredAccounts = s),
      (l.compareAndSetAeaAccountState = u),
      (l.toAeaIdentityKey = c));
  },
  98,
);
