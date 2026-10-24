__d(
  "WAWebMsgActionCapability",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebAuraGating",
    "WAWebBizAiAgentGating",
    "WAWebBizBroadcastProChatUtils",
    "WAWebBizCtwaAGMUtils",
    "WAWebBotBaseGating",
    "WAWebBotComposerTreatment",
    "WAWebBotExposedName",
    "WAWebBotForwardCapability",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProfileCollection",
    "WAWebBotStaticProfiles",
    "WAWebBotSupportGating",
    "WAWebBotTypes",
    "WAWebBotUtils",
    "WAWebBusinessHSMTypes",
    "WAWebBusinessProfileGetters",
    "WAWebCTWAGatingUtils",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebClock",
    "WAWebCoexV2RevokeAuthorization",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebContactGetters",
    "WAWebContactModel",
    "WAWebDisplayType",
    "WAWebFileUtils",
    "WAWebForwardedBotMessageUtils",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGroupHistoryUtils",
    "WAWebHatchFrontendGating",
    "WAWebHatchJarvisPayload",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebIsAiRichResponseForwardable",
    "WAWebKeepInChatMsgUtils",
    "WAWebLimitSharingGatingUtils",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaTypes",
    "WAWebMessageAssociation.flow",
    "WAWebMessageEditGatingUtils",
    "WAWebMessageEditUtils",
    "WAWebMiscGatingUtils",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgMayFail",
    "WAWebMsgModel",
    "WAWebMsgModelUtils",
    "WAWebMsgType",
    "WAWebMuseGroupRichResponseForward",
    "WAWebMusicGatingUtils",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterFutureProofUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebPollCreationUtils",
    "WAWebPollsGatingUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebQuestionsGatingUtils",
    "WAWebResolveBotProfile",
    "WAWebRevokeMsgConstants",
    "WAWebSoundStickerGating",
    "WAWebSoundStickerUtils",
    "WAWebSpamUtils",
    "WAWebStateUtils",
    "WAWebUserPrefsMultiDevice",
    "WAWebWid",
    "cr:17680",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = "text/html";
    function f(e) {
      var t = e.ctwaContext;
      return (t == null ? void 0 : t.sourceApp) === "whatsapp";
    }
    function g(e, t) {
      return h(e.isWamoSub, t);
    }
    function h(e, t) {
      var n, r;
      return !(
        o("WAWebChatGetters").getIsNewsletter(t) &&
        e != null &&
        e &&
        !(
          (n =
            (r = t.newsletterMetadata) == null
              ? void 0
              : r.iAmAdminOrOwner()) != null && n
        ) &&
        o("WAWebNewsletterGatingUtils").isWamoSubMessagesSupported()
      );
    }
    function y(e, t) {
      if (!I(e)) return !1;
      if (e.type === o("WAWebMsgType").MSG_TYPE.MUSIC) return C(t.id);
      if (
        t instanceof r("WAWebContactModel") ||
        !o("WAWebChatGetters").getIsNewsletter(t)
      )
        return !0;
      if (x(e)) return !1;
      switch (e.type) {
        case o("WAWebMsgType").MSG_TYPE.PTV:
          return o(
            "WAWebNewsletterGatingUtils",
          ).isNewsletterPTVForwardingEnabled();
        case o("WAWebMsgType").MSG_TYPE.AUDIO:
        case o("WAWebMsgType").MSG_TYPE.PTT:
          return (
            o(
              "WAWebNewsletterGatingUtils",
            ).isNewsletterAudioFileSendingEnabled() ||
            o("WAWebMsgGetters").getHasOriginatedFromNewsletter(e)
          );
      }
      return o("WAWebNewsletterFutureProofUtils").isMsgTypeSupported(e.type);
    }
    function C(e) {
      return e.isGroup() || (e.isUser() && !e.isBot() && !e.isPSA());
    }
    function b(e, t, n) {
      if (e.isAiHub()) return !1;
      if (!e.isBot()) return !0;
      if (o("WAWebBotUtils").isMetaAiBot(e))
        return o("WAWebBotForwardCapability").isMetaAiForwardRowVisibleForMsgs(
          t,
        );
      if (o("WAWebBotUtils").isHatchBot(e)) return !0;
      var r = o("WAWebBotProfileCollection").BotProfileCollection.get(e);
      return (r == null ? void 0 : r.isDefault) !== !0
        ? !1
        : o("WAWebBotForwardCapability").isMetaAiForwardRowVisibleForMsgs(t);
    }
    function v(e, t) {
      return e.isNewsletter() ? !0 : t.hasMusicAnnotations !== !0;
    }
    function S(e, t, n) {
      n === void 0 && (n = {});
      var r = e.id;
      return b(r, t, n) && v(r, n);
    }
    function R(e) {
      var t = e.mediaData.mediaStage;
      if (
        t === o("WAWebMediaTypes").MediaDataStage.RESOLVED ||
        t === o("WAWebMediaTypes").MediaDataStage.EXISTS
      )
        return !0;
      var n = e.mediaObject;
      if (n == null) return !1;
      var r = o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMsg(
        e,
      );
      return n.entries.getDownloadEntry(r) != null || T(e, r);
    }
    function L(e) {
      return (
        (o("WAWebFrontendMsgGetters").getAsMms(e) != null &&
          e.ctwaContext == null) ||
        o("WAWebFileUtils").isDocument(e)
      );
    }
    function E(e) {
      return o(
        "WAWebMuseGroupRichResponseForward",
      ).isMuseGroupAgentRichResponse(e)
        ? o(
            "WAWebMuseGroupRichResponseForward",
          ).canForwardMuseGroupRichResponse(e)
        : o("WAWebHatchJarvisPayload").hasHatchJarvisPayload(e.unifiedResponse)
          ? !k(e) &&
            o("WAWebIsAiRichResponseForwardable").isAiRichResponseForwardable(
              e,
            ) &&
            o("WAWebBotBaseGating").isRichResponseJarvisForwardSendingEnabled()
          : o("WAWebIsAiRichResponseForwardable").isAiRichResponseForwardable(
              e,
            ) && o("WAWebBotBaseGating").isRichResponseForwardSendingEnabled();
    }
    function k(e) {
      var t = e.forwardedAiBotMessageInfo;
      return (
        t != null &&
        o("WAWebForwardedBotMessageUtils").getForwardedBotDisplayMode(
          t.validationStatus,
        ) === "masked"
      );
    }
    function I(e) {
      var t,
        n,
        a,
        i,
        l,
        s = o("WAWebStateUtils").unproxy(e),
        u = o("WAWebBotUtils").isHatchBot(s.id.remote);
      if (
        s.isCarouselCard ||
        s.carouselCards ||
        s.associationType ===
          o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_POLL
      )
        return !1;
      var c = o("WAWebFrontendMsgGetters").getMaybeChat(s);
      if (
        (c != null && o("WAWebChatGetters").getIsBroadcast(c)) ||
        (c != null &&
          c.isSuspendedOrTerminated() &&
          o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled()) ||
        (c != null &&
          o("WAWebBotComposerTreatment").isBotSupportComposerBlocked(c.id))
      )
        return !1;
      var d = c != null && o("WAWebChatGetters").getIsNewsletter(c);
      if (
        (d &&
          (!o(
            "WAWebNewsletterGatingUtils",
          ).isNewsletterMessageForwardSendingEnabled() ||
            (c != null && !g(s, c)))) ||
        (o("WAWebMsgGetters").getIsQuestion(s) &&
          !o("WAWebQuestionsGatingUtils").isQuestionForwardingEnabledForMsg(
            s,
          )) ||
        (o("WAWebMsgGetters").getQuestionReplyQuotedMessage(s) != null &&
          !o(
            "WAWebQuestionsGatingUtils",
          ).isQuestionReplyForwardingEnabledForMsg(s)) ||
        (o("WAWebMsgGetters").getNewsletterAdminProfile(s) != null &&
          !o(
            "WAWebNewsletterGatingUtils",
          ).isNewsletterAdminProfilesForwardingEnabled()) ||
        (o("WAWebSoundStickerUtils").isSoundStickerMsg(s) &&
          !o("WAWebSoundStickerGating").isSoundStickerCreationEnabled())
      )
        return !1;
      switch (s.type) {
        case o("WAWebMsgType").MSG_TYPE.CALL_LOG:
        case o("WAWebMsgType").MSG_TYPE.CIPHERTEXT:
        case o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER:
        case o("WAWebMsgType").MSG_TYPE.EVENT_CREATION:
        case o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE:
        case o("WAWebMsgType").MSG_TYPE.NEWSLETTER_ADMIN_INVITE:
        case o("WAWebMsgType").MSG_TYPE.ORDER:
        case o("WAWebMsgType").MSG_TYPE.OVERSIZED:
        case o("WAWebMsgType").MSG_TYPE.PAYMENT:
        case o("WAWebMsgType").MSG_TYPE.QUARANTINED:
        case o("WAWebMsgType").MSG_TYPE.REQUEST_PHONE_NUMBER:
        case o("WAWebMsgType").MSG_TYPE.SHARABLE_EVENT_INVITE:
        case o("WAWebMsgType").MSG_TYPE.REVOKED:
        case o("WAWebMsgType").MSG_TYPE.UNKNOWN:
        case o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE:
          return !1;
        case o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE:
          return E(s);
        case o("WAWebMsgType").MSG_TYPE.MUSIC:
          return o("WAWebMusicGatingUtils").isMusicOnChatsForwardingEnabled();
        case o("WAWebMsgType").MSG_TYPE.POLL_CREATION:
          return (
            d &&
            s.pollContentType !==
              o("WAWebPollCreationUtils").PollContentType.IMAGE &&
            o("WAWebNewsletterGatingUtils").isNewsletterPollForwardingEnabled()
          );
        case o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT:
          return o(
            "WAWebNewsletterGatingUtils",
          ).isNewsletterPollForwardingEnabled();
        case o("WAWebMsgType").MSG_TYPE.LIST:
          return (
            ((t = s.list) == null ? void 0 : t.listType) ===
            o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType.PRODUCT_LIST
          );
        case o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE:
          return (
            (s == null ? void 0 : s.nativeFlowName) !==
            r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW
          );
      }
      if (s.type === o("WAWebMsgType").MSG_TYPE.LOCATION && s.isLive) return !1;
      if (s.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
        if (
          s.nativeFlowName ===
            r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER ||
          $(s)
        )
          return !0;
        if (s.nativeFlowName != null) return !1;
      }
      if (
        !o("WAWebMsgModelUtils").interactiveButtonsReleased(s) ||
        (s.type === o("WAWebMsgType").MSG_TYPE.CHAT &&
          s.subtype ===
            o("WAWebBotGenTypingIndicatorMsg")
              .BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE) ||
        (s.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
          s.mimetype === _ &&
          u)
      )
        return !1;
      if (o("WAWebFrontendMsgGetters").getAsMms(s)) {
        var m = s.mediaData;
        if (
          m.mediaStage === o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING ||
          m.mediaStage ===
            o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED ||
          (!D(s) &&
            (s.type === o("WAWebMsgType").MSG_TYPE.IMAGE ||
              s.type === o("WAWebMsgType").MSG_TYPE.VIDEO ||
              s.type === o("WAWebMsgType").MSG_TYPE.PTV ||
              s.type === o("WAWebMsgType").MSG_TYPE.PTT) &&
            (!o("WAWebMsgGetters").getIsNewsletterMsg(s) ||
              !o(
                "WAWebNewsletterGatingUtils",
              ).isNewsletterQuickForwardingEnabled()))
        )
          return !1;
        if (s.type === o("WAWebMsgType").MSG_TYPE.PTV) {
          if (d) {
            if (
              !o(
                "WAWebNewsletterGatingUtils",
              ).isNewsletterPTVForwardingEnabled()
            )
              return !1;
          } else if (!o("WAWebMsgGetters").getIsSentByMe(s)) return !1;
        }
        if (s.isViewOnce || o("WAWebFrontendMsgGetters").getIsUnsentMedia(s))
          return !1;
      }
      return !(
        ((n = s.nativeFlowButtons) != null && n.length) ||
        s.hsmTag === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.AUTHENTICATION ||
        o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage({
          isAGMShown:
            (a = s.ctwaContext) == null
              ? void 0
              : a.automatedGreetingMessageShown,
          msgSource: (i = s.ctwaContext) == null ? void 0 : i.sourceApp,
          msgSubtype: s.subtype,
          msgType: s.type,
        }) ||
        f(s) ||
        (s.type === o("WAWebMsgType").MSG_TYPE.STICKER &&
          (!r("WAWebAuraGating").canUsePremiumSticker(s.stickerPremiumStatus) ||
            !r("WAWebAuraGating").canUsePremiumSticker(
              (l = s.mediaData) == null ? void 0 : l.stickerPremiumStatus,
            )))
      );
    }
    function T(e, t) {
      var n;
      return (
        t &&
        e.mediaKey != null &&
        ((n = e.mediaObject) == null ? void 0 : n.entries.getUploadEntry(t)) !=
          null
      );
    }
    function D(e) {
      return R(e);
    }
    function x(e) {
      return (
        L(e) &&
        e.mediaData.mediaStage !==
          o("WAWebMediaTypes").MediaDataStage.RESOLVED &&
        o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMsg(e)
      );
    }
    function $(e) {
      return (
        r("WAWebWid").isPSA(e.id.remote) &&
        e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        e.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").CTA_URL
      );
    }
    function P(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return !I(e) ||
        o("WAWebMsgGetters").getIsFrequentlyForwarded(t) ||
        o("WAWebMsgLinks").getSuspiciousLinks(t).length !== 0 ||
        o("WAWebFrontendMsgGetters").getAsPttLike(t) != null ||
        t.type === o("WAWebMsgType").MSG_TYPE.STICKER ||
        !o("WAWebMsgModelUtils").interactiveButtonsReleased(t) ||
        (o("WAWebChatGetters").getIsNewsletter(
          o("WAWebFrontendMsgGetters").getChat(t),
        ) &&
          o("WAWebNewsletterGatingUtils").isNewsletterQuickForwardingEnabled())
        ? !1
        : o("WAWebFrontendMsgGetters").getAsMms(t) != null ||
            o("WAWebMsgGetters").getLinkPreview(t) ||
            [
              o("WAWebMsgType").MSG_TYPE.VCARD,
              o("WAWebMsgType").MSG_TYPE.MULTI_VCARD,
            ].includes(t.type) ||
            t.type === o("WAWebMsgType").MSG_TYPE.LOCATION ||
            t.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION ||
            t.type === o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT ||
            t.ctwaContext != null;
    }
    function N(e) {
      var t,
        n,
        r = o("WAWebStateUtils").unproxy(e);
      return o("WAWebChatGetters").getIsNewsletter(
        o("WAWebFrontendMsgGetters").getChat(r),
      ) ||
        r.isCarouselCard ||
        o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage({
          isAGMShown:
            (t = r.ctwaContext) == null
              ? void 0
              : t.automatedGreetingMessageShown,
          msgSource: (n = r.ctwaContext) == null ? void 0 : n.sourceApp,
          msgSubtype: r.subtype,
          msgType: r.type,
        })
        ? !1
        : (!o("WAWebMsgGetters").getIsEphemeral(r) ||
            o("WAWebKeepInChatMsgUtils").supportsStarWithKeepInChat(r)) &&
            (r.afterReadDuration == null || r.afterReadDuration === 0) &&
            !o("WAWebMsgGetters").getIsNotification(r) &&
            !o("WAWebMsgGetters").getIsFutureproof(r) &&
            !r.isViewOnce &&
            r.type !== o("WAWebMsgType").MSG_TYPE.REVOKED &&
            r.type !== o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER &&
            !(
              r.ack < o("WAWebAck").ACK.SENT &&
              o("WAWebMsgGetters").getIsSentByMe(r)
            ) &&
            o("WAWebMsgModelUtils").interactiveButtonsReleased(r) &&
            !o("WAWebFrontendMsgGetters").getAsAlbum(r);
    }
    function M(e) {
      var t,
        n,
        a = o("WAWebStateUtils").unproxy(e),
        i = o("WAWebFrontendMsgGetters").getChat(a);
      if (
        o("WAWebChatGetters").getIsBroadcast(i) ||
        o("WAWebLimitSharingGatingUtils").isChatAcp2Restricted(i) ||
        a.isViewOnce === !0 ||
        a.subtype === "view_once_unavailable_fanout" ||
        a.subtype === "acp_unavailable_fanout" ||
        i.id.isBot()
      )
        return !1;
      if (o("WAWebChatGetters").getIsNewsletter(i))
        return o("WAWebNewsletterExtendedGatingUtils").canPinNewsletterMessages(
          i.newsletterMetadata,
        )
          ? !o("WAWebMsgGetters").getIsNotification(a) &&
              !o("WAWebMsgGetters").getIsFutureproof(a) &&
              a.type !== o("WAWebMsgType").MSG_TYPE.REVOKED &&
              a.type !== o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER &&
              o("WAWebMsgModelUtils").interactiveButtonsReleased(a) &&
              !o("WAWebFrontendMsgGetters").getAsAlbum(a)
          : !1;
      if (a.isCarouselCard) return !1;
      if (o("WAWebMsgGetters").getIsGroupMsg(a)) {
        var l = r("nullthrows")(i.groupMetadata);
        if (
          !l.participants.iAmMember() ||
          ((l.restrict || l.announce) && !l.participants.iAmAdmin())
        )
          return !1;
      }
      return o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage({
        isAGMShown:
          (t = a.ctwaContext) == null
            ? void 0
            : t.automatedGreetingMessageShown,
        msgSource: (n = a.ctwaContext) == null ? void 0 : n.sourceApp,
        msgSubtype: a.subtype,
        msgType: a.type,
      })
        ? !1
        : !o("WAWebMsgGetters").getIsNotification(a) &&
            !o("WAWebMsgGetters").getIsFutureproof(a) &&
            !o("WAWebMsgGetters").getIsViewOnce(a) &&
            a.type !== o("WAWebMsgType").MSG_TYPE.REVOKED &&
            a.type !== o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER &&
            !(
              a.ack < o("WAWebAck").ACK.SENT &&
              o("WAWebMsgGetters").getIsSentByMe(a)
            ) &&
            o("WAWebMsgModelUtils").interactiveButtonsReleased(a) &&
            !o("WAWebKeepInChatMsgUtils").isExpiredAndNotKept(a) &&
            !o("WAWebFrontendMsgGetters").getAsAlbum(a);
    }
    function w(e) {
      var t,
        n,
        r = e == null || (t = e.contact) == null ? void 0 : t.businessProfile;
      return (
        (e == null || (n = e.id) == null ? void 0 : n.isUser()) === !0 &&
        o(
          "WAWebUserPrefsMultiDevice",
        ).getIsHostedMeAccountFromLocalStorage() !== !0 &&
        r != null &&
        o("WAWebBusinessProfileGetters").getIsBizBot1p(r)
      );
    }
    function A(e, t) {
      var n, r;
      return (
        o("WAWebMsgGetters").getBizBotType(e) ===
          o("WAWebBotTypes").BizBotType.BIZ_1P &&
        (t == null || (n = t.id) == null ? void 0 : n.isUser()) === !0 &&
        e.local !== !0 &&
        (t == null || (r = t.contact) == null || (r = r.businessProfile) == null
          ? void 0
          : r.automatedType) !==
          o("WAWebBotTypes").BizBotAutomatedType.PARTIAL_1P &&
        !o("WAWebMsgGetters").getIsCoexV2Relay(e)
      );
    }
    function F(e, t) {
      return !A(e, t) || e.type !== o("WAWebMsgType").MSG_TYPE.CHAT
        ? !1
        : !V(e, t) &&
            H(e, t, !o("WAWebMsgMayFail").msgMayFail(e)) &&
            !o("WAWebMsgGetters").getIsQuestion(e) &&
            !o("WAWebBizBroadcastProChatUtils").getIsBizBroadcastProChat(t) &&
            !o("WAWebFrontendChatGetters").getIsCapiHostedGroup(t) &&
            o("WAWebChatGroupUtils").canSendIgnoringAiAgentBlock(t);
    }
    function O(e) {
      return (
        A(e, o("WAWebFrontendMsgGetters").getMaybeChat(e)) &&
        o("WAWebBizAiAgentGating").isAiAgentMessageEditingEnabled()
      );
    }
    function B(e) {
      return O(e)
        ? o("WAWebMessageEditUtils").isParentWithinEditUIWindow({
            parentTsInSeconds: e.t,
            msgKey: e.id,
          })
        : !0;
    }
    function W(e) {
      return e.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE && B(e);
    }
    function q(e, t) {
      t === void 0 && (t = !1);
      var n = o("WAWebFrontendMsgGetters").getChat(e);
      if (V(e, n)) return !1;
      var r =
        (o("WAWebMsgGetters").getIsEdited(e) &&
          o("WAWebMsgGetters").getIsFailed(e) &&
          !t) ||
        !o("WAWebMsgMayFail").msgMayFail(e);
      if (o("WAWebChatGetters").getIsNewsletter(n)) return U(e, n, r);
      var a = A(e, n);
      return H(e, n, r)
        ? a && o("WAWebBizAiAgentGating").isAiAgentMessageEditingEnabled()
          ? o("WAWebChatGroupUtils").canSendIgnoringAiAgentBlock(n)
          : (e.local ||
              o(
                "WAWebMessageEditGatingUtils",
              ).isCrossDeviceMessageEditingEnabled() ||
              o("WAWebMessageEditUtils").isMessageYourselfEditExempt({
                msgKey: e.id,
                msgType: e.type,
              })) &&
            n.canSend
        : !1;
    }
    function U(e, t, n) {
      var r, a;
      return (
        ((r =
          (a = t.newsletterMetadata) == null ? void 0 : a.iAmAdminOrOwner()) !=
        null
          ? r
          : !1) &&
        n &&
        !e.isForwarded &&
        (o("WAWebMsgGetters").getNewsletterAdminProfile(e) == null ||
          o("WAWebMsgGetters").getIsSentByMe(e))
      );
    }
    function V(e, t) {
      return (
        (o("WAWebMsgGetters").getIsBotQuery(e) && !G(e, t)) ||
        w(t) ||
        o("WAWebLimitSharingGatingUtils").isChatAcp2Restricted(t)
      );
    }
    function H(e, t, n) {
      var r;
      return (
        o("WAWebMsgGetters").getIsSentByMe(e) &&
        !e.isForwarded &&
        n &&
        ((r = t.contact) == null ? void 0 : r.isEnterprise) !== !0
      );
    }
    function G(e, t) {
      var n,
        r,
        a = (n = t.groupMetadata) == null ? void 0 : n.participants;
      if (
        !o("WAWebChatGetters").getIsGroup(t) ||
        a == null ||
        !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
      )
        return !1;
      var i = ((r = e.mentionedJidList) != null ? r : []).filter(function (e) {
        return e.isBot();
      });
      return (
        i.length > 0 &&
        i.every(function (e) {
          return (
            o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e) &&
            a.get(e) != null
          );
        })
      );
    }
    function z(e) {
      var t = o("WAWebMsgGetters").getIsGroupMsg(e),
        n = o("WAWebMsgGetters").getIsSentByMe(e),
        r = o("WAWebFrontendMsgGetters").getChat(e).groupMetadata;
      return n ||
        e.isViewOnce ||
        o("WAWebChatGetters").getIsNewsletter(
          o("WAWebFrontendMsgGetters").getChat(e),
        ) ||
        o("WAWebMsgGetters").getIsMetaBotResponse(e) ||
        !t
        ? !1
        : !!(r != null && r.reportToAdminMode);
    }
    function j(e, t) {
      return (
        t === void 0 && (t = !1),
        o("WAWebMessageEditUtils").getMsgEditType(e.type) ===
          o("WAWebMessageEditUtils").MsgEditType.TextEdit && q(e, t)
      );
    }
    function K(e, t) {
      return (
        t === void 0 && (t = !1),
        o("WAWebMessageEditUtils").getMsgEditType(e.type) ===
          o("WAWebMessageEditUtils").MsgEditType.CaptionEdit &&
          !!e.caption &&
          o("WAWebFrontendMsgGetters").getAsViewOnce(e) == null &&
          q(e, t)
      );
    }
    function Q(e, t) {
      if (
        (t === void 0 && (t = !1),
        o("WAWebMessageEditUtils").getMsgEditType(e.type) !==
          o("WAWebMessageEditUtils").MsgEditType.PollEdit ||
          o("WAWebMsgGetters").getIsNewsletterMsg(e) ||
          !o("WAWebPollsGatingUtils").isPollCreatorEditSendingEnabled(
            e.id.remote,
          ))
      )
        return !1;
      var n = o("WAWebMsgGetters").getPollEndTime(e);
      return n != null && n <= o("WAWebClock").Clock.getServerTimeMs()
        ? !1
        : q(e, t);
    }
    function X(e) {
      switch (e) {
        case o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION:
        case o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT:
          return !0;
        case o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER:
          return !0;
        default:
          return !1;
      }
    }
    function Y(e) {
      if (
        (n("cr:17680") == null
          ? void 0
          : n("cr:17680").messageEditRestrictionEnabled()) === !1
      )
        return !0;
      var t = o("WAWebStateUtils").unproxy(e);
      if (o("WAWebMsgGetters").getIsQuestion(t)) return !1;
      var r = j(t, !0) || K(t, !0) || Q(t, !0);
      return r
        ? o("WAWebMessageEditUtils").isParentWithinEditUIWindow({
            parentTsInSeconds: t.t,
            msgKey: t.id,
          })
          ? !0
          : O(t) ||
            o("WAWebMessageEditUtils").isMessageYourselfEditExempt({
              msgKey: t.id,
              msgType: t.type,
            })
        : !1;
    }
    function J(e, t, n) {
      return (
        Y(e) &&
        X(t) &&
        !o("WAWebBizBroadcastProChatUtils").getIsBizBroadcastProChat(n) &&
        !o("WAWebFrontendChatGetters").getIsCapiHostedGroup(n)
      );
    }
    function Z(e) {
      if (
        (n("cr:17680") == null
          ? void 0
          : n("cr:17680").messageEditRestrictionEnabled()) === !1
      )
        return !0;
      var t = o("WAWebStateUtils").unproxy(e);
      return o("WAWebMsgGetters").getIsQuestion(t)
        ? !1
        : j(t) &&
            (o("WAWebMessageEditUtils").isParentWithinEditProcessingWindow({
              parentTsInSeconds: t.t,
              msgKey: t.id,
            }) ||
              o("WAWebMessageEditUtils").isMessageYourselfEditExempt({
                msgKey: t.id,
                msgType: t.type,
              }));
    }
    function ee(e) {
      if (
        (n("cr:17680") == null
          ? void 0
          : n("cr:17680").messageEditRestrictionEnabled()) === !1
      )
        return !0;
      var t = o("WAWebStateUtils").unproxy(e);
      return o("WAWebMsgGetters").getIsQuestion(t)
        ? !1
        : K(t) &&
            (o("WAWebMessageEditUtils").isParentWithinEditProcessingWindow({
              parentTsInSeconds: t.t,
              msgKey: t.id,
            }) ||
              o("WAWebMessageEditUtils").isMessageYourselfEditExempt({
                msgKey: t.id,
                msgType: t.type,
              }));
    }
    function te(e) {
      var t,
        n,
        a = o("WAWebStateUtils").unproxy(e);
      return (o("WAWebMsgGetters").getIsSentByMe(a) &&
        !o("WAWebGroupHistoryUtils").shouldReportGroupHistoryBundleSender(a)) ||
        o("WAWebMsgGetters").getIsPSA(a) ||
        o("WAWebMsgGetters").getIsBotResponse(a) ||
        o("WAWebMsgGetters").getIsCAPISupport(a)
        ? !1
        : o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage({
              isAGMShown:
                (t = a.ctwaContext) == null
                  ? void 0
                  : t.automatedGreetingMessageShown,
              msgSource: (n = a.ctwaContext) == null ? void 0 : n.sourceApp,
              msgSubtype: a.subtype,
              msgType: a.type,
            })
          ? a.signupContext != null
            ? !0
            : o("WAWebCTWAGatingUtils").isCtwaAgmReportingEnabled()
          : (a.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE ||
                a.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE) &&
              ((a == null ? void 0 : a.nativeFlowName) ===
                r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW ||
                (a == null ? void 0 : a.nativeFlowName) ===
                  r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP)
            ? !0
            : o("WAWebSpamUtils").isMsgTypeSupportedForMsgLevelReporting(
                a.type,
              );
    }
    function ne(e) {
      return (
        o("WATimeUtils").unixTime() - o("WAWebMsgGetters").getT(e) <=
        o("WAWebRevokeMsgConstants").NEWSLETTER_REVOKE_WINDOW
      );
    }
    function re(t) {
      var n,
        r,
        a,
        i = o("WAWebFrontendMsgGetters").getCurrentChat(t);
      if (!o("WAWebChatGetters").getIsNewsletter(i))
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "canRevokeNewsletterMsg called on a non-newsletter chat",
              ])),
          ),
          !1
        );
      if (se(t)) return !1;
      var l =
        ((n = t.ack) != null ? n : o("WAWebAck").ACK.CLOCK) <
        o("WAWebAck").ACK.CLOCK;
      return (
        (ne(t) || l) &&
        ((r =
          (a = i.newsletterMetadata) == null ? void 0 : a.iAmAdminOrOwner()) !=
        null
          ? r
          : !1)
      );
    }
    function oe(e) {
      var t = o("WAWebFrontendMsgGetters").getChat(e);
      return !o("WAWebChatGetters").getIsNewsletter(t) || !ne(e)
        ? !1
        : t.newsletterMetadata == null
          ? (o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "chat missing newsletter metadata, can't gen msg link",
                ])),
            ),
            !1)
          : t.newsletterMetadata.inviteCode == null
            ? (o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "chat missing newsletter inviteCode, can't gen msg link",
                  ])),
              ),
              !1)
            : e.serverId == null
              ? (o("WALogger").ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "msg missing serverId, can't gen msg link",
                    ])),
                ),
                !1)
              : !(e.type === o("WAWebMsgType").MSG_TYPE.REVOKED || !g(e, t));
    }
    function ae(e) {
      var t = o("WAWebFrontendMsgGetters").getChat(e);
      if (!o("WAWebChatGetters").getIsNewsletter(t) || !ne(e)) return !1;
      var n = t.newsletterMetadata;
      return n == null
        ? (o("WALogger").ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "chat missing newsletter metadata, can't gen embed code",
              ])),
          ),
          !1)
        : n.inviteCode == null
          ? (o("WALogger").ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "chat missing newsletter inviteCode, can't gen embed code",
                ])),
            ),
            !1)
          : e.serverId == null
            ? (o("WALogger").ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "msg missing serverId, can't gen embed code",
                  ])),
              ),
              !1)
            : e.type === o("WAWebMsgType").MSG_TYPE.REVOKED ||
                !g(e, t) ||
                !n.iAmAdminOrOwner()
              ? !1
              : o("WAWebNewsletterGatingUtils").isChannelWebEmbeddingEnabled();
    }
    function ie(e) {
      var t;
      if (!o("WAWebNewsletterGatingUtils").isChannelDSA26SenderEnabled())
        return !1;
      var n = o("WAWebFrontendMsgGetters").getChat(e);
      return !(
        !o("WAWebChatGetters").getIsNewsletter(n) ||
        !ne(e) ||
        !((t = n.newsletterMetadata) != null && t.iAmAdminOrOwner()) ||
        e.hasPaidPartnershipLabel === !0 ||
        !o("WAWebSpamUtils").isMsgTypeSupportedForPaidPartnershipLabel(e)
      );
    }
    function le(e) {
      var t,
        n = o("WAWebFrontendMsgGetters").getChat(e);
      return !o("WAWebChatGetters").getIsNewsletter(n) ||
        !ne(e) ||
        !((t = n.newsletterMetadata) != null && t.iAmAdminOrOwner()) ||
        o("WAWebMsgGetters").getIsAiContent(e) === !0 ||
        o("WAWebFrontendMsgGetters").getAsVisualMedia(e) == null
        ? !1
        : o(
            "WAWebNewsletterGatingUtils",
          ).isChannelSGISenderSelfDisclosureEnabled();
    }
    function se(e) {
      var t = !1;
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
          (e.subtype ===
            o("WAWebCommonMsgSubtypeTypes").MsgSubtype.AdminRevoke ||
            e.subtype ===
              o("WAWebCommonMsgSubtypeTypes").MsgSubtype.SenderRevoke) &&
          (t = !0),
        t || e.type === o("WAWebMsgType").MSG_TYPE.REVOKED
      );
    }
    function ue(e) {
      if (!e.isBot() || o("WAWebBotStaticProfiles").isStaticProfile(e))
        return !1;
      var t = o("WAWebResolveBotProfile").resolveBotSupportInput(e);
      return (
        o("WAWebBotExposedName").isBotProfileViewOnly(t) ||
        o("WAWebBotSupportGating").isThirdPartyAgent(t)
      );
    }
    function ce(e, t) {
      var n;
      if ((t === void 0 && (t = !1), se(e))) return !1;
      var r = o("WAWebFrontendMsgGetters").getCurrentChat(e);
      return o("WAWebChatGetters").getIsNewsletter(r)
        ? re(e)
        : (o("WAWebChatGetters").getIsGroup(r) &&
              !((n = r.groupMetadata) != null && n.participants.iAmMember())) ||
            o("WAWebContactGetters").getIsMe(r.contact) ||
            (r.contact.isEnterprise && !r.contact.id.isBot()) ||
            o("WAWebFrontendChatGetters").getIsCapiHostedGroup(r) ||
            w(r) ||
            (!t && ue(r.id))
          ? !1
          : e.type === o("WAWebMsgType").MSG_TYPE.COMMENT
            ? e.ack != null && e.ack >= o("WAWebAck").ACK.SENT
            : o("WAWebMsgGetters").getIsUserCreatedType(e) &&
              !(e.broadcast != null && e.broadcast) &&
              ((e instanceof o("WAWebMsgModel").Msg && !e.isUnsentPhoneMsg()) ||
                o("WAWebMsgGetters").getIsEdited(e)) &&
              !o("WAWebFrontendMsgGetters").getIsUnsentMedia(e) &&
              !o("WAWebChatGroupUtils").isSuspendedGroup(
                o("WAWebFrontendMsgGetters").getCurrentChat(e),
              ) &&
              !o("WAWebChatGroupUtils").isTerminatedGroup(
                o("WAWebFrontendMsgGetters").getCurrentChat(e),
              );
    }
    function de(e) {
      var t = e;
      e instanceof o("WAWebMsgModel").Msg &&
        (t = o("WAWebStateUtils").unproxy(e));
      var n =
        o("WATimeUtils").unixTime() - o("WAWebMsgGetters").getT(t) <=
        o("WAWebRevokeMsgConstants").REVOKE_WINDOW;
      return ce(t) && t.id.fromMe && n;
    }
    function me(e) {
      var t,
        n = e;
      e instanceof o("WAWebMsgModel").Msg &&
        (n = o("WAWebStateUtils").unproxy(e));
      var r = o("WAWebFrontendMsgGetters").getCurrentChat(n);
      if (o("WAWebChatGetters").getIsNewsletter(r)) return re(n);
      var a =
        o("WATimeUtils").unixTime() - o("WAWebMsgGetters").getT(n) <=
        o("WAWebRevokeMsgConstants").REVOKE_WINDOW;
      return (
        ce(n) &&
        !n.id.fromMe &&
        !!((t = r.groupMetadata) != null && t.participants.iAmAdmin()) &&
        !o("WAWebLimitSharingGatingUtils").isChatAcp2Restricted(r) &&
        a
      );
    }
    function pe(e) {
      var t = e;
      e instanceof o("WAWebMsgModel").Msg &&
        (t = o("WAWebStateUtils").unproxy(e));
      var n =
          o("WATimeUtils").unixTime() - o("WAWebMsgGetters").getT(t) <=
          o("WAWebRevokeMsgConstants").REVOKE_WINDOW,
        r = o(
          "WAWebCoexV2RevokeAuthorization",
        ).getCoexV2RevokeAuthorizationForCurrentUser(
          o("WAWebMsgGetters").getSenderWithDevice(t),
          o("WAWebMsgGetters").getMetaFrom(t),
        );
      return !ce(t, r === !0) || !n
        ? !1
        : r != null
          ? r
          : (o("WAWebBotBaseGating").isBotEnabled() &&
              o("WAWebMsgGetters").isMetaBotResponseToMyInvoke(t)) ||
            (!t.id.fromMe &&
              o("WAWebBotUtils").isHatchBot(
                o("WAWebFrontendMsgGetters").getCurrentChat(t).id,
              ) &&
              o("WAWebHatchFrontendGating").isHatchRevokeEnabled());
    }
    function _e(e) {
      var t, n;
      if (
        o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage({
          isAGMShown:
            (t = e.ctwaContext) == null
              ? void 0
              : t.automatedGreetingMessageShown,
          msgSource: (n = e.ctwaContext) == null ? void 0 : n.sourceApp,
          msgSubtype: e.subtype,
          msgType: e.type,
        })
      )
        return !1;
      var r = o("WAWebFrontendMsgGetters").getChat(e);
      return o("WAWebChatGetters").getIsBroadcast(r)
        ? !1
        : !o("WAWebChatGetters").getIsNewsletter(r) || re(e);
    }
    ((l.isWamoMsg = f),
      (l.canWamoSubMsgBeSharedByUser = g),
      (l.canWamoSubBeSharedInChat = h),
      (l.canForwardMsgToChat = y),
      (l.allowedChatOrContactForForwarding = S),
      (l.hasRetrievableMedia = R),
      (l.isForwardedAsMedia = L),
      (l.canForwardMsg = I),
      (l.isForwardablePsaMsg = $),
      (l.canQuickForwardMsg = P),
      (l.canStarMsg = N),
      (l.canPinMsg = M),
      (l.isBizAiAgentTextEditOpportunity = F),
      (l.shouldCoachAgentEdit = O),
      (l.shouldDeliverAgentEditToRecipient = B),
      (l.canDeliverEditProtocolMessage = W),
      (l.canReportToAdmin = z),
      (l.displayTypeSupportsEditing = X),
      (l.canEnterEditingFlow = Y),
      (l.canShowMsgEditAction = J),
      (l.canEditText = Z),
      (l.canEditCaption = ee),
      (l.canReportMsg = te),
      (l.isNewsletterMsgOnServer = ne),
      (l.canRevokeNewsletterMsg = re),
      (l.canCopyNewsletterMessageLink = oe),
      (l.canEmbedNewsletterMessage = ae),
      (l.canAddPaidPartnershipLabelToMsg = ie),
      (l.canAddAiContentLabelToMsg = le),
      (l.canSenderRevokeMsg = de),
      (l.canAdminRevokeMsg = me),
      (l.canBotResponseBeRevokeByInvoker = pe),
      (l.canDeleteMsg = _e));
  },
  98,
);
