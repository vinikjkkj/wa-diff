__d(
  "WAWebMutedChatDimming",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.hasUnreadMention,
        n = e.isMuted,
        r = e.isNewsletter,
        a = e.unreadCount;
      return !n || r || a === 0 || t
        ? !1
        : o("WAWebABProps").getABPropConfigValue("inbox_dim_muted_chats");
    }
    l.shouldDimMutedChat = e;
  },
  98,
);
