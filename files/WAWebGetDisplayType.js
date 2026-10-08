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
      var t = e == null ? void 0 : e.groupMetadata;
      return (
        (t == null ? void 0 : t.isOpenBotGroup) === !0 ||
        (t == null ? void 0 : t.isTeeBotGroup) === !0
      );
    }
    function s(e) {
      return e == null
        ? o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION
        : u({
            botGroupParticipant: e.botGroupParticipant,
            chat: o("WAWebFrontendMsgGetters").getChat(e),
            isBotInvokeResponse:
              o("WAWebMsgGetters").getIsMetaBotInvokeResponse(e),
            isStatus: o("WAWebMsgGetters").getIsStatus(e),
            msgKey: e.id,
            type: e.type,
          });
    }
    function u(t) {
      var n = t.botGroupParticipant,
        r = t.chat,
        a = t.isBotInvokeResponse,
        i = t.isStatus,
        l = t.msgKey,
        s = t.type,
        u = o("WAWebBotGroupGatingUtils").isGroupBotMessage({
          authorWid: l.participant,
          botGroupParticipant: n,
          chatWid: l.remote,
          isBotInvoke: a === !0,
        });
      if (
        u ||
        (e(r) &&
          (o(
            "WAWebBotGroupGatingUtils",
          ).isOpenGroupBotParticipantAddEnabled() ||
            o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()))
      )
        return o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION;
      if (i) return o("WAWebDisplayType").DISPLAY_TYPE.STATUS;
      var c =
          r != null && o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(r),
        d =
          o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
          r != null &&
          o("WAWebChatGetters").getIsNewsletter(r),
        m = s === o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE;
      return a === !0
        ? o("WAWebDisplayType").DISPLAY_TYPE.BOT_INVOKE_RESPONSE
        : m === !0
          ? o("WAWebDisplayType").DISPLAY_TYPE.MESSAGE_HISTORY_BUNDLE
          : c === !0
            ? o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT
            : d === !0
              ? o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER
              : o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION;
    }
    ((l.getDisplayType = s), (l.getDisplayTypeFor = u));
  },
  98,
);
