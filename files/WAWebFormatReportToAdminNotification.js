__d(
  "WAWebFormatReportToAdminNotification",
  ["fbt", "WAWebFormatParticipantNames", "WAWebGroupType", "WAWebUserUtils"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      var n =
          t[0] &&
          o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled.cast(
            t[0].toString(),
          ) ===
            o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled.On,
        r =
          t[1] &&
          o("WAWebGroupType").GroupSettingChangeSystemMessageIsAdmin.cast(
            t[1].toString(),
          ) ===
            o("WAWebGroupType").GroupSettingChangeSystemMessageIsAdmin.Admin,
        a = o("WAWebUserUtils").isMeAccount(e);
      if (a) {
        var i = s._(/*BTDS*/ ""),
          l = s._(/*BTDS*/ "");
        return n ? i : l;
      }
      if (e) {
        var u = o("WAWebFormatParticipantNames").getFormattedName({
            clickable: !1,
            jid: e,
          }),
          c = s._(/*BTDS*/ "", [s._param("author", u)]),
          d = s._(/*BTDS*/ "", [s._param("author", u)]),
          m = s._(/*BTDS*/ "", [s._param("author", u)]),
          p = s._(/*BTDS*/ "", [s._param("author", u)]);
        return r ? (n ? c : d) : n ? m : p;
      }
      var _ = s._(/*BTDS*/ ""),
        f = s._(/*BTDS*/ ""),
        g = s._(/*BTDS*/ ""),
        h = s._(/*BTDS*/ "");
      return r ? (n ? _ : f) : n ? g : h;
    }
    l.formatReportToAdminNotification = e;
  },
  226,
);
