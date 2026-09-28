__d(
  "WAWebOutContactInviteGatingUtils",
  ["WAWebOutContactInviteGating", "WAWebOutContactServerSentInviteEligibility"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebOutContactInviteGating").isOutContactInviteEnabled() ||
        (o(
          "WAWebOutContactServerSentInviteEligibility",
        ).isServerSentInviteSenderEligible() &&
          o(
            "WAWebOutContactServerSentInviteEligibility",
          ).isServerSentInviteSenderPushNameEligible())
      );
    }
    function s(e) {
      return (
        o("WAWebOutContactInviteGating").isOutContactInviteEnabled() ||
        o(
          "WAWebOutContactServerSentInviteEligibility",
        ).isServerSentInviteEligible(e.phoneNumber)
      );
    }
    ((l.canShow1to1OutContactsInSession = e),
      (l.canShowOutContactFor1to1Invite = s));
  },
  98,
);
