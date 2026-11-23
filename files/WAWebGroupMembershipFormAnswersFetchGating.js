__d(
  "WAWebGroupMembershipFormAnswersFetchGating",
  [
    "WAWebDBGroupsGroupMetadata",
    "WAWebGroupMembershipFormGating",
    "WAWebSchemaParticipant",
    "WAWebUserUtils",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
      if ((t == null ? void 0 : t.membershipForm) == null) return !1;
      var n = await o("WAWebSchemaParticipant")
          .getParticipantTable()
          .get(e.toString()),
        r =
          (n == null
            ? void 0
            : n.admins.some(function (e) {
                return o("WAWebUserUtils").isMeAccount(
                  o("WAWebWidFactory").createWid(e),
                );
              })) === !0;
      return (
        r &&
        o("WAWebGroupMembershipFormGating").isGroupMembershipFormReviewEnabled()
      );
    }
    l.shouldFetchGroupMembershipFormAnswers = e;
  },
  98,
);
