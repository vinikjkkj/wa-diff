__d(
  "WAWebNewsletterTombstoneViewModeProcessor",
  ["WAWebBoolFunc", "WAWebCreateViewModeProcessor", "WAWebViewMode.flow"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = o("WAWebCreateViewModeProcessor").createViewModeProcessor({
        type: o("WAWebViewMode.flow").ViewModeType.NEWSLETTER_TOMBSTONE,
        messageVisibleInChat: (e = o("WAWebBoolFunc")).returnFalse,
        messageVisibleInChatlistPreview: e.returnFalse,
        shouldShowInNotification: e.returnFalse,
        shouldShowInSearch: e.returnFalse,
        shouldIncludeInChatSpamReport: e.returnFalse,
      }),
      u = s;
    l.default = u;
  },
  98,
);
