__d(
  "WAWebKmpSyncdMutationUtils",
  [
    "WAWebKmpKotlinUtils",
    "WAWebKmpSyncdCollectionNameUtils",
    "WAWebKmpSyncdMutationKeyIdUtils",
    "WAWebKmpSyncdMutationNameUtils",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdActionUtils",
    "WAWebSyncdGetActionHandler",
    "wa-kmp-syncd-engine-api",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      if (e == null || t == null) return !1;
      var r = o("WAWebSyncdGetActionHandler").getActionHandler(e);
      return (n = r == null ? void 0 : r.isLidMutation(t)) != null ? n : !1;
    }
    function s(e) {
      var t = e.binarySyncData,
        n = o("wa-kmp-syncd-engine-api").KmpSyncdActionData.fromRawBytes(
          o("WAWebKmpKotlinUtils").asKmpByteArray(t),
        ),
        r = n.getValue();
      if (r == null)
        throw new (o(
          "wa-kmp-syncd-engine-api",
        ).KmpSyncdInterfaceError.KmpSyncdMutationError)(
          o("wa-kmp-syncd-engine-api").KmpSyncdInterfaceError
            .KmpSyncdMutationError.Reason.MISSING_VALUE,
          "Missing value in sync action data",
        );
      return r;
    }
    function u(e) {
      return o("wa-kmp-syncd-engine-api").KmpSyncdActionValue.fromRawBytes(
        o("WAWebKmpKotlinUtils").asKmpByteArray(e.binarySyncAction),
      );
    }
    function c(t) {
      var n = o("WAWebKmpSyncdCollectionNameUtils").asKmpSyncdCollectionName(
          t.collection,
        ),
        r = o("WAWebSyncdActionUtils").parseIndex(t.collection, t.index),
        a = o("WAWebSyncdActionUtils").getMutationNameFromIndex(
          t.collection,
          t.index,
        );
      if (r == null)
        throw new (o(
          "wa-kmp-syncd-engine-api",
        ).KmpSyncdInterfaceError.KmpSyncdMutationError)(
          o("wa-kmp-syncd-engine-api").KmpSyncdInterfaceError
            .KmpSyncdMutationError.Reason.INVALID_INDEX_FORMAT,
          "Invalid index format",
        );
      if (a == null)
        throw new (o(
          "wa-kmp-syncd-engine-api",
        ).KmpSyncdInterfaceError.KmpSyncdMutationError)(
          o("wa-kmp-syncd-engine-api").KmpSyncdInterfaceError
            .KmpSyncdMutationError.Reason.INVALID_INDEX_FORMAT,
          "Invalid index format",
        );
      return new (o("wa-kmp-syncd-engine-api").KmpSyncdMutation)(
        o("wa-kmp-syncd-engine-api").KmpLong.fromNumber(t.timestamp),
        null,
        t.version,
        o("WAWebKmpSyncdMutationKeyIdUtils").toKmpSyncdMutationKeyId(t.keyId),
        !1,
        o("wa-kmp-syncd-engine-api").KmpSyncdMutationOperation.Set,
        n,
        o("wa-kmp-syncd-engine-api")
          .KmpSyncdMutationName.fromString(a)
          .getOrElse(function (e) {
            throw e;
          }),
        o("WAWebKmpKotlinUtils").asKmpByteArray(t.valueMac),
        r,
        t.index,
        s(t),
        e(t.action, r),
      );
    }
    function d(t) {
      var n,
        r = o("WAWebSyncdActionUtils").parseIndex(t.collection, t.index),
        a = o("WAWebSyncdActionUtils").getMutationNameFromIndex(
          t.collection,
          t.index,
        );
      if (r == null)
        throw new (o(
          "wa-kmp-syncd-engine-api",
        ).KmpSyncdInterfaceError.KmpSyncdMutationError)(
          o("wa-kmp-syncd-engine-api").KmpSyncdInterfaceError
            .KmpSyncdMutationError.Reason.INVALID_INDEX_FORMAT,
          "Invalid index format",
        );
      if (a == null)
        throw new (o(
          "wa-kmp-syncd-engine-api",
        ).KmpSyncdInterfaceError.KmpSyncdMutationError)(
          o("wa-kmp-syncd-engine-api").KmpSyncdInterfaceError
            .KmpSyncdMutationError.Reason.INVALID_INDEX_FORMAT,
          "Invalid index format",
        );
      return new (o("wa-kmp-syncd-engine-api").KmpSyncdMutation)(
        o("wa-kmp-syncd-engine-api").KmpLong.fromNumber(t.timestamp),
        (n = t.id) == null ? void 0 : n.toString(),
        t.version,
        null,
        !1,
        m(t.operation),
        o("WAWebKmpSyncdCollectionNameUtils").asKmpSyncdCollectionName(
          t.collection,
        ),
        o("wa-kmp-syncd-engine-api")
          .KmpSyncdMutationName.fromString(a)
          .getOrElse(function (e) {
            throw e;
          }),
        null,
        r,
        t.index,
        u(t),
        e(t.action, r),
      );
    }
    function m(e) {
      return e ===
        o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET
        ? o("wa-kmp-syncd-engine-api").KmpSyncdMutationOperation.Set
        : e ===
            o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE
          ? o("wa-kmp-syncd-engine-api").KmpSyncdMutationOperation.Remove
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function p(e) {
      return e.name === "Set"
        ? o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET
        : e.name === "Remove"
          ? o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e.name,
              );
            })();
    }
    function _(e, t, n) {
      var r = e.encryptedData,
        a = e.mutation,
        i = r.keyId,
        l = n == null ? void 0 : n.get(i),
        s = a.rowId != null ? parseInt(a.rowId, 10) : void 0;
      return {
        id: s,
        collection: o("WAWebKmpSyncdCollectionNameUtils").asWebCollectionName(
          a.collectionName,
        ),
        index: a.encodedIndex,
        binarySyncAction:
          a.value != null
            ? o("WAWebKmpKotlinUtils").asUint8Array(a.value.toByteArray())
                .buffer
            : new ArrayBuffer(0),
        version: a.version,
        operation: p(a.operation),
        timestamp: o("WAWebKmpKotlinUtils").numberFromKmpLong(a.timestamp),
        action: o("WAWebKmpSyncdMutationNameUtils").asSyncdActionName(
          a.mutationName,
        ),
        keyId: o("WAWebKmpSyncdMutationKeyIdUtils").toSyncdKeyId(i),
        indexMac: o("WAWebKmpKotlinUtils").asUint8Array(r.indexMac).buffer,
        indexAndValueCipherText: o("WAWebKmpKotlinUtils").asUint8Array(
          r.indexAndValueCipherText,
        ).buffer,
        valueMac: o("WAWebKmpKotlinUtils").asUint8Array(r.mutationMac).buffer,
        keyData: l
          ? o("WAWebKmpSyncdMutationKeyIdUtils").toSyncdKeyData(l)
          : void 0,
        patchMac: t,
      };
    }
    ((l.asKmpSyncdMutation = c),
      (l.asPendingKmpSyncdMutation = d),
      (l.asKmpSyncdMutationOperation = m),
      (l.asWebSyncdMutationOperation = p),
      (l.asEncryptedUploadMutationType = _));
  },
  98,
);
