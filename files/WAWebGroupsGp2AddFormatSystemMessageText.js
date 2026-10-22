__d(
  "WAWebGroupsGp2AddFormatSystemMessageText",
  [
    "WAWebContactCollection",
    "WAWebFormatAddNotification",
    "WAWebFormatParticipantNames",
    "WAWebFrontendContactGetters",
    "WAWebGroupAgentAddAttribution",
    "WAWebMsgModelUtils",
    "WAWebOrgMemberContactName",
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
      if (s) {
        var c;
        u =
          (c = o("WAWebOrgMemberContactName").getOrgMemberDisplayName(s)) !=
          null
            ? c
            : o("WAWebFrontendContactGetters").getFormattedName(s);
      } else l ? (u = o("WAWebWidFormat").widToFormattedUser(l)) : (u = "");
      return o("WAWebFormatAddNotification").formatAddNotification({
        author: r,
        authorClickable: n,
        museAgentAddAttribution: o(
          "WAWebGroupAgentAddAttribution",
        ).groupAgentAddAttributionFromBody(t.get("body")),
        subject: l,
        subjectClickable: u,
        participantsClickable: i,
        recipients: a,
      });
    }
    l.default = e;
  },
  98,
);
