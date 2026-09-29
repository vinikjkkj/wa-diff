__d(
  "WAWebOutContactInviteGatingUtils",
  [
    "WAWebABProps",
    "WAWebOutContactInviteGating",
    "WAWebOutContactServerSentInviteEligibility",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 1;
    function s() {
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
    function u(e) {
      return (
        o("WAWebOutContactInviteGating").isOutContactInviteEnabled() ||
        o(
          "WAWebOutContactServerSentInviteEligibility",
        ).isServerSentInviteEligible(e.phoneNumber)
      );
    }
    function c(e) {
      return o("WAWebOutContactInviteGating").isOutContactInviteEnabled()
        ? d()
        : o(
            "WAWebOutContactServerSentInviteEligibility",
          ).areServerSentInvitePrerequisitesMet(e) &&
            d() &&
            o(
              "WAWebOutContactServerSentInviteEligibility",
            ).isServerSentInviteAbPropEnabled();
    }
    function d() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "non_wa_contact_invite_cta_enabled",
        ) === e
      );
    }
    ((l.canShow1to1OutContactsInSession = s),
      (l.canShowOutContactFor1to1Invite = u),
      (l.isContactEditInviteCtaEnabled = c));
  },
  98,
);
