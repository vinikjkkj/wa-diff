__d(
  "WAWebSyncdCrypto",
  [
    "WABase64",
    "WACryptoHmac",
    "WAMemoizeCache",
    "WAWebSyncdCryptoConst",
    "WAWebSyncdCryptoHelper",
    "WAWebSyncdKeyTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("WAMemoizeCache").memoizeWithArgs(
      o("WAWebSyncdCryptoHelper").generateEncryptionKeysUnmemoized,
      function (e) {
        return o("WABase64").encodeB64(
          o("WAWebSyncdKeyTypes").fromSyncKeyData(e),
        );
      },
    );
    function s(e, t) {
      return o("WACryptoHmac").hmacSha256(new Uint8Array(e), new Uint8Array(t));
    }
    function u(e) {
      var t = e.byteLength;
      return new Uint8Array(e).slice(t - o("WAWebSyncdCryptoConst").MAC_LENGTH)
        .buffer;
    }
    ((l.generateEncryptionKeys = e),
      (l.generateIndexMac = s),
      (l.valueMacFromIndexAndValueCipherText = u));
  },
  98,
);
