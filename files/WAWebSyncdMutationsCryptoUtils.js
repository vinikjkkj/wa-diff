__d(
  "WAWebSyncdMutationsCryptoUtils",
  [
    "WACryptoAesCbc",
    "WACryptoDependencies",
    "WACryptoHmac",
    "WASyncdKeyTypes",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdCryptoConst",
    "WAWebSyncdCryptoUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("WASyncdKeyTypes").fromSyncKeyId(t),
        r =
          e ===
          o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET
            ? o("WAWebSyncdCryptoConst").OPERATION_SET_HEX
            : e ===
                o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                  .REMOVE
              ? o("WAWebSyncdCryptoConst").OPERATION_REMOVE_HEX
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })(),
        a = new Uint8Array([parseInt(r, 16)]).buffer,
        i = new Uint8Array(a.byteLength + n.byteLength);
      return (
        i.set(new Uint8Array(a)),
        i.set(new Uint8Array(n), a.byteLength),
        i.buffer
      );
    }
    function s(e, t) {
      var n = Math.max(
          0,
          o("WAWebSyncdCryptoConst").MAX_OF_MIN_DATA_LENGTH - e - t,
        ),
        r = new Uint8Array(n);
      return (
        o("WACryptoDependencies").getCrypto().getRandomValues(r),
        r.buffer
      );
    }
    function u(e, t, n) {
      return o("WACryptoAesCbc").aesCbcEncrypt(t, n, e);
    }
    function c(e, t, n) {
      var r = new Uint8Array(o("WAWebSyncdCryptoConst").OCTET_LENGTH);
      r.set([e.byteLength], r.byteLength - 1);
      var a = o("WAWebSyncdCryptoUtils").combine([e, t, r.buffer]);
      return o("WACryptoHmac").hmacSha512(
        n,
        a,
        o("WAWebSyncdCryptoConst").MAC_LENGTH,
      );
    }
    function d(e, t, n) {
      return o("WACryptoAesCbc").aesCbcDecrypt(t, e, n);
    }
    ((l.generateAssociatedData = e),
      (l.generatePadding = s),
      (l.generateCipherText = u),
      (l.generateMac = c),
      (l.decryptCipherText = d));
  },
  98,
);
