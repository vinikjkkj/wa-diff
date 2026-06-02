__d(
  "WAWebSyncdCryptoHelper",
  ["WACryptoHkdf", "WASyncdKeyTypes", "WAWebSyncdCryptoConst"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t,
        n = await s(e);
      return {
        indexKey: n.slice(0, (t = o("WAWebSyncdCryptoConst")).INDEX_KEY_END),
        valueEncryptionKey: n.slice(
          t.INDEX_KEY_END,
          t.VALUE_ENCRYPTION_KEY_END,
        ),
        valueMacKey: n.slice(t.VALUE_ENCRYPTION_KEY_END, t.VALUE_MAC_KEY_END),
        snapshotMacKey: n.slice(t.VALUE_MAC_KEY_END, t.SNAPSHOT_MAC_KEY_END),
        patchMacKey: n.slice(t.SNAPSHOT_MAC_KEY_END, t.PATCH_MAC_KEY_END),
      };
    }
    function s(e) {
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
