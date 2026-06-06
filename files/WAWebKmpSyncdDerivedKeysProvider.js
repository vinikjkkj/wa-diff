__d(
  "WAWebKmpSyncdDerivedKeysProvider",
  ["WASyncdKeyTypes", "WAWebSyncdCrypto", "wa-kmp-syncd-engine-crypto-api"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = await o("WAWebSyncdCrypto").generateEncryptionKeys(
        o("WASyncdKeyTypes").toSyncKeyData(e.buffer),
      );
      return new (o(
        "wa-kmp-syncd-engine-crypto-api",
      ).KmpSyncdCryptoDerivedKeys)(
        new Int8Array(t.indexKey),
        new Int8Array(t.valueEncryptionKey),
        new Int8Array(t.valueMacKey),
        new Int8Array(t.snapshotMacKey),
        new Int8Array(t.patchMacKey),
      );
    }
    var s = new (o(
      "wa-kmp-syncd-engine-crypto-api",
    ).JsKmpDerivedSyncdKeysProviderImpl)({
      getForInternal: function (n) {
        return new (o("wa-kmp-syncd-engine-crypto-api").KmpCryptoResult)(
          e(n.keyData),
        );
      },
    });
    l.default = s;
  },
  98,
);
