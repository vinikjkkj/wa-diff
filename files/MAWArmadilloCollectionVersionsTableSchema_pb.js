__d(
  "MAWArmadilloCollectionVersionsTableSchema.pb",
  ["WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {};
    ((s.name = "CollectionVersionsTableSchemaProto"),
      (s.internalSpec = {
        collection: [1, (e = o("WAProtoConst")).TYPES.STRING],
        version: [2, e.TYPES.INT32],
        state: [3, e.TYPES.STRING],
        finiteFailureStartTime: [4, e.TYPES.INT64],
        ltHash: [5, e.TYPES.BYTES],
        isCollectionInMacMismatchFatal: [6, e.TYPES.BOOL],
        isCollectionLthashInconsistent: [7, e.TYPES.BOOL],
      }),
      (l.CollectionVersionsTableSchemaProtoSpec = s));
  },
  98,
);
