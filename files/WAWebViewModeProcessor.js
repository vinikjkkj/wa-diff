__d(
  "WAWebViewModeProcessor",
  [
    "WAWebCallLogViewModeProcessor",
    "WAWebGroupMemberUpdatesViewModeProcessor",
    "WAWebHiddenViewModeProcessor",
    "WAWebInvisiblePlaceholderViewModeProcessor",
    "WAWebMediaAlbumViewModeProcessor",
    "WAWebNewsletterTombstoneViewModeProcessor",
    "WAWebPollAddOptionViewModeProcessor",
    "WAWebPollMediaViewModeProcessor",
    "WAWebViewMode.flow",
    "WAWebVisibleViewModeProcessor",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (e == null) return r("WAWebVisibleViewModeProcessor");
      switch (e) {
        case o("WAWebViewMode.flow").ViewModeType.VISIBLE:
          return r("WAWebVisibleViewModeProcessor");
        case o("WAWebViewMode.flow").ViewModeType.HIDDEN:
          return r("WAWebHiddenViewModeProcessor");
        case o("WAWebViewMode.flow").ViewModeType.MEDIA_ALBUM:
          return o("WAWebMediaAlbumViewModeProcessor")
            .mediaAlbumViewModeProcessor;
        case o("WAWebViewMode.flow").ViewModeType.INVISIBLE_PLACEHOLDER:
          return o("WAWebInvisiblePlaceholderViewModeProcessor")
            .InvisiblePlaceholderViewModeProcessor;
        case o("WAWebViewMode.flow").ViewModeType.NEWSLETTER_TOMBSTONE:
          return r("WAWebNewsletterTombstoneViewModeProcessor");
        case o("WAWebViewMode.flow").ViewModeType.POLL_MEDIA:
          return r("WAWebPollMediaViewModeProcessor");
        case o("WAWebViewMode.flow").ViewModeType.HISTORY_SYNCED_CALL_LOG:
          return o("WAWebCallLogViewModeProcessor")
            .HistorySyncedCallLogViewModeProcessor;
        case o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME:
          return o("WAWebCallLogViewModeProcessor")
            .CallLogOfflineResumeViewModeProcessor;
        case o("WAWebViewMode.flow").ViewModeType.CALL_LOG_AD_HOC_GROUP_CALL:
          return o("WAWebCallLogViewModeProcessor")
            .CallLogAdHocGroupCallViewModeProcessor;
        case o("WAWebViewMode.flow").ViewModeType.GROUP_MEMBER_UPDATES:
          return r("WAWebGroupMemberUpdatesViewModeProcessor");
        case o("WAWebViewMode.flow").ViewModeType.POLL_ADD_OPTION:
          return r("WAWebPollAddOptionViewModeProcessor");
        case o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE:
          return r("WAWebHiddenViewModeProcessor");
      }
    }
    l.getViewModeProcessor = e;
  },
  98,
);
