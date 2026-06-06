__d(
  "WAWebSyncdEncryptionManager",
  [
    "WACryptoHmac",
    "WAEncodeString",
    "WAWebSyncdCrypto",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdDecryptMutations",
    "WAWebSyncdEncryptMutations",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield o("WAWebSyncdCrypto").generateEncryptionKeys(e),
              i = a.snapshotMacKey,
              l = o("WAEncodeString").toUtf8(r).buffer,
              s = o("WAWebSyncdCryptoUtils").to64BitNetworkOrder(n);
            return o("WACryptoHmac").hmacSha256(
              i,
              o("WAWebSyncdCryptoUtils").combine([t, s, l]),
            );
          },
        )),
        s.apply(this, arguments)
      );
    }
    function u(e, t, n, r, o) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            var i = yield o("WAWebSyncdCrypto").generateEncryptionKeys(e),
              l = i.patchMacKey,
              s = o("WAEncodeString").toUtf8(a).buffer,
              u = o("WAWebSyncdCryptoUtils").to64BitNetworkOrder(r);
            return o("WACryptoHmac").hmacSha256(
              l,
              o("WAWebSyncdCryptoUtils").combine([t].concat(n, [u, s])),
            );
          },
        )),
        c.apply(this, arguments)
      );
    }
    var d = {
      encryptMutation: o("WAWebSyncdEncryptMutations").syncdEncryptMutation,
      decryptMutation: o("WAWebSyncdDecryptMutations").syncdDecryptMutation,
      generatePatchMac: u,
      generateSnapshotMac: e,
    };
    l.WASyncdEncryptionManager = d;
  },
  98,
);
