__d(
  "WAWebProtobufsGroupMembershipFormSubmission.pb",
  ["WAProtoConst", "WAWebProtobufsGroupMembershipForm.pb"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {},
      u = {},
      c = {};
    ((s.name = "GroupMembershipFormSubmission"),
      (s.internalSpec = {
        questionAnswers: [
          1,
          (e = o("WAProtoConst")).FLAGS.REPEATED | e.TYPES.MESSAGE,
          u,
        ],
        memberTagAnswer: [2, e.TYPES.MESSAGE, c],
        schemaVersion: [3, e.TYPES.UINT32],
      }),
      (u.name = "GroupMembershipFormQuestionAnswer"),
      (u.internalSpec = {
        question: [
          1,
          e.TYPES.MESSAGE,
          o("WAWebProtobufsGroupMembershipForm.pb")
            .GroupMembershipFormQuestionSpec,
        ],
        answer: [2, e.TYPES.STRING],
      }),
      (c.name = "GroupMembershipFormMemberTagAnswer"),
      (c.internalSpec = {
        prompt: [1, e.TYPES.STRING],
        memberTag: [2, e.TYPES.STRING],
      }),
      (l.GroupMembershipFormSubmissionSpec = s),
      (l.GroupMembershipFormQuestionAnswerSpec = u),
      (l.GroupMembershipFormMemberTagAnswerSpec = c));
  },
  98,
);
