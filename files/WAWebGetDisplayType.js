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
      if (
        e == null ||
        ((o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() ||
          o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()) &&
          e.botGroupParticipant != null)
      )
        return o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION;
      if (o("WAWebMsgGetters").getIsStatus(e))
        return o("WAWebDisplayType").DISPLAY_TYPE.STATUS;
      var t = o("WAWebFrontendMsgGetters").getChat(e),
        n = o("WAWebMsgGetters").getIsMetaBotInvokeResponse(e),
        r =
          t != null && o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(t),
        a =
          o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
          t != null &&
          o("WAWebChatGetters").getIsNewsletter(t),
        i = e.type === o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE;
      return n === !0
        ? o("WAWebDisplayType").DISPLAY_TYPE.BOT_INVOKE_RESPONSE
        : i === !0
          ? o("WAWebDisplayType").DISPLAY_TYPE.MESSAGE_HISTORY_BUNDLE
          : r === !0
            ? o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT
            : a === !0
              ? o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER
              : o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION;
    }
    l.getDisplayType = e;
  },
  98,
);
