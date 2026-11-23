__d(
  "MAWArmadilloPendingMutationsTableSchema.pb",
  ["WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = { SET: 0, REMOVE: 1 },
      u = {};
    ((u.name = "PendingMutationsTableSchemaProto"),
      (u.internalSpec = {
        id: [1, (e = o("WAProtoConst")).TYPES.INT32],
        collection: [2, e.TYPES.STRING],
        index: [3, e.TYPES.STRING],
        binarySyncAction: [4, e.TYPES.BYTES],
        version: [5, e.TYPES.INT32],
        operation: [6, e.TYPES.ENUM, s],
        timestamp: [7, e.TYPES.INT64],
        action: [8, e.TYPES.STRING],
      }),
      (l.SYNCD_MUTATION_SYNCD_OPERATION = s),
      (l.PendingMutationsTableSchemaProtoSpec = u));
  },
  98,
);
