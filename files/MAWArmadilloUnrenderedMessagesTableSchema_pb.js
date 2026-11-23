__d(
  "MAWArmadilloUnrenderedMessagesTableSchema.pb",
  [
    "MAWArmadilloContactsTableSchema.pb",
    "MAWArmadilloMessagesTableSchema.pb",
    "WAProtoConst",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {};
    ((s.name = "UnrenderedMessagesTableSchemaProto"),
      (s.internalSpec = {
        type: [1, (e = o("WAProtoConst")).TYPES.STRING],
        ts: [2, e.TYPES.INT64],
        externalId: [3, e.TYPES.STRING],
        msgId: [4, e.TYPES.STRING],
        author: [5, e.TYPES.STRING],
        ack: [6, e.TYPES.INT32],
        resendCount: [7, e.TYPES.INT32],
        ephemeralSetting: [
          8,
          e.TYPES.MESSAGE,
          o("MAWArmadilloContactsTableSchema.pb").EphemeralSettingProtoSpec,
        ],
        messageDeleteForMeTs: [9, e.TYPES.INT64],
        rowId: [10, e.TYPES.INT32],
        thread: [11, e.TYPES.INT32],
        mediaId: [12, e.TYPES.INT32],
        msgContent: [13, e.TYPES.STRING],
        threadJid: [14, e.TYPES.STRING],
        reportingMeta: [
          15,
          e.TYPES.MESSAGE,
          o("MAWArmadilloMessagesTableSchema.pb").ReportingMetaProtoSpec,
        ],
        invitedParticipantUserJid: [16, e.TYPES.STRING],
        groupName: [17, e.TYPES.STRING],
        quote: [
          18,
          e.TYPES.MESSAGE,
          o("MAWArmadilloMessagesTableSchema.pb").DbQuotedMsgProtoSpec,
        ],
        xmaMessageType: [19, e.TYPES.INT32],
        sortOrderMs: [20, e.TYPES.INT64],
      }),
      (l.UnrenderedMessagesTableSchemaProtoSpec = s));
  },
  98,
);
