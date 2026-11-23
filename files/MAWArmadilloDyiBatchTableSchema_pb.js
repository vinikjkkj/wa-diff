__d(
  "MAWArmadilloDyiBatchTableSchema.pb",
  ["WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = { BACKUP_RESTORE: 0, E2E_DYI: 1 },
      u = {};
    ((u.name = "DyiBatchTableSchemaProto"),
      (u.internalSpec = {
        batchId: [1, (e = o("WAProtoConst")).TYPES.INT32],
        numMessages: [2, e.TYPES.INT32],
        oldestTs: [3, e.TYPES.INT64],
        threadId: [4, e.TYPES.STRING],
        isThread: [5, e.TYPES.BOOL],
        numMessagesRestored: [6, e.TYPES.INT32],
        qplInstanceKeyForThread: [7, e.TYPES.INT64],
        qplFlowDescriptor: [8, e.TYPES.ENUM, s],
        qplInstanceKeyE2E: [9, e.TYPES.INT64],
        numThreadsRestored: [10, e.TYPES.INT64],
      }),
      (l.DYI_BATCH_TABLE_SCHEMA_PROTO_QPL_FLOW_DESCRIPTOR = s),
      (l.DyiBatchTableSchemaProtoSpec = u));
  },
  98,
);
