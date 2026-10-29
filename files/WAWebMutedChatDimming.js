__d(
  "WAWebMutedChatDimming",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.hasUnreadMention,
        n = e.isChannelMuted,
        r = e.isMuted,
        a = e.isNewsletter,
        i = e.unreadCount,
        l = a ? n : r;
      return !l ||
        i === 0 ||
        t ||
        (a &&
          !o("WAWebABProps").getABPropConfigValue(
            "channel_chats_list_dim_muted_enabled",
          ))
        ? !1
        : o("WAWebABProps").getABPropConfigValue("inbox_dim_muted_chats");
    }
    l.shouldDimMutedChat = e;
  },
  98,
);
