__d(
  "WAWebProtobufsReporting.pb",
  ["WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {},
      u = {};
    ((s.name = "Config"),
      (s.internalSpec = {
        field: [1, (e = o("WAProtoConst")).TYPES.MAP, [e.TYPES.UINT32, u]],
      }),
      (u.internalDefaults = { minVersion: 1 }),
      (u.name = "Field"),
      (u.internalSpec = {
        minVersion: [1, e.TYPES.UINT32],
        maxVersion: [2, e.TYPES.UINT32],
        isMessage: [4, e.TYPES.BOOL],
        subfield: [5, e.TYPES.MAP, [e.TYPES.UINT32, u]],
      }),
      (l.ConfigSpec = s),
      (l.FieldSpec = u));
  },
  98,
);
