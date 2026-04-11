__d(
  "WAWebElevatedPushNamesFlag",
  [
    "WAWebABProps",
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
      return (
        o("WAWebChatGetters").getIsGroup(t) &&
        (o("WAWebFrontendChatGetters").getIsCAG(t) ||
          t.getParticipantCount() > 2)
      );
    }
    function s(e) {
      if (!e) return !1;
      var t = o("WAWebStateUtils").unproxy(e);
      return (
        o("WAWebChatGetters").getIsGroup(t) &&
        (o("WAWebFrontendChatGetters").getIsCAG(t) ||
          t.getParticipantCount() > 2) &&
        o("WAWebABProps").getABPropConfigValue(
          "elevated_push_names_v2_m2_enabled",
        )
      );
    }
    function u(e) {
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
      (l.elevatedPushNamesM2Enabled = s),
      (l.pushNameCanBeUsed = u));
  },
  98,
);
