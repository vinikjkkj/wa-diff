__d(
  "WAWebSyncdEncryptMutations",
  [
    "WAArrayBufferUtils",
    "WACryptoDependencies",
    "WALogger",
    "WAWebProtobufSyncAction.pb",
    "WAWebSyncdCrypto",
    "WAWebSyncdCryptoConst",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdError",
    "WAWebSyncdMetricFatalError",
    "WAWebSyncdMutationsCryptoUtils",
    "WAWebSyncdRequestEncode",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    async function u(t, n, r) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: encrypting mutation",
          ])),
      );
      try {
        var a,
          i = t.binarySyncAction,
          l = t.index,
          u = t.operation,
          d = t.version,
          m = o("WAArrayBufferUtils").stringToArrayBuffer(l),
          p = await o("WAWebSyncdCrypto").generateEncryptionKeys(r),
          _ = p.indexKey,
          f = p.valueEncryptionKey,
          g = p.valueMacKey,
          h = await o("WACryptoDependencies")
            .getCrypto()
            .getRandomValues(
              new Uint8Array(o("WAWebSyncdCryptoConst").IV_LENGTH),
            ),
          y = (a = o("WAWebSyncdMutationsCryptoUtils")).generatePadding(
            m.byteLength,
            i.byteLength,
          ),
          C = c(m, i, y, d),
          b = await a.generateCipherText(h, f, C),
          v = a.generateAssociatedData(u, n),
          S = await a.generateMac(v, b, g),
          R = o("WAWebSyncdCryptoUtils").combine([b, S]),
          L = await o("WAWebSyncdCrypto").generateIndexMac(_, m);
        return { indexMac: L, indexAndValueCipherText: R };
      } catch (e) {
        throw (
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: encrypting mutation failed",
              ])),
          ),
          o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
            o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
              .ENCRYPTION_FAILED,
          ),
          new (o("WAWebSyncdError").SyncdFatalError)("encryption failure")
        );
      }
    }
    function c(e, t, n, r) {
      return o("WAWebSyncdRequestEncode").encodeSyncActionData({
        index: e,
        value: o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
          t,
        ),
        padding: n,
        version: r,
      });
    }
    l.syncdEncryptMutation = u;
  },
  98,
);
