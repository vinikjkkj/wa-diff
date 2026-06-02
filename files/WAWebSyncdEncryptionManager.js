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
    async function s(e, t, n, r, a) {
      var i = await o("WAWebSyncdCrypto").generateEncryptionKeys(e),
        l = i.patchMacKey,
        s = o("WAEncodeString").toUtf8(a).buffer,
        u = o("WAWebSyncdCryptoUtils").to64BitNetworkOrder(r);
      return o("WACryptoHmac").hmacSha256(
        l,
        o("WAWebSyncdCryptoUtils").combine([t].concat(n, [u, s])),
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
