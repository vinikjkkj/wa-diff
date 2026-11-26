__d(
  "WAWebChatForwardMessage",
  [
    "WALogger",
    "WAWebBotFrontendUtils",
    "WAWebBotGating",
    "WAWebBotProfileCollection",
    "WAWebBotUtils",
    "WAWebChatEphemerality",
    "WAWebContactBlockedErrorAction",
    "WAWebContactGetters",
    "WAWebCryptoRandomMediaKey",
    "WAWebForwardAssociatedChildren",
    "WAWebForwardMediaUtils",
    "WAWebForwardMessagePluginForwardMedia",
    "WAWebForwardMuseGroupGeneratedMediaAction",
    "WAWebForwardRichResponseHandler",
    "WAWebFrontendMsgGetters",
    "WAWebGeneratePollVotesSnapshotFromPoll",
    "WAWebGetAiBotContextForForwardedMsg",
    "WAWebGetNewsletterContextForForwardedMsg",
    "WAWebGetPlainTextFromBotMsg",
    "WAWebHatchJarvisForwardSend",
    "WAWebHatchJarvisPayload",
    "WAWebIncrementNewsletterForwardCounterAction",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebIsAccountBoundAiRichResponse",
    "WAWebMediaConstants",
    "WAWebMediaForwardMediaMsg",
    "WAWebMediaGetUploadOriginForChat",
    "WAWebMediaOpaqueData",
    "WAWebMediaUploadMmsThumbnail",
    "WAWebMessageAssociationConfig",
    "WAWebMessagingGatingUtils",
    "WAWebMetaAiForwardedText",
    "WAWebMmsMediaTypes",
    "WAWebMsgActionCapability",
    "WAWebMsgDataUtils",
    "WAWebMsgGetters",
    "WAWebMsgModelFromData",
    "WAWebMsgType",
    "WAWebMuseGroupRichResponseForward",
    "WAWebMuseResponseCopyText",
    "WAWebNewsletterSendMsgAction",
    "WAWebPaymentRequestForwardFields",
    "WAWebPaymentRequestForwardPolicy",
    "WAWebRichResponseForwardText",
    "WAWebSendMsgChatAction",
    "WAWebSendTextMsgChatAction",
    "WAWebWid",
    "err",
    "filterObject",
    "getErrorSafe",
    "isStringNullOrEmpty",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["type"],
      s,
      u,
      c,
      d,
      m;
    function p(e) {
      return !!(o("WAWebFrontendMsgGetters").getAsMms(e) && !e.ctwaContext);
    }
    async function _(t) {
      var n = t.appendedText,
        a = t.associationOptions,
        i = t.chat,
        l = t.forwardReachScore,
        u = t.hatchJarvisSession,
        c = t.includeCaption,
        d = c === void 0 ? !1 : c,
        m = t.msg,
        p = t.multicast,
        _ = p === void 0 ? !1 : p,
        h = t.pairedMediaType;
      if (
        (o("WAWebPaymentRequestForwardPolicy").assertCanForwardPaymentRequest(
          m,
          i,
        ),
        o("WAWebIsAccountBoundAiRichResponse").isAccountBoundAiRichResponse(m))
      )
        throw r("err")("An account-bound AI card is never forwarded");
      var b = f({
        appendedText: n,
        chat: i,
        forwardReachScore: l,
        includeCaption: d,
        msg: m,
        multicast: _,
        pairedMediaType: h,
        associationOptions: a,
      });
      if (b != null) return b;
      var v = await y({
        appendedText: n,
        chat: i,
        forwardReachScore: l,
        msg: m,
        multicast: _,
      });
      if (v != null) return v;
      var S = await g({ chat: i, hatchJarvisSession: u, msg: m, multicast: _ }),
        R = S.fields,
        E = S.jarvisSendRecord;
      if (E != null) return E;
      if (k(m, R)) {
        if (L(m))
          throw r("err")(
            "Muse group media forward failed with no text fallback",
          );
        return (
          o("WALogger")
            .LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[chat forward message] skipping plain-text rich response forward with empty body",
                ])),
            )
            .sendLogs("forward-plain-text-rich-response-empty-body"),
          null
        );
      }
      if (
        o("WAWebBotUtils").isMetaAiBot(i.id) &&
        (n != null &&
          n !== "" &&
          (R.body = o("WAWebMetaAiForwardedText").composeMetaAiForwardedText(
            R.body,
            n,
          )),
        o("WAWebBotGating").isAiChatThreadsEnabled())
      ) {
        var I;
        return o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(i, {
          type: "MetaAiForward",
          query: (I = R.body) != null ? I : "",
        });
      }
      var T = await o("WAWebMsgDataUtils").genOutgoingMsgData(i, m.type),
        D = T.type,
        x = babelHelpers.objectWithoutPropertiesLoose(T, e),
        $ = babelHelpers.extends(
          {},
          R,
          x,
          {
            id: o(
              "WAWebPaymentRequestForwardFields",
            ).getPaymentRequestForwardKey(m, i.id, x.id),
            participant: void 0,
            star: !1,
            isForwarded: o("WAWebMsgGetters").getShouldDisplayAsForwarded(m),
            forwardedFromWeb: !0,
            forwardingScore: o(
              "WAWebForwardMediaUtils",
            ).getMsgForwardingScoreWhenForwarded(m),
            forwardReachScore: l,
          },
          o(
            "WAWebPaymentRequestForwardFields",
          ).getPaymentRequestForwardingOverrides(m),
          {
            multicast: _,
            messageSecret:
              o("WAWebMessagingGatingUtils").isReportingTokenSendingEnabled() &&
              self.crypto.getRandomValues(new Uint8Array(32)),
          },
        );
      if (r("WAWebWid").isNewsletter(i.id))
        return o("WAWebNewsletterSendMsgAction").forwardNewsletterMessage(
          i,
          o(
            "WAWebGetNewsletterContextForForwardedMsg",
          ).maybeStripNewsletterForwardMetadata({
            isQuestionOrQuestionReply:
              m.isQuestion || m.questionReplyQuotedMessage != null,
            forwardable: $,
            destination: i.id,
            source: m.id.remote,
            isOriginalMsgForwarded: m.isForwarded,
          }),
        );
      var P = await C($);
      o("WAWebPaymentRequestForwardPolicy").assertCanForwardPaymentRequest(
        m,
        i,
      );
      var N = o("WAWebSendMsgChatAction").addAndSendMsgToChat(i, P),
        M = N[0],
        w = N[1],
        A = await Promise.all([M, w]),
        F = A[0],
        O = A[1];
      return babelHelpers.extends({}, O, { msg: F });
    }
    function f(e) {
      var t = o(
        "WAWebForwardMessagePluginForwardMedia",
      ).maybeForwardMediaMessageFromPlugin(e);
      return t != null
        ? t
        : o("WAWebMsgActionCapability").isForwardedAsMedia(e.msg)
          ? o("WAWebMediaForwardMediaMsg").forwardMediaMsg(e)
          : null;
    }
    async function g(e) {
      var t = e.chat,
        n = e.hatchJarvisSession,
        r = e.msg,
        a = e.multicast,
        i = o(
          "WAWebPaymentRequestForwardFields",
        ).getPaymentRequestForwardFields(r);
      if (i != null)
        return {
          fields: babelHelpers.extends({}, i, D(t)),
          jarvisSendRecord: null,
        };
      var l = T(r, t),
        s = o("WAWebHatchJarvisPayload").hasHatchJarvisPayload(
          r.unifiedResponse,
        )
          ? await o(
              "WAWebHatchJarvisForwardSend",
            ).applyHatchJarvisForwardFields(
              r,
              t,
              l,
              n != null
                ? n
                : o(
                    "WAWebHatchJarvisForwardSend",
                  ).createHatchJarvisForwardSendSession(),
              a,
            )
          : null;
      return (s == null && (await h(r, l)), { fields: l, jarvisSendRecord: s });
    }
    async function h(e, t) {
      if (o("WAWebMuseResponseCopyText").isMuseResponse(e.unifiedResponse))
        try {
          var n = await o("WAWebMuseResponseCopyText").genMuseResponseCopyText(
              e,
            ),
            a = n === "" && t.type !== o("WAWebMsgType").MSG_TYPE.CHAT;
          n != null && !a && (t.body = n);
        } catch (e) {
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[chat forward message] Muse reply text unavailable, forwarding its existing text",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("forward-muse-plain-text-unavailable");
        }
    }
    async function y(e) {
      var t = e.appendedText,
        n = e.chat,
        a = e.forwardReachScore,
        i = e.msg,
        l = e.multicast;
      if (
        !o("WAWebMuseGroupRichResponseForward").isMuseGroupAgentRichResponse(i)
      )
        return null;
      var s = o("WAWebMuseGroupRichResponseForward").getMuseGroupForwardMedia(
        i,
      );
      if (s == null) return null;
      var u = await o(
        "WAWebForwardMuseGroupGeneratedMediaAction",
      ).forwardMuseGroupGeneratedMedia({
        chat: n,
        forwardReachScore: a,
        media: s,
        msg: i,
        multicast: l,
      });
      if (
        u != null &&
        o("WAWebBotUtils").isMetaAiBot(n.id) &&
        !r("isStringNullOrEmpty")(t)
      )
        try {
          await o("WAWebSendTextMsgChatAction").sendTextMsgToChat(n, t);
        } catch (e) {
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[chat forward message] appended text after a Muse group media forward failed",
                ])),
            )
            .sendLogs("forward-muse-media-appended-text-failed");
        }
      return u;
    }
    async function C(e) {
      var t = o("WAWebFrontendMsgGetters").getAsUrl(
        o("WAWebMsgModelFromData").msgModelFromMsgData(e),
      );
      if (t == null) return e;
      var n = t.mediaKeyTimestamp,
        a = t.thumbnailHQ;
      if (a == null || n != null) return e;
      try {
        var i,
          l = await r("WAWebMediaUploadMmsThumbnail")({
            thumbnail: await r("WAWebMediaOpaqueData").createFromBase64Jpeg(a),
            mediaType: o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_LINK,
            mediaKeyInfo: r("WAWebCryptoRandomMediaKey")(),
            uploadOrigin: r("WAWebMediaGetUploadOriginForChat")(
              o("WAWebFrontendMsgGetters").getChat(t.unsafe()),
            ),
            fileOrigin: null,
            forwardedFromWeb: !0,
            timeout: o("WAWebMediaConstants").MMS_THUMBNAIL_UPLOAD_TIMEOUT,
            isViewOnce: !1,
          }),
          s = l.filehash,
          u = l.mediaEntry;
        return (u == null ? void 0 : u.getMediaKey()) == null
          ? b(e)
          : babelHelpers.extends({}, e, {
              thumbnailDirectPath: u == null ? void 0 : u.directPath,
              thumbnailSha256: s,
              thumbnailEncSha256:
                (i = u == null ? void 0 : u.getEncfilehash()) != null
                  ? i
                  : void 0,
              mediaKey: u == null ? void 0 : u.getMediaKey(),
              mediaKeyTimestamp: u == null ? void 0 : u.getMediaKeyTimestamp(),
            });
      } catch (t) {
        return b(e);
      }
    }
    function b(e) {
      return babelHelpers.extends({}, e, {
        thumbnailHQ: void 0,
        thumbnailDirectPath: void 0,
        thumbnailSha256: void 0,
        thumbnailEncSha256: void 0,
        mediaKey: void 0,
        mediaKeyTimestamp: void 0,
        thumbnailHeight: void 0,
        thumbnailWidth: void 0,
      });
    }
    async function v(e) {
      var t = e.appendedText,
        n = e.chat,
        a = e.forwardReachScores,
        i = e.hatchJarvisSession,
        l = e.includeCaption,
        s = l === void 0 ? !1 : l,
        u = e.msgs,
        c = e.multicast,
        p = c === void 0 ? !1 : c,
        f = n.contact;
      if (o("WAWebContactGetters").getIsUser(f) && f.isContactBlocked)
        throw new (r("WAWebContactBlockedErrorAction"))(
          "Forwarded to contact is blocked",
          f,
        );
      var g = [];
      for (var h of u) {
        var y = s || o("WAWebMsgGetters").getHasOriginatedFromNewsletter(h);
        try {
          var C = o(
              "WAWebForwardAssociatedChildren",
            ).getForwardableAssociatedChildren(
              o("WAWebForwardAssociatedChildren").getForwardDestination(n),
              h,
            ),
            b = C.droppedPairedTypes,
            v = C.forwardable,
            R =
              o(
                "WAWebForwardAssociatedChildren",
              ).areForwardPairLabelsEnabled() &&
              o("WAWebForwardAssociatedChildren").carriesForwardableShadow(v)
                ? h.pairedMediaType
                : void 0,
            L = await _({
              chat: n,
              forwardReachScore: a == null ? void 0 : a.get(h.id.toString()),
              hatchJarvisSession: i,
              msg: h,
              multicast: p,
              includeCaption: y,
              appendedText: t,
              pairedMediaType: R,
            });
          (o(
            "WAWebIncrementNewsletterForwardCounterAction",
          ).incrementNewsletterForwardCounter(h, n),
            o("WAWebForwardAssociatedChildren")
              .forwardAssociatedChildren({
                chat: n,
                children: v,
                droppedPairedTypes: b,
                multicast: p,
                includeCaption: y,
                forwardedParent: L == null ? void 0 : L.msg,
                sendChild: function (t) {
                  return _(
                    babelHelpers.extends({}, t, {
                      forwardReachScore:
                        a == null ? void 0 : a.get(t.msg.id.toString()),
                    }),
                  );
                },
              })
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[chat forward message] error forwarding associated children",
                      ])),
                  )
                  .sendLogs("forward-associated-children-fail");
              }));
        } catch (e) {
          (o("WALogger").WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[chat forward message] error during forwarding message",
              ])),
          ),
            S(h, e) && g.push(h));
        }
      }
      return g;
    }
    function S(e, t) {
      return (
        R(e) || o("WAWebHatchJarvisForwardSend").isHatchJarvisForwardFailure(t)
      );
    }
    function R(e) {
      return (
        p(e) ||
        o("WAWebMessageAssociationConfig").isForwardContainerMsgType(e.type) ||
        L(e) ||
        o("WAWebPaymentRequestForwardPolicy").isPaymentRequestMsgModel(e) ||
        o("WAWebIsAccountBoundAiRichResponse").isAccountBoundAiRichResponse(e)
      );
    }
    function L(e) {
      return (
        o("WAWebMuseGroupRichResponseForward").isMuseGroupAgentRichResponse(
          e,
        ) &&
        o("WAWebMuseGroupRichResponseForward").getMuseGroupForwardMedia(e) !=
          null
      );
    }
    function E(e) {
      return (
        o("WAWebRichResponseForwardText").isHatchRichResponse(e) ||
        o("WAWebMuseGroupRichResponseForward").isMuseGroupAgentRichResponse(
          e,
        ) ||
        o("WAWebHatchJarvisPayload").hasHatchJarvisPayload(e.unifiedResponse)
      );
    }
    function k(e, t) {
      return (
        E(e) &&
        t.type === o("WAWebMsgType").MSG_TYPE.CHAT &&
        r("isStringNullOrEmpty")(t.body)
      );
    }
    function I(e, t) {
      var n, r;
      return E(e)
        ? ((t.body =
            (n =
              (r = o("WAWebRichResponseForwardText").getRichResponseForwardText(
                e,
              )) != null
                ? r
                : o("WAWebGetPlainTextFromBotMsg").getPlainTextFromBotMsg(e, {
                    includeBodyFallback: !1,
                  })) != null
              ? n
              : ""),
          (t.type = o("WAWebMsgType").MSG_TYPE.CHAT),
          (t.kind = o("WAWebMsgType").MsgKind.Chat),
          (t.richResponse = void 0),
          (t.unifiedResponse = void 0),
          (t.unifiedResponseRawData = void 0),
          (t.botSignatureVerificationMetadata = void 0),
          !0)
        : !1;
    }
    function T(e, t) {
      var n,
        a,
        i,
        l = new Set([
          "buttons",
          "caption",
          "pairedMediaType",
          "broadcast",
          "ephemeralDuration",
          "ephemeralSettingTimestamp",
          "ephemeralStartTimestamp",
          "ephemeralOutOfSync",
          "disappearingModeInitiatedByMe",
          "disappearingModeTrigger",
          "afterReadDuration",
          "expiredTimestamp",
          "dynamicReplyButtons",
          "replyButtons",
          "isMdHistoryMsg",
          "bizPrivacyStatus",
          "hostedBizEncStateMismatch",
          "aeaAutoUpgrade",
          "senderOrRecipientAccountTypeHosted",
          "instantPlayedSelf",
          "kicState",
          "kicKey",
          "kicTimestampMs",
          "kicNotified",
          "rcat",
          "latestEditMsgKey",
          "latestEditSenderTimestampMs",
          "invokedBotWid",
          "botMessageSecret",
          "forwardReachScore",
          "hatchMetadataSync",
          "isSmbAutomated",
          "botEditType",
          "botFeedbackKind",
          "botFeedbackText",
          "botTargetSenderJid",
          "bizBotType",
          "botPersonaId",
          "botRespOrInvocationRevokeBotWid",
          "botResponseTargetId",
          "botResponseId",
          "botPluginType",
          "botPluginReferenceIndex",
          "botPluginSearchProvider",
          "botPluginSearchUrl",
          "botEditTargetId",
          "lastBotEditBodyLength",
          "botPluginMaybeParent",
          "unifiedResponseMutationMediaList",
          "rowId",
          "serverId",
          "viewCount",
          "messageSecret",
          "forwardsCount",
          "pollOptions",
          "pollSelectableOptionsCount",
          "pollInvalidated",
          "isQuestion",
          "questionReplyQuotedMessage",
          "questionResponsesCount",
          "myQuestionResponsesCount",
          "readQuestionResponsesCount",
          "groupHistoryBundleMessageKey",
          "groupHistoryIndividualMessageInfo",
          "hasPaidPartnershipLabel",
          "newsletterAdminProfile",
          "experienceIds",
          "businessInteractionPills",
        ]),
        s =
          e.isDynamicReplyButtonsMsg === !0 &&
          e.type === o("WAWebMsgType").MSG_TYPE.CHAT;
      s || l.add("footer");
      var u =
        e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        e.nativeFlowName ===
          r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER;
      (u && (l.delete("caption"), l.delete("footer")),
        ((n = e.quotedMsg) == null ? void 0 : n.type) !==
          o("WAWebMsgType").MSG_TYPE.PRODUCT &&
          (l.add("quotedMsg"),
          l.add("quotedParticipant"),
          l.add("quotedRemoteJid"),
          l.add("quotedStanzaID")));
      var c =
        o("WAWebMsgGetters").getIsNewsletterMsg(e) &&
        r("WAWebWid").isNewsletter(t.id);
      (c || l.add("aiProvenance"),
        o("WAWebMsgGetters").getIsNewsletterMsg(e) &&
          (l.add("isFromTemplate"),
          l.add("hydratedButtons"),
          l.add("carouselCardsParsed")));
      var d = babelHelpers.extends(
        {},
        r("filterObject")(e.toJSON(), function (e, t) {
          return !l.has(t);
        }),
        D(t),
      );
      (e.ctwaContext &&
        ((d.body = e.ctwaContext.sourceUrl),
        (d.type = o("WAWebMsgType").MSG_TYPE.CHAT),
        (d.mediaObject = void 0)),
        e.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION &&
          ((d.type = o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT),
          (d.pollVotesSnapshot = o(
            "WAWebGeneratePollVotesSnapshotFromPoll",
          ).generatePollVotesSnapshotFromPoll(
            r("nullthrows")(o("WAWebFrontendMsgGetters").getAsPollCreation(e)),
          ))));
      var m = I(e, d);
      if (
        (e.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE &&
          !m &&
          o("WAWebForwardRichResponseHandler").updateRichResponseFields(e, d),
        (d.forwardedNewsletterMessageInfo = o(
          "WAWebGetNewsletterContextForForwardedMsg",
        ).getNewsletterContextForForwardedMsg(e)),
        (d.forwardedAiBotMessageInfo = o(
          "WAWebGetAiBotContextForForwardedMsg",
        ).getAiBotContextForForwardedMsg(e)),
        !(
          ((a = e.id.remote) != null && a.isBot()) ||
          ((i = e.mentionedJidList) == null
            ? void 0
            : i.find(function (e) {
                return e.isBot();
              })) != null
        ) &&
          t.isCAGAdmin() &&
          (d.messageSecret = self.crypto.getRandomValues(new Uint8Array(32))),
        t.id.isBot())
      ) {
        var p,
          _ =
            (p = o("WAWebBotProfileCollection").BotProfileCollection.get(
              t.id,
            )) == null
              ? void 0
              : p.personaId;
        _ != null && (d.botPersonaId = _);
      }
      return d;
    }
    function D(e) {
      var t = o("WAWebChatEphemerality").isEphemeralSettingOn(e)
          ? o("WAWebChatEphemerality").getAfterReadEnvelopeForChat(e)
          : {},
        n = o("WAWebChatEphemerality").getEphemeralSettingTimestamp(e),
        r = o("WAWebChatEphemerality").getDisappearingModeInitiator(e),
        a = o("WAWebChatEphemerality").getDisappearingModeTrigger(e),
        i = o("WAWebChatEphemerality").getDisappearingModeInitiatedByMe(e);
      return babelHelpers.extends({}, t, {
        ephemeralSettingTimestamp: n != null ? n : void 0,
        disappearingModeInitiator: r != null ? r : void 0,
        disappearingModeTrigger: a != null ? a : void 0,
        disappearingModeInitiatedByMe: i != null ? i : void 0,
      });
    }
    ((l.forwardMessages = v), (l.getForwardedMessageFields = T));
  },
  98,
);
