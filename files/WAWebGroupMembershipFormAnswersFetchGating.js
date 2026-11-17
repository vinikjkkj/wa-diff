__d(
  "WAWebGroupMembershipFormAnswersFetchGating",
  [
    "WAWebDBGroupsGroupMetadata",
    "WAWebGroupMembershipFormGating",
    "WAWebSchemaParticipant",
    "WAWebUserUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
          if ((t == null ? void 0 : t.membershipForm) == null) return !1;
          var n = yield o("WAWebSchemaParticipant")
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
            o(
              "WAWebGroupMembershipFormGating",
            ).isGroupMembershipFormReviewEnabled()
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.shouldFetchGroupMembershipFormAnswers = e;
  },
  98,
);
