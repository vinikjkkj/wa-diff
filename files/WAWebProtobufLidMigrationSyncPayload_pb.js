__d(
  "WAWebProtobufLidMigrationSyncPayload.pb",
  ["WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {},
      u = {};
    ((s.name = "LIDMigrationMapping"),
      (s.internalSpec = {
        pn: [1, (e = o("WAProtoConst")).FLAGS.REQUIRED | e.TYPES.UINT64],
        assignedLid: [2, e.FLAGS.REQUIRED | e.TYPES.UINT64],
        latestLid: [3, e.TYPES.UINT64],
      }),
      (u.name = "LIDMigrationMappingSyncPayload"),
      (u.internalSpec = {
        pnToLidMappings: [1, e.FLAGS.REPEATED | e.TYPES.MESSAGE, s],
        chatDbMigrationTimestamp: [2, e.TYPES.UINT64],
      }),
      (l.LIDMigrationMappingSpec = s),
      (l.LIDMigrationMappingSyncPayloadSpec = u));
  },
  98,
);
