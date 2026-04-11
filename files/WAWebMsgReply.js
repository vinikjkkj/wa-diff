__d(
  "WAWebMsgReply",
  [
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebChatCommunityUtils",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebEnvironment",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebKeepInChatMsgUtils",
    "WAWebMiscGatingUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebQuotedMsgModelUtils",
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
        !t.mayFail() &&
        !o("WAWebMsgGetters").getIsNotification(t) &&
        !o("WAWebChatGroupUtils").isSuspendedGroup(n) &&
        !o("WAWebChatGroupUtils").isTerminatedGroup(n) &&
        t.type !== o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
        t.type !== o("WAWebMsgType").MSG_TYPE.CIPHERTEXT &&
        t.type !== o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER &&
        t.type !== o("WAWebMsgType").MSG_TYPE.OVERSIZED &&
        t.type !== o("WAWebMsgType").MSG_TYPE.REVOKED &&
        t.interactiveButtonsReleased() &&
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
        o("WAWebFrontendMsgGetters").getAsRichResponse(e)
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
        n,
        r = o("WAWebStateUtils").unproxy(e),
        a = o("WAWebFrontendMsgGetters").getChat(r);
      return o("WAWebChatGetters").getIsNewsletter(a)
        ? !1
        : r.isCarouselCard
          ? r.isCarouselCard
          : o("WAWebMsgGetters").getIsBotFutureproofPlaceholder(r) ||
              o("WAWebFrontendMsgGetters").getAsRichResponse(e) ||
              ((t = r.author) != null &&
                t.isLid() &&
                (n = a.groupMetadata) != null &&
                n.isCag) ||
              o("WAWebChatCommunityUtils").shouldMaskPhoneNumberForChat(
                a,
                o("WAWebFrontendMsgGetters").getSenderObj(r),
              ) ||
              (a.isSuspendedOrTerminated() &&
                o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled())
            ? !1
            : !r.mayFail() &&
              !o("WAWebMsgGetters").getIsNotification(r) &&
              r.type !== o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
              r.type !== o("WAWebMsgType").MSG_TYPE.CIPHERTEXT &&
              r.type !== o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER &&
              r.type !== o("WAWebMsgType").MSG_TYPE.OVERSIZED &&
              r.type !== o("WAWebMsgType").MSG_TYPE.REVOKED &&
              !o("WAWebMsgGetters").getIsSentByMe(r) &&
              o("WAWebMsgGetters").getIsGroupMsg(r) &&
              r.interactiveButtonsReleased() &&
              !o("WAWebKeepInChatMsgUtils").isExpiredAndNotKept(r);
    }
    function d(e) {
      var t,
        n,
        r = o("WAWebStateUtils").unproxy(e),
        a = o("WAWebFrontendMsgGetters").getChat(r);
      return ((t = r.author) != null &&
        t.isLid() &&
        (n = a.groupMetadata) != null &&
        n.isCag) ||
        o("WAWebChatCommunityUtils").shouldMaskPhoneNumberForChat(
          a,
          o("WAWebFrontendMsgGetters").getSenderObj(r),
        ) ||
        o("WAWebFrontendMsgGetters").getAsRichResponse(e)
        ? !1
        : a.isAnnounceGrpRestrict === !0 &&
            !a.isReadOnly &&
            !r.mayFail() &&
            !o("WAWebMsgGetters").getIsSentByMe(r) &&
            !o("WAWebMsgGetters").getIsNotification(r) &&
            r.type !== o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
            r.type !== o("WAWebMsgType").MSG_TYPE.CIPHERTEXT &&
            r.type !== o("WAWebMsgType").MSG_TYPE.OVERSIZED &&
            r.type !== o("WAWebMsgType").MSG_TYPE.REVOKED &&
            r.interactiveButtonsReleased() &&
            !o("WAWebKeepInChatMsgUtils").isExpiredAndNotKept(r) &&
            !r.isCarouselCard;
    }
    ((l.isStatusReplyMsg = e),
      (l.replyChecks = s),
      (l.canReplyMsg = u),
      (l.canPrivateReply = c),
      (l.canPrivateReplyInRestrictedGrp = d));
  },
  98,
);
