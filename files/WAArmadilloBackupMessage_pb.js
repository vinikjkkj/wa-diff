__d(
  "WAArmadilloBackupMessage.pb",
  ["WAArmadilloBackupCommon.pb", "WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = {};
    ((u.name = "BackupMessage"),
      (u.internalSpec = {
        metadata: [
          1,
          (e = o("WAProtoConst")).TYPES.MESSAGE,
          (s = o("WAArmadilloBackupCommon.pb")).MetadataSpec,
        ],
        encryptedTransportMessage: [2, e.TYPES.BYTES],
        encryptedTransportEvent: [5, e.TYPES.MESSAGE, s.SubprotocolSpec],
        encryptedTransportLocallyTransformedMessage: [
          6,
          e.TYPES.MESSAGE,
          s.SubprotocolSpec,
        ],
        miTransportAdminMessage: [7, e.TYPES.MESSAGE, s.SubprotocolSpec],
        __oneofs__: {
          payload: [
            "encryptedTransportMessage",
            "encryptedTransportEvent",
            "encryptedTransportLocallyTransformedMessage",
            "miTransportAdminMessage",
          ],
        },
      }),
      (l.BackupMessageSpec = u));
  },
  98,
);
