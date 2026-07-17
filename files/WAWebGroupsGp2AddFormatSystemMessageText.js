__d(
  "WAWebGroupsGp2AddFormatSystemMessageText",
  [
    "WAWebContactCollection",
    "WAWebFormatAddNotification",
    "WAWebFormatParticipantNames",
    "WAWebFrontendContactGetters",
    "WAWebMsgModelUtils",
    "WAWebWidFormat",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.msg,
        n = o("WAWebMsgModelUtils").getMsgDisplayName(t),
        r = t.get("author"),
        a = t.recipients || [],
        i = o("WAWebFormatParticipantNames").getFormattedNames(a, !1),
        l = a[0],
        s = l ? o("WAWebContactCollection").ContactCollection.get(l) : void 0,
        u;
      return (
        s
          ? (u = o("WAWebFrontendContactGetters").getFormattedName(s))
          : l
            ? (u = o("WAWebWidFormat").widToFormattedUser(l))
            : (u = ""),
        o("WAWebFormatAddNotification").formatAddNotification({
          author: r,
          authorClickable: n,
          subject: l,
          subjectClickable: u,
          participantsClickable: i,
        })
      );
    }
    l.default = e;
  },
  98,
);
