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
        a = t
          ? o("WAWebFormatParticipantNames").getFormattedName({
              clickable: n,
              jid: t,
            })
          : null,
        i = o("WAWebChatCommunityUtils").getNewCommunityOwnerFromTemplateParams(
          r,
        ),
        l =
          i != null
            ? o("WAWebFormatParticipantNames").getFormattedName({
                clickable: n,
                jid: i,
              })
            : null;
      return t != null
        ? o("WAWebSystemMessagesUtils").isMe(t)
          ? s._(/*BTDS*/ "", [s._param("user_name", l)])
          : o("WAWebSystemMessagesUtils").isMe(i)
            ? s._(/*BTDS*/ "", [s._param("user_name", a)])
            : s._(/*BTDS*/ "", [
                s._param("author_name", a),
                s._param("user_name", l),
              ])
        : o("WAWebSystemMessagesUtils").isMe(i)
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ "", [s._param("user_name", l)]);
    }
    l.formatCommunityOwnerUpdateNotification = e;
  },
  226,
);
