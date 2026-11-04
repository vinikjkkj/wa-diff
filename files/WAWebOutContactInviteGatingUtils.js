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
        ? m()
        : o(
            "WAWebOutContactServerSentInviteEligibility",
          ).areServerSentInvitePrerequisitesMet(e) &&
            m() &&
            o(
              "WAWebOutContactServerSentInviteEligibility",
            ).isServerSentInviteAbPropEnabled();
    }
    function d(e) {
      return (
        !o("WAWebOutContactInviteGating").isOutContactInviteEnabled() &&
        e > o("WAWebGroupServerSentInviteEligibility").GROUP_SSI_MAX_INVITEES
      );
    }
    function m() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "non_wa_contact_invite_cta_enabled",
        ) === e
      );
    }
    ((l.canShow1to1OutContactsInSession = s),
      (l.canShowOutContactFor1to1Invite = u),
      (l.isContactEditInviteCtaEnabled = c),
      (l.isOverGroupInviteLimit = d));
  },
  98,
);
