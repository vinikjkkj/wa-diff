__d(
  "WAWebProtobufsGroupMembershipForm.pb",
  ["WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {},
      u = {};
    ((s.name = "GroupMembershipForm"),
      (s.internalSpec = {
        questions: [
          1,
          (e = o("WAProtoConst")).FLAGS.REPEATED | e.TYPES.MESSAGE,
          u,
        ],
        memberTagPrompt: [2, e.TYPES.STRING],
        schemaVersion: [3, e.TYPES.UINT32],
      }),
      (u.name = "GroupMembershipFormQuestion"),
      (u.internalSpec = { text: [1, e.TYPES.STRING] }),
      (l.GroupMembershipFormSpec = s),
      (l.GroupMembershipFormQuestionSpec = u));
  },
  98,
);
