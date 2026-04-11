__d(
  "WASyncdKmpConversion",
  [
    "WAArrayBufferUtils",
    "WASyncdKeyTypes",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdCryptoConst",
    "WAWebSyncdDecode",
    "WAWebSyncdRequestEncode",
    "WAWebSyncdValidateSyncActionProtobuf",
    "decodeProtobuf",
    "encodeProtobuf",
    "wa-kmp-syncd-engine-crypto-api",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return new (o(
        "wa-kmp-syncd-engine-crypto-api",
      ).KmpSyncdCryptoMutationKeyId)(
        new Int8Array(o("WASyncdKeyTypes").fromSyncKeyId(e)),
      );
    }
    function s(e) {
      return new (o(
        "wa-kmp-syncd-engine-crypto-api",
      ).KmpSyncdCryptoMutationKeyData)(
        new Int8Array(o("WASyncdKeyTypes").fromSyncKeyData(e)),
      );
    }
    function u(e) {
      return e ===
        o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET
        ? o("wa-kmp-syncd-engine-crypto-api").KmpSyncdCryptoMutationOperation
            .Set
        : e ===
            o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE
          ? o("wa-kmp-syncd-engine-crypto-api").KmpSyncdCryptoMutationOperation
              .Remove
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function c(t, n) {
      return new (o(
        "wa-kmp-syncd-engine-crypto-api",
      ).KmpSyncdCryptoMutationKey)(e(t), s(n));
    }
    function d(t, n) {
      var r = n.action,
        a = n.binarySyncAction,
        i = n.index,
        l = n.operation,
        s = n.version;
      return new (o(
        "wa-kmp-syncd-engine-crypto-api",
      ).KmpSyncdCryptoMutationData)(i, s, e(t), u(l), new Int8Array(a), null);
    }
    function m(e, t, n, a) {
      var i = o("WAWebSyncdDecode").decodeSyncActionData(null, n.buffer),
        l = r(
          "WAWebSyncdValidateSyncActionProtobuf",
        ).validateSyncActionDataProtobuf(null, i),
        s = l.version,
        u = l.value,
        c = o("WAArrayBufferUtils").arrayBufferToString(l.index);
      return new (o(
        "wa-kmp-syncd-engine-crypto-api",
      ).KmpSyncdCryptoMutationData)(
        c,
        s,
        e,
        t,
        u
          ? new Int8Array(
              o("encodeProtobuf")
                .encodeProtobuf(
                  o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                  u,
                )
                .readBuffer(),
            )
          : null,
        a,
      );
    }
    function p(t, n, r) {
      var a = new Int8Array(r.index.blob),
        i = new Int8Array(r.value.blob),
        l = i.slice(-o("WAWebSyncdCryptoConst").MAC_LENGTH);
      return new (o(
        "wa-kmp-syncd-engine-crypto-api",
      ).KmpSyncdCryptoEncryptedData)(e(t), a, u(n), i, l);
    }
    function _(e, t) {
      var n;
      return new (o("wa-kmp-syncd-engine-crypto-api").KmpSyncdCryptoActionData)(
        new Int8Array(
          o("WAWebSyncdRequestEncode").encodeSyncActionData({
            index: o("WAArrayBufferUtils").stringToArrayBuffer(e.index),
            value: o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
              (n = e.value) == null ? void 0 : n.buffer,
            ),
            padding: new Uint8Array(t).buffer,
            version: e.version,
          }),
        ),
      );
    }
    ((l.toKmpSyncdCryptoMutationKeyData = s),
      (l.toKmpSyncdCryptoMutationKey = c),
      (l.toKmpSyncdMutationDataForEncryption = d),
      (l.toKmpSyncdMutationDataForDecryption = m),
      (l.toKmpSyncdEncryptedData = p),
      (l.toKmpSyncdActionData = _));
  },
  98,
);
