__d(
  "WAWebKmpDerivedSyncdKeysProvider",
  [
    "WASyncdKeyTypes",
    "WAWebKmpBridgeResultWrappers",
    "WAWebKmpKotlinUtils",
    "WAWebSyncdCrypto",
    "wa-kmp-syncd-engine-api",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t,
        n = await o("WAWebSyncdCrypto").generateEncryptionKeys(
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
    }
    var s = {
      getForInternal: function (n) {
        return o("WAWebKmpBridgeResultWrappers").wrapKmpSuccess(
          async function () {
            return e(n.keyData);
          },
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
    l.derivedSyncdKeysProvider = s;
  },
  98,
);
