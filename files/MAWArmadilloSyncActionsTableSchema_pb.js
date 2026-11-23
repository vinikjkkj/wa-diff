__d(
  "MAWArmadilloSyncActionsTableSchema.pb",
  ["WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {};
    ((s.name = "SyncActionsTableSchemaProto"),
      (s.internalSpec = {
        index: [1, (e = o("WAProtoConst")).TYPES.STRING],
        binarySyncData: [2, e.TYPES.BYTES],
        actionState: [3, e.TYPES.STRING],
        version: [4, e.TYPES.INT32],
        keyId: [5, e.TYPES.BYTES],
        modelId: [6, e.TYPES.STRING],
        modelType: [7, e.TYPES.STRING],
        indexMac: [8, e.TYPES.BYTES],
        valueMac: [9, e.TYPES.BYTES],
        collection: [10, e.TYPES.STRING],
        timestamp: [11, e.TYPES.INT64],
        action: [12, e.TYPES.STRING],
      }),
      (l.SyncActionsTableSchemaProtoSpec = s));
  },
  98,
);
