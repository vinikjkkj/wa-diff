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
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(e, t, n, r, o) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i, l) {
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
              h = yield o("WAWebSyncdCrypto").generateEncryptionKeys(a),
              y = h.indexKey,
              C = h.valueEncryptionKey,
              b = h.valueMacKey,
              v = o("WAWebSyncdCryptoUtils").combine([_, f]),
              S = o("WAWebSyncdMutationsCryptoUtils").generateAssociatedData(
                i,
                n,
              ),
              R = yield o("WAWebSyncdMutationsCryptoUtils").generateMac(
                S,
                v,
                b,
              );
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
            var L = yield o("WAWebSyncdMutationsCryptoUtils").decryptCipherText(
                new Uint8Array(_),
                C,
                f,
              ),
              E = o("WAWebSyncdDecode").decodeSyncActionData(t, L),
              k = r(
                "WAWebSyncdValidateSyncActionProtobuf",
              ).validateSyncActionDataProtobuf(t, E),
              I = yield o("WAWebSyncdCrypto").generateIndexMac(y, k.index);
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
          },
        )),
        d.apply(this, arguments)
      );
    }
    l.syncdDecryptMutation = c;
  },
  98,
);
