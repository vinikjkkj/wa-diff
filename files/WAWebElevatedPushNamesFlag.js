__d(
  "WAWebElevatedPushNamesFlag",
  [
    "WAWebChatGetters",
    "WAWebContactGetters",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebStateUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (!e) return !1;
      var t = o("WAWebStateUtils").unproxy(e);
      return s({
        isCAG: o("WAWebFrontendChatGetters").getIsCAG(t),
        isGroup: o("WAWebChatGetters").getIsGroup(t),
        participantCount: t.getParticipantCount(),
      });
    }
    function s(e) {
      var t = e.isCAG,
        n = e.isGroup,
        r = e.participantCount;
      return n && (t || r > 2);
    }
    function u(e) {
      if (!e) return !1;
      var t = o("WAWebStateUtils").unproxy(e);
      return (
        o("WAWebChatGetters").getIsGroup(t) &&
        (o("WAWebFrontendChatGetters").getIsCAG(t) ||
          t.getParticipantCount() > 2)
      );
    }
    function c(e) {
      if (e == null) return !1;
      var t = o("WAWebStateUtils").unproxy(e),
        n = o("WAWebContactGetters").getNotifyName(t);
      return (
        o("WAWebFrontendContactGetters").getFormattedName(t) ===
          o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(t) &&
        n != null &&
        n !== ""
      );
    }
    ((l.elevatedPushNamesEnabled = e),
      (l.elevatedPushNamesEnabledFor = s),
      (l.elevatedPushNamesM2Enabled = u),
      (l.pushNameCanBeUsed = c));
  },
  98,
);
