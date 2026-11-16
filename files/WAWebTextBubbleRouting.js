__d(
  "WAWebTextBubbleRouting",
  [
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebBotUtils",
    "WAWebChatGetters",
    "WAWebDisplayType",
    "WAWebEmoji",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (
        (t != null ? t : o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION) !==
          o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION ||
        e.type !== o("WAWebMsgType").MSG_TYPE.CHAT ||
        e.invokedBotWid != null ||
        e.associationType != null ||
        u(e)
      )
        return !1;
      var n = o("WAWebFrontendMsgGetters").getMaybeChat(e);
      return n != null && c(n) && s(f(e));
    }
    function s(e) {
      return d(e) && !m(e) && !p(e) && !_(e);
    }
    function u(e) {
      var t = o("WAWebMsgGetters").getSender(e);
      return t != null && o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(t);
    }
    function c(e) {
      return (
        !o("WAWebChatGetters").getIsPSA(e) &&
        !o("WAWebChatGetters").getIsBroadcast(e) &&
        !o("WAWebChatGetters").getIsNewsletter(e) &&
        !o("WAWebFrontendChatGetters").getIsCAG(e) &&
        !e.id.isBot() &&
        !e.id.isCAPISupportAccount() &&
        (o("WAWebChatGetters").getIsGroup(e) ||
          (e.contact != null &&
            e.contact.isBusiness !== !0 &&
            e.contact.isEnterprise !== !0))
      );
    }
    function d(e) {
      var t = e.body,
        n = e.forwardedNewsletterMessageInfo,
        a = e.isTransparentMsg,
        i = e.isViewOnce,
        l = e.linkPreview,
        s = e.matchedText,
        u = e.paymentLinkMetadata,
        c = e.quotedMsg,
        d = e.richPreviewType,
        m = e.shouldShowForwarded,
        p = e.subtype,
        _ = e.type;
      return (
        _ === o("WAWebMsgType").MSG_TYPE.CHAT &&
        p !==
          o("WAWebBotGenTypingIndicatorMsg")
            .BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE &&
        !i &&
        c == null &&
        !l &&
        r("isStringNullOrEmpty")(s) &&
        d ===
          o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType
            .NONE &&
        u == null &&
        !m &&
        n == null &&
        !a &&
        o("WAWebEmoji").EmojiUtil.matchLargeEmojiPattern(t) == null
      );
    }
    function m(e) {
      var t = e.activeBotMsgStreamingInProgress,
        n = e.bizBotType,
        o = e.botMessageDisclaimerText,
        a = e.isBizBot1pResponse,
        i = e.isBotFutureproofPlaceholder,
        l = e.isBotQuery,
        s = e.isMetaBotResponse,
        u = e.isSupportAIMessage,
        c = e.richResponse,
        d = e.unifiedResponse;
      return (
        l === !0 ||
        s ||
        i ||
        t === !0 ||
        c != null ||
        d != null ||
        n != null ||
        a ||
        u === !0 ||
        !r("isStringNullOrEmpty")(o)
      );
    }
    function p(e) {
      var t = e.bizPrivacyStatus,
        n = e.ctwaContext,
        r = e.hasPaidPartnershipLabel,
        o = e.hasTemplateButtons,
        a = e.hostedBizEncStateMismatch,
        i = e.isCAPISupport,
        l = e.isCoexV2Relay,
        s = e.isDynamicReplyButtonsMsg,
        u = e.isFromTemplate,
        c = e.isMarketingMessage,
        d = e.supportsMessageFooter;
      return (
        n != null ||
        u === !0 ||
        s ||
        o ||
        d ||
        c ||
        t != null ||
        a === !0 ||
        i ||
        l ||
        r === !0
      );
    }
    function _(e) {
      var t,
        n,
        r = e.broadcast,
        o = e.ephemeralOutOfSync,
        a = e.isGroupHistoryMessageInOwnChat,
        i = e.isNewsletterMsg,
        l = e.isPSA,
        s = e.linksInFullText,
        u = e.threadIds;
      return (
        a ||
        l ||
        i ||
        !!r ||
        o === !0 ||
        ((t = u == null ? void 0 : u.length) != null ? t : 0) > 0 ||
        ((n =
          s == null
            ? void 0
            : s.some(function (e) {
                var t;
                return (t = e.suspiciousCharacters) == null ? void 0 : t.size;
              })) != null
          ? n
          : !1)
      );
    }
    function f(e) {
      var t, n;
      return {
        activeBotMsgStreamingInProgress: (t =
          o("WAWebMsgGetters")).getActiveBotMsgStreamingInProgress(e),
        bizBotType: t.getBizBotType(e),
        bizPrivacyStatus: t.getBizPrivacyStatus(e),
        body: t.getBody(e),
        botMessageDisclaimerText: t.getBotMessageDisclaimerText(e),
        broadcast: t.getBroadcast(e),
        ctwaContext: t.getCtwaContext(e),
        ephemeralOutOfSync: t.getEphemeralOutOfSync(e),
        forwardedNewsletterMessageInfo: t.getForwardedNewsletterMessageInfo(e),
        hasPaidPartnershipLabel: t.getHasPaidPartnershipLabel(e),
        hasTemplateButtons: (n = o(
          "WAWebFrontendMsgGetters",
        )).getHasTemplateButtons(e),
        hostedBizEncStateMismatch: t.getHostedBizEncStateMismatch(e),
        isBizBot1pResponse: t.getIsBizBot1pResponse(e),
        isBotFutureproofPlaceholder: t.getIsBotFutureproofPlaceholder(e),
        isBotQuery: t.getIsBotQuery(e),
        isCAPISupport: t.getIsCAPISupport(e),
        isCoexV2Relay: t.getIsCoexV2Relay(e),
        isDynamicReplyButtonsMsg: t.getIsDynamicReplyButtonsMsg(e),
        isFromTemplate: t.getIsFromTemplate(e),
        isGroupHistoryMessageInOwnChat: t.getIsGroupHistoryMessageInOwnChat(e),
        isMarketingMessage: t.getIsMarketingTemplateTag(e),
        isMetaBotResponse: t.getIsMetaBotResponse(e),
        isNewsletterMsg: t.getIsNewsletterMsg(e),
        isPSA: t.getIsPSA(e),
        isSupportAIMessage: t.getIsSupportAIMessage(e),
        isTransparentMsg: n.getIsTransparentMsg(e),
        isViewOnce: t.getIsViewOnce(e),
        linkPreview: t.getLinkPreview(e),
        linksInFullText: n.getLinksInFullText(e),
        matchedText: t.getMatchedText(e),
        paymentLinkMetadata: t.getPaymentLinkMetadata(e),
        quotedMsg: t.getQuotedMsg(e),
        richPreviewType: t.getRichPreviewType(e),
        richResponse: t.getRichResponse(e),
        shouldShowForwarded: n.getShouldShowForwarded(e),
        subtype: t.getSubtype(e),
        supportsMessageFooter: t.getSupportsMessageFooter(e),
        threadIds: t.getThreadIds(e),
        type: t.getType(e),
        unifiedResponse: t.getUnifiedResponse(e),
      };
    }
    ((l.isTextBubbleCandidate = e), (l.canRenderTextBubble = s));
  },
  98,
);
