__d(
  "WAWebSyncdCryptoHelper",
  [
    "WACryptoHkdf",
    "WASyncdKeyTypes",
    "WAWebSyncdCryptoConst",
    "asyncToGeneratorRuntime",
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
            n = yield u(e);
          return {
            indexKey: n.slice(
              0,
              (t = o("WAWebSyncdCryptoConst")).INDEX_KEY_END,
            ),
            valueEncryptionKey: n.slice(
              t.INDEX_KEY_END,
              t.VALUE_ENCRYPTION_KEY_END,
            ),
            valueMacKey: n.slice(
              t.VALUE_ENCRYPTION_KEY_END,
              t.VALUE_MAC_KEY_END,
            ),
            snapshotMacKey: n.slice(
              t.VALUE_MAC_KEY_END,
              t.SNAPSHOT_MAC_KEY_END,
            ),
            patchMacKey: n.slice(t.SNAPSHOT_MAC_KEY_END, t.PATCH_MAC_KEY_END),
          };
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return o("WACryptoHkdf").extractAndExpand(
        o("WASyncdKeyTypes").fromSyncKeyData(e),
        o("WAWebSyncdCryptoConst").HKDF_INFO,
        o("WAWebSyncdCryptoConst").DERIVED_KEY_LENGTH,
      );
    }
    l.generateEncryptionKeysUnmemoized = e;
  },
  98,
);
