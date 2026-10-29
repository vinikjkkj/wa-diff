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
    function u(e) {
      var t = e.action,
        n = e.actionState,
        r = e.modelId,
        o = e.modelType,
        a = e.setMutation;
      return {
        index: a.index,
        binarySyncData: a.binarySyncData,
        version: a.version,
        keyId: a.keyId,
        indexMac: a.indexMac,
        valueMac: a.valueMac,
        collection: a.collection,
        timestamp: a.timestamp,
        action: t,
        actionState: n,
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
