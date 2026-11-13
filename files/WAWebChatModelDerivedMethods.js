__d(
  "WAWebChatModelDerivedMethods",
  [
    "WAWebABProps",
    "WAWebBotUtils",
    "WAWebChatFlowTypes",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebFrontendChatGetters",
    "WAWebMsgType",
    "WAWebPollsCagsGatingUtils",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebWamEnumMdChatAssignmentChatType",
    "WAWebWamEnumWebcChatType",
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
      var t = o("WAWebFrontendChatGetters").getKind(e);
      if (t != null)
        switch (t) {
          case o("WAWebChatFlowTypes").ChatKindType.Chat:
            return o("WAWebWamEnumWebcChatType").WEBC_CHAT_TYPE.INDIVIDUAL;
          case o("WAWebChatFlowTypes").ChatKindType.Group:
            return o("WAWebWamEnumWebcChatType").WEBC_CHAT_TYPE.GROUP;
          case o("WAWebChatFlowTypes").ChatKindType.Broadcast:
            return o("WAWebWamEnumWebcChatType").WEBC_CHAT_TYPE.BROADCAST_LIST;
          case o("WAWebChatFlowTypes").ChatKindType.Newsletter:
            return o("WAWebWamEnumWebcChatType").WEBC_CHAT_TYPE.NEWSLETTER;
          case o("WAWebChatFlowTypes").ChatKindType.Community:
            return o("WAWebWamEnumWebcChatType").WEBC_CHAT_TYPE.COMMUNITY;
        }
      else {
        var n = new TypeError("Invalid Chat.kind " + String(t));
        throw (n.stack, n);
      }
    }
    function u(e) {
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
        e.subtype !== "scheduled_message_created" &&
        !e.pendingDeleteForMe &&
        e.botPluginReferenceIndex == null &&
        o("WAWebViewModeUtils").isViewModeVisibleInSurface(
          o("WAWebViewMode.flow").ViewModeSurface.CHAT_LIST,
          e.viewMode,
        )
      );
    }
    function c(e) {
      var t;
      return (
        e.subtype === "acp2_system_message" &&
        ((t = e.acp2Setting) == null ? void 0 : t.enabled) === !0 &&
        !e.pendingDeleteForMe &&
        o("WAWebViewModeUtils").isViewModeVisibleInSurface(
          o("WAWebViewMode.flow").ViewModeSurface.CHAT_LIST,
          e.viewMode,
        )
      );
    }
    function d(e) {
      return m({
        chatId: e.id,
        groupMetadata: e.groupMetadata,
        isBotChannel: o("WAWebChatGetters").getIsBotChannel(e),
        isBroadcast: o("WAWebChatGetters").getIsBroadcast(e),
        isCAG: o("WAWebFrontendChatGetters").getIsCAG(e),
        isMetaAiBot: o("WAWebChatGetters").getIsMetaAiBot(e),
      });
    }
    function m(e) {
      var t = e.chatId,
        n = e.groupMetadata,
        r = e.isBotChannel,
        a = e.isBroadcast,
        i = e.isCAG,
        l = e.isMetaAiBot;
      return a ||
        l ||
        o("WAWebBotUtils").isBusinessAssistantBot(t) ||
        r ||
        t.isAiHub()
        ? !1
        : n == null
          ? !0
          : i
            ? o("WAWebChatGroupUtils").getGroupParticipantsCount(n) <=
                o("WAWebABProps").getABPropConfigValue(
                  "pnh_cag_disable_polls_group_size",
                ) &&
              o("WAWebPollsCagsGatingUtils").isPollsCreationEnabledInCags()
            : !0;
    }
    ((l.getMdChatAssignmentChatTypeFn = e),
      (l.getWebcChatTypeFn = s),
      (l.isPreviewMessage = u),
      (l.isAcp2RestrictionNotice = c),
      (l.canSendPolls = d),
      (l.canSendPollsFor = m));
  },
  98,
);
