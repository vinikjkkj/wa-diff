__d(
  "WAWebProtobufsSyncdSnapshotRecovery.pb",
  ["WAProtoConst", "WAWebProtobufSyncAction.pb"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {},
      u = {},
      c = {};
    ((s.name = "SyncdSnapshotRecovery"),
      (s.internalSpec = {
        version: [1, (e = o("WAProtoConst")).TYPES.MESSAGE, c],
        collectionName: [2, e.TYPES.STRING],
        mutationRecords: [3, e.FLAGS.REPEATED | e.TYPES.MESSAGE, u],
        collectionLthash: [4, e.TYPES.BYTES],
      }),
      (u.name = "SyncdPlainTextRecord"),
      (u.internalSpec = {
        value: [
          1,
          e.TYPES.MESSAGE,
          o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
        ],
        keyId: [2, e.TYPES.BYTES],
        mac: [3, e.TYPES.BYTES],
      }),
      (c.name = "SyncdVersion"),
      (c.internalSpec = { version: [1, e.TYPES.UINT64] }),
      (l.SyncdSnapshotRecoverySpec = s),
      (l.SyncdPlainTextRecordSpec = u),
      (l.SyncdVersionSpec = c));
  },
  98,
);
