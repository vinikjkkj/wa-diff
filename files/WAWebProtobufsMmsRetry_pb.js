__d(
  "WAWebProtobufsMmsRetry.pb",
  ["$InternalEnum", "WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum")({
        GENERAL_ERROR: 0,
        SUCCESS: 1,
        NOT_FOUND: 2,
        DECRYPTION_ERROR: 3,
      }),
      u = {},
      c = {};
    ((u.name = "MediaRetryNotification"),
      (u.internalSpec = {
        stanzaId: [1, (e = o("WAProtoConst")).TYPES.STRING],
        directPath: [2, e.TYPES.STRING],
        result: [3, e.TYPES.ENUM, s],
        messageSecret: [4, e.TYPES.BYTES],
      }),
      (c.name = "ServerErrorReceipt"),
      (c.internalSpec = { stanzaId: [1, e.TYPES.STRING] }),
      (l.MediaRetryNotification$ResultType = s),
      (l.MediaRetryNotificationSpec = u),
      (l.ServerErrorReceiptSpec = c));
  },
  98,
);
