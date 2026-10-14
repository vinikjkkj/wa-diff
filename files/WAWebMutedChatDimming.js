__d(
  "WAWebMutedChatDimming",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.isMuted,
        n = e.isNewsletter,
        r = e.unreadCount;
      return !t || n || r === 0
        ? !1
        : o("WAWebABProps").getABPropConfigValue("inbox_dim_muted_chats");
    }
    l.shouldDimMutedChat = e;
  },
  98,
);
