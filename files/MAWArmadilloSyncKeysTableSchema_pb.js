__d(
  "MAWArmadilloSyncKeysTableSchema.pb",
  ["WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {},
      u = {};
    ((s.name = "SyncKeyFingerprint"),
      (s.internalSpec = {
        currentIndex: [1, (e = o("WAProtoConst")).TYPES.INT32],
        deviceIndexes: [2, e.FLAGS.REPEATED | e.TYPES.INT32],
        rawId: [3, e.TYPES.INT64],
      }),
      (u.name = "SyncKeysTableSchemaProto"),
      (u.internalSpec = {
        id: [1, e.TYPES.BYTES],
        keyId: [2, e.TYPES.BYTES],
        keyData: [3, e.TYPES.BYTES],
        keyEpoch: [4, e.TYPES.INT64],
        timestamp: [5, e.TYPES.INT64],
        fingerprint: [6, e.TYPES.MESSAGE, s],
      }),
      (l.SyncKeyFingerprintSpec = s),
      (l.SyncKeysTableSchemaProtoSpec = u));
  },
  98,
);
