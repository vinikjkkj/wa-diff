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
    "WAWebNewsletterSendMsgAction",
    "WAWebSendMsgChatAction",
    "WAWebSendTextMsgChatAction",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "err",
    "filterObject",
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
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.appendedText,
            i = t.associationOptions,
            l = t.chat,
            u = t.hatchJarvisSession,
            c = t.includeCaption,
            d = c === void 0 ? !1 : c,
            p = t.msg,
            _ = t.multicast,
            f = _ === void 0 ? !1 : _,
            h = t.pairedMediaType;
          if (o("WAWebMsgActionCapability").isForwardedAsMedia(p))
            return o("WAWebMediaForwardMediaMsg").forwardMediaMsg({
              appendedText: a,
              chat: l,
              includeCaption: d,
              msg: p,
              multicast: f,
              pairedMediaType: h,
              associationOptions: i,
            });
          var C = yield g({ appendedText: a, chat: l, msg: p, multicast: f });
          if (C != null) return C;
          var b = x(p, l);
          if (
            (o("WAWebHatchJarvisPayload").hasHatchJarvisPayload(
              p.unifiedResponse,
            ) &&
              (yield o(
                "WAWebHatchJarvisForwardSend",
              ).applyHatchJarvisForwardFields(
                p,
                l,
                b,
                u != null
                  ? u
                  : o(
                      "WAWebHatchJarvisForwardSend",
                    ).createHatchJarvisForwardSendSession(),
              )),
            T(p, b))
          ) {
            if (E(p))
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
              (b.body = o(
                "WAWebMetaAiForwardedText",
              ).composeMetaAiForwardedText(b.body, a)),
            o("WAWebBotGating").isAiChatThreadsEnabled())
          )
            return o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(l, {
              type: "MetaAiForward",
              query: b.body,
            });
          var v = yield o("WAWebMsgDataUtils").genOutgoingMsgData(l, p.type),
            S = v.type,
            R = babelHelpers.objectWithoutPropertiesLoose(v, e),
            L = babelHelpers.extends({}, b, R, {
              participant: void 0,
              star: !1,
              isForwarded: o("WAWebMsgGetters").getShouldDisplayAsForwarded(p),
              forwardedFromWeb: !0,
              forwardingScore: o(
                "WAWebForwardMediaUtils",
              ).getMsgForwardingScoreWhenForwarded(p),
              multicast: f,
              messageSecret:
                o(
                  "WAWebMessagingGatingUtils",
                ).isReportingTokenSendingEnabled() &&
                self.crypto.getRandomValues(new Uint8Array(32)),
            });
          if (r("WAWebWid").isNewsletter(l.id))
            return o("WAWebNewsletterSendMsgAction").forwardNewsletterMessage(
              l,
              o(
                "WAWebGetNewsletterContextForForwardedMsg",
              ).maybeStripNewsletterForwardMetadata({
                isQuestionOrQuestionReply:
                  p.isQuestion || p.questionReplyQuotedMessage != null,
                forwardable: L,
                destination: l.id,
                source: p.id.remote,
                isOriginalMsgForwarded: p.isForwarded,
              }),
            );
          var k = yield y(L),
            I = o("WAWebSendMsgChatAction").addAndSendMsgToChat(l, k),
            D = I[0],
            $ = I[1],
            P = yield (m || (m = n("Promise"))).all([D, $]),
            N = P[0],
            M = P[1];
          return babelHelpers.extends({}, M, { msg: N });
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[chat forward message] appended text after a Muse group media forward failed",
                    ])),
                )
                .sendLogs("forward-muse-media-appended-text-failed");
            }
          return s;
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              ? b(e)
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
            return b(e);
          }
        })),
        C.apply(this, arguments)
      );
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
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.appendedText,
            n = e.chat,
            a = e.hatchJarvisSession,
            i = e.includeCaption,
            l = i === void 0 ? !1 : i,
            s = e.msgs,
            u = e.multicast,
            m = u === void 0 ? !1 : u,
            p = n.contact;
          if (o("WAWebContactGetters").getIsUser(p) && p.isContactBlocked)
            throw new (r("WAWebContactBlockedErrorAction"))(
              "Forwarded to contact is blocked",
              p,
            );
          var f = [];
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
                S = yield _({
                  chat: n,
                  hatchJarvisSession: a,
                  msg: g,
                  multicast: m,
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
                    multicast: m,
                    includeCaption: h,
                    forwardedParent: S == null ? void 0 : S.msg,
                    sendChild: _,
                  })
                  .catch(function (e) {
                    o("WALogger")
                      .ERROR(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[chat forward message] error forwarding associated children",
                          ])),
                      )
                      .sendLogs("forward-associated-children-fail");
                  }));
            } catch (e) {
              (o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[chat forward message] error during forwarding message",
                  ])),
              ),
                R(g, e) && f.push(g));
            }
          }
          return f;
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return (
        L(e) || o("WAWebHatchJarvisForwardSend").isHatchJarvisForwardFailure(t)
      );
    }
    function L(e) {
      return (
        p(e) ||
        o("WAWebForwardAssociationConfig").isForwardContainerMsgType(e.type) ||
        E(e)
      );
    }
    function E(e) {
      return (
        o("WAWebMuseGroupRichResponseForward").isMuseGroupAgentRichResponse(
          e,
        ) &&
        o("WAWebMuseGroupRichResponseForward").getMuseGroupForwardMedia(e) !=
          null
      );
    }
    function k(e) {
      if (e.type !== o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE) return !1;
      var t = o("WAWebMsgGetters").getSender(e);
      return t != null && o("WAWebBotUtils").isHatchBot(t);
    }
    function I(e) {
      return (
        k(e) ||
        o("WAWebMuseGroupRichResponseForward").isMuseGroupAgentRichResponse(
          e,
        ) ||
        o("WAWebHatchJarvisPayload").hasHatchJarvisPayload(e.unifiedResponse)
      );
    }
    function T(e, t) {
      return (
        I(e) &&
        t.type === o("WAWebMsgType").MSG_TYPE.CHAT &&
        r("isStringNullOrEmpty")(t.body)
      );
    }
    function D(e, t) {
      var n;
      return I(e)
        ? ((t.body =
            (n = o("WAWebGetPlainTextFromBotMsg").getPlainTextFromBotMsg(e, {
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
    function x(e, t) {
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
          "readQuestionResponsesCount",
          "groupHistoryBundleMessageKey",
          "groupHistoryIndividualMessageInfo",
          "hasPaidPartnershipLabel",
          "newsletterAdminProfile",
          "experienceIds",
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
      var d = r("filterObject")(e.toJSON(), function (e, t) {
        return !l.has(t);
      });
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
      var m = D(e, d);
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
        o("WAWebChatEphemerality").isEphemeralSettingOn(t))
      ) {
        var p = o("WAWebChatEphemerality").getAfterReadEnvelopeForChat(t),
          _ = p.afterReadDuration,
          f = p.ephemeralDuration;
        ((d.ephemeralDuration = f), (d.afterReadDuration = _));
      }
      var g = o("WAWebChatEphemerality").getEphemeralSettingTimestamp(t);
      g != null && (d.ephemeralSettingTimestamp = g);
      var h = o("WAWebChatEphemerality").getDisappearingModeInitiator(t);
      h != null && (d.disappearingModeInitiator = h);
      var y = o("WAWebChatEphemerality").getDisappearingModeTrigger(t);
      y != null && (d.disappearingModeTrigger = y);
      var C = o("WAWebChatEphemerality").getDisappearingModeInitiatedByMe(t);
      if (
        (C != null && (d.disappearingModeInitiatedByMe = C),
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
        var b,
          v =
            (b = o("WAWebBotProfileCollection").BotProfileCollection.get(
              t.id,
            )) == null
              ? void 0
              : b.personaId;
        v != null && (d.botPersonaId = v);
      }
      return d;
    }
    ((l.forwardMessages = v), (l.getForwardedMessageFields = x));
  },
  98,
);
