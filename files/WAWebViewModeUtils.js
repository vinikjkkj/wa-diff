__d(
  "WAWebViewModeUtils",
  [
    "WAWebABProps",
    "WAWebAssociationRevokeUtils",
    "WAWebMessageAssociation.flow",
    "WAWebMsgType",
    "WAWebPollCreationUtils",
    "WAWebViewMode.flow",
    "WAWebViewModeProcessor",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WAWebViewModeProcessor").getViewModeProcessor(t);
      switch (e) {
        case o("WAWebViewMode.flow").ViewModeSurface.CHAT:
          return n.messageVisibleInChat();
        case o("WAWebViewMode.flow").ViewModeSurface.SEARCH:
          return n.shouldShowInSearch();
        case o("WAWebViewMode.flow").ViewModeSurface.CHAT_LIST:
          return n.messageVisibleInChatlistPreview();
        case o("WAWebViewMode.flow").ViewModeSurface.NOTIFICATION:
          return n.shouldShowInNotification();
        case o("WAWebViewMode.flow").ViewModeSurface.CHAT_SPAM_REPORT:
          return n.shouldIncludeInChatSpamReport();
      }
    }
    function s(t) {
      return t.associationType ===
        o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_POLL ||
        t.associationType ===
          o("WAWebMessageAssociation.flow").MessageAssociationType
            .MEDIA_ALBUM ||
        (t.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION &&
          t.pollContentType ===
            o("WAWebPollCreationUtils").PollContentType.IMAGE) ||
        t.type === o("WAWebMsgType").MSG_TYPE.ALBUM
        ? !0
        : e(o("WAWebViewMode.flow").ViewModeSurface.CHAT, t.viewMode);
    }
    function u(e) {
      var t = e.associationType,
        n = e.incomingViewMode,
        r = n === void 0 ? o("WAWebViewMode.flow").ViewModeType.VISIBLE : n,
        a = e.msgType,
        i = e.storedViewMode;
      return i === o("WAWebViewMode.flow").ViewModeType.HIDDEN && t != null
        ? o("WAWebViewMode.flow").ViewModeType.HIDDEN
        : o("WAWebAssociationRevokeUtils").getRevokedViewModeForAssociation({
            associationType: t,
            incomingViewMode: r,
            msgType: a,
          });
    }
    function c(e) {
      return (
        (e === o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME ||
          e ===
            o("WAWebViewMode.flow").ViewModeType
              .CALL_LOG_OFFLINE_RESUME_PROMOTED) &&
        o("WAWebABProps").getABPropConfigValue(
          "web_calling_offline_resume_ordering",
        )
      );
    }
    ((l.isViewModeVisibleInSurface = e),
      (l.isMessageExistingInChat = s),
      (l.getRevokedViewMode = u),
      (l.isOfflineResumeCallLogPlaceholderViewMode = c));
  },
  98,
);
