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
      if (r == null)
        return s._(/*BTDS*/ "The membership questions were updated.");
      if (o("WAWebUserUtils").isMeAccount(r))
        return s._(/*BTDS*/ "You updated the membership questions.");
      var a = o("WAWebFormatParticipantNames").getFormattedName({ jid: r });
      return n &&
        o(
          "WAWebGroupMembershipFormSystemMessageUtils",
        ).canChangeGroupMembershipFormFromMsg(e.id) &&
        o(
          "WAWebSystemMessageGatingUtils",
        ).systemMessageActionTextStylingEnabled()
        ? s._(/*BTDS*/ "{name} updated the membership questions", [
            s._param("name", a),
          ])
        : s._(/*BTDS*/ "{name} updated the membership questions.", [
            s._param("name", a),
          ]);
    }
    l.formatGroupMembershipFormSystemMessageText = e;
  },
  226,
);
