__d(
  "WAWebGroupServerSentInviteEligibility",
  ["WAWebABProps", "WAWebOutContactServerSentInviteEligibility"],
  function (t, n, r, o, a, i, l) {
    var e = 1;
    function s(e) {
      return (
        c(e) &&
        o(
          "WAWebOutContactServerSentInviteEligibility",
        ).isServerSentInviteSenderEligible() &&
        o(
          "WAWebOutContactServerSentInviteEligibility",
        ).isServerSentInviteSenderPushNameEligible() &&
        o(
          "WAWebOutContactServerSentInviteEligibility",
        ).isServerSentInviteReceiverEligible(e[0]) &&
        u()
      );
    }
    function u() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "server_sent_invites_for_groups_web_enabled",
        ) === e
      );
    }
    function c(e) {
      return e.length === 1;
    }
    ((l.isGroupServerSentInviteEligible = s),
      (l.isGroupServerSentInviteAbPropEnabled = u),
      (l.isSingleGroupInvitee = c));
  },
  98,
);
