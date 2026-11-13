__d(
  "WAWebChatForwardMessage",
  [
    "Promise",
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
    "WAWebForwardAssociationConfig",
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
    "asyncToGeneratorRuntime",
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
      m,
      p;
    function _(e) {
      return !!(o("WAWebFrontendMsgGetters").getAsMms(e) && !e.ctwaContext);
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.appendedText,
            i = t.associationOptions,
            l = t.chat,
            u = t.hatchJarvisSession,
            c = t.includeCaption,
            d = c === void 0 ? !1 : c,
            m = t.msg,
            _ = t.multicast,
            f = _ === void 0 ? !1 : _,
            g = t.pairedMediaType;
          if (
            (o(
              "WAWebPaymentRequestForwardPolicy",
            ).assertCanForwardPaymentRequest(m, l),
            o("WAWebIsAccountBoundAiRichResponse").isAccountBoundAiRichResponse(
              m,
            ))
          )
            throw r("err")("An account-bound AI card is never forwarded");
          var C = h({
            appendedText: a,
            chat: l,
            includeCaption: d,
            msg: m,
            multicast: f,
            pairedMediaType: g,
            associationOptions: i,
          });
          if (C != null) return C;
          var b = yield S({ appendedText: a, chat: l, msg: m, multicast: f });
          if (b != null) return b;
          var v = yield y({
              chat: l,
              hatchJarvisSession: u,
              msg: m,
              multicast: f,
            }),
            R = v.fields,
            E = v.jarvisSendRecord;
          if (E != null) return E;
          if (N(m, R)) {
            if ($(m))
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
            o("WAWebBotUtils").isMetaAiBot(l.id) &&
            (a != null &&
              a !== "" &&
              (R.body = o(
                "WAWebMetaAiForwardedText",
              ).composeMetaAiForwardedText(R.body, a)),
            o("WAWebBotGating").isAiChatThreadsEnabled())
          ) {
            var k;
            return o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(l, {
              type: "MetaAiForward",
              query: (k = R.body) != null ? k : "",
            });
          }
          var I = yield o("WAWebMsgDataUtils").genOutgoingMsgData(l, m.type),
            T = I.type,
            D = babelHelpers.objectWithoutPropertiesLoose(I, e),
            x = babelHelpers.extends(
              {},
              R,
              D,
              {
                id: o(
                  "WAWebPaymentRequestForwardFields",
                ).getPaymentRequestForwardKey(m, l.id, D.id),
                participant: void 0,
                star: !1,
                isForwarded:
                  o("WAWebMsgGetters").getShouldDisplayAsForwarded(m),
                forwardedFromWeb: !0,
                forwardingScore: o(
                  "WAWebForwardMediaUtils",
                ).getMsgForwardingScoreWhenForwarded(m),
              },
              o(
                "WAWebPaymentRequestForwardFields",
              ).getPaymentRequestForwardingOverrides(m),
              {
                multicast: f,
                messageSecret:
                  o(
                    "WAWebMessagingGatingUtils",
                  ).isReportingTokenSendingEnabled() &&
                  self.crypto.getRandomValues(new Uint8Array(32)),
              },
            );
          if (r("WAWebWid").isNewsletter(l.id))
            return o("WAWebNewsletterSendMsgAction").forwardNewsletterMessage(
              l,
              o(
                "WAWebGetNewsletterContextForForwardedMsg",
              ).maybeStripNewsletterForwardMetadata({
                isQuestionOrQuestionReply:
                  m.isQuestion || m.questionReplyQuotedMessage != null,
                forwardable: x,
                destination: l.id,
                source: m.id.remote,
                isOriginalMsgForwarded: m.isForwarded,
              }),
            );
          var P = yield L(x);
          o("WAWebPaymentRequestForwardPolicy").assertCanForwardPaymentRequest(
            m,
            l,
          );
          var M = o("WAWebSendMsgChatAction").addAndSendMsgToChat(l, P),
            w = M[0],
            A = M[1],
            F = yield (p || (p = n("Promise"))).all([w, A]),
            O = F[0],
            B = F[1];
          return babelHelpers.extends({}, B, { msg: O });
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      var t = o(
        "WAWebForwardMessagePluginForwardMedia",
      ).maybeForwardMediaMessageFromPlugin(e);
      return t != null
        ? t
        : o("WAWebMsgActionCapability").isForwardedAsMedia(e.msg)
          ? o("WAWebMediaForwardMediaMsg").forwardMediaMsg(e)
          : null;
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            n = e.hatchJarvisSession,
            r = e.msg,
            a = e.multicast,
            i = o(
              "WAWebPaymentRequestForwardFields",
            ).getPaymentRequestForwardFields(r);
          if (i != null)
            return {
              fields: babelHelpers.extends({}, i, A(t)),
              jarvisSendRecord: null,
            };
          var l = w(r, t),
            s = o("WAWebHatchJarvisPayload").hasHatchJarvisPayload(
              r.unifiedResponse,
            )
              ? yield o(
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
          return (
            s == null && (yield b(r, l)),
            { fields: l, jarvisSendRecord: s }
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (o("WAWebMuseResponseCopyText").isMuseResponse(e.unifiedResponse))
            try {
              var n = yield o(
                  "WAWebMuseResponseCopyText",
                ).genMuseResponseCopyText(e),
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
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.appendedText,
            n = e.chat,
            a = e.msg,
            i = e.multicast;
          if (
            !o(
              "WAWebMuseGroupRichResponseForward",
            ).isMuseGroupAgentRichResponse(a)
          )
            return null;
          var l = o(
            "WAWebMuseGroupRichResponseForward",
          ).getMuseGroupForwardMedia(a);
          if (l == null) return null;
          var s = yield o(
            "WAWebForwardMuseGroupGeneratedMediaAction",
          ).forwardMuseGroupGeneratedMedia({
            chat: n,
            media: l,
            msg: a,
            multicast: i,
          });
          if (
            s != null &&
            o("WAWebBotUtils").isMetaAiBot(n.id) &&
            !r("isStringNullOrEmpty")(t)
          )
            try {
              yield o("WAWebSendTextMsgChatAction").sendTextMsgToChat(n, t);
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
          return s;
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebFrontendMsgGetters").getAsUrl(
            o("WAWebMsgModelFromData").msgModelFromMsgData(e),
          );
          if (t == null) return e;
          var n = t.mediaKeyTimestamp,
            a = t.thumbnailHQ;
          if (a == null || n != null) return e;
          try {
            var i,
              l = yield r("WAWebMediaUploadMmsThumbnail")({
                thumbnail: yield r("WAWebMediaOpaqueData").createFromBase64Jpeg(
                  a,
                ),
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
              ? k(e)
              : babelHelpers.extends({}, e, {
                  thumbnailDirectPath: u == null ? void 0 : u.directPath,
                  thumbnailSha256: s,
                  thumbnailEncSha256:
                    (i = u == null ? void 0 : u.getEncfilehash()) != null
                      ? i
                      : void 0,
                  mediaKey: u == null ? void 0 : u.getMediaKey(),
                  mediaKeyTimestamp:
                    u == null ? void 0 : u.getMediaKeyTimestamp(),
                });
          } catch (t) {
            return k(e);
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
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
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.appendedText,
            n = e.chat,
            a = e.hatchJarvisSession,
            i = e.includeCaption,
            l = i === void 0 ? !1 : i,
            s = e.msgs,
            u = e.multicast,
            c = u === void 0 ? !1 : u,
            p = n.contact;
          if (o("WAWebContactGetters").getIsUser(p) && p.isContactBlocked)
            throw new (r("WAWebContactBlockedErrorAction"))(
              "Forwarded to contact is blocked",
              p,
            );
          var _ = [];
          for (var g of s) {
            var h = l || o("WAWebMsgGetters").getHasOriginatedFromNewsletter(g);
            try {
              var y = o(
                  "WAWebForwardAssociatedChildren",
                ).getForwardableAssociatedChildren(
                  o("WAWebForwardAssociatedChildren").getForwardDestination(n),
                  g,
                ),
                C = y.droppedPairedTypes,
                b = y.forwardable,
                v =
                  o(
                    "WAWebForwardAssociatedChildren",
                  ).areForwardPairLabelsEnabled() &&
                  o("WAWebForwardAssociatedChildren").carriesForwardableShadow(
                    b,
                  )
                    ? g.pairedMediaType
                    : void 0,
                S = yield f({
                  chat: n,
                  hatchJarvisSession: a,
                  msg: g,
                  multicast: c,
                  includeCaption: h,
                  appendedText: t,
                  pairedMediaType: v,
                });
              (o(
                "WAWebIncrementNewsletterForwardCounterAction",
              ).incrementNewsletterForwardCounter(g, n),
                o("WAWebForwardAssociatedChildren")
                  .forwardAssociatedChildren({
                    chat: n,
                    children: b,
                    droppedPairedTypes: C,
                    multicast: c,
                    includeCaption: h,
                    forwardedParent: S == null ? void 0 : S.msg,
                    sendChild: f,
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
                D(g, e) && _.push(g));
            }
          }
          return _;
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      return (
        x(e) || o("WAWebHatchJarvisForwardSend").isHatchJarvisForwardFailure(t)
      );
    }
    function x(e) {
      return (
        _(e) ||
        o("WAWebForwardAssociationConfig").isForwardContainerMsgType(e.type) ||
        $(e) ||
        o("WAWebPaymentRequestForwardPolicy").isPaymentRequestMsgModel(e) ||
        o("WAWebIsAccountBoundAiRichResponse").isAccountBoundAiRichResponse(e)
      );
    }
    function $(e) {
      return (
        o("WAWebMuseGroupRichResponseForward").isMuseGroupAgentRichResponse(
          e,
        ) &&
        o("WAWebMuseGroupRichResponseForward").getMuseGroupForwardMedia(e) !=
          null
      );
    }
    function P(e) {
      return (
        o("WAWebRichResponseForwardText").isHatchRichResponse(e) ||
        o("WAWebMuseGroupRichResponseForward").isMuseGroupAgentRichResponse(
          e,
        ) ||
        o("WAWebHatchJarvisPayload").hasHatchJarvisPayload(e.unifiedResponse)
      );
    }
    function N(e, t) {
      return (
        P(e) &&
        t.type === o("WAWebMsgType").MSG_TYPE.CHAT &&
        r("isStringNullOrEmpty")(t.body)
      );
    }
    function M(e, t) {
      var n, r;
      return P(e)
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
    function w(e, t) {
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
          "kicState",
          "kicKey",
          "kicTimestampMs",
          "kicNotified",
          "rcat",
          "latestEditMsgKey",
          "latestEditSenderTimestampMs",
          "invokedBotWid",
          "botMessageSecret",
          "hatchMetadataSync",
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
        A(t),
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
      var m = M(e, d);
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
    function A(e) {
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
    ((l.forwardMessages = I), (l.getForwardedMessageFields = w));
  },
  98,
);
