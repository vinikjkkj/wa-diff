__d(
  "WAWebFormatMemberAddModeNotification",
  ["fbt", "WAWebFormatParticipantNames", "WAWebGroupType", "WAWebUserUtils"],
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
          ? s._(
              /*BTDS*/ "You changed this group's setting to allow all members to add others to this group. Click to change.",
            )
          : t
            ? s._(
                /*BTDS*/ "{author} changed this group's setting to allow all members to add others to this group. Click to change.",
                [s._param("author", r)],
              )
            : s._(
                /*BTDS*/ "{author} changed this group's setting to allow all members to add others to this group",
                [s._param("author", r)],
              )
        : o("WAWebUserUtils").isMeAccount(e)
          ? s._(
              /*BTDS*/ "You changed this group's setting to allow only admins to add others to this group. Click to change.",
            )
          : t
            ? s._(
                /*BTDS*/ "{author} changed this group's setting to allow only admins to add others to this group. Click to change.",
                [s._param("author", r)],
              )
            : s._(
                /*BTDS*/ "{author} changed this group's setting to allow only admins to add others to this group",
                [s._param("author", r)],
              );
    }
    l.default = e;
  },
  226,
);
