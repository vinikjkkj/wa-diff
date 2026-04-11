__d(
  "WAWebMemberShareGroupHistoryModeFormatSystemMessageText",
  [
    "fbt",
    "WALogger",
    "WAWebFormatParticipantNames",
    "WAWebGroupHistoryShareMode",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e, u;
    function c(t) {
      var n,
        r = t.msg,
        a = (n = r.templateParams) == null ? void 0 : n[0];
      if (a == null)
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history] memberShareGroupHistoryMode null",
              ])),
          ),
          ""
        );
      var i = o("WAWebGroupHistoryShareMode").MemberShareGroupHistoryMode.cast(
        a.toString(),
      );
      if (i == null)
        return (
          o("WALogger").ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history] memberShareGroupHistoryMode invalid",
              ])),
          ),
          ""
        );
      var l = o("WAWebUserPrefsMeUser").isMeAccount(r.author),
        c = r.author;
      if (l) {
        if (
          i ===
          o("WAWebGroupHistoryShareMode").MemberShareGroupHistoryMode
            .ADMIN_SHARE
        )
          return s._(
            /*BTDS*/ "You changed this group's settings to allow only admins to send message history to new members.",
          );
        if (
          i ===
          o("WAWebGroupHistoryShareMode").MemberShareGroupHistoryMode
            .ALL_MEMBER_SHARE
        )
          return s._(
            /*BTDS*/ "You changed this group's settings to allow all members to send message history to new members.",
          );
      }
      var d = c ? o("WAWebFormatParticipantNames").getFormattedName(c) : null;
      return i ===
        o("WAWebGroupHistoryShareMode").MemberShareGroupHistoryMode.ADMIN_SHARE
        ? d == null
          ? s._(
              /*BTDS*/ "This group's settings have changed to allow only admins to send message history to new members.",
            )
          : s._(
              /*BTDS*/ "{name} changed this group's settings to allow only admins to send message history to new members.",
              [s._param("name", d)],
            )
        : i ===
            o("WAWebGroupHistoryShareMode").MemberShareGroupHistoryMode
              .ALL_MEMBER_SHARE
          ? d == null
            ? s._(
                /*BTDS*/ "This group's settings have changed to allow all members to send message history to new members.",
              )
            : s._(
                /*BTDS*/ "{name} changed this group's settings to allow all members to send message history to new members.",
                [s._param("name", d)],
              )
          : "";
    }
    l.default = c;
  },
  226,
);
