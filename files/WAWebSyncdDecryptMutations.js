__d(
  "WAWebSyncdDecryptMutations",
  [
    "WACryptoUtils",
    "WALogger",
    "WAWebProtobufSyncAction.pb",
    "WAWebSyncdCrypto",
    "WAWebSyncdCryptoConst",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdDecode",
    "WAWebSyncdError",
    "WAWebSyncdMetricFatalError",
    "WAWebSyncdMutationsCryptoUtils",
    "WAWebSyncdValidateSyncActionProtobuf",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    async function c(t, n, a, i, l) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: decrypting mutation",
          ])),
      );
      var c = l.index.blob,
        d = l.value.blob,
        m = o("WAWebSyncdCrypto").valueMacFromIndexAndValueCipherText(d),
        p = o("WAWebSyncdCryptoUtils").split(
          d,
          o("WAWebSyncdCryptoConst").IV_LENGTH,
          d.byteLength -
            o("WAWebSyncdCryptoConst").MAC_LENGTH -
            o("WAWebSyncdCryptoConst").IV_LENGTH,
        ),
        _ = p[0],
        f = p[1],
        g = p[2],
        h = await o("WAWebSyncdCrypto").generateEncryptionKeys(a),
        y = h.indexKey,
        C = h.valueEncryptionKey,
        b = h.valueMacKey,
        v = o("WAWebSyncdCryptoUtils").combine([_, f]),
        S = o("WAWebSyncdMutationsCryptoUtils").generateAssociatedData(i, n),
        R = await o("WAWebSyncdMutationsCryptoUtils").generateMac(S, v, b);
      if (!o("WACryptoUtils").arrayBuffersEqual(g, R))
        throw (
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: decrypting mutation failed: valueMAC mismatch",
              ])),
          ),
          o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
            o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
              .DECRYPTION_FAILED,
            { collection: t },
          ),
          new (o("WAWebSyncdError").SyncdFatalError)(
            "decryption failure: valueMAC mismatch",
          )
        );
      var L = await o("WAWebSyncdMutationsCryptoUtils").decryptCipherText(
          new Uint8Array(_),
          C,
          f,
        ),
        E = o("WAWebSyncdDecode").decodeSyncActionData(t, L),
        k = r(
          "WAWebSyncdValidateSyncActionProtobuf",
        ).validateSyncActionDataProtobuf(t, E),
        I = await o("WAWebSyncdCrypto").generateIndexMac(y, k.index);
      if (!o("WACryptoUtils").arrayBuffersEqual(c, I))
        throw (
          o("WALogger").ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: decrypting mutation failed: indexMAC mismatch",
              ])),
          ),
          o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
            o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
              .DECRYPTION_FAILED,
            { collection: t },
          ),
          new (o("WAWebSyncdError").SyncdFatalError)(
            "decryption failure: indexMAC mismatch",
          )
        );
      var T = k.index,
        D = k.value,
        x = k.version;
      return {
        version: x,
        index: T,
        value: D
          ? o("encodeProtobuf")
              .encodeProtobuf(
                o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                D,
              )
              .readBuffer()
          : null,
        indexMac: c,
        valueMac: m,
        plaintext: L,
      };
    }
    l.syncdDecryptMutation = c;
  },
  98,
);
