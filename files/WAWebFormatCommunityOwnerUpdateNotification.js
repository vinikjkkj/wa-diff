__d(
  "WAWebFormatCommunityOwnerUpdateNotification",
  [
    "fbt",
    "WAWebChatCommunityUtils",
    "WAWebFormatParticipantNames",
    "WAWebSystemMessagesUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.author,
        n = e.clickable,
        r = e.templateParams,
        a = t ? o("WAWebFormatParticipantNames").getFormattedName(t, n) : null,
        i = o("WAWebChatCommunityUtils").getNewCommunityOwnerFromTemplateParams(
          r,
        ),
        l =
          i != null
            ? o("WAWebFormatParticipantNames").getFormattedName(i, n)
            : null;
      return t != null
        ? o("WAWebSystemMessagesUtils").isMe(t)
          ? s._(/*BTDS*/ "You assigned {user_name} as the new owner.", [
              s._param("user_name", l),
            ])
          : o("WAWebSystemMessagesUtils").isMe(i)
            ? s._(
                /*BTDS*/ "{user_name} assigned you as the new owner. Learn more",
                [s._param("user_name", a)],
              )
            : s._(
                /*BTDS*/ "{author_name} assigned {user_name} as the new owner.",
                [s._param("author_name", a), s._param("user_name", l)],
              )
        : o("WAWebSystemMessagesUtils").isMe(i)
          ? s._(/*BTDS*/ "You are the new owner. Learn more")
          : s._(/*BTDS*/ "{user_name} is the new owner.", [
              s._param("user_name", l),
            ]);
    }
    l.formatCommunityOwnerUpdateNotification = e;
  },
  226,
);
