__d(
  "WAWebGroupMembershipFormSystemMessageBody",
  [
    "fbt",
    "WAWebFormatParticipantNames",
    "WAWebGroupMembershipFormSystemMessageUtils",
    "WAWebSystemMessageGatingUtils",
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      var n = t.canShowChangeCta,
        r = e.id.participant;
      if (r == null) return s._(/*BTDS*/ "");
      if (o("WAWebUserUtils").isMeAccount(r)) return s._(/*BTDS*/ "");
      var a = o("WAWebFormatParticipantNames").getFormattedName({ jid: r });
      return n &&
        o(
          "WAWebGroupMembershipFormSystemMessageUtils",
        ).canChangeGroupMembershipFormFromMsg(e.id) &&
        o(
          "WAWebSystemMessageGatingUtils",
        ).systemMessageActionTextStylingEnabled()
        ? s._(/*BTDS*/ "", [s._param("name", a)])
        : s._(/*BTDS*/ "", [s._param("name", a)]);
    }
    l.formatGroupMembershipFormSystemMessageText = e;
  },
  226,
);
