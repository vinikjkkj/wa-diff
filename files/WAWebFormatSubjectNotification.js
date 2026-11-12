__d(
  "WAWebFormatSubjectNotification",
  ["fbt", "WAWebChatGroupUtils", "WAWebUserUtils"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.author,
        n = e.authorClickable,
        r = e.chat,
        a = e.subjectValue;
      return o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(r)
        ? o("WAWebUserUtils").isMeAccount(t)
          ? s._(
              /*BTDS*/ 'You changed the community\'s name to "{community_name}"',
              [s._param("community_name", a)],
            )
          : n != null
            ? s._(
                /*BTDS*/ '{user} changed the community\'s name to "{community_name}"',
                [s._param("user", n), s._param("community_name", a)],
              )
            : s._(
                /*BTDS*/ 'A member changed the community\'s name to "{community_name}"',
                [s._param("community_name", a)],
              )
        : o("WAWebUserUtils").isMeAccount(t)
          ? s._(/*BTDS*/ 'You changed the group name to "{group_name}"', [
              s._param("group_name", a),
            ])
          : n != null
            ? s._(/*BTDS*/ '{user} changed the group name to "{group_name}"', [
                s._param("user", n),
                s._param("group_name", a),
              ])
            : s._(
                /*BTDS*/ 'A member changed the group name to "{group_name}"',
                [s._param("group_name", a)],
              );
    }
    l.formatSubjectNotification = e;
  },
  226,
);
