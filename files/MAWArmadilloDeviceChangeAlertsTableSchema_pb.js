__d(
  "MAWArmadilloDeviceChangeAlertsTableSchema.pb",
  ["WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {};
    ((s.name = "DeviceChangeAlertsTableSchemaProto"),
      (s.internalSpec = {
        action: [1, (e = o("WAProtoConst")).TYPES.STRING],
        isArchived: [2, e.TYPES.BOOL],
        deviceChangeAlertsId: [3, e.TYPES.INT64],
        location: [4, e.TYPES.STRING],
        model: [5, e.TYPES.STRING],
        ts: [6, e.TYPES.INT64],
        loggedOut: [7, e.TYPES.BOOL],
        deviceJid: [8, e.TYPES.STRING],
        identity: [9, e.TYPES.BYTES],
        platform: [10, e.TYPES.STRING],
        latitude: [11, e.TYPES.STRING],
        longitude: [12, e.TYPES.STRING],
        isConfirmed: [13, e.TYPES.BOOL],
        isNotified: [14, e.TYPES.BOOL],
      }),
      (l.DeviceChangeAlertsTableSchemaProtoSpec = s));
  },
  98,
);
