__d(
  "WAWebChatModelDerivedMethods",
  [
    "WAWebABProps",
    "WAWebChatFlowTypes",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebFrontendChatGetters",
    "WAWebMsgType",
    "WAWebPollsCagsGatingUtils",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebWamEnumMdChatAssignmentChatType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebFrontendChatGetters").getKind(e);
      if (t != null)
        switch (t) {
          case o("WAWebChatFlowTypes").ChatKindType.Chat:
            return o("WAWebWamEnumMdChatAssignmentChatType")
              .MD_CHAT_ASSIGNMENT_CHAT_TYPE.INDIVIDUAL;
          case o("WAWebChatFlowTypes").ChatKindType.Group:
            return o("WAWebWamEnumMdChatAssignmentChatType")
              .MD_CHAT_ASSIGNMENT_CHAT_TYPE.GROUP;
          case o("WAWebChatFlowTypes").ChatKindType.Broadcast:
            return o("WAWebWamEnumMdChatAssignmentChatType")
              .MD_CHAT_ASSIGNMENT_CHAT_TYPE.BROADCAST_LIST;
          case o("WAWebChatFlowTypes").ChatKindType.Newsletter:
            return o("WAWebWamEnumMdChatAssignmentChatType")
              .MD_CHAT_ASSIGNMENT_CHAT_TYPE.CHANNEL;
          case o("WAWebChatFlowTypes").ChatKindType.Community:
            return o("WAWebWamEnumMdChatAssignmentChatType")
              .MD_CHAT_ASSIGNMENT_CHAT_TYPE.COMMUNITY;
        }
      else {
        var n = new TypeError("Invalid Chat.kind " + String(t));
        throw (n.stack, n);
      }
    }
    function s(e) {
      return (
        e.type !== o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION &&
        (e.type !== o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE ||
          e.subtype === "chat_assignment" ||
          e.subtype === "chat_assignment_unassign" ||
          e.subtype === "limit_sharing_system_message" ||
          e.subtype === "change_username") &&
        e.type !== o("WAWebMsgType").MSG_TYPE.REACTION &&
        e.type !== o("WAWebMsgType").MSG_TYPE.POLL_UPDATE &&
        e.type !== o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT &&
        e.subtype !== "newsletter_admin_context_card" &&
        e.subtype !== "newsletter_privacy" &&
        !e.pendingDeleteForMe &&
        e.botPluginReferenceIndex == null &&
        o("WAWebViewModeUtils").isViewModeVisibleInSurface(
          o("WAWebViewMode.flow").ViewModeSurface.CHAT_LIST,
          e.viewMode,
        )
      );
    }
    function u(e) {
      if (
        o("WAWebChatGetters").getIsBroadcast(e) ||
        o("WAWebChatGetters").getIsMetaAiBot(e) ||
        o("WAWebChatGetters").getIsBotChannel(e)
      )
        return !1;
      var t = e.groupMetadata;
      return t == null
        ? !0
        : o("WAWebFrontendChatGetters").getIsCAG(e)
          ? o("WAWebChatGroupUtils").getGroupParticipantsCount(t) <=
              o("WAWebABProps").getABPropConfigValue(
                "pnh_cag_disable_polls_group_size",
              ) && o("WAWebPollsCagsGatingUtils").isPollsCreationEnabledInCags()
          : !0;
    }
    ((l.getMdChatAssignmentChatTypeFn = e),
      (l.isPreviewMessage = s),
      (l.canSendPolls = u));
  },
  98,
);
