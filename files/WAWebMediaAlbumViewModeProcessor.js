__d(
  "WAWebMediaAlbumViewModeProcessor",
  [
    "WAWebBoolFunc",
    "WAWebCreateViewModeProcessor",
    "WAWebMsgType",
    "WAWebViewMode.flow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = o("WAWebCreateViewModeProcessor").createViewModeProcessor({
        type: o("WAWebViewMode.flow").ViewModeType.MEDIA_ALBUM,
        compatibleMessageTypes: [
          o("WAWebMsgType").MSG_TYPE.IMAGE,
          o("WAWebMsgType").MSG_TYPE.VIDEO,
        ],
        messageVisibleInChat: (e = o("WAWebBoolFunc")).returnFalse,
        messageVisibleInChatlistPreview: e.returnFalse,
        shouldShowInNotification: e.returnFalse,
        shouldShowInSearch: e.returnTrue,
        shouldIncludeInChatSpamReport: e.returnFalse,
      });
    l.mediaAlbumViewModeProcessor = s;
  },
  98,
);
