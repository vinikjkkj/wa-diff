__d(
  "WAWebFormatSubjectNotification",
  ["fbt", "WAWebChatGroupUtils", "WAWebUserPrefsMeUser"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t, n, r) {
      return o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(e)
        ? o("WAWebUserPrefsMeUser").isMeAccount(t)
          ? s._(
              /*BTDS*/ 'You changed the community\'s name to "{community_name}"',
              [s._param("community_name", r)],
            )
          : n != null
            ? s._(
                /*BTDS*/ '{user} changed the community\'s name to "{community_name}"',
                [s._param("user", n), s._param("community_name", r)],
              )
            : s._(
                /*BTDS*/ 'A member changed the community\'s name to "{community_name}"',
                [s._param("community_name", r)],
              )
        : o("WAWebUserPrefsMeUser").isMeAccount(t)
          ? s._(/*BTDS*/ 'You changed the group name to "{group_name}"', [
              s._param("group_name", r),
            ])
          : n != null
            ? s._(/*BTDS*/ '{user} changed the group name to "{group_name}"', [
                s._param("user", n),
                s._param("group_name", r),
              ])
            : s._(
                /*BTDS*/ 'A member changed the group name to "{group_name}"',
                [s._param("group_name", r)],
              );
    }
    l.formatSubjectNotification = e;
  },
  226,
);
