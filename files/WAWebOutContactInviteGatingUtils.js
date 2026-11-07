__d(
  "WAWebOutContactInviteGatingUtils",
  [
    "WAWebABProps",
    "WAWebGroupServerSentInviteEligibility",
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
        ? p()
        : o(
            "WAWebOutContactServerSentInviteEligibility",
          ).areServerSentInvitePrerequisitesMet(e) &&
            p() &&
            o(
              "WAWebOutContactServerSentInviteEligibility",
            ).isServerSentInviteAbPropEnabled();
    }
    function d(e) {
      return (
        e > o("WAWebGroupServerSentInviteEligibility").GROUP_SSI_MAX_INVITEES &&
        o(
          "WAWebGroupServerSentInviteEligibility",
        ).isGroupServerSentInviteSenderEligible() &&
        o(
          "WAWebGroupServerSentInviteEligibility",
        ).isGroupServerSentInviteAbPropEnabled()
      );
    }
    function m(e) {
      return d(e + 1);
    }
    function p() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "non_wa_contact_invite_cta_enabled",
        ) === e
      );
    }
    ((l.canShow1to1OutContactsInSession = s),
      (l.canShowOutContactFor1to1Invite = u),
      (l.isContactEditInviteCtaEnabled = c),
      (l.isOverGroupInviteLimit = d),
      (l.isGroupInviteLimitReached = m));
  },
  98,
);
