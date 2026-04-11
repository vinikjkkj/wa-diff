__d(
  "WAWebProtobufsReporting.pb",
  ["WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {},
      u = {},
      c = {};
    ((s.internalDefaults = { minVersion: 1 }),
      (s.name = "Reportable"),
      (s.internalSpec = {
        minVersion: [1, (e = o("WAProtoConst")).TYPES.UINT32],
        maxVersion: [2, e.TYPES.UINT32],
        notReportableMinVersion: [3, e.TYPES.UINT32],
        never: [4, e.TYPES.BOOL],
      }),
      (u.name = "Config"),
      (u.internalSpec = {
        field: [1, e.TYPES.MAP, [e.TYPES.UINT32, c]],
        version: [2, e.TYPES.UINT32],
      }),
      (c.internalDefaults = { minVersion: 1 }),
      (c.name = "Field"),
      (c.internalSpec = {
        minVersion: [1, e.TYPES.UINT32],
        maxVersion: [2, e.TYPES.UINT32],
        notReportableMinVersion: [3, e.TYPES.UINT32],
        isMessage: [4, e.TYPES.BOOL],
        subfield: [5, e.TYPES.MAP, [e.TYPES.UINT32, c]],
      }),
      (l.ReportableSpec = s),
      (l.ConfigSpec = u),
      (l.FieldSpec = c));
  },
  98,
);
