__d(
  "WAWebFormatAddNotification",
  ["fbt", "WAWebFormatMuseAgentAddText", "WAWebSystemMessagesUtils"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.author,
        n = e.authorClickable,
        r = e.museAgentAddAttribution,
        a = e.participantsClickable,
        i = e.recipients,
        l = e.subject,
        u = e.subjectClickable,
        c =
          i != null
            ? o("WAWebFormatMuseAgentAddText").formatMuseAgentAddText({
                author: t,
                authorClickable: n,
                agentClickable: a,
                attribution: r,
                recipients: i,
              })
            : null;
      return c != null
        ? c
        : t
          ? o("WAWebSystemMessagesUtils").isMe(t)
            ? s._(/*BTDS*/ "", [s._param("names", a)])
            : o("WAWebSystemMessagesUtils").isMe(l)
              ? n != null
                ? s._(/*BTDS*/ "", [s._param("user_name", n)])
                : s._(/*BTDS*/ "")
              : n != null
                ? s._(/*BTDS*/ "", [
                    s._param("user_name", n),
                    s._param("names", a),
                  ])
                : s._(/*BTDS*/ "", [s._param("names", a)])
          : o("WAWebSystemMessagesUtils").isMe(l)
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "", [s._param("user_name", u)]);
    }
    l.formatAddNotification = e;
  },
  226,
);
