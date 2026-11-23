__d(
  "MAWArmadilloMissingKeysTableSchema.pb",
  ["WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {},
      u = {};
    ((s.name = "DeviceResponse"),
      (s.internalSpec = {
        deviceId: [1, (e = o("WAProtoConst")).TYPES.INT32],
        deviceResponse: [2, e.TYPES.BOOL],
      }),
      (u.name = "MissingKeysTableSchemaProto"),
      (u.internalSpec = {
        keyHex: [1, e.TYPES.STRING],
        keyId: [2, e.TYPES.BYTES],
        timestamp: [3, e.TYPES.INT64],
        deviceResponses: [4, e.FLAGS.REPEATED | e.TYPES.MESSAGE, s],
      }),
      (l.DeviceResponseSpec = s),
      (l.MissingKeysTableSchemaProtoSpec = u));
  },
  98,
);
