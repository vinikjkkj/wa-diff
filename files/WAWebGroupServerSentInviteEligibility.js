__d(
  "WAWebGroupServerSentInviteEligibility",
  ["WAWebABProps", "WAWebOutContactServerSentInviteEligibility"],
  function (t, n, r, o, a, i, l) {
    var e = 1,
      s = 10;
    function u(e) {
      return (
        m(e.length) &&
        c() &&
        e.every(
          o("WAWebOutContactServerSentInviteEligibility")
            .isServerSentInviteReceiverEligible,
        ) &&
        d()
      );
    }
    function c() {
      return (
        o(
          "WAWebOutContactServerSentInviteEligibility",
        ).isServerSentInviteSenderEligible() &&
        o(
          "WAWebOutContactServerSentInviteEligibility",
        ).isServerSentInviteSenderPushNameEligible()
      );
    }
    function d() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "server_sent_invites_for_groups_web_enabled",
        ) === e
      );
    }
    function m(e) {
      return e > 0 && e <= s;
    }
    ((l.GROUP_SSI_MAX_INVITEES = s),
      (l.isGroupServerSentInviteEligible = u),
      (l.isGroupServerSentInviteSenderEligible = c),
      (l.isGroupServerSentInviteAbPropEnabled = d),
      (l.isGroupServerSentInviteCountAllowed = m));
  },
  98,
);
