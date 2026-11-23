__d(
  "MAWArmadilloPersonalSenderKeyStatusTableSchema.pb",
  ["WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {};
    ((s.name = "PersonalSenderKeyStatusTableSchemaProto"),
      (s.internalSpec = {
        groupJid: [1, (e = o("WAProtoConst")).TYPES.STRING],
        senderKeyId: [2, e.TYPES.INT32],
        rotateSenderKey: [4, e.TYPES.BOOL],
        senderKeyTs: [5, e.TYPES.INT64],
        hasSenderKey: [6, e.FLAGS.REPEATED | e.TYPES.STRING],
      }),
      (l.PersonalSenderKeyStatusTableSchemaProtoSpec = s));
  },
  98,
);
