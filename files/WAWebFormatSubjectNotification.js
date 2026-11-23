__d(
  "WAWebFormatSubjectNotification",
  [
    "fbt",
    "WAWebChatGroupUtils",
    "WAWebSystemMessageGatingUtils",
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.author,
        n = e.authorClickable,
        r = e.chat,
        a = e.subjectValue;
      return o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(r)
        ? o("WAWebUserUtils").isMeAccount(t)
          ? o(
              "WAWebSystemMessageGatingUtils",
            ).systemMessageTerminalPeriodsEnabled()
            ? s._(/*BTDS*/ "", [s._param("community_name", a)])
            : s._(/*BTDS*/ "", [s._param("community_name", a)])
          : n != null
            ? u(n, a)
            : c(a)
        : o("WAWebUserUtils").isMeAccount(t)
          ? o(
              "WAWebSystemMessageGatingUtils",
            ).systemMessageTerminalPeriodsEnabled()
            ? s._(/*BTDS*/ "", [s._param("group_name", a)])
            : s._(/*BTDS*/ "", [s._param("group_name", a)])
          : n != null
            ? d(n, a)
            : m(a);
    }
    function u(e, t) {
      return o(
        "WAWebSystemMessageGatingUtils",
      ).systemMessageTerminalPeriodsEnabled()
        ? s._(/*BTDS*/ "", [s._param("user", e), s._param("community_name", t)])
        : s._(/*BTDS*/ "", [
            s._param("user", e),
            s._param("community_name", t),
          ]);
    }
    function c(e) {
      return o(
        "WAWebSystemMessageGatingUtils",
      ).systemMessageTerminalPeriodsEnabled()
        ? s._(/*BTDS*/ "", [s._param("community_name", e)])
        : s._(/*BTDS*/ "", [s._param("community_name", e)]);
    }
    function d(e, t) {
      return o(
        "WAWebSystemMessageGatingUtils",
      ).systemMessageTerminalPeriodsEnabled()
        ? s._(/*BTDS*/ "", [s._param("user", e), s._param("group_name", t)])
        : s._(/*BTDS*/ "", [s._param("user", e), s._param("group_name", t)]);
    }
    function m(e) {
      return o(
        "WAWebSystemMessageGatingUtils",
      ).systemMessageTerminalPeriodsEnabled()
        ? s._(/*BTDS*/ "", [s._param("group_name", e)])
        : s._(/*BTDS*/ "", [s._param("group_name", e)]);
    }
    l.formatSubjectNotification = e;
  },
  226,
);
