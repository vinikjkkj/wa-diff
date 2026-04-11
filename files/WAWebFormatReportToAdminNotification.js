__d(
  "WAWebFormatReportToAdminNotification",
  [
    "fbt",
    "WAWebFormatParticipantNames",
    "WAWebGroupType",
    "WAWebUserPrefsMeUser",
  ],
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
        a = o("WAWebUserPrefsMeUser").isMeAccount(e);
      if (a) {
        var i = s._(
            /*BTDS*/ "You turned on send for admin review for this group. Click to change.",
          ),
          l = s._(
            /*BTDS*/ "You turned off send for admin review for this group. Click to change.",
          );
        return n ? i : l;
      }
      if (e) {
        var u = o("WAWebFormatParticipantNames").getFormattedName(e, !1),
          c = s._(
            /*BTDS*/ "{author} turned on send for admin review for this group. Click to change.",
            [s._param("author", u)],
          ),
          d = s._(
            /*BTDS*/ "{author} turned off send for admin review for this group. Click to change.",
            [s._param("author", u)],
          ),
          m = s._(
            /*BTDS*/ "{author} turned on send for admin review for this group. Click to learn more.",
            [s._param("author", u)],
          ),
          p = s._(
            /*BTDS*/ "{author} turned off send for admin review for this group. Click to learn more.",
            [s._param("author", u)],
          );
        return r ? (n ? c : d) : n ? m : p;
      }
      var _ = s._(
          /*BTDS*/ "Send for admin review is turned on for this group. Click to change.",
        ),
        f = s._(
          /*BTDS*/ "Send for admin review is turned off for this group. Click to change.",
        ),
        g = s._(
          /*BTDS*/ "Send for admin review is turned on for this group. Click to learn more.",
        ),
        h = s._(
          /*BTDS*/ "Send for admin review is turned off for this group. Click to learn more.",
        );
      return r ? (n ? _ : f) : n ? g : h;
    }
    l.formatReportToAdminNotification = e;
  },
  226,
);
