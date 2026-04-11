__d(
  "WAWebCallLogViewModeProcessor",
  [
    "WAWebBoolFunc",
    "WAWebCreateViewModeProcessor",
    "WAWebMsgType",
    "WAWebViewMode.flow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = o("WAWebCreateViewModeProcessor").createViewModeProcessor({
        type: o("WAWebViewMode.flow").ViewModeType.HISTORY_SYNCED_CALL_LOG,
        compatibleMessageTypes: [o("WAWebMsgType").MSG_TYPE.CALL_LOG],
        messageVisibleInChat: (e = o("WAWebBoolFunc")).returnFalse,
        messageVisibleInChatlistPreview: e.returnFalse,
        shouldShowInNotification: e.returnFalse,
        shouldShowInSearch: e.returnTrue,
        shouldIncludeInChatSpamReport: e.returnFalse,
      }),
      u = o("WAWebCreateViewModeProcessor").createViewModeProcessor({
        type: o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME,
        compatibleMessageTypes: [o("WAWebMsgType").MSG_TYPE.CALL_LOG],
        messageVisibleInChat: e.returnFalse,
        messageVisibleInChatlistPreview: e.returnFalse,
        shouldShowInNotification: e.returnFalse,
        shouldShowInSearch: e.returnTrue,
        shouldIncludeInChatSpamReport: e.returnFalse,
      }),
      c = o("WAWebCreateViewModeProcessor").createViewModeProcessor({
        type: o("WAWebViewMode.flow").ViewModeType.CALL_LOG_AD_HOC_GROUP_CALL,
        compatibleMessageTypes: [o("WAWebMsgType").MSG_TYPE.CALL_LOG],
        messageVisibleInChat: e.returnFalse,
        messageVisibleInChatlistPreview: e.returnFalse,
        shouldShowInNotification: e.returnFalse,
        shouldShowInSearch: e.returnTrue,
        shouldIncludeInChatSpamReport: e.returnFalse,
      });
    ((l.HistorySyncedCallLogViewModeProcessor = s),
      (l.CallLogOfflineResumeViewModeProcessor = u),
      (l.CallLogAdHocGroupCallViewModeProcessor = c));
  },
  98,
);
