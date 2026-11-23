__d(
  "MAWArmadilloReceiverFetchInfoTableSchema.pb",
  ["WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {};
    ((s.name = "ReceiverFetchInfoTableSchemaProto"),
      (s.internalSpec = {
        mimetype: [1, (e = o("WAProtoConst")).TYPES.STRING],
        previewHeight: [2, e.TYPES.UINT32],
        previewWidth: [3, e.TYPES.UINT32],
        receiverFetchId: [4, e.TYPES.STRING],
        type: [5, e.TYPES.STRING],
        previewUrl: [6, e.TYPES.STRING],
        previewUrlExpirationTimestampMs: [7, e.TYPES.UINT64],
        accessibilitySummaryText: [8, e.TYPES.STRING],
      }),
      (l.ReceiverFetchInfoTableSchemaProtoSpec = s));
  },
  98,
);
