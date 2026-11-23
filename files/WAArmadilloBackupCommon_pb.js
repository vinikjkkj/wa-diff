__d(
  "WAArmadilloBackupCommon.pb",
  ["WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {},
      u = {},
      c = {};
    ((s.name = "Subprotocol"),
      (s.internalSpec = {
        payload: [1, (e = o("WAProtoConst")).TYPES.BYTES],
        version: [2, e.TYPES.INT32],
      }),
      (u.name = "FrankingMetadata"),
      (u.internalSpec = {
        frankingTag: [3, e.TYPES.BYTES],
        reportingTag: [4, e.TYPES.BYTES],
      }),
      (c.name = "Metadata"),
      (c.internalSpec = {
        senderId: [1, e.TYPES.STRING],
        messageId: [2, e.TYPES.STRING],
        timestampMs: [3, e.TYPES.INT64],
        frankingMetadata: [4, e.TYPES.MESSAGE, u],
        payloadVersion: [5, e.TYPES.INT32],
        futureProofBehavior: [6, e.TYPES.INT32],
        threadTypeTag: [7, e.TYPES.INT32],
        clientTimestampMs: [8, e.TYPES.INT64],
      }),
      (l.SubprotocolSpec = s),
      (l.FrankingMetadataSpec = u),
      (l.MetadataSpec = c));
  },
  98,
);
