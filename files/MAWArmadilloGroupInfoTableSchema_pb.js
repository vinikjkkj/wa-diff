__d(
  "MAWArmadilloGroupInfoTableSchema.pb",
  ["WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {};
    ((s.name = "GroupInfoSchemaProto"),
      (s.internalSpec = {
        groupJid: [1, (e = o("WAProtoConst")).TYPES.STRING],
        threadId: [2, e.TYPES.INT32],
        creator: [3, e.TYPES.STRING],
        creationTs: [4, e.TYPES.INT64],
        name: [5, e.TYPES.STRING],
        nameOwner: [6, e.TYPES.STRING],
        nameTs: [7, e.TYPES.INT64],
        msgExpiration: [8, e.TYPES.INT32],
        participantVersion: [9, e.TYPES.STRING],
        inviter: [10, e.TYPES.STRING],
        memberAddMode: [11, e.TYPES.STRING],
      }),
      (l.GroupInfoSchemaProtoSpec = s));
  },
  98,
);
