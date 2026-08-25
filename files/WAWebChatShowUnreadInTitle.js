__d(
  "WAWebChatShowUnreadInTitle",
  [
    "WAWebBotFrontendGating",
    "WAWebBotUtils",
    "WAWebChatGetters",
    "WAWebFrontendChatGetters",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebMsgGetters",
    "WAWebNotificationHelpers",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = !!e.muteExpiration;
      if (e.archive) {
        e.showUnreadInTitle = !1;
        return;
      }
      if (e.isLocked) {
        e.showUnreadInTitle = !1;
        return;
      }
      if (o("WAWebBotUtils").isHiddenBotWid(e.id)) {
        e.showUnreadInTitle = !1;
        return;
      }
      if (o("WAWebBotFrontendGating").isBotChatUnavailable(e.id)) {
        e.showUnreadInTitle = !1;
        return;
      }
      if (o("WAWebFrontendChatGetters").getOptimisticUnreadCount(e) <= 0) {
        e.showUnreadInTitle = !1;
        return;
      }
      if (!o("WAWebChatGetters").getIsGroup(e)) {
        e.showUnreadInTitle = !t;
        return;
      }
      if (
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e.groupMetadata) ===
        o("WAWebGroupType").GroupType.COMMUNITY
      ) {
        e.showUnreadInTitle = !1;
        return;
      }
      if (!t) {
        e.showUnreadInTitle = !0;
        return;
      }
      if (!e.msgs || e.msgs.length === 0) {
        e.showUnreadInTitle = !1;
        return;
      }
      for (
        var n = !1,
          r = e.msgs,
          a = o("WAWebFrontendChatGetters").getOptimisticUnreadCount(e),
          i = Math.max(0, r.length - a);
        i < r.length;
        i++
      ) {
        var l = e.msgs.at(i);
        if (l && o("WAWebNotificationHelpers").isMeUserMentionedOrQuoted(l)) {
          var s = e.getCollection().get(o("WAWebMsgGetters").getSender(l));
          if (!s || !s.muteExpiration) {
            n = !0;
            break;
          }
        }
      }
      e.showUnreadInTitle = n;
    }
    l.computeShowUnreadInTitle = e;
  },
  98,
);
