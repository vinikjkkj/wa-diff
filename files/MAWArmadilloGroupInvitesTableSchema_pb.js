__d(
  "MAWArmadilloGroupInvitesTableSchema.pb",
  ["WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {};
    ((s.name = "GroupInvitesTableSchemaProto"),
      (s.internalSpec = {
        inviterJid: [1, (e = o("WAProtoConst")).TYPES.STRING],
        invitedParticipantId: [2, e.TYPES.STRING],
        inviteCode: [3, e.TYPES.STRING],
        inviteExpirationTs: [4, e.TYPES.INT64],
        caption: [5, e.TYPES.STRING],
      }),
      (l.GroupInvitesTableSchemaProtoSpec = s));
  },
  98,
);
