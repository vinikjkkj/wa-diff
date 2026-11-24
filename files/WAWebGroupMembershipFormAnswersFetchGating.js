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
      if (t == null || !u(t)) return !1;
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
    function s(e) {
      return (
        u(e) &&
        e.participants.some(function (e) {
          return o("WAWebUserUtils").isMeAccount(e.id) && e.isAdmin;
        }) &&
        o("WAWebGroupMembershipFormGating").isGroupMembershipFormReviewEnabled()
      );
    }
    function u(e) {
      return (
        e.membershipApprovalMode === !0 &&
        e.isParentGroup !== !0 &&
        e.defaultSubgroup !== !0
      );
    }
    ((l.shouldFetchGroupMembershipFormAnswers = e),
      (l.shouldFetchGroupMembershipFormAnswersForGroupInfo = s));
  },
  98,
);
