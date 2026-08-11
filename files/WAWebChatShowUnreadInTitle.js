__d(
  "WAWebChatShowUnreadInTitle",
  [
    "WAWebBotFrontendGating",
    "WAWebBotUtils",
    "WAWebChatGetters",
    "WAWebFrontendChatGetters",
    "WAWebGroupType",
    "WAWebMsgGetters",
    "WAWebNotificationHelpers",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = !!e.muteExpiration;
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
        e.showUnreadInTitle = !n;
        return;
      }
      if (
        ((t = e.groupMetadata) == null ? void 0 : t.groupType) ===
        o("WAWebGroupType").GroupType.COMMUNITY
      ) {
        e.showUnreadInTitle = !1;
        return;
      }
      if (!n) {
        e.showUnreadInTitle = !0;
        return;
      }
      if (!e.msgs || e.msgs.length === 0) {
        e.showUnreadInTitle = !1;
        return;
      }
      for (
        var r = !1,
          a = e.msgs,
          i = o("WAWebFrontendChatGetters").getOptimisticUnreadCount(e),
          l = Math.max(0, a.length - i);
        l < a.length;
        l++
      ) {
        var s = e.msgs.at(l);
        if (s && o("WAWebNotificationHelpers").isMeUserMentionedOrQuoted(s)) {
          var u = e.getCollection().get(o("WAWebMsgGetters").getSender(s));
          if (!u || !u.muteExpiration) {
            r = !0;
            break;
          }
        }
      }
      e.showUnreadInTitle = r;
    }
    l.computeShowUnreadInTitle = e;
  },
  98,
);
