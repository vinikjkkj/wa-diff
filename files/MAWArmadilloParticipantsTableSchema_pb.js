__d(
  "MAWArmadilloParticipantsTableSchema.pb",
  ["WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {};
    ((s.name = "ParticipantsTableSchemaProto"),
      (s.internalSpec = {
        id: [1, (e = o("WAProtoConst")).TYPES.STRING],
        userJid: [2, e.TYPES.STRING],
        deliveredWatermarkTs: [3, e.TYPES.INT64],
        lastReadWatermarkTs: [4, e.TYPES.INT64],
        type: [5, e.TYPES.STRING],
        addressable: [6, e.TYPES.BOOL],
        lastReadActionTs: [7, e.TYPES.INT64],
        threadId: [9, e.TYPES.INT32],
        threadJid: [10, e.TYPES.STRING],
      }),
      (l.ParticipantsTableSchemaProtoSpec = s));
  },
  98,
);
