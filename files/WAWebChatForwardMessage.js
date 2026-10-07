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
    "WAWebForwardMuseGroupGeneratedMediaAction",
    "WAWebForwardRichResponseHandler",
    "WAWebFrontendMsgGetters",
    "WAWebGeneratePollVotesSnapshotFromPoll",
    "WAWebGetAiBotContextForForwardedMsg",
    "WAWebGetNewsletterContextForForwardedMsg",
    "WAWebGetPlainTextFromBotMsg",
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
    "WAWebMsgModelUtils",
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
            u = t.includeCaption,
            c = u === void 0 ? !1 : u,
            d = t.msg,
            p = t.multicast,
            _ = p === void 0 ? !1 : p,
            f = t.pairedMediaType;
          if (o("WAWebMsgActionCapability").isForwardedAsMedia(d))
            return o("WAWebMediaForwardMediaMsg").forwardMediaMsg({
              appendedText: a,
              chat: l,
              includeCaption: c,
              msg: d,
              multicast: _,
              pairedMediaType: f,
              associationOptions: i,
            });
          var h = yield g({ appendedText: a, chat: l, msg: d, multicast: _ });
          if (h != null) return h;
          var C = T(d, l);
          if (k(d) && r("isStringNullOrEmpty")(C.body)) {
            if (L(d))
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
              (C.body = o(
                "WAWebMetaAiForwardedText",
              ).composeMetaAiForwardedText(C.body, a)),
            o("WAWebBotGating").isAiChatThreadsEnabled())
          )
            return o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(l, {
              type: "MetaAiForward",
              query: C.body,
            });
          var b = yield o("WAWebMsgDataUtils").genOutgoingMsgData(l, d.type),
            v = b.type,
            S = babelHelpers.objectWithoutPropertiesLoose(b, e),
            R = babelHelpers.extends({}, C, S, {
              participant: void 0,
              star: !1,
              isForwarded: o("WAWebMsgGetters").getShouldDisplayAsForwarded(d),
              forwardedFromWeb: !0,
              forwardingScore:
                o("WAWebMsgModelUtils").getMsgForwardingScoreWhenForwarded(d),
              multicast: _,
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
                  d.isQuestion || d.questionReplyQuotedMessage != null,
                forwardable: R,
                destination: l.id,
                source: d.id.remote,
                isOriginalMsgForwarded: d.isForwarded,
              }),
            );
          var E = yield y(R),
            I = o("WAWebSendMsgChatAction").addAndSendMsgToChat(l, E),
            D = I[0],
            x = I[1],
            $ = yield (m || (m = n("Promise"))).all([D, x]),
            P = $[0],
            N = $[1];
          return babelHelpers.extends({}, N, { msg: P });
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
            a = e.includeCaption,
            i = a === void 0 ? !1 : a,
            l = e.msgs,
            s = e.multicast,
            u = s === void 0 ? !1 : s,
            m = n.contact;
          if (o("WAWebContactGetters").getIsUser(m) && m.isContactBlocked)
            throw new (r("WAWebContactBlockedErrorAction"))(
              "Forwarded to contact is blocked",
              m,
            );
          var p = [];
          for (var f of l) {
            var g = i || o("WAWebMsgGetters").getHasOriginatedFromNewsletter(f);
            try {
              var h = o(
                  "WAWebForwardAssociatedChildren",
                ).getForwardableAssociatedChildren(
                  o("WAWebForwardAssociatedChildren").getForwardDestination(n),
                  f,
                ),
                y = h.droppedPairedTypes,
                C = h.forwardable,
                b =
                  o(
                    "WAWebForwardAssociatedChildren",
                  ).areForwardPairLabelsEnabled() &&
                  o("WAWebForwardAssociatedChildren").carriesForwardableShadow(
                    C,
                  )
                    ? f.pairedMediaType
                    : void 0,
                v = yield _({
                  chat: n,
                  msg: f,
                  multicast: u,
                  includeCaption: g,
                  appendedText: t,
                  pairedMediaType: b,
                });
              (o(
                "WAWebIncrementNewsletterForwardCounterAction",
              ).incrementNewsletterForwardCounter(f, n),
                o("WAWebForwardAssociatedChildren")
                  .forwardAssociatedChildren({
                    chat: n,
                    children: C,
                    droppedPairedTypes: y,
                    multicast: u,
                    includeCaption: g,
                    forwardedParent: v == null ? void 0 : v.msg,
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
                R(f) && p.push(f));
            }
          }
          return p;
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return (
        p(e) ||
        o("WAWebForwardAssociationConfig").isForwardContainerMsgType(e.type) ||
        L(e)
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
      if (e.type !== o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE) return !1;
      var t = o("WAWebMsgGetters").getSender(e);
      return t != null && o("WAWebBotUtils").isHatchBot(t);
    }
    function k(e) {
      return (
        E(e) ||
        o("WAWebMuseGroupRichResponseForward").isMuseGroupAgentRichResponse(e)
      );
    }
    function I(e, t) {
      var n;
      return k(e)
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
          "kicState",
          "kicKey",
          "kicTimestampMs",
          "kicNotified",
          "rcat",
          "latestEditMsgKey",
          "latestEditSenderTimestampMs",
          "invokedBotWid",
          "botMessageSecret",
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
      var m = I(e, d);
      (e.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE &&
        !m &&
        o("WAWebForwardRichResponseHandler").updateRichResponseFields(e, d),
        (d.forwardedNewsletterMessageInfo = o(
          "WAWebGetNewsletterContextForForwardedMsg",
        ).getNewsletterContextForForwardedMsg(e)),
        (d.forwardedAiBotMessageInfo = o(
          "WAWebGetAiBotContextForForwardedMsg",
        ).getAiBotContextForForwardedMsg(e)),
        o("WAWebChatEphemerality").isEphemeralSettingOn(t) &&
          ((d.ephemeralDuration = o(
            "WAWebChatEphemerality",
          ).getEphemeralSetting(t)),
          (d.afterReadDuration = o(
            "WAWebChatEphemerality",
          ).getAfterReadDurationForChat(t))));
      var p = o("WAWebChatEphemerality").getEphemeralSettingTimestamp(t);
      p != null && (d.ephemeralSettingTimestamp = p);
      var _ = o("WAWebChatEphemerality").getDisappearingModeInitiator(t);
      _ != null && (d.disappearingModeInitiator = _);
      var f = o("WAWebChatEphemerality").getDisappearingModeTrigger(t);
      f != null && (d.disappearingModeTrigger = f);
      var g = o("WAWebChatEphemerality").getDisappearingModeInitiatedByMe(t);
      if (
        (g != null && (d.disappearingModeInitiatedByMe = g),
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
        var h,
          y =
            (h = o("WAWebBotProfileCollection").BotProfileCollection.get(
              t.id,
            )) == null
              ? void 0
              : h.personaId;
        y != null && (d.botPersonaId = y);
      }
      return d;
    }
    ((l.forwardMessages = v), (l.getForwardedMessageFields = T));
  },
  98,
);
