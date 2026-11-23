__d(
  "WAWebFormatBroadcastNotification",
  [
    "fbt",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebFormatParticipantNames",
    "WAWebSystemMessageGatingUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return s._(/*BTDS*/ "");
    }
    function u() {
      return s._(/*BTDS*/ "");
    }
    function c(e) {
      var t = e.length;
      return o(
        "WAWebSystemMessageGatingUtils",
      ).systemMessageTerminalPeriodsEnabled()
        ? s._(/*BTDS*/ "", [
            s._plural(t),
            s._param(
              "name",
              o("WAWebFormatParticipantNames").getFormattedNames(e, !1),
            ),
          ])
        : s._(/*BTDS*/ "", [
            s._plural(t),
            s._param(
              "name",
              o("WAWebFormatParticipantNames").getFormattedNames(e, !1),
            ),
          ]);
    }
    function d(e) {
      var t = e.length;
      return o(
        "WAWebSystemMessageGatingUtils",
      ).systemMessageTerminalPeriodsEnabled()
        ? s._(/*BTDS*/ "", [
            s._plural(t),
            s._param(
              "name",
              o("WAWebFormatParticipantNames").getFormattedNames(e, !1),
            ),
          ])
        : s._(/*BTDS*/ "", [
            s._plural(t),
            s._param(
              "name",
              o("WAWebFormatParticipantNames").getFormattedNames(e, !1),
            ),
          ]);
    }
    function m(t) {
      var n = t.recipients,
        r = t.subtype;
      return r === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Create ||
        r === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.BbProCreate
        ? e().toString()
        : r === "add"
          ? c(n).toString()
          : r === "remove"
            ? d(n).toString()
            : "";
    }
    ((l.getAudienceCreateMessage = e),
      (l.getBizBroadcastProChatMessage = u),
      (l.getBroadcastAddMessage = c),
      (l.getBroadcastRemoveMessage = d),
      (l.formatBroadcastNotification = m));
  },
  226,
);
