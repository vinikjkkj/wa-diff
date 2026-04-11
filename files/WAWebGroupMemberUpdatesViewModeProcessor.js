__d(
  "WAWebGroupMemberUpdatesViewModeProcessor",
  [
    "WAWebBoolFunc",
    "WAWebCreateViewModeProcessor",
    "WAWebGroupMemberUpdatesGatingUtils",
    "WAWebViewMode.flow",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebCreateViewModeProcessor").createViewModeProcessor({
        type: o("WAWebViewMode.flow").ViewModeType.GROUP_MEMBER_UPDATES,
        messageVisibleInChat: function () {
          return !o(
            "WAWebGroupMemberUpdatesGatingUtils",
          ).groupMemberUpdatesHideInThreadEnabled();
        },
        messageVisibleInChatlistPreview: function () {
          return !o(
            "WAWebGroupMemberUpdatesGatingUtils",
          ).groupMemberUpdatesHideInThreadEnabled();
        },
        shouldShowInNotification: o("WAWebBoolFunc").returnFalse,
        shouldShowInSearch: o("WAWebBoolFunc").returnFalse,
        shouldIncludeInChatSpamReport: o("WAWebBoolFunc").returnFalse,
      }),
      s = e;
    l.default = s;
  },
  98,
);
