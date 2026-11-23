__d(
  "MAWArmadilloContactsTableSchema.pb",
  ["WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {},
      u = {};
    ((s.name = "EphemeralSettingProto"),
      (s.internalSpec = {
        ephemeralExpirationInSec: [1, (e = o("WAProtoConst")).TYPES.UINT32],
        ephemeralLastUpdatedOrSetTimestamp: [2, e.TYPES.INT64],
      }),
      (u.name = "EphemeralSyncResponseBackoffInfo"),
      (u.internalSpec = {
        syncResponseRetries: [1, e.TYPES.INT32],
        syncResponseSentTs: [2, e.TYPES.INT64],
      }),
      (l.EphemeralSettingProtoSpec = s),
      (l.EphemeralSyncResponseBackoffInfoSpec = u));
  },
  98,
);
