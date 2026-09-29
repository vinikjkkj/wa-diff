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
      if (t == null) return o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION;
      var n = t.botGroupParticipant,
        r = o("WAWebMsgGetters").getIsMetaBotInvokeResponse(t),
        a = o("WAWebBotGroupGatingUtils").isGroupBotMessage({
          authorWid: t.id.participant,
          botGroupParticipant: n,
          chatWid: t.id.remote,
          isBotInvoke: r === !0,
        });
      if (
        a ||
        (e(t) &&
          (o(
            "WAWebBotGroupGatingUtils",
          ).isOpenGroupBotParticipantAddEnabled() ||
            o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()))
      )
        return o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION;
      if (o("WAWebMsgGetters").getIsStatus(t))
        return o("WAWebDisplayType").DISPLAY_TYPE.STATUS;
      var i = o("WAWebFrontendMsgGetters").getChat(t),
        l =
          i != null && o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(i),
        s =
          o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
          i != null &&
          o("WAWebChatGetters").getIsNewsletter(i),
        u = t.type === o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE;
      return r === !0
        ? o("WAWebDisplayType").DISPLAY_TYPE.BOT_INVOKE_RESPONSE
        : u === !0
          ? o("WAWebDisplayType").DISPLAY_TYPE.MESSAGE_HISTORY_BUNDLE
          : l === !0
            ? o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT
            : s === !0
              ? o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER
              : o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION;
    }
    l.getDisplayType = s;
  },
  98,
);
