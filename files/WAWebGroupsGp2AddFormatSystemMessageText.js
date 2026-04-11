__d(
  "WAWebGroupsGp2AddFormatSystemMessageText",
  [
    "WAWebContactCollection",
    "WAWebFormatAddNotification",
    "WAWebFormatParticipantNames",
    "WAWebFrontendContactGetters",
    "WAWebWidFormat",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.msg,
        n = t.displayName(),
        r = t.get("author"),
        a = t.recipients || [],
        i = o("WAWebFormatParticipantNames").getFormattedNames(a, !1),
        l = a[0],
        s = l ? o("WAWebContactCollection").ContactCollection.get(l) : void 0,
        u = s
          ? o("WAWebFrontendContactGetters").getFormattedName(s)
          : l
            ? o("WAWebWidFormat").widToFormattedUser(l)
            : "";
      return o("WAWebFormatAddNotification").formatAddNotification({
        author: r,
        authorClickable: n,
        subject: l,
        subjectClickable: u,
        participantsClickable: i,
      });
    }
    l.default = e;
  },
  98,
);
