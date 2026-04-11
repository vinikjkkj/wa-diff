__d(
  "WAWebSyncdRequestBuilderTypesConverter",
  [
    "WANullthrows",
    "WAWebProtobufSyncAction.pb",
    "decodeProtobuf",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e.map(function (e) {
        var n = o("decodeProtobuf").decodeProtobuf(
            o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
            e.binarySyncData,
          ).value,
          a = o("encodeProtobuf")
            .encodeProtobuf(
              o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
              r("WANullthrows")(n),
            )
            .readBuffer();
        return {
          collection: e.collection,
          index: e.index,
          binarySyncAction: a,
          operation: t,
          version: e.version,
          timestamp: e.timestamp,
          action: e.action,
        };
      });
    }
    l.syncActionsToPendingMutations = e;
  },
  98,
);
