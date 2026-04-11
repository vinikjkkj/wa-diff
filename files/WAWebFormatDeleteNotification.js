__d(
  "WAWebFormatDeleteNotification",
  ["fbt", "WAWebChatGroupUtils"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.chat;
      return o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(t)
        ? s._(/*BTDS*/ "This community is no longer available")
        : o("WAWebChatGroupUtils").isSupportGroup(t)
          ? s._(/*BTDS*/ "This chat has been closed")
          : s._(/*BTDS*/ "This group has ended");
    }
    l.formatDeleteNotification = e;
  },
  226,
);
