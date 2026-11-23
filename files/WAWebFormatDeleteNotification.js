__d(
  "WAWebFormatDeleteNotification",
  ["fbt", "WAWebChatGroupUtils", "WAWebSystemMessageGatingUtils"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.chat;
      return o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(t)
        ? o(
            "WAWebSystemMessageGatingUtils",
          ).systemMessageTerminalPeriodsEnabled()
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ "")
        : o("WAWebChatGroupUtils").isSupportGroup(t)
          ? s._(/*BTDS*/ "")
          : (o(
              "WAWebSystemMessageGatingUtils",
            ).systemMessageTerminalPeriodsEnabled() &&
              s._(/*BTDS*/ "")) ||
            s._(/*BTDS*/ "");
    }
    l.formatDeleteNotification = e;
  },
  226,
);
