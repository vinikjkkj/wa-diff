__d(
  "WAWebCoexV2SyncdKeyShare",
  ["WAWebSyncdCryptoUtils", "WAWebSyncdKeyTypes"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.collectionWithEncryptedMutations,
        n = new Map();
      for (var r of t.values())
        for (var a of r) {
          var i = a.keyData,
            l = a.keyId,
            s = o("WAWebSyncdCryptoUtils").syncKeyIdToHex(l);
          n.has(s) ||
            n.set(s, {
              keyId: { keyId: o("WAWebSyncdKeyTypes").fromSyncKeyId(l) },
              keyData: { keyData: o("WAWebSyncdKeyTypes").fromSyncKeyData(i) },
            });
        }
      return n.size > 0 ? { keys: Array.from(n.values()) } : null;
    }
    l.buildCoexV2SyncdKeyShare = e;
  },
  98,
);
