__d(
  "WAWebSyncdCollectionHandlerTypesConverter",
  [
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "decodeProtobuf",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("decodeProtobuf").decodeProtobuf(
        o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
        e,
      );
      return o("encodeProtobuf")
        .encodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionDataSpec, {
          value: t,
        })
        .readBuffer();
    }
    function s(t, n) {
      return t.map(function (t) {
        var r = e(t.binarySyncAction);
        return {
          index: t.index,
          action: t.action,
          binarySyncData: r,
          actionState: n,
          version: t.version,
          keyId: t.keyId,
          indexMac: t.indexMac,
          valueMac: t.valueMac,
          collection: t.collection,
          timestamp: t.timestamp,
        };
      });
    }
    function u(e, t, n, r, o) {
      return {
        index: e.index,
        binarySyncData: e.binarySyncData,
        version: e.version,
        keyId: e.keyId,
        indexMac: e.indexMac,
        valueMac: e.valueMac,
        collection: e.collection,
        timestamp: e.timestamp,
        action: n,
        actionState: t,
        modelId: r,
        modelType: o != null ? o : void 0,
      };
    }
    function c(e) {
      return e.map(function (e) {
        return {
          collection: e.collection,
          index: e.index,
          indexMac: e.indexMac,
          keyId: e.keyId,
          operation: o("WAWebProtobufsServerSync.pb")
            .SyncdMutation$SyncdOperation.SET,
          binarySyncData: e.binarySyncData,
          valueMac: e.valueMac,
          version: e.version,
        };
      });
    }
    ((l.syncActionToSyncData = e),
      (l.encryptedUploadMutationsToSyncActions = s),
      (l.setMutationToSyncAction = u),
      (l.syncActionsToDecryptedMutation = c));
  },
  98,
);
