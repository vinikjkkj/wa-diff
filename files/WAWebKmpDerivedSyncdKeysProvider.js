__d(
  "WAWebKmpDerivedSyncdKeysProvider",
  [
    "WASyncdKeyTypes",
    "WAWebKmpBridgeResultWrappers",
    "WAWebKmpKotlinUtils",
    "WAWebSyncdCrypto",
    "asyncToGeneratorRuntime",
    "wa-kmp-syncd-engine-api",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebSyncdCrypto").generateEncryptionKeys(
              o("WASyncdKeyTypes").toSyncKeyData(
                (t = o("WAWebKmpKotlinUtils")).asUint8Array(e).buffer,
              ),
            );
          return new (o("wa-kmp-syncd-engine-api").KmpDerivedSyncdKeys)(
            t.asKmpByteArray(n.indexKey),
            t.asKmpByteArray(n.valueEncryptionKey),
            t.asKmpByteArray(n.valueMacKey),
            t.asKmpByteArray(n.snapshotMacKey),
            t.asKmpByteArray(n.patchMacKey),
          );
        })),
        s.apply(this, arguments)
      );
    }
    var u = {
      getForInternal: function (r) {
        return o("WAWebKmpBridgeResultWrappers").wrapKmpSuccess(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return e(r.keyData);
          }),
          function (e) {
            return new (o(
              "wa-kmp-syncd-engine-api",
            ).KmpSyncdInterfaceError.KmpSyncdKeyError)(
              o("wa-kmp-syncd-engine-api").KmpSyncdInterfaceError
                .KmpSyncdKeyError.Reason.DERIVATION_FAILED,
              String(e.message),
            );
          },
        );
      },
    };
    l.derivedSyncdKeysProvider = u;
  },
  98,
);
