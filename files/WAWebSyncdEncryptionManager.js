__d(
  "WAWebSyncdEncryptionManager",
  [
    "WACryptoHmac",
    "WAEncodeString",
    "WAWebSyncdCrypto",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdDecryptMutations",
    "WAWebSyncdEncryptMutations",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t, n, r) {
      var a = await o("WAWebSyncdCrypto").generateEncryptionKeys(e),
        i = a.snapshotMacKey,
        l = o("WAEncodeString").toUtf8(r).buffer,
        s = o("WAWebSyncdCryptoUtils").to64BitNetworkOrder(n);
      return o("WACryptoHmac").hmacSha256(
        i,
        o("WAWebSyncdCryptoUtils").combine([t, s, l]),
      );
    }
    async function s(e) {
      var t = e.collection,
        n = e.keyData,
        r = e.patchVersion,
        a = e.snapshotMac,
        i = e.valueMacs,
        l = await o("WAWebSyncdCrypto").generateEncryptionKeys(n),
        s = l.patchMacKey,
        u = o("WAEncodeString").toUtf8(t).buffer,
        c = o("WAWebSyncdCryptoUtils").to64BitNetworkOrder(r);
      return o("WACryptoHmac").hmacSha256(
        s,
        o("WAWebSyncdCryptoUtils").combine([a].concat(i, [c, u])),
      );
    }
    var u = {
      encryptMutation: o("WAWebSyncdEncryptMutations").syncdEncryptMutation,
      decryptMutation: o("WAWebSyncdDecryptMutations").syncdDecryptMutation,
      generatePatchMac: s,
      generateSnapshotMac: e,
    };
    l.WASyncdEncryptionManager = u;
  },
  98,
);
