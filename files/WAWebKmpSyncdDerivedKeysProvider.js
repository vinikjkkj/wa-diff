__d(
  "WAWebKmpSyncdDerivedKeysProvider",
  [
    "WASyncdKeyTypes",
    "WAWebSyncdCrypto",
    "asyncToGeneratorRuntime",
    "wa-kmp-syncd-engine-crypto-api",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSyncdCrypto").generateEncryptionKeys(
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
        })),
        s.apply(this, arguments)
      );
    }
    var u = new (o(
      "wa-kmp-syncd-engine-crypto-api",
    ).JsKmpDerivedSyncdKeysProviderImpl)({
      getForInternal: function (n) {
        return new (o("wa-kmp-syncd-engine-crypto-api").KmpCryptoResult)(
          e(n.keyData),
        );
      },
    });
    l.default = u;
  },
  98,
);
