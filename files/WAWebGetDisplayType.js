__d(
  "WAWebGetDisplayType",
  [
    "WAWebBotGroupGatingUtils",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebDisplayType",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterCommonGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebFrontendMsgGetters").getChat(e),
        n = t == null ? void 0 : t.groupMetadata;
      return (
        (n == null ? void 0 : n.isOpenBotGroup) === !0 ||
        (n == null ? void 0 : n.isTeeBotGroup) === !0
      );
    }
    function s(t) {
      if (
        t == null ||
        ((o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() ||
          o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()) &&
          (t.botGroupParticipant != null || e(t)))
      )
        return o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION;
      if (o("WAWebMsgGetters").getIsStatus(t))
        return o("WAWebDisplayType").DISPLAY_TYPE.STATUS;
      var n = o("WAWebFrontendMsgGetters").getChat(t),
        r = o("WAWebMsgGetters").getIsMetaBotInvokeResponse(t),
        a =
          n != null && o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(n),
        i =
          o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
          n != null &&
          o("WAWebChatGetters").getIsNewsletter(n),
        l = t.type === o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE;
      return r === !0
        ? o("WAWebDisplayType").DISPLAY_TYPE.BOT_INVOKE_RESPONSE
        : l === !0
          ? o("WAWebDisplayType").DISPLAY_TYPE.MESSAGE_HISTORY_BUNDLE
          : a === !0
            ? o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT
            : i === !0
              ? o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER
              : o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION;
    }
    l.getDisplayType = s;
  },
  98,
);
