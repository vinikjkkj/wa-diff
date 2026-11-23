__d(
  "MAWArmadilloEBMsgRangesTableSchema.pb",
  ["WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {};
    ((s.name = "EBMsgRangesTableSchemaProto"),
      (s.internalSpec = {
        rangeId: [1, (e = o("WAProtoConst")).TYPES.UINT32],
        threadJid: [2, e.TYPES.STRING],
        minMsgExternalId: [3, e.TYPES.STRING],
        maxMsgExternalId: [4, e.TYPES.STRING],
        minMsgSortOrderMs: [5, e.TYPES.UINT64],
        maxMsgSortOrderMs: [6, e.TYPES.UINT64],
        creationTime: [7, e.TYPES.INT64],
      }),
      (l.EBMsgRangesTableSchemaProtoSpec = s));
  },
  98,
);
