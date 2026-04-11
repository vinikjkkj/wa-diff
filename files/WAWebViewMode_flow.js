__d(
  "WAWebViewMode.flow",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = {
        VISIBLE: "VISIBLE",
        HIDDEN: "HIDDEN",
        MEDIA_ALBUM: "MEDIA_ALBUM",
        INVISIBLE_PLACEHOLDER: "INVISIBLE_PLACEHOLDER",
        NEWSLETTER_TOMBSTONE: "NEWSLETTER_TOMBSTONE",
        POLL_MEDIA: "POLL_MEDIA",
        HISTORY_SYNCED_CALL_LOG: "HISTORY_SYNCED_CALL_LOG",
        CALL_LOG_OFFLINE_RESUME: "CALL_LOG_OFFLINE_RESUME",
        CALL_LOG_AD_HOC_GROUP_CALL: "CALL_LOG_AD_HOC_GROUP_CALL",
        GROUP_MEMBER_UPDATES: "GROUP_MEMBER_UPDATES",
        POLL_ADD_OPTION: "POLL_ADD_OPTION",
        SCHEDULED_MESSAGE: "SCHEDULED_MESSAGE",
      },
      l = n("$InternalEnum").Mirrored([
        "CHAT",
        "SEARCH",
        "CHAT_LIST",
        "NOTIFICATION",
        "CHAT_SPAM_REPORT",
      ]);
    ((i.ViewModeType = e), (i.ViewModeSurface = l));
  },
  66,
);
