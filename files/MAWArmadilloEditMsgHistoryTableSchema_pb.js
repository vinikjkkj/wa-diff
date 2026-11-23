__d(
  "MAWArmadilloEditMsgHistoryTableSchema.pb",
  ["MAWArmadilloMessagesTableSchema.pb", "WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {};
    ((s.name = "EditMsgHistoryTableSchemaProto"),
      (s.internalSpec = {
        author: [1, (e = o("WAProtoConst")).TYPES.STRING],
        editMsgHistoryId: [2, e.TYPES.INT32],
        editTs: [3, e.TYPES.INT64],
        msgContent: [
          4,
          e.TYPES.MESSAGE,
          o("MAWArmadilloMessagesTableSchema.pb").MsgContentProtoSpec,
        ],
        originalMsgExternalId: [5, e.TYPES.STRING],
        specialTextSize: [6, e.TYPES.INT32],
        threadJid: [7, e.TYPES.STRING],
        editExternalId: [8, e.TYPES.STRING],
        sendStatus: [9, e.TYPES.INT32],
      }),
      (l.EditMsgHistoryTableSchemaProtoSpec = s));
  },
  98,
);
