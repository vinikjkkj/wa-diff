__d(
  "WAWebMsgReply",
  [
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebBotUtils",
    "WAWebChatCommunityUtils",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebEnvironment",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGroupMetadataGetters",
    "WAWebKeepInChatMsgUtils",
    "WAWebMiscGatingUtils",
    "WAWebMsgGetters",
    "WAWebMsgModelUtils",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebQuotedMsgModelUtils",
    "WAWebRichResponseFrontendUtils",
    "WAWebStateUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebStateUtils").unproxy(e),
        n = o("WAWebQuotedMsgModelUtils").getQuotedMsgObj(t);
      return n != null ? o("WAWebMsgGetters").getIsStatus(n) : !1;
    }
    function s(e) {
      var t = o("WAWebStateUtils").unproxy(e),
        n = o("WAWebFrontendMsgGetters").getChat(t);
      return (
        !o("WAWebMsgModelUtils").msgMayFail(t) &&
        !o("WAWebMsgGetters").getIsNotification(t) &&
        !o("WAWebChatGroupUtils").isSuspendedGroup(n) &&
        !o("WAWebChatGroupUtils").isTerminatedGroup(n) &&
        t.type !== o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
        t.type !== o("WAWebMsgType").MSG_TYPE.CIPHERTEXT &&
        t.type !== o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER &&
        t.type !== o("WAWebMsgType").MSG_TYPE.OVERSIZED &&
        t.type !== o("WAWebMsgType").MSG_TYPE.REVOKED &&
        o("WAWebMsgModelUtils").interactiveButtonsReleased(t) &&
        !o("WAWebKeepInChatMsgUtils").isExpiredAndNotKept(t) &&
        !(
          t.type === o("WAWebMsgType").MSG_TYPE.CHAT &&
          t.subtype ===
            o("WAWebBotGenTypingIndicatorMsg")
              .BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE
        )
      );
    }
    function u(e) {
      var t = o("WAWebStateUtils").unproxy(e),
        n = o("WAWebFrontendMsgGetters").getChat(t);
      return o("WAWebChatGetters").getIsBroadcast(n) ||
        (o("WAWebChatGetters").getIsNewsletter(n) &&
          !o(
            "WAWebNewsletterGatingUtils",
          ).isNewsletterSendingAdminRepliesEnabled()) ||
        t.isCarouselCard ||
        o("WAWebMsgGetters").getIsBotFutureproofPlaceholder(t) ||
        (o("WAWebFrontendMsgGetters").getAsRichResponse(e) &&
          !o("WAWebRichResponseFrontendUtils").canReplyRichResponse(e))
        ? !1
        : o("WAWebFrontendChatGetters").getIsCAG(n)
          ? t.messageSecret != null
          : r("WAWebEnvironment").isWeb &&
              t.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
              t.senderObj == null
            ? !1
            : n.canSend && s(e);
    }
    function c(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e),
        r = o("WAWebFrontendMsgGetters").getChat(n);
      return (n.author != null &&
        o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(n.author)) ||
        o("WAWebChatGetters").getIsNewsletter(r)
        ? !1
        : n.isCarouselCard
          ? n.isCarouselCard
          : o("WAWebMsgGetters").getIsBotFutureproofPlaceholder(n) ||
              (o("WAWebFrontendMsgGetters").getAsRichResponse(e) &&
                !o("WAWebRichResponseFrontendUtils").canReplyRichResponse(e)) ||
              ((t = n.author) != null &&
                t.isLid() &&
                r.groupMetadata != null &&
                o("WAWebGroupMetadataGetters").getIsCag(r.groupMetadata)) ||
              o("WAWebChatCommunityUtils").shouldMaskPhoneNumberForChat(
                r,
                o("WAWebFrontendMsgGetters").getSenderObj(n),
              ) ||
              (r.isSuspendedOrTerminated() &&
                o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled())
            ? !1
            : !o("WAWebMsgModelUtils").msgMayFail(n) &&
              !o("WAWebMsgGetters").getIsNotification(n) &&
              n.type !== o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
              n.type !== o("WAWebMsgType").MSG_TYPE.CIPHERTEXT &&
              n.type !== o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER &&
              n.type !== o("WAWebMsgType").MSG_TYPE.OVERSIZED &&
              n.type !== o("WAWebMsgType").MSG_TYPE.REVOKED &&
              !o("WAWebMsgGetters").getIsSentByMe(n) &&
              o("WAWebMsgGetters").getIsGroupMsg(n) &&
              o("WAWebMsgModelUtils").interactiveButtonsReleased(n) &&
              !o("WAWebKeepInChatMsgUtils").isExpiredAndNotKept(n);
    }
    function d(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e),
        r = o("WAWebFrontendMsgGetters").getChat(n);
      return ((t = n.author) != null &&
        t.isLid() &&
        r.groupMetadata != null &&
        o("WAWebGroupMetadataGetters").getIsCag(r.groupMetadata)) ||
        o("WAWebChatCommunityUtils").shouldMaskPhoneNumberForChat(
          r,
          o("WAWebFrontendMsgGetters").getSenderObj(n),
        ) ||
        (o("WAWebFrontendMsgGetters").getAsRichResponse(e) &&
          !o("WAWebRichResponseFrontendUtils").canReplyRichResponse(e)) ||
        (n.author != null &&
          o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(n.author))
        ? !1
        : r.isAnnounceGrpRestrict === !0 &&
            !r.isReadOnly &&
            !o("WAWebMsgModelUtils").msgMayFail(n) &&
            !o("WAWebMsgGetters").getIsSentByMe(n) &&
            !o("WAWebMsgGetters").getIsNotification(n) &&
            n.type !== o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
            n.type !== o("WAWebMsgType").MSG_TYPE.CIPHERTEXT &&
            n.type !== o("WAWebMsgType").MSG_TYPE.OVERSIZED &&
            n.type !== o("WAWebMsgType").MSG_TYPE.REVOKED &&
            o("WAWebMsgModelUtils").interactiveButtonsReleased(n) &&
            !o("WAWebKeepInChatMsgUtils").isExpiredAndNotKept(n) &&
            !n.isCarouselCard;
    }
    ((l.isStatusReplyMsg = e),
      (l.replyChecks = s),
      (l.canReplyMsg = u),
      (l.canPrivateReply = c),
      (l.canPrivateReplyInRestrictedGrp = d));
  },
  98,
);
