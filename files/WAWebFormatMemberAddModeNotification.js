__d(
  "WAWebFormatMemberAddModeNotification",
  [
    "fbt",
    "WAWebFormatParticipantNames",
    "WAWebGroupType",
    "WAWebSystemMessageGatingUtils",
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t, n) {
      var r;
      e &&
        (r = o("WAWebFormatParticipantNames").getFormattedName({
          clickable: !1,
          jid: e,
        }));
      var a =
        n[0] &&
        o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled.cast(
          n[0].toString(),
        ) ===
          o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled.On;
      return a
        ? o("WAWebUserUtils").isMeAccount(e)
          ? s._(/*BTDS*/ "")
          : t
            ? s._(/*BTDS*/ "", [s._param("author", r)])
            : (o(
                "WAWebSystemMessageGatingUtils",
              ).systemMessageTerminalPeriodsEnabled() &&
                s._(/*BTDS*/ "", [s._param("author", r)])) ||
              s._(/*BTDS*/ "", [s._param("author", r)])
        : o("WAWebUserUtils").isMeAccount(e)
          ? s._(/*BTDS*/ "")
          : t
            ? s._(/*BTDS*/ "", [s._param("author", r)])
            : (o(
                "WAWebSystemMessageGatingUtils",
              ).systemMessageTerminalPeriodsEnabled() &&
                s._(/*BTDS*/ "", [s._param("author", r)])) ||
              s._(/*BTDS*/ "", [s._param("author", r)]);
    }
    l.default = e;
  },
  226,
);
