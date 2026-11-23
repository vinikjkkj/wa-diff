__d(
  "MAWArmadilloAppMetaTableSchema.pb",
  ["WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {},
      u = {};
    ((s.name = "DbAppMetaValuesProto"),
      (s.internalSpec = {
        msgTypeVersion: [1, (e = o("WAProtoConst")).TYPES.INT32],
        hmacKey: [2, e.TYPES.BYTES],
        allowSecurityAlert: [3, e.TYPES.BOOL],
        hotlikeSticker: [4, e.TYPES.BYTES],
        isBackfilledForOccamadillo: [5, e.TYPES.BOOL],
        allowSecurityAlertForSelf: [11, e.TYPES.BOOL],
        hasMigratedFromDexie: [12, e.TYPES.BOOL],
        restoreMigrationAttempts: [13, e.TYPES.INT32],
        deviceJid: [14, e.TYPES.STRING],
        restoreToDexieMigrationComplete: [15, e.TYPES.BOOL],
        dbMigrationVersion: [16, e.TYPES.INT32],
      }),
      (u.name = "AppMetaTableSchemaProto"),
      (u.internalSpec = {
        key: [1, e.TYPES.STRING],
        value: [2, e.TYPES.MESSAGE, s],
      }),
      (l.DbAppMetaValuesProtoSpec = s),
      (l.AppMetaTableSchemaProtoSpec = u));
  },
  98,
);
