__d(
  "WAWebMsgActionCapability",
  [
    "WALogger",
    "WANullthrows",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAck",
    "WAWebAuraGating",
    "WAWebBizCoexGatingUtils",
    "WAWebBizCtwaAGMUtils",
    "WAWebBizGatingUtils",
    "WAWebBotBaseGating",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebBotProfileCollection",
    "WAWebBotUtils",
    "WAWebBusinessHSMTypes",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebContactGetters",
    "WAWebContactModel",
    "WAWebDisplayType",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGroupHistoryUtils",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebKeepInChatMsgUtils",
    "WAWebMediaTypes",
    "WAWebMessageAssociation.flow",
    "WAWebMessageEditUtils",
    "WAWebMiscGatingUtils",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebMusicEligibleCountriesProvider",
    "WAWebMusicGatingUtils",
    "WAWebMusicParsingUtils",
    "WAWebMusicPlaybackUtils",
    "WAWebNewsletterFutureProofUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMembershipUtil",
    "WAWebPinMsgGatingUtils",
    "WAWebPollCreationUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebQuestionsGatingUtils",
    "WAWebRevokeMsgConstants",
    "WAWebSpamUtils",
    "WAWebStateUtils",
    "WAWebUserPrefsMultiDevice",
    "WAWebWid",
    "cr:6009",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = "text/html";
    function m(e) {
      var t = e.ctwaContext;
      return (t == null ? void 0 : t.sourceApp) === "whatsapp";
    }
    function p(e, t) {
      return !(
        o("WAWebChatGetters").getIsNewsletter(t) &&
        e.isWamoSub === !0 &&
        !o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(
          t.newsletterMetadata,
        ) &&
        o("WAWebNewsletterGatingUtils").isWamoSubMessagesSupported()
      );
    }
    function _(e, t) {
      if (!C(e)) return !1;
      if (
        t instanceof r("WAWebContactModel") ||
        !o("WAWebChatGetters").getIsNewsletter(t)
      )
        return !0;
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
    function f(e, t, n) {
      if (!e.isBot()) return !0;
      var r = o("WAWebBotProfileCollection").BotProfileCollection.get(e);
      return (r == null ? void 0 : r.isDefault) !== !0 ? !1 : y(t);
    }
    function g(e, t) {
      return e.isNewsletter() ? !0 : t.hasMusicAnnotations !== !0;
    }
    function h(e, t, n) {
      n === void 0 && (n = {});
      var r = e.id;
      return f(r, t, n) && g(r, n);
    }
    function y(e) {
      return e.length === 1 && e[0].type === o("WAWebMsgType").MSG_TYPE.CHAT;
    }
    function C(e) {
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
          o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled())
      )
        return !1;
      var _ = c != null && o("WAWebChatGetters").getIsNewsletter(c);
      if (
        (_ &&
          (!o(
            "WAWebNewsletterGatingUtils",
          ).isNewsletterMessageForwardSendingEnabled() ||
            (c != null && !p(s, c)))) ||
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
          ).isNewsletterAdminProfilesForwardingEnabled())
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
        case o("WAWebMsgType").MSG_TYPE.REVOKED:
        case o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE:
        case o("WAWebMsgType").MSG_TYPE.UNKNOWN:
        case o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE:
          return !1;
        case o("WAWebMsgType").MSG_TYPE.POLL_CREATION:
          return (
            _ &&
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
          (s.nativeFlowName ===
            r("WAWebInteractiveMessagesNativeFlowName").CTA_URL &&
            r("WAWebWid").isPSA(s.id.remote) &&
            o("WAWebABProps").getABPropConfigValue("web_chatpsa_forwarding"))
        )
          return !0;
        if (s.nativeFlowName != null) return !1;
      }
      if (
        !s.interactiveButtonsReleased() ||
        (s.ack < o("WAWebAck").ACK.SENT &&
          o("WAWebMsgGetters").getIsSentByMe(s)) ||
        (s.type === o("WAWebMsgType").MSG_TYPE.CHAT &&
          s.subtype ===
            o("WAWebBotGenTypingIndicatorMsg")
              .BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE) ||
        (s.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
          s.mimetype === d &&
          u &&
          !o("WAWebABProps").getABPropConfigValue(
            "ai_hatch_forwarding_html_enabled",
          ))
      )
        return !1;
      if (o("WAWebFrontendMsgGetters").getAsMms(s)) {
        var f = s.mediaData;
        if (f.mediaStage === o("WAWebMediaTypes").MediaDataStage.EXISTS)
          return !0;
        if (
          f.mediaStage === o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING ||
          f.mediaStage ===
            o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED ||
          (f.mediaStage !== o("WAWebMediaTypes").MediaDataStage.RESOLVED &&
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
          if (_) {
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
        o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage(
          (a = s.ctwaContext) == null ? void 0 : a.sourceApp,
          s.type,
          (i = s.ctwaContext) == null
            ? void 0
            : i.automatedGreetingMessageShown,
          s.subtype,
        ) ||
        m(s) ||
        (s.type === o("WAWebMsgType").MSG_TYPE.STICKER &&
          (!r("WAWebAuraGating").canUsePremiumSticker(s.stickerPremiumStatus) ||
            !r("WAWebAuraGating").canUsePremiumSticker(
              (l = s.mediaData) == null ? void 0 : l.stickerPremiumStatus,
            ))) ||
        (o("WAWebMsgGetters").getFirstMusicAnnotation(s) != null &&
          o("WAWebMusicGatingUtils").isMusicForwardingDisabled())
      );
    }
    function b(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return !C(e) ||
        o("WAWebMsgGetters").getIsFrequentlyForwarded(t) ||
        o("WAWebMsgLinks").getSuspiciousLinks(t).length !== 0 ||
        o("WAWebFrontendMsgGetters").getAsPttLike(t) != null ||
        t.type === o("WAWebMsgType").MSG_TYPE.STICKER ||
        !t.interactiveButtonsReleased() ||
        (o("WAWebChatGetters").getIsNewsletter(
          o("WAWebFrontendMsgGetters").getChat(t),
        ) &&
          o("WAWebNewsletterGatingUtils").isNewsletterQuickForwardingEnabled())
        ? !1
        : o("WAWebFrontendMsgGetters").getAsMms(t) != null ||
            o("WAWebMsgGetters").getLinkPreview(t) ||
            t.type === o("WAWebMsgType").MSG_TYPE.VCARD ||
            t.type === o("WAWebMsgType").MSG_TYPE.LOCATION ||
            t.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION ||
            t.type === o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT ||
            t.ctwaContext != null;
    }
    function v(e) {
      var t,
        n,
        r = o("WAWebStateUtils").unproxy(e);
      return o("WAWebChatGetters").getIsNewsletter(
        o("WAWebFrontendMsgGetters").getChat(r),
      ) ||
        r.isCarouselCard ||
        o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage(
          (t = r.ctwaContext) == null ? void 0 : t.sourceApp,
          r.type,
          (n = r.ctwaContext) == null
            ? void 0
            : n.automatedGreetingMessageShown,
          r.subtype,
        )
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
            r.interactiveButtonsReleased() &&
            !o("WAWebFrontendMsgGetters").getAsAlbum(r);
    }
    function S(e) {
      var t,
        n,
        a = o("WAWebStateUtils").unproxy(e),
        i = o("WAWebFrontendMsgGetters").getChat(a);
      if (
        o("WAWebChatGetters").getIsBroadcast(i) ||
        a.isViewOnce === !0 ||
        a.subtype === "view_once_unavailable_fanout" ||
        o("WAWebChatGetters").getIsNewsletter(i) ||
        i.id.isBot() ||
        a.isCarouselCard
      )
        return !1;
      if (o("WAWebMsgGetters").getIsGroupMsg(a)) {
        var l = r("WANullthrows")(i.groupMetadata);
        if (
          !l.participants.iAmMember() ||
          ((l.restrict || l.announce) && !l.participants.iAmAdmin())
        )
          return !1;
      }
      return o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage(
        (t = a.ctwaContext) == null ? void 0 : t.sourceApp,
        a.type,
        (n = a.ctwaContext) == null ? void 0 : n.automatedGreetingMessageShown,
        a.subtype,
      )
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
            a.interactiveButtonsReleased() &&
            !o("WAWebKeepInChatMsgUtils").isExpiredAndNotKept(a) &&
            o("WAWebPinMsgGatingUtils").isPinnedMessagesM1SenderEnabled() &&
            !o("WAWebFrontendMsgGetters").getAsAlbum(a);
    }
    function R(e) {
      var t, n;
      return (
        o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
        (e == null || (t = e.id) == null ? void 0 : t.isUser()) === !0 &&
        o(
          "WAWebUserPrefsMultiDevice",
        ).getIsHostedMeAccountFromLocalStorage() !== !0 &&
        (e == null || (n = e.contact) == null || (n = n.businessProfile) == null
          ? void 0
          : n.isBizBot1p) === !0
      );
    }
    function L(e, t) {
      var n, r;
      if ((t === void 0 && (t = !1), o("WAWebMsgGetters").getIsBotQuery(e)))
        return !1;
      var a = o("WAWebFrontendMsgGetters").getChat(e);
      if (
        (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
          a != null &&
          (n = a.id) != null &&
          n.isUser() &&
          ((a == null || (r = a.contact) == null ? void 0 : r.isHosted) ===
            !0 ||
            o(
              "WAWebUserPrefsMultiDevice",
            ).getIsHostedMeAccountFromLocalStorage() === !0) &&
          !o("WAWebABProps").getABPropConfigValue("coex_edit_msg_enabled")) ||
        R(a)
      )
        return !1;
      var i =
        (o("WAWebMsgGetters").getIsEdited(e) &&
          o("WAWebMsgGetters").getIsFailed(e) &&
          !t) ||
        !e.mayFail();
      return o("WAWebChatGetters").getIsNewsletter(
        o("WAWebFrontendMsgGetters").getChat(e),
      )
        ? o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(
            o("WAWebFrontendMsgGetters").getChat(e).newsletterMetadata,
          ) &&
            i &&
            !e.isForwarded
        : o("WAWebMsgGetters").getIsSentByMe(e) &&
            !e.isForwarded &&
            e.local &&
            i &&
            o("WAWebFrontendMsgGetters").getChat(e).canSend &&
            !o("WAWebFrontendMsgGetters").getChat(e).contact.isEnterprise;
    }
    function E(e) {
      var t = o("WAWebMsgGetters").getIsGroupMsg(e),
        n = o("WAWebMsgGetters").getIsSentByMe(e),
        r = o("WAWebFrontendMsgGetters").getChat(e).groupMetadata;
      return !o("WAWebABProps").getABPropConfigValue(
        "report_to_admin_kill_switch",
      ) ||
        n ||
        e.isViewOnce ||
        o("WAWebChatGetters").getIsNewsletter(
          o("WAWebFrontendMsgGetters").getChat(e),
        ) ||
        o("WAWebMsgGetters").getIsMetaBotResponse(e) ||
        !t
        ? !1
        : !!(r != null && r.reportToAdminMode);
    }
    function k(e, t) {
      return (
        t === void 0 && (t = !1),
        o("WAWebMessageEditUtils").getMsgEditType(e.type) ===
          o("WAWebMessageEditUtils").MsgEditType.TextEdit && L(e, t)
      );
    }
    function I(e, t) {
      return (
        t === void 0 && (t = !1),
        o("WAWebMessageEditUtils").getMsgEditType(e.type) ===
          o("WAWebMessageEditUtils").MsgEditType.CaptionEdit &&
          !!e.caption &&
          o("WAWebFrontendMsgGetters").getAsViewOnce(e) == null &&
          L(e, t)
      );
    }
    function T(e) {
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
    function D(e) {
      if (
        (n("cr:6009") == null
          ? void 0
          : n("cr:6009").messageEditRestrictionEnabled()) === !1
      )
        return !0;
      var t = o("WAWebStateUtils").unproxy(e);
      return o("WAWebMsgGetters").getIsQuestion(t)
        ? !1
        : (k(t, !0) || I(t, !0)) &&
            o("WAWebMessageEditUtils").isParentWithinEditUIWindow({
              parentTsInSeconds: t.t,
              msgKey: t.id,
            });
    }
    function x(e) {
      if (
        (n("cr:6009") == null
          ? void 0
          : n("cr:6009").messageEditRestrictionEnabled()) === !1
      )
        return !0;
      var t = o("WAWebStateUtils").unproxy(e);
      return o("WAWebMsgGetters").getIsQuestion(t)
        ? !1
        : k(t) &&
            o("WAWebMessageEditUtils").isParentWithinEditProcessingWindow({
              parentTsInSeconds: t.t,
              msgKey: t.id,
            });
    }
    function $(e) {
      if (
        (n("cr:6009") == null
          ? void 0
          : n("cr:6009").messageEditRestrictionEnabled()) === !1
      )
        return !0;
      var t = o("WAWebStateUtils").unproxy(e);
      return o("WAWebMsgGetters").getIsQuestion(t)
        ? !1
        : I(t) &&
            o("WAWebMessageEditUtils").isParentWithinEditProcessingWindow({
              parentTsInSeconds: t.t,
              msgKey: t.id,
            });
    }
    function P(e) {
      var t,
        n,
        a = o("WAWebStateUtils").unproxy(e);
      return (o("WAWebMsgGetters").getIsSentByMe(a) &&
        !o("WAWebGroupHistoryUtils").shouldReportGroupHistoryBundleSender(a)) ||
        o("WAWebMsgGetters").getIsPSA(a) ||
        o("WAWebMsgGetters").getIsBotResponse(a) ||
        o("WAWebMsgGetters").getIsCAPISupport(a)
        ? !1
        : o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage(
              (t = a.ctwaContext) == null ? void 0 : t.sourceApp,
              a.type,
              (n = a.ctwaContext) == null
                ? void 0
                : n.automatedGreetingMessageShown,
              a.subtype,
            )
          ? a.signupContext != null
            ? !0
            : o("WAWebBizGatingUtils").isCtwaAgmReportingEnabled()
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
    function N(e) {
      return (
        o("WATimeUtils").unixTime() - o("WAWebMsgGetters").getT(e) <=
        o("WAWebRevokeMsgConstants").NEWSLETTER_REVOKE_WINDOW
      );
    }
    function M(t) {
      var n,
        r = o("WAWebFrontendMsgGetters").getCurrentChat(t);
      if (!o("WAWebChatGetters").getIsNewsletter(r))
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "canRevokeNewsletterMsg called on a non-newsletter chat",
              ])),
          ),
          !1
        );
      if (F(t)) return !1;
      var a =
        ((n = t.ack) != null ? n : o("WAWebAck").ACK.CLOCK) <
        o("WAWebAck").ACK.CLOCK;
      return (
        (N(t) || a) &&
        o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(r.newsletterMetadata)
      );
    }
    function w(e) {
      var t = o("WAWebFrontendMsgGetters").getChat(e);
      return !o("WAWebChatGetters").getIsNewsletter(t) || !N(e)
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
              : !(e.type === o("WAWebMsgType").MSG_TYPE.REVOKED || !p(e, t));
    }
    function A(e) {
      if (!o("WAWebNewsletterGatingUtils").isChannelDSA26SenderEnabled())
        return !1;
      var t = o("WAWebFrontendMsgGetters").getChat(e);
      return !(
        !o("WAWebChatGetters").getIsNewsletter(t) ||
        !N(e) ||
        !o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(
          t.newsletterMetadata,
        ) ||
        e.hasPaidPartnershipLabel === !0 ||
        !o("WAWebSpamUtils").isMsgTypeSupportedForPaidPartnershipLabel(e)
      );
    }
    function F(e) {
      var t = !1;
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
          (e.subtype ===
            o("WAWebCommonMsgSubtypeTypes").MsgSubtype.AdminRevoke ||
            o("WAWebCommonMsgSubtypeTypes").MsgSubtype.SenderRevoke) &&
          (t = !0),
        t || e.type === o("WAWebMsgType").MSG_TYPE.REVOKED
      );
    }
    function O(e) {
      var t;
      if (F(e)) return !1;
      var n = o("WAWebFrontendMsgGetters").getCurrentChat(e);
      return o("WAWebChatGetters").getIsNewsletter(n)
        ? M(e)
        : (o("WAWebChatGetters").getIsGroup(n) &&
              !((t = n.groupMetadata) != null && t.participants.iAmMember())) ||
            o("WAWebContactGetters").getIsMe(n.contact) ||
            (n.contact.isEnterprise && !n.contact.id.isBot()) ||
            o("WAWebFrontendChatGetters").getIsCapiHostedGroup(n) ||
            (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
              !o("WAWebChatGetters").getIsGroup(n) &&
              (n.contact.isHosted === !0 ||
                o(
                  "WAWebUserPrefsMultiDevice",
                ).getIsHostedMeAccountFromLocalStorage()) &&
              !o("WAWebABProps").getABPropConfigValue(
                "coex_revoke_message_enabled",
              )) ||
            R(n)
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
    function B(e) {
      var t = e;
      e instanceof o("WAWebMsgModel").Msg &&
        (t = o("WAWebStateUtils").unproxy(e));
      var n =
        o("WATimeUtils").unixTime() - o("WAWebMsgGetters").getT(t) <=
        o("WAWebRevokeMsgConstants").REVOKE_WINDOW;
      return O(t) && t.id.fromMe && n;
    }
    function W(e) {
      var t,
        n = e;
      e instanceof o("WAWebMsgModel").Msg &&
        (n = o("WAWebStateUtils").unproxy(e));
      var r = o("WAWebFrontendMsgGetters").getCurrentChat(n);
      if (o("WAWebChatGetters").getIsNewsletter(r)) return M(n);
      var a =
        o("WATimeUtils").unixTime() - o("WAWebMsgGetters").getT(n) <=
        o("WAWebRevokeMsgConstants").REVOKE_WINDOW;
      return (
        O(n) &&
        !n.id.fromMe &&
        !!((t = r.groupMetadata) != null && t.participants.iAmAdmin()) &&
        a
      );
    }
    function q(e) {
      var t = e;
      e instanceof o("WAWebMsgModel").Msg &&
        (t = o("WAWebStateUtils").unproxy(e));
      var n = o("WAWebRevokeMsgConstants").REVOKE_WINDOW,
        r = o("WAWebMsgGetters").isMetaBotResponseToMyInvoke(t),
        a = o("WATimeUtils").unixTime() - o("WAWebMsgGetters").getT(t) <= n;
      return o("WAWebBotBaseGating").isBotEnabled() && O(t) && a && r;
    }
    function U(e, t) {
      var n = o("WAWebStateUtils").unproxy(e),
        r = o("WAWebFrontendMsgGetters").getChat(n);
      if (
        r.isSuspendedOrTerminated() &&
        o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled()
      )
        return !1;
      if (
        o("WAWebMsgGetters").getIsNewsletterMsg(n) &&
        n.type === o("WAWebMsgType").MSG_TYPE.VIDEO
      ) {
        var a,
          i =
            (a = o("WAWebMsgGetters").getFirstMusicAnnotation(n)) == null ||
            (a = a.embeddedContent) == null
              ? void 0
              : a.embeddedMusic;
        if (i != null) {
          if (
            Number(i.overlapDurationInMs) >
            o("WAWebMusicGatingUtils").MAX_MUSIC_DOWNLOAD_EMBED_DURATION_MS
          )
            return !1;
          var l = o(
              "WAWebMusicEligibleCountriesProvider",
            ).provideMusicEligibleCountries(),
            s = o("WAWebMusicParsingUtils").toMusicMetadata(i);
          if (
            (s &&
              !o("WAWebMusicPlaybackUtils").canPlaybackMusic(
                s.countryBlocklist,
                l,
              )) ||
            !o("WAWebMusicGatingUtils").isStatusMusicSaveToDiskEnabled()
          )
            return !1;
        }
      }
      return n.type === o("WAWebMsgType").MSG_TYPE.STICKER ||
        n.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK ||
        o("WAWebFrontendMsgGetters").getAsRevoked(n) ||
        n.isViewOnce
        ? !1
        : n.type === o("WAWebMsgType").MSG_TYPE.VCARD ||
            n.type === o("WAWebMsgType").MSG_TYPE.MULTI_VCARD
          ? !0
          : !(
              n.mediaData == null ||
              (t !== !0 && !n.mediaData.isDownloadable()) ||
              (n.type === o("WAWebMsgType").MSG_TYPE.PTV &&
                !o("WAWebMsgGetters").getIsSentByMe(n)) ||
              !p(n, r)
            );
    }
    function V(e) {
      var t, n;
      return o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage(
        (t = e.ctwaContext) == null ? void 0 : t.sourceApp,
        e.type,
        (n = e.ctwaContext) == null ? void 0 : n.automatedGreetingMessageShown,
        e.subtype,
      ) ||
        o("WAWebChatGetters").getIsBroadcast(
          o("WAWebFrontendMsgGetters").getChat(e),
        )
        ? !1
        : !o("WAWebChatGetters").getIsNewsletter(
            o("WAWebFrontendMsgGetters").getChat(e),
          ) || M(e);
    }
    ((l.isWamoMsg = m),
      (l.canWamoSubMsgBeSharedByUser = p),
      (l.canForwardMsgToChat = _),
      (l.allowedChatOrContactForForwarding = h),
      (l.canForwardMsgToMetaAi = y),
      (l.canForwardMsg = C),
      (l.canQuickForwardMsg = b),
      (l.canStarMsg = v),
      (l.canPinMsg = S),
      (l.canReportToAdmin = E),
      (l.displayTypeSupportsEditing = T),
      (l.canEnterEditingFlow = D),
      (l.canEditText = x),
      (l.canEditCaption = $),
      (l.canReportMsg = P),
      (l.isNewsletterMsgOnServer = N),
      (l.canRevokeNewsletterMsg = M),
      (l.canCopyNewsletterMessageLink = w),
      (l.canAddPaidPartnershipLabelToMsg = A),
      (l.canSenderRevokeMsg = B),
      (l.canAdminRevokeMsg = W),
      (l.canBotResponseBeRevokeByInvoker = q),
      (l.canDownloadMsg = U),
      (l.canDeleteMsg = V));
  },
  98,
);
